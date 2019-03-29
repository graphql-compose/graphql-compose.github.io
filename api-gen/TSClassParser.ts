import ts from 'typescript';

interface SymbolData {
  name: string;
  type: string;
  documentation: string;
}

interface CallData {
  parameters?: SymbolData[];
  type: string;
  documentation: string;
}

interface ModifierFlags {
  protected: boolean;
  private: boolean;
  readonly: boolean;
  static: boolean;
}

interface ClassConstructorData extends CallData {}

export interface ClassMethodData extends SymbolData, CallData {
  flags?: ModifierFlags;
}

export interface ClassPropertyData extends SymbolData {
  flags?: ModifierFlags;
}

export interface InterfaceData {
  name: string;
  code: string;
}

export interface ClassData extends SymbolData {
  constructors: ClassConstructorData[];
  methods: ClassMethodData[];
  properties: ClassPropertyData[];
  staticMethods: ClassMethodData[];
  staticProperties: ClassPropertyData[];
}

export default class TSClassParser {
  program: ts.Program;
  checker: ts.TypeChecker;
  rootNames: string[];

  static parseFile(
    filePath: string
  ): {
    class: ClassData;
    interfaces: InterfaceData[];
  } {
    const result = TSClassParser.createFromFiles(filePath).run();
    return {
      class: result.classes[0],
      interfaces: result.interfaces,
    };
  }

  static parseSource(
    code: string
  ): {
    class: ClassData;
    interfaces: InterfaceData[];
  } {
    const result = TSClassParser.createFromSource(code).run();
    return {
      class: result.classes[0],
      interfaces: result.interfaces,
    };
  }

  static createFromFiles(filePaths: ReadonlyArray<string> | string): TSClassParser {
    const rootNames = Array.isArray(filePaths) ? filePaths : [filePaths];
    const program = ts.createProgram(rootNames, {});

    return new TSClassParser(program, rootNames);
  }

  static createFromSource(code: string): TSClassParser {
    const filename = 'source.file.ts';

    const sourceFile = ts.createSourceFile(filename, code, ts.ScriptTarget.Latest);

    const defaultCompilerHost = ts.createCompilerHost({});

    const customCompilerHost: ts.CompilerHost = {
      getSourceFile: (name, languageVersion) => {
        if (name === filename) {
          return sourceFile;
        } else {
          return defaultCompilerHost.getSourceFile(name, languageVersion);
        }
      },
      writeFile: () => {},
      getDefaultLibFileName: () => 'lib.d.ts',
      useCaseSensitiveFileNames: () => false,
      getCanonicalFileName: (filename) => filename,
      getCurrentDirectory: () => '',
      getNewLine: () => '\n',
      getDirectories: () => [],
      fileExists: () => true,
      readFile: () => '',
    };

    const rootNames = [filename];
    const program = ts.createProgram(rootNames, {}, customCompilerHost);
    return new TSClassParser(program, rootNames);
  }

  static getSyntaxKindName(node: ts.Node): string {
    return ts.SyntaxKind[node.kind];
  }

  constructor(program: ts.Program, rootNames: string[]) {
    this.program = program;
    this.rootNames = rootNames;
    this.checker = program.getTypeChecker();
  }

  run(): { classes: ClassData[]; interfaces: InterfaceData[] } {
    const result = {
      classes: [] as ClassData[],
      interfaces: [] as InterfaceData[],
    };
    const THIS = this;

    function visit(node: ts.Node) {
      if (ts.isClassDeclaration(node)) {
        const data = THIS.parseClassDeclaration(node);
        if (data) result.classes.push(data);
      } else if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) {
        const data = THIS.parseInterfaceDeclaration(node);
        if (data) result.interfaces.push(data);
      } else if (ts.isModuleDeclaration(node)) {
        ts.forEachChild(node, visit);
      }
    }

    for (const sourceFile of this.program.getSourceFiles()) {
      if (this.rootNames.includes(sourceFile.fileName)) {
        // Walk the tree to search for classes
        ts.forEachChild(sourceFile, visit);
      }
    }

    return result;
  }

  /** Serialize a symbol into a json object */
  serializeSymbol(symbolOrNode: ts.Symbol | ts.Node): SymbolData {
    let symbol;
    if (symbolOrNode.hasOwnProperty('kind')) {
      if (symbolOrNode.hasOwnProperty('symbol')) {
        symbol = (symbolOrNode as any).symbol;
      } else {
        symbol = this.nodeToSymbol(symbolOrNode as ts.Node);
      }
    } else {
      symbol = symbolOrNode as ts.Symbol;
    }

    if (!symbol || !symbol.getName) {
      return { name: '', documentation: '', type: '' };
    }

    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(this.checker)),
      type: this.checker.typeToString(
        this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration)
      ),
    };
  }

  /** Serialize a signature (call or construct) */
  serializeSignature(signature: ts.Signature): CallData {
    return {
      parameters: signature.parameters.map((s) => this.serializeSymbol(s)),
      type: this.checker.typeToString(signature.getReturnType()),
      documentation: ts.displayPartsToString(signature.getDocumentationComment(this.checker)),
    };
  }

  nodeToSymbol(node: ts.Node): ts.Symbol | void {
    const type = this.checker.getTypeAtLocation(node);
    return type.symbol;
  }

  parseModifierFlags(node: ts.Declaration): ModifierFlags {
    const flags = ts.getCombinedModifierFlags(node);
    return {
      protected: !!(flags & ts.ModifierFlags.Protected),
      private: !!(flags & ts.ModifierFlags.Private),
      readonly: !!(flags & ts.ModifierFlags.Readonly),
      static: !!(flags & ts.ModifierFlags.Static),
    };
  }

  parseClassDeclaration(node: ts.ClassDeclaration): ClassData | void {
    if (!node.name) return;

    const symbol = this.checker.getSymbolAtLocation(node.name);
    if (!symbol) return;

    const data = this.serializeSymbol(symbol);

    const methods: ClassMethodData[] = [];
    const properties: ClassPropertyData[] = [];
    const staticMethods: ClassMethodData[] = [];
    const staticProperties: ClassPropertyData[] = [];

    const constructorType = this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const constructors: ClassConstructorData[] = constructorType
      .getConstructSignatures()
      .map((s) => {
        return this.serializeSignature(s);
      });

    if (symbol.exports) {
      symbol.exports.forEach((v) => {
        const declarations = v.getDeclarations();
        if (!declarations) return;

        const n = declarations[0];
        if (ts.isMethodDeclaration(n)) {
          staticMethods.push(this.parseMethodDeclaration(n));
        } else if (ts.isPropertyDeclaration(n)) {
          staticProperties.push(this.parsePropertyDeclaration(n));
        }
      });
    }

    if (symbol.members) {
      symbol.members.forEach((v) => {
        const declarations = v.getDeclarations();
        if (!declarations) return;

        const n = declarations[0];
        if (ts.isMethodDeclaration(n)) {
          methods.push(this.parseMethodDeclaration(n));
        } else if (ts.isPropertyDeclaration(n)) {
          properties.push(this.parsePropertyDeclaration(n));
        }
      });
    }

    return { ...data, constructors, methods, properties, staticMethods, staticProperties };
  }

  parseMethodDeclaration(node: ts.MethodDeclaration): ClassMethodData {
    const data: ClassMethodData = this.serializeSymbol(node);
    const signature = this.checker.getSignatureFromDeclaration(node);
    if (signature) {
      data.parameters = signature.parameters.map((s) => this.serializeSymbol(s));
      data.type = this.checker.typeToString(signature.getReturnType());
    }
    data.flags = this.parseModifierFlags(node);
    return data;
  }

  parsePropertyDeclaration(node: ts.PropertyDeclaration): ClassPropertyData {
    const data: ClassPropertyData = this.serializeSymbol(node);
    data.flags = this.parseModifierFlags(node);
    return data;
  }

  parseInterfaceDeclaration(
    node: ts.InterfaceDeclaration | ts.TypeAliasDeclaration
  ): InterfaceData {
    const data = {
      name: node.name.getFullText(),
      code: node.getFullText(),
    };
    return data;
  }
}
