import fs from 'fs';
import path from 'fs';
import { globSync } from 'glob';

const files = globSync(['content/**/*.ts', 'app/**/*.tsx']);
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (content.includes(' | Remova"')) {
    content = content.replace(/ \| Remova"/g, '"');
    changed = true;
  }
  if (content.includes(' | Remova`')) {
    content = content.replace(/ \| Remova`/g, '`');
    changed = true;
  }
  if (content.includes(' | AI Glossary | Remova`')) {
    content = content.replace(/ \| AI Glossary \| Remova`/g, ' | AI Glossary`');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed titles in', file);
  }
}
