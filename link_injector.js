const fs = require('fs');
const path = require('path');

const links = [
    { text: "Shadow AI", url: "/glossary/shadow-ai" },
    { text: "shadow AI", url: "/glossary/shadow-ai" },
    { text: "Prompt Injection", url: "/glossary/prompt-injection" },
    { text: "prompt injection", url: "/glossary/prompt-injection" },
    { text: "Data Loss Prevention", url: "/features/sensitive-data-protection" },
    { text: "DLP", url: "/features/sensitive-data-protection" },
    { text: "Sensitive Data Masking", url: "/features/sensitive-data-protection" },
    { text: "Role-Based Access Control", url: "/features/role-access-control" },
    { text: "RBAC", url: "/features/role-access-control" },
    { text: "FinOps", url: "/features/department-budgets" },
    { text: "Department Budgets", url: "/features/department-budgets" },
    { text: "Audit Trail", url: "/features/audit-trails" },
    { text: "audit trail", url: "/features/audit-trails" },
    { text: "Model Routing", url: "/features/model-governance" },
    { text: "Retrieval-Augmented Generation", url: "/glossary/rag" },
    { text: "RAG", url: "/glossary/rag" },
    { text: "Foundation Model", url: "/glossary/foundation-model" },
    { text: "foundation models", url: "/glossary/foundation-model" },
    { text: "AI Governance", url: "/glossary/ai-governance" },
    { text: "ai governance", url: "/glossary/ai-governance" },
    { text: "Financial Services", url: "/use-cases/financial-services" },
    { text: "Healthcare", url: "/use-cases/healthcare" },
    { text: "Legal Services", url: "/use-cases/legal-services" },
    { text: "CISO", url: "/use-cases/ciso" },
    { text: "CIO", url: "/use-cases/cio" },
    { text: "Compliance Lead", url: "/use-cases/compliance-lead" },
    { text: "Department Manager", url: "/use-cases/department-manager" },
    { text: "Policy Enforcement", url: "/use-cases/policy-enforcement" },
    { text: "Cost Governance", url: "/use-cases/cost-governance" },
    { text: "AI Rollout", url: "/blog/safe-ai-rollout-playbook" },
    { text: "AI Audit", url: "/blog/building-ai-audit-readiness" },
    { text: "EU AI Act", url: "/blog/eu-ai-act-enterprise-readiness-checklist" },
    { text: "Agentic AI", url: "/blog/governing-agentic-ai-enterprise" },
    { text: "Onboarding Controls", url: "/features/onboarding-controls" },
    { text: "Preset Workflows", url: "/features/preset-workflows" },
    { text: "Frontier Models", url: "/features/frontier-models" },
    { text: "Usage Analytics", url: "/features/usage-analytics" }
];

function injectLinks(text) {
    if (!text || typeof text !== 'string') return text;
    
    // We split the text into HTML tags and text nodes so we don't inject links inside existing tags.
    // Also ignore anything inside existing <a> tags.
    let parts = text.split(/(<a\b[^>]*>.*?<\/a>|<[^>]+>)/g);
    
    for (let i = 0; i < parts.length; i++) {
        // If this part is a tag or inside an anchor, skip it
        if (parts[i].startsWith('<')) continue;

        let modifiedPart = parts[i];
        
        for (const link of links) {
            // Use regex to match whole words only
            // But ensure we only replace the FIRST occurrence in this chunk to avoid over-linking
            const regex = new RegExp(`\\b${link.text}\\b`);
            if (regex.test(modifiedPart)) {
                // Use single quotes for the href to avoid breaking TS string literals
                modifiedPart = modifiedPart.replace(regex, `<a href='${link.url}'>${link.text}</a>`);
            }
        }
        parts[i] = modifiedPart;
    }
    
    return parts.join('');
}

const files = [
    'content/blog.ts',
    'content/features.ts',
    'content/use-cases.ts',
    'content/glossary.ts',
    'content/alternatives.ts',
    'content/comparisons.ts'
];

for (const file of files) {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // To safely replace text inside TypeScript files, we need to find string literals.
    const stringLiteralRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
    content = content.replace(stringLiteralRegex, (match, text) => {
        if (text.length > 50 && !text.includes('text-blue-600') && !text.includes('</svg>')) {
            const linkedText = injectLinks(text);
            return `"${linkedText}"`;
        }
        return match;
    });

    fs.writeFileSync(fullPath, content);
    console.log(`Processed ${file}`);
}
