import ts from 'typescript';

describe('some checks', () => {
  it('t', () => {
    expect(ts).toBeDefined();
  });

  // it('ttt', () => {
  //   // hardcode our input file
  //   const filePath = 'src/__fixtures__/TypeStorage.d.ts';

  //   // create a program instance, which is a collection of source files
  //   // in this case we only have one source file
  //   const program = ts.createProgram([filePath], {});

  //   // pull off the typechecker instance from our program
  //   const checker = program.getTypeChecker();

  //   // get our models.ts source file AST
  //   const source = program.getSourceFile(filePath);
  //   // console.log(source);

  //   // create TS printer instance which gives us utilities to pretty print our final AST
  //   const printer = ts.createPrinter();

  //   // helper to give us Node string type given kind
  //   const syntaxToKind = (kind: ts.Node['kind']) => {
  //     return ts.SyntaxKind[kind];
  //   };
  //   // debugger;
  //   // visit each node in the root AST and log its kind
  //   ts.forEachChild(source, (node) => {
  //     console.log(syntaxToKind(node.kind));

  //     if (ts.isClassDeclaration(node) && node.name) {
  //       ts.forEachChild(node, (n) => {
  //         console.log('--', syntaxToKind(n.kind));
  //         if (ts.isMethodDeclaration(n)) {
  //           console.log(n.name.getText());
  //           if (n.parameters.length > 0) {
  //             n.parameters.forEach((nn) => {
  //               console.log('----', nn.name.getText());
  //               if (nn.type) {
  //                 console.log('----', nn.type.getText());
  //               }
  //             });
  //           }
  //           // console.log(n);
  //           // console.log(printer.printNode(ts.EmitHint.Unspecified, n));
  //         }
  //       });

  //       // console.log('111', printer.printNode(4, node));
  //       // console.log(node.kind);
  //       const symbol = checker.getSymbolAtLocation(node.name);
  //       const type = checker.getDeclaredTypeOfSymbol(symbol);
  //       const properties = checker.getPropertiesOfType(type);
  //       node.forEachChild((c) => {
  //         // console.log('111', printer.printNode(4, c, source));
  //       });
  //       properties.forEach((declaration) => {
  //         // console.log(declaration.name);
  //         // prints username, info
  //       });
  //     }
  //   });
  // });

  // it('doc', () => {
  //   interface DocEntry {
  //     name?: string;
  //     fileName?: string;
  //     documentation?: string;
  //     type?: string;
  //     constructors?: DocEntry[];
  //     parameters?: DocEntry[];
  //     returnType?: string;
  //     methods?: DocEntry[];
  //     properties?: DocEntry[];
  //     others?: DocEntry[];
  //     statics?: DocEntry[];
  //     staticsProps?: DocEntry[];
  //   }

  //   const fileNames = ['src/__fixtures__/TypeStorage.d.ts'];

  //   // Build a program using the set of root file names in fileNames
  //   let program = ts.createProgram(fileNames, {});

  //   // Get the checker, we will use it to find more about classes
  //   let checker = program.getTypeChecker();

  //   let output: DocEntry[] = [];

  //   // Visit every sourceFile in the program
  //   for (const sourceFile of program.getSourceFiles()) {
  //     // if (!sourceFile.isDeclarationFile) {
  //     if (fileNames.includes(sourceFile.fileName)) {
  //       // Walk the tree to search for classes
  //       ts.forEachChild(sourceFile, visit);
  //     }
  //   }

  //   console.log(output[0]);
  //   debugger;

  //   function visit(node: ts.Node) {
  //     // Only consider exported nodes
  //     if (!isNodeExported(node)) {
  //       return;
  //     }

  //     if (ts.isClassDeclaration(node) && node.name) {
  //       // This is a top level class, get its symbol
  //       let symbol = checker.getSymbolAtLocation(node.name);
  //       if (symbol) {
  //         output.push(serializeClass(symbol));
  //       }
  //       // No need to walk any further, class expressions/inner declarations
  //       // cannot be exported
  //     } else if (ts.isModuleDeclaration(node)) {
  //       // This is a namespace, visit its children
  //       ts.forEachChild(node, visit);
  //     }
  //   }

  //   /** True if this is visible outside this file, false otherwise */
  //   function isNodeExported(node: ts.Node): boolean {
  //     return (
  //       (ts.getCombinedModifierFlags(node) & ts.ModifierFlags.Export) !== 0 ||
  //       (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  //     );
  //   }

  //   /** Serialize a symbol into a json object */
  //   function serializeSymbol(symbol: ts.Symbol): DocEntry {
  //     return {
  //       name: symbol.getName(),
  //       documentation: ts.displayPartsToString(symbol.getDocumentationComment()),
  //       type: checker.typeToString(
  //         checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
  //       ),
  //     };
  //   }

  //   /** Serialize a class symbol information */
  //   function serializeClass(symbol: ts.Symbol) {
  //     let details = serializeSymbol(symbol);

  //     // Get the construct signatures
  //     let constructorType = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!);
  //     details.constructors = constructorType.getConstructSignatures().map(serializeSignature);

  //     details.methods = [];
  //     details.statics = [];
  //     details.staticsProps = [];
  //     details.others = [];
  //     details.properties = [];
  //     debugger;
  //     symbol.exports.forEach((v) => {
  //       if (!v.getDeclarations()) return;
  //       debugger;
  //       const node = v.getDeclarations()[0];
  //       if (ts.isMethodDeclaration(node)) {
  //         details.statics.push(serializeSymbol(v));
  //       } else if (ts.isPropertyDeclaration(node)) {
  //         const mFlags = ts.getCombinedModifierFlags(node);
  //         if (!(mFlags & ts.ModifierFlags.Private) && !(mFlags & ts.ModifierFlags.Protected)) {
  //           details.staticsProps.push(serializeSymbol(v));
  //         } else {
  //           details.others.push(serializeSymbol(v));
  //         }
  //       }
  //       console.log(ts.SyntaxKind[node.kind]);
  //     });

  //     symbol.members.forEach((v) => {
  //       const node = v.getDeclarations()[0];
  //       if (ts.isMethodDeclaration(node)) {
  //         const t = serializeSymbol(v);
  //         const sign = checker.getSignatureFromDeclaration(node);
  //         t.parameters = sign.parameters.map(serializeSymbol);
  //         t.returnType = checker.typeToString(sign.getReturnType());
  //         details.methods.push(t);
  //       } else if (ts.isPropertyDeclaration(node)) {
  //         const mFlags = ts.getCombinedModifierFlags(node);
  //         if (!(mFlags & ts.ModifierFlags.Private) && !(mFlags & ts.ModifierFlags.Protected)) {
  //           details.properties.push(serializeSymbol(v));
  //         } else {
  //           details.others.push(serializeSymbol(v));
  //         }
  //       } else {
  //         details.others.push(serializeSymbol(v));
  //       }
  //       // const d = serializeSignature(checker.getSignatureFromDeclaration(v.getDeclarations()[0]));
  //       // }
  //     });

  //     return details;
  //   }

  //   /** Serialize a signature (call or construct) */
  //   function serializeSignature(signature: ts.Signature) {
  //     return {
  //       parameters: signature.parameters.map(serializeSymbol),
  //       returnType: checker.typeToString(signature.getReturnType()),
  //       documentation: ts.displayPartsToString(signature.getDocumentationComment()),
  //     };
  //   }
  // });
});
