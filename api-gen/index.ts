import path from 'path';
import fs from 'fs';
import TSClassParser from './TSClassParser';
import MarkdownGenerator from './MarkdownGenerator';

const classes = [
  'EnumTypeComposer',
  'InputTypeComposer',
  'InterfaceTypeComposer',
  'ObjectTypeComposer',
  'Resolver',
  'ScalarTypeComposer',
  'SchemaComposer',
  'TypeMapper',
  'UnionTypeComposer',
];

const srcPath = '../graphql-compose/src/';
const outDir = './docs/api/';

classes.forEach((name) => {
  console.log(`Working on ${name}...`);
  const srcFile = path.resolve(process.cwd(), srcPath, `${name}.d.ts`);
  const outputFile = path.resolve(process.cwd(), outDir, `${name}.md`);

  if (!fs.existsSync(srcFile)) {
    throw new Error(`  ERROR: file not found: ${srcFile}`);
  }

  console.log(`  Read from ${srcFile}`);

  const { classData, interfaces } = TSClassParser.parseFile(srcFile);
  const md = MarkdownGenerator.generate(classData, interfaces);

  console.log(`  Write to ${outputFile}`);
  fs.writeFileSync(outputFile, md);
});
