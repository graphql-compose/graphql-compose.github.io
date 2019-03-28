// const TypeDoc = require('typedoc');

// process.env.LOG_LEVEL = 'verbose';

// const app = new TypeDoc.Application({
//   mode: 'Modules',
//   logger: 'none',
//   target: 'ES5',
//   module: 'CommonJS',
//   experimentalDecorators: true,
// });

// // const project = app.convert(app.expandInputFiles(['src']));
// const project = app.convert(['../graphql-compose/src/ObjectTypeComposer.d.ts']);
// console.log(project);

// if (project) {
//   // Project may not have converted correctly
//   const outputDir = 'docs';

//   // Rendered docs
//   // app.generateDocs(project, outputDir);
//   // Alternatively generate JSON output
//   app.generateJson(project, 'scripts/documentation.json');
// }

const ts = require('typescript');

const filepath = '../graphql-compose/src/ObjectTypeComposer.d.ts';
const program = ts.createProgram([filepath], {});
const typeChecker = program.getTypeChecker();

program.getSourceFiles().map(o => {
  if (o.fileName === filepath) {
    o.forEachChild(o => {
      if (o.kind === ts.SyntaxKind.ClassDeclaration) {
        console.log(o.kind);
        console.log(o.getText());
        console.log(o.modifiers);
      }
    });
  }
});
