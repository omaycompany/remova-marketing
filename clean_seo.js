const fs = require('fs');
const path = require('path');

const files = [
    'content/blog.ts',
    'content/features.ts',
    'content/use-cases.ts',
    'content/glossary.ts',
    'content/alternatives.ts',
    'content/comparisons.ts'
];

function cleanRawHtml(text) {
    if (!text) return text;
    // Remove <a> tags but keep the text inside
    return text.replace(/<a\b[^>]*>(.*?)<\/a>/g, '$1');
}

for (const file of files) {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Clean Titles (lines starting with title: or term:)
    content = content.replace(/(title|term|metaTitle|metaDescription|excerpt|headline|subheadline):\s*"([^"]+)"/g, (match, key, val) => {
        return `${key}: "${cleanRawHtml(val)}"`;
    });

    fs.writeFileSync(fullPath, content);
    console.log(`Cleaned titles and metadata in ${file}`);
}
