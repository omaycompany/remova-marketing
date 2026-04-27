const fs = require('fs');

const files = [
    'content/blog.ts',
    'content/features.ts',
    'content/use-cases.ts',
    'content/glossary.ts',
    'content/alternatives.ts',
    'content/comparisons.ts'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace unescaped double quotes inside the newly injected anchor tags
    // The injected tags look exactly like: <a href="/path/to/slug">
    content = content.replace(/<a href="(\/[^"]+)">/g, "<a href='$1'>");
    fs.writeFileSync(file, content);
    console.log(`Fixed ${file}`);
}
