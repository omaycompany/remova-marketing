import fs from 'fs';

let blog = fs.readFileSync('content/blog.ts', 'utf8');

// Replace EU AI Act
blog = blog.replace(
  'The Act requires that high-risk systems be designed to allow human oversight throughout operation.',
  'The Act requires that high-risk systems be designed to allow human oversight throughout operation. Teams should consider adopting <a href="/features/policy-guardrails">policy guardrails</a> to ensure consistent human-in-the-loop controls.'
);
blog = blog.replace(
  'Audit trails of system behavior, policy events, and exception handling are the operational evidence',
  '<a href="/features/audit-trails">Audit trails</a> of system behavior, policy events, and exception handling are the operational evidence'
);
blog = blog.replace(
  'Classification decisions should be made jointly by legal, compliance, and the operational teams',
  'Classification decisions should be made jointly by legal, <a href="/use-cases/compliance-lead">compliance leads</a>, and the operational teams'
);

// Agentic AI
blog = blog.replace(
  'This requires a control layer that sits between the agent\'s planning process and its action execution',
  'This requires a control layer with strong <a href="/features/policy-guardrails">policy guardrails</a> that sits between the agent\'s planning process and its action execution'
);
blog = blog.replace(
  'Governance teams must enforce these boundaries through the platform\'s API control layer',
  'Governance teams must enforce these boundaries using <a href="/features/governed-api-access">governed API access</a>'
);

// Shadow AI
blog = blog.replace(
  'That means sensitive data protection that operates without creating constant friction',
  'That means <a href="/features/sensitive-data-protection">sensitive data protection</a> that operates without creating constant friction'
);
blog = blog.replace(
  'Security teams should run periodic discovery exercises',
  '<a href="/use-cases/ciso">Security teams</a> should run periodic discovery exercises leveraging detailed <a href="/features/usage-analytics">usage analytics</a>'
);

// Model Governance
blog = blog.replace(
  'A common framework uses three tiers:',
  'A common framework for <a href="/features/model-governance">model governance</a> uses three tiers:'
);

// Cost Overruns
blog = blog.replace(
  'Model tier drift occurs when expensive frontier models',
  '<a href="/features/model-governance">Model tier drift</a> occurs when expensive frontier models'
);
blog = blog.replace(
  'Establishing AI cost governance requires a deliberate ownership decision',
  'Establishing AI <a href="/features/department-budgets">cost governance and department budgets</a> requires a deliberate ownership decision'
);

// Sensitive Data
blog = blog.replace(
  'Redaction strips or replaces sensitive content before the prompt is processed',
  '<a href="/features/sensitive-data-protection">Redaction</a> strips or replaces sensitive content before the prompt is processed'
);

// RBAC
blog = blog.replace(
  'A robust RBAC model typically includes',
  'A robust <a href="/features/role-based-access">RBAC model</a> typically includes'
);

// US Policy
blog = blog.replace(
  'This places a premium on granular audit trails and configurable policy guardrails',
  'This places a premium on granular <a href="/features/audit-trails">audit trails</a> and configurable <a href="/features/policy-guardrails">policy guardrails</a>'
);

// Usage Analytics
blog = blog.replace(
  'An effective analytics program tracks adoption quality',
  'An effective <a href="/features/usage-analytics">usage analytics</a> program tracks adoption quality'
);

// Multi-Agent
blog = blog.replace(
  'Governance platforms must track compute usage not just by the user prompt',
  'Governance platforms must track compute usage through <a href="/features/usage-analytics">usage analytics</a> not just by the user prompt'
);

// RAG
blog = blog.replace(
  'Governance platforms must ensure that the RAG pipeline strictly inherits the user\'s existing Identity Provider (IdP) context',
  'Governance platforms must ensure that the RAG pipeline strictly inherits the user\'s existing Identity Provider (IdP) context via <a href="/features/role-based-access">role-based access</a>'
);

// Preset Workflows
blog = blog.replace(
  'Standardizing recurring tasks through preset workflows replaces the blank chat box',
  'Standardizing recurring tasks through <a href="/features/preset-workflows">preset workflows</a> replaces the blank chat box'
);

fs.writeFileSync('content/blog.ts', blog);

// Now update some older posts to link to new posts
let oldBlog = blog;

// Link "ai-governance-program-basics" to "model-governance-enterprise-guide"
oldBlog = oldBlog.replace(
  'Once you have visibility and initial access controls, the focus shifts to policy enforcement.',
  'Once you have visibility and initial access controls (such as a <a href="/blog/model-governance-enterprise-guide">model governance</a> tiering strategy), the focus shifts to policy enforcement.'
);

// Bump lastModified for ai-governance-program-basics
oldBlog = oldBlog.replace(
  'slug: "ai-governance-program-basics",\n        title: "AI Governance Program Basics",\n        metaDescription',
  'slug: "ai-governance-program-basics",\n        title: "AI Governance Program Basics",\n        lastModified: "2026-04-23",\n        metaDescription'
);

// Link "department-budget-governance" to "ai-cost-overruns-hidden-expenses"
oldBlog = oldBlog.replace(
  'The core of AI cost governance is moving away from the single IT budget.',
  'The core of AI cost governance is moving away from the single IT budget to avoid unexpected <a href="/blog/ai-cost-overruns-hidden-expenses">AI cost overruns</a>.'
);

// Bump lastModified for department-budget-governance
oldBlog = oldBlog.replace(
  'slug: "department-budget-governance",\n        title: "Department Budget Governance for AI",\n        metaDescription',
  'slug: "department-budget-governance",\n        title: "Department Budget Governance for AI",\n        lastModified: "2026-04-23",\n        metaDescription'
);

fs.writeFileSync('content/blog.ts', oldBlog);
console.log("Updated blog.ts");

// Features pages update
let features = fs.readFileSync('content/features.ts', 'utf8');

features = features.replace(
  'slug: "policy-guardrails",\n        title: "Policy Guardrails",\n        metaTitle',
  'slug: "policy-guardrails",\n        lastModified: "2026-04-23",\n        title: "Policy Guardrails",\n        metaTitle'
);
features = features.replace(
  'Remova evaluates AI requests and responses against organization policy',
  'Remova evaluates AI requests and responses against organization policy (a critical component for <a href="/blog/governing-agentic-ai-enterprise">governing agentic AI</a>)'
);

features = features.replace(
  'slug: "sensitive-data-protection",\n        title: "Sensitive Data Protection",\n        metaTitle',
  'slug: "sensitive-data-protection",\n        lastModified: "2026-04-23",\n        title: "Sensitive Data Protection",\n        metaTitle'
);
features = features.replace(
  'Remova helps identify sensitive content in prompts and responses',
  'Remova helps identify sensitive content in prompts and responses (essential for protecting <a href="/blog/sensitive-data-protection-ai-workflows">data in enterprise AI workflows</a> and mitigating <a href="/blog/shadow-ai-enterprise-detection-response">shadow AI</a>)'
);

fs.writeFileSync('content/features.ts', features);
console.log("Updated features.ts");

// Use-cases update
let useCases = fs.readFileSync('content/use-cases.ts', 'utf8');

useCases = useCases.replace(
  'slug: "ciso",\n        title: "CISO",\n        metaTitle',
  'slug: "ciso",\n        lastModified: "2026-04-23",\n        title: "CISO",\n        metaTitle'
);
useCases = useCases.replace(
  'CISOs face a unique challenge with generative AI: the technology is often adopted by employees',
  'CISOs face a unique challenge with generative AI: the technology is often adopted by employees (creating a significant <a href="/blog/shadow-ai-enterprise-detection-response">shadow AI risk</a>)'
);

fs.writeFileSync('content/use-cases.ts', useCases);
console.log("Updated use-cases.ts");

