import ts from 'typescript';
import prettier from 'prettier';
import { trim, fixJSDocCode } from './utils';

interface SymbolData {
  name: string;
  type: string;
  typeChecker: string;
  documentation: string;
}

interface CallData {
  parameters?: SymbolData[];
  type: string;
  documentation: string;
}

interface ModifierFlags {
  protected?: boolean;
  private?: boolean;
  readonly?: boolean;
  static?: boolean;
}

interface ClassConstructorData extends CallData {}

export interface ClassMethodData extends SymbolData, CallData {
  flags?: ModifierFlags;
  generics?: string;
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
  printer: ts.Printer;
  rootNames: string[];
  sourceFile: ts.SourceFile;

  static parseFile(
    filePath: string
  ): {
    classData: ClassData;
    interfaces: InterfaceData[];
  } {
    const result = TSClassParser.createFromFiles(filePath).run();
    return {
      classData: result.classes[0],
      interfaces: result.interfaces,
    };
  }

  static parseSource(
    code: string
  ): {
    classData: ClassData;
    interfaces: InterfaceData[];
  } {
    const result = TSClassParser.createFromSource(code).run();
    return {
      classData: result.classes[0],
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
    this.printer = ts.createPrinter({
      removeComments: true,
      newLine: ts.NewLineKind.LineFeed,
    });
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
        this.sourceFile = sourceFile;
        // Walk the tree to search for classes
        ts.forEachChild(sourceFile, visit);
      }
    }

    return result;
  }

  /** Serialize a symbol into a json object */
  serializeSymbol(symbol: ts.Symbol): SymbolData {
    if (!symbol || !symbol.getName) {
      return { name: '', documentation: '', type: '', typeChecker: '' };
    }

    const type =
      symbol.valueDeclaration && (symbol.valueDeclaration as any).type
        ? this.printer.printNode(
            ts.EmitHint.Unspecified,
            (symbol.valueDeclaration as any).type,
            this.sourceFile
          )
        : '';

    const typeChecker = this.checker.typeToString(
      this.checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration),
      undefined,
      ts.TypeFormatFlags.NoTruncation
    );

    return {
      name: symbol.getName(),
      documentation: ts.displayPartsToString(symbol.getDocumentationComment(this.checker)),
      type,
      typeChecker,
    };
  }

  /** Serialize a Node into a json object */
  serializeNode(node: ts.MethodDeclaration | ts.PropertyDeclaration): SymbolData {
    let symbol: ts.Symbol = ts.isPropertyDeclaration(node)
      ? (node as any).symbol
      : this.nodeToSymbol(node);

    const type = (node.type && node.type.getText()) || '';
    const typeChecker = !symbol
      ? type
      : this.checker.typeToString(
          this.checker.getTypeOfSymbolAtLocation(symbol, node),
          undefined,
          ts.TypeFormatFlags.NoTruncation
        );

    const name = node.name.getText();

    // if (name === 'prot123') {
    //   console.log(node);
    // }

    let documentation = '';
    if (symbol) {
      documentation = ts.displayPartsToString(symbol.getDocumentationComment(this.checker));
      symbol.getJsDocTags().forEach((docTag) => {
        if (docTag.name === 'example' && docTag.text) {
          if (documentation) documentation += `\n\n`;
          documentation += '```js\n';
          try {
            documentation +=
              trim(
                prettier.format(fixJSDocCode(docTag.text), {
                  parser: 'typescript',
                  semi: true,
                  singleQuote: true,
                  arrowParens: 'always',
                })
              ) + '\n';
          } catch (e) {
            console.log(
              `\n-----------------------------------------\n\nExample parse error in '${name}':\n`,
              e.message,
              '\n\n',
              docTag.text,
              '\n'
            );
            documentation += trim(docTag.text) + '\n';
          }
          documentation += '```\n';
        } else if (docTag.name === 'description' && docTag.text) {
          if (documentation) documentation += `\n`;
          documentation += docTag.text + '\n';
        }
      });
    }

    return {
      name,
      documentation,
      type: type || typeChecker,
      typeChecker,
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
    const res: ModifierFlags = {};

    if (flags & ts.ModifierFlags.Protected) res.protected = true;
    if (flags & ts.ModifierFlags.Private) res.private = true;
    if (flags & ts.ModifierFlags.Readonly) res.readonly = true;
    if (flags & ts.ModifierFlags.Static) res.static = true;

    return res;
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
    const data: ClassMethodData = this.serializeNode(node);

    const genericMatch = data.typeChecker.match(/^(<.*>)\(/i);
    if (genericMatch) {
      data.generics = genericMatch[1];
    }

    const signature = this.checker.getSignatureFromDeclaration(node);
    if (signature) {
      data.parameters = signature.parameters.map((s) => this.serializeSymbol(s));
      // data.type = this.checker.typeToString(
      //   signature.getReturnType(),
      //   undefined,
      //   ts.TypeFormatFlags.NoTruncation | ts.TypeFormatFlags.MultilineObjectLiterals
      // );
    }
    data.flags = this.parseModifierFlags(node);
    return data;
  }

  parsePropertyDeclaration(node: ts.PropertyDeclaration): ClassPropertyData {
    const data: ClassPropertyData = this.serializeNode(node);
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
