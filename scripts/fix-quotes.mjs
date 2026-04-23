import fs from 'fs';

['content/blog.ts', 'content/features.ts', 'content/use-cases.ts'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<a href="([^"]+)">/g, "<a href='$1'>");
  fs.writeFileSync(file, content);
  console.log(`Fixed quotes in ${file}`);
});
