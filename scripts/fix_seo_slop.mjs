import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) { 
            if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
                results = results.concat(walk(filePath));
            }
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk('.');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  // Fix title tags
  if (content.includes('title: { absolute: "')) {
    content = content.replace(/title: \{ absolute: "([^"]+) \| Remova" \}/g, 'title: "$1"');
    content = content.replace(/title: \{ absolute: "([^"]+)" \}/g, 'title: "$1"');
    changed = true;
  }
  if (content.includes(' | Remova"')) {
    content = content.replace(/ \| Remova"/g, '"');
    changed = true;
  }
  if (content.includes(' | Remova`')) {
    content = content.replace(/ \| Remova`/g, '`');
    changed = true;
  }
  
  // Purge slop (em-dashes) in content files
  if (file.includes('/content/') && content.includes(' — ')) {
    content = content.replace(/ — /g, ', ');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
}
