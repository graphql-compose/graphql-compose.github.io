import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

const versionsFile = path.resolve(process.cwd(), './website/versions.json');
const versions: string[] = require(versionsFile);
const versionsBackup = [...versions];
const lastVersion = versions.shift();
try {
  if (lastVersion) {
    fs.writeFileSync(versionsFile, JSON.stringify(versions, null, 2) + '\n');
    execSync(`yarn run version ${lastVersion}`, {
      cwd: path.resolve(__dirname, '../'),
      stdio: [0, 1, 2],
    });
  } else {
    throw new Error(`  Cannot regenerate version files.`);
  }
} catch (e) {
  fs.writeFileSync(versionsFile, JSON.stringify(versionsBackup, null, 2) + '\n');
  console.log(e.message);
}
