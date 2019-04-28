import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import TSClassParser from './TSClassParser';
import MarkdownGenerator from './MarkdownGenerator';

const classes: string[] = [
  'EnumTypeComposer',
  'InputTypeComposer',
  'InterfaceTypeComposer',
  'ObjectTypeComposer',
  'Resolver',
  'ScalarTypeComposer',
  'SchemaComposer',
  'TypeMapper',
  'UnionTypeComposer',
  'ListComposer',
  'NonNullComposer',
  'ThunkComposer',
];

const srcPath = './tmp/graphql-compose/src/';
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
  mkdirp.sync(path.resolve(process.cwd(), outDir));
  fs.writeFileSync(outputFile, md);
});
