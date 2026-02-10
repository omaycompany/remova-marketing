export interface Feature {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    subheadline: string;
    description: string;
    benefits: string[];
    useCases: string[];
}

export const features: Feature[] = [
    {
        slug: "pii-redaction",
        title: "PII Redaction & Data Protection",
        metaTitle: "PII Redaction for Enterprise AI | Remova",
        metaDescription: "Automatically detect and redact PII, API keys, and sensitive data before it reaches any AI model. Dual-layer protection for enterprise LLM deployments.",
        headline: "PII Redaction & Data Protection",
        subheadline: "Stop sensitive data from ever reaching AI models",
        description: "Remova's dual-layer protection system automatically detects and blocks personally identifiable information (PII), API keys, financial data, and other sensitive content before it's sent to any AI provider. Layer 1 uses instant rule-based matching with zero latency, while Layer 2 applies semantic analysis to catch sophisticated attempts to leak data through rephrased prompts or encoded content.",
        benefits: ["Instant PII detection and blocking", "Zero-latency rule-based matching", "Semantic analysis for sophisticated leak attempts", "Automatic audit logging of all blocked content", "Customizable sensitivity rules per department"],
        useCases: ["Preventing employees from uploading salary data to ChatGPT", "Blocking API keys and passwords from AI prompts", "Ensuring HIPAA compliance in healthcare AI usage", "Protecting client confidential information in legal AI tools"]
    },
    {
        slug: "dual-layer-guardrails",
        title: "Dual-Layer AI Guardrails",
        metaTitle: "Dual-Layer AI Guardrails for Enterprise | Remova",
        metaDescription: "Protect your organization with two layers of AI guardrails: instant rule matching and semantic analysis. Block jailbreaks, competitor mentions, and policy violations.",
        headline: "Dual-Layer AI Guardrails",
        subheadline: "Two levels of protection for every AI interaction",
        description: "Remova deploys a unique dual-layer guardrail system that combines the speed of rule-based filtering with the intelligence of semantic analysis. Layer 1 catches known threats instantly through pattern matching and blocklists. Layer 2 uses AI-powered semantic understanding to detect jailbreak attempts, competitor intelligence extraction, biased prompts, and policy violations that simple rules cannot catch.",
        benefits: ["Layer 1: Zero-latency rule-based filtering", "Layer 2: AI-powered semantic threat detection", "Jailbreak and prompt injection prevention", "Custom policy enforcement per team", "Real-time violation alerts and logging"],
        useCases: ["Blocking prompt injection attacks", "Preventing competitor intelligence extraction", "Enforcing brand safety guidelines", "Detecting biased or inappropriate AI prompts"]
    },
    {
        slug: "cost-controls",
        title: "Departmental Cost Controls",
        metaTitle: "AI Cost Controls Per Department | Remova",
        metaDescription: "Set strict AI budget limits per department, team, and user. Auto-stop logic prevents runaway costs. Real-time spend tracking across all AI models.",
        headline: "Departmental Cost Controls",
        subheadline: "Enforce strict budget limits across every team",
        description: "Remova gives finance and IT leaders granular control over AI spending. Set hard budget caps per department, soft alerts at custom thresholds, and auto-stop logic that freezes AI access when limits are reached. Track every token spent in real-time across GPT-4o, Claude, Gemini, and 300+ other models through a unified cost dashboard.",
        benefits: ["Hard budget caps per department and user", "Auto-stop when limits are reached", "Real-time spend tracking dashboard", "Soft alerts at custom thresholds", "Cross-model cost normalization"],
        useCases: ["Allocating $5K/month to engineering, $2K to marketing", "Preventing a single team from consuming the entire AI budget", "Tracking ROI of AI usage per department", "Setting per-user daily spending limits"]
    },
    {
        slug: "budget-allocation",
        title: "Budget Allocation & Limits",
        metaTitle: "AI Budget Allocation & Spending Limits | Remova",
        metaDescription: "Allocate AI budgets per team with hard caps, soft alerts, and auto-renewal. Universal credit system normalizes costs across 300+ AI models.",
        headline: "Budget Allocation & Limits",
        subheadline: "Unified credit system across all AI providers",
        description: "Remova's Universal Credit Protocol normalizes costs across all AI providers into a single internal currency. Allocate credits to departments, set renewal schedules, and enforce hard limits — all from one dashboard. No more surprise bills from OpenAI, Anthropic, or Google.",
        benefits: ["Universal credit system across providers", "Automated monthly renewal logic", "Department-level budget isolation", "Predictable AI spending", "Detailed cost breakdowns per model"],
        useCases: ["Setting quarterly AI budgets per business unit", "Auto-renewing monthly credits for each department", "Comparing cost-efficiency across AI providers", "Forecasting AI infrastructure costs"]
    },
    {
        slug: "model-access",
        title: "300+ AI Model Access",
        metaTitle: "Access 300+ AI Models Securely | Remova",
        metaDescription: "Deploy GPT-4o, Claude 3.5, Gemini, Llama, Mistral, and 300+ AI models through one secure gateway. Curate which models each team can use.",
        headline: "300+ AI Model Access",
        subheadline: "Every major AI model, one secure gateway",
        description: "Remova provides instant access to over 300 AI models from OpenAI, Anthropic, Google, Meta, Mistral, and more — all through a single, governed interface. Admins can curate which models are available to each department, ensuring teams only use approved models while maintaining access to the latest capabilities.",
        benefits: ["300+ models from all major providers", "Single unified interface", "Admin-controlled model curation", "Automatic model updates", "Vendor-agnostic architecture"],
        useCases: ["Giving engineering access to GPT-4o and Claude while restricting marketing to Gemini", "Testing new models without changing infrastructure", "Comparing model outputs side-by-side", "Switching providers without any workflow disruption"]
    },
    {
        slug: "model-curation",
        title: "Model Selection & Curation",
        metaTitle: "Curate AI Models Per Department | Remova",
        metaDescription: "Control which AI models each department can access. Create curated model selections and enforce usage policies across your organization.",
        headline: "Model Selection & Curation",
        subheadline: "Control exactly which AI models each team can use",
        description: "Not every team needs access to every model. Remova lets admins create curated model selections per department — give engineering access to code-optimized models, let marketing use creative models, and restrict sensitive departments to privacy-focused options. Full control, zero confusion.",
        benefits: ["Per-department model allowlists", "Role-based model access", "Simplified user experience", "Reduced shadow AI risk", "Centralized model governance"],
        useCases: ["Restricting legal teams to privacy-compliant models only", "Giving creative teams access to image generation models", "Standardizing engineering on specific code models", "Gradually rolling out new models to pilot groups"]
    },
    {
        slug: "custom-presets",
        title: "Custom AI Presets",
        metaTitle: "Custom AI Presets & System Prompts | Remova",
        metaDescription: "Create pre-configured AI assistants with custom system prompts, model selections, and guardrails. Deploy specialized AI tools to specific departments.",
        headline: "Custom AI Presets",
        subheadline: "Build specialized AI assistants for every team",
        description: "Create pre-configured AI presets that combine a specific model, system prompt, and guardrail configuration into a ready-to-use AI assistant. Deploy a 'Legal Drafting Assistant' to the legal team, a 'Code Review Bot' to engineering, or a 'Marketing Copy Writer' to marketing — each with tailored behavior and safety controls.",
        benefits: ["Custom system prompts per preset", "Model and guardrail bundling", "Department-level deployment", "Consistent AI behavior across teams", "Easy preset management dashboard"],
        useCases: ["Creating a HIPAA-compliant medical assistant", "Building a brand-voice marketing writer", "Deploying a secure code review assistant", "Setting up an HR policy Q&A bot"]
    },
    {
        slug: "rbac",
        title: "Role-Based Access Control",
        metaTitle: "RBAC for Enterprise AI | Remova",
        metaDescription: "Hierarchical role-based access control for AI usage. Admin, Department Head, and User roles with granular permissions across your organization.",
        headline: "Role-Based Access Control (RBAC)",
        subheadline: "Hierarchical permissions for every level of your org",
        description: "Remova implements a deep hierarchical RBAC system that mirrors your organizational structure. Organization admins get full oversight, department heads manage their teams' AI access and budgets, and standard users operate within their assigned boundaries. Every action is scoped and auditable.",
        benefits: ["Three-tier permission hierarchy", "Department-scoped management", "Granular feature access control", "Full audit trail of admin actions", "Self-service team management"],
        useCases: ["Giving department heads control over their team's AI budget", "Restricting model selection to admin-approved options", "Allowing IT to manage guardrails without full admin access", "Enabling self-service user onboarding within departments"]
    },
    {
        slug: "zero-history",
        title: "Zero-History Architecture",
        metaTitle: "Zero-History AI Chat | No Server Storage | Remova",
        metaDescription: "Remova stores zero conversation history on servers. All chat data lives in the user's browser only. Complete privacy by architecture, not policy.",
        headline: "Zero-History Architecture",
        subheadline: "Privacy by architecture, not just policy",
        description: "Unlike other AI platforms that store your conversations on their servers, Remova keeps all chat history exclusively in the user's browser using local storage. No conversation data is ever persisted on Remova servers. When the browser data is cleared, it's gone forever. This is privacy by design — not a checkbox in settings.",
        benefits: ["Zero server-side conversation storage", "Browser-only local storage", "No data available to Remova staff", "GDPR-compliant by architecture", "No risk of server-side data breaches"],
        useCases: ["Meeting strict data residency requirements", "Ensuring attorney-client privilege in legal AI use", "Complying with financial data handling regulations", "Providing employees complete conversation privacy"]
    },
    {
        slug: "analytics-dashboard",
        title: "Real-Time Analytics Dashboard",
        metaTitle: "AI Usage Analytics Dashboard | Remova",
        metaDescription: "Track AI costs, model usage, policy violations, and task types in real-time. Executive dashboards with department-level breakdowns and ROI insights.",
        headline: "Real-Time Analytics Dashboard",
        subheadline: "Track everything about your AI deployment",
        description: "Remova's central dashboard gives executives and IT leaders complete visibility into AI usage across the organization. Track costs per department, monitor model popularity, review policy violation trends, and analyze AI task types — all in real-time. Export reports for board presentations and compliance audits.",
        benefits: ["Real-time cost and usage tracking", "Department-level breakdowns", "Policy violation trend analysis", "Model popularity insights", "Exportable executive reports"],
        useCases: ["Monthly AI spend reporting to the CFO", "Tracking which models deliver the best ROI", "Identifying departments with the highest violation rates", "Forecasting next quarter's AI budget needs"]
    },
    {
        slug: "semantic-input-filtering",
        title: "Semantic Input Filtering",
        metaTitle: "AI Input Filtering & Prompt Analysis | Remova",
        metaDescription: "Analyze every prompt before it reaches AI models. Detect jailbreaks, prompt injections, and policy violations with semantic understanding.",
        headline: "Semantic Input Filtering",
        subheadline: "Analyze every prompt before it reaches any AI model",
        description: "Every user prompt passes through Remova's semantic input filter before reaching any AI model. This layer uses AI-powered analysis to understand the intent behind prompts — catching jailbreak attempts, prompt injections, policy violations, and sensitive data exposure that simple keyword filters would miss.",
        benefits: ["Intent-based prompt analysis", "Jailbreak detection", "Prompt injection prevention", "Context-aware policy enforcement", "Zero false-positive tuning"],
        useCases: ["Catching encoded PII in prompts", "Blocking social engineering attempts on AI", "Preventing competitors from being discussed", "Enforcing topic restrictions per department"]
    },
    {
        slug: "semantic-output-filtering",
        title: "Semantic Output Filtering",
        metaTitle: "AI Output Filtering & Response Safety | Remova",
        metaDescription: "Verify every AI response before delivery. Prevent brand damage, misinformation, and inappropriate content with semantic output analysis.",
        headline: "Semantic Output Filtering",
        subheadline: "Verify every AI response before it reaches users",
        description: "Remova doesn't just filter inputs — it also analyzes AI outputs before they're delivered to users. This catches AI-generated content that violates brand guidelines, contains misinformation, reveals sensitive patterns, or produces inappropriate responses that could cause reputational damage.",
        benefits: ["AI response verification", "Brand guideline enforcement", "Misinformation detection", "Inappropriate content blocking", "Customizable output policies"],
        useCases: ["Preventing AI from generating off-brand content", "Catching hallucinated financial figures", "Blocking inappropriate content in customer-facing AI", "Ensuring legal accuracy in AI-drafted documents"]
    },
    {
        slug: "brand-safety",
        title: "Brand Safety Controls",
        metaTitle: "Brand Safety for AI | Remova",
        metaDescription: "Ensure AI outputs align with your brand voice, values, and guidelines. Custom guardrails prevent off-brand content generation.",
        headline: "Brand Safety Controls",
        subheadline: "Keep AI on-brand, every single time",
        description: "Configure guardrails that ensure every AI-generated response aligns with your brand voice, values, and communication guidelines. Block competitor mentions, enforce tone requirements, and prevent the generation of content that could damage your brand reputation.",
        benefits: ["Brand voice enforcement", "Competitor mention blocking", "Tone and style guidelines", "Content policy compliance", "Customizable per department"],
        useCases: ["Preventing AI from recommending competitor products", "Enforcing formal tone in client-facing communications", "Blocking generation of controversial opinions", "Maintaining consistency across department AI outputs"]
    },
    {
        slug: "audit-logs",
        title: "Audit Logs & Compliance",
        metaTitle: "AI Audit Logs & Compliance Reporting | Remova",
        metaDescription: "Immutable audit logs for all AI interactions. Full forensic analysis, 1-year retention, and compliance-ready reports for SOC 2, GDPR, and HIPAA.",
        headline: "Audit Logs & Compliance",
        subheadline: "Immutable records of every AI interaction",
        description: "Remova maintains immutable audit logs of all system activity — model usage, policy violations, admin actions, budget changes, and security events. Logs are retained for one year and support forensic analysis for incident investigation. Generate compliance-ready reports for SOC 2, GDPR, HIPAA, and internal audits.",
        benefits: ["Immutable audit trail", "1-year log retention", "Forensic analysis capability", "Compliance-ready reporting", "Admin action tracking"],
        useCases: ["Generating SOC 2 audit evidence", "Investigating a suspected data leak", "Proving GDPR compliance to regulators", "Reviewing admin permission changes"]
    },
    {
        slug: "sso-directory-sync",
        title: "SSO & Directory Sync",
        metaTitle: "SSO & Directory Sync for Enterprise AI | Remova",
        metaDescription: "Integrate with Okta, Azure AD, and Google Workspace. Single sign-on and automatic directory sync for seamless enterprise AI deployment.",
        headline: "SSO & Directory Sync",
        subheadline: "Enterprise identity management, built in",
        description: "Deploy Remova across your organization using your existing identity infrastructure. Support for Okta, Azure Active Directory, Google Workspace, and other SAML/OIDC providers. Automatic directory sync keeps user lists current, while SSO eliminates password fatigue and ensures secure authentication.",
        benefits: ["Okta, Azure AD, Google Workspace support", "SAML and OIDC protocols", "Automatic directory sync", "Simplified user provisioning", "Centralized access management"],
        useCases: ["Deploying to 1,000 users via Azure AD sync", "Enabling passwordless AI access via Okta SSO", "Auto-provisioning new hires into the correct department", "Revoking AI access instantly on employee termination"]
    },
    {
        slug: "on-premises-deployment",
        title: "On-Premises Deployment",
        metaTitle: "On-Premises AI Deployment | Air-Gapped | Remova",
        metaDescription: "Deploy Remova on your own infrastructure. Air-gapped, zero-data-outbound AI deployment with local model serving and full source code access.",
        headline: "On-Premises Deployment",
        subheadline: "Your infrastructure, your rules",
        description: "For organizations with the strictest security requirements, Remova offers full on-premises deployment. Run the entire control layer on your own infrastructure with air-gapped options, local AI model serving (Llama, Mistral), and a zero-data-outbound guarantee. Optional full source code access for maximum transparency.",
        benefits: ["Private air-gapped infrastructure", "Local AI model serving", "Zero-data-outbound guarantee", "Full source code access option", "Custom deployment architecture"],
        useCases: ["Government agencies with classified data", "Defense contractors requiring air-gapped AI", "Financial institutions with data residency requirements", "Healthcare organizations needing full data control"]
    },
    {
        slug: "data-sovereignty",
        title: "Data Sovereignty & Geofencing",
        metaTitle: "AI Data Sovereignty & Geofencing | Remova",
        metaDescription: "Enforce geographic restrictions on AI data processing. Ensure data never leaves your jurisdiction with geofencing and sovereign model routing.",
        headline: "Data Sovereignty & Geofencing",
        subheadline: "Ensure data never leaves your jurisdiction",
        description: "Remova enables organizations to enforce geographic restrictions on where AI data is processed. Route queries to region-specific models, ensure data never crosses borders, and comply with local data protection regulations like GDPR, LGPD, and PDPA.",
        benefits: ["Geographic data processing restrictions", "Region-specific model routing", "Cross-border data flow prevention", "Regulatory compliance support", "Configurable geofencing rules"],
        useCases: ["Ensuring EU data stays in EU-hosted models", "Complying with GDPR data residency requirements", "Routing APAC queries to local AI providers", "Meeting Canadian PIPEDA requirements"]
    },
    {
        slug: "document-generation",
        title: "Document Generation (PDF)",
        metaTitle: "AI Document & PDF Generation | Remova",
        metaDescription: "Generate professional PDFs, reports, and presentations directly from AI conversations. Publication-quality formatting with enterprise controls.",
        headline: "Document Generation",
        subheadline: "From AI conversation to professional document",
        description: "Transform AI outputs into publication-quality PDFs and reports with a single click. Remova's document generation engine handles formatting, layout, and export — producing professional documents suitable for client delivery, board presentations, and regulatory submissions.",
        benefits: ["One-click PDF generation", "Publication-quality formatting", "Multiple export formats", "Template support", "Batch document creation"],
        useCases: ["Generating client-ready research reports", "Creating board presentation materials", "Producing compliance documentation", "Building training materials from AI outputs"]
    },
    {
        slug: "web-research",
        title: "Deep Web Research",
        metaTitle: "AI-Powered Deep Web Research | Remova",
        metaDescription: "Real-time web research and synthesis powered by AI. Search the web, analyze sources, and generate comprehensive reports — all within enterprise guardrails.",
        headline: "Deep Web Research",
        subheadline: "Real-time research with enterprise controls",
        description: "Remova's AI-powered web research capability enables users to search the internet, analyze multiple sources, and synthesize findings into comprehensive reports — all while operating within your organization's guardrails and safety controls. Every search and result is governed by the same policies that protect your AI conversations.",
        benefits: ["Real-time web search integration", "Multi-source synthesis", "Governed by organization policies", "Source citation and verification", "Research report generation"],
        useCases: ["Competitive intelligence gathering within policy bounds", "Market research with automatic source citation", "Technical research with guardrail protection", "News monitoring and analysis"]
    },
    {
        slug: "image-video-generation",
        title: "Image & Video Generation",
        metaTitle: "Enterprise Image & Video AI Generation | Remova",
        metaDescription: "Generate images and videos with DALL-E 3, Stable Diffusion, and more — all within enterprise safety controls and budget limits.",
        headline: "Image & Video Generation",
        subheadline: "Visual AI creation with enterprise governance",
        description: "Access state-of-the-art image and video generation models including DALL-E 3 and Stable Diffusion through Remova's governed interface. All visual content generation is subject to the same guardrails, brand safety controls, and budget limits as text-based AI interactions.",
        benefits: ["DALL-E 3 and Stable Diffusion access", "Brand safety for visual content", "Budget controls for generation costs", "Content policy enforcement", "Multi-model visual pipeline"],
        useCases: ["Marketing teams creating campaign visuals", "Product teams generating mockups", "Training teams creating educational illustrations", "Design teams rapid-prototyping concepts"]
    },
    {
        slug: "api-gateway",
        title: "Universal API Gateway",
        metaTitle: "Universal AI API Gateway | Remova",
        metaDescription: "Single-point access to 300+ AI models through one API. Vendor-agnostic gateway with built-in security, cost controls, and intelligent routing.",
        headline: "Universal API Gateway",
        subheadline: "One API to rule all AI models",
        description: "Remova's Universal API Gateway provides a single integration point for accessing all 300+ supported AI models. Build applications against one API and switch models without code changes. Built-in security, cost controls, and intelligent routing are applied automatically to every API call.",
        benefits: ["Single API for all models", "Zero vendor lock-in", "Built-in security layer", "Automatic cost tracking", "Intelligent routing support"],
        useCases: ["Building internal AI applications", "Integrating AI into existing workflows", "Creating model-agnostic AI pipelines", "Prototyping across multiple models quickly"]
    },
    {
        slug: "intelligent-routing",
        title: "Intelligent Model Routing",
        metaTitle: "AI Model Routing & Optimization | Remova",
        metaDescription: "Automatically route AI queries to the optimal model based on cost, latency, privacy, and capability requirements. Smart routing for enterprise efficiency.",
        headline: "Intelligent Model Routing",
        subheadline: "Automatic optimization for every query",
        description: "Remova's intelligent routing engine automatically selects the optimal model for each query based on configurable criteria: cost optimization, latency requirements, privacy constraints, and capability needs. Route sensitive queries to privacy-focused models, cost-optimize routine tasks, and prioritize speed for time-sensitive operations.",
        benefits: ["Cost-optimized model selection", "Latency-based routing", "Privacy-constraint routing", "Capability-aware selection", "Configurable routing rules"],
        useCases: ["Routing simple tasks to cheaper models automatically", "Sending sensitive data to privacy-compliant models", "Prioritizing speed for customer-facing AI", "Optimizing costs without sacrificing quality"]
    },
    {
        slug: "knowledge-base",
        title: "Knowledge Base (RAG)",
        metaTitle: "Enterprise AI Knowledge Base & RAG | Remova",
        metaDescription: "Upload internal documents to create a secure AI knowledge base. Retrieval-Augmented Generation (RAG) with enterprise-grade security and access controls.",
        headline: "Knowledge Base (RAG)",
        subheadline: "Ground AI responses in your organization's knowledge",
        description: "Upload internal documents, policies, and knowledge bases to give AI context about your organization. Remova's secure RAG pipeline retrieves relevant information from your uploaded documents and uses it to ground AI responses — reducing hallucinations and ensuring answers are specific to your business.",
        benefits: ["Secure document upload and parsing", "Context-aware AI responses", "Reduced hallucinations", "Organization-specific answers", "Access-controlled knowledge bases"],
        useCases: ["Creating an AI-powered HR policy assistant", "Building a customer support bot trained on product docs", "Enabling AI to reference internal research papers", "Grounding legal AI in company contract templates"]
    },
    {
        slug: "sensitive-word-blocking",
        title: "Sensitive Word Blocking",
        metaTitle: "Custom Word & Phrase Blocking for AI | Remova",
        metaDescription: "Create custom blocklists for prohibited terms, competitor names, and sensitive topics. Instant blocking with zero latency in enterprise AI chat.",
        headline: "Sensitive Word Blocking",
        subheadline: "Custom blocklists for instant content control",
        description: "Define custom lists of prohibited words, phrases, competitor names, and sensitive topics that are instantly blocked in both AI inputs and outputs. Layer 1 of Remova's dual-layer guardrail system provides zero-latency blocking based on your custom-tuned blocklists.",
        benefits: ["Custom word and phrase blocklists", "Zero-latency blocking", "Input and output coverage", "Department-specific lists", "Easy management interface"],
        useCases: ["Blocking competitor brand names in AI interactions", "Preventing discussion of confidential projects", "Filtering profanity and inappropriate language", "Restricting discussion of ongoing litigation"]
    },
    {
        slug: "dlp-enforcement",
        title: "DLP Enforcement",
        metaTitle: "Data Loss Prevention for AI | Remova",
        metaDescription: "Enterprise DLP enforcement for AI interactions. Actively block PII, secrets, financial data, and sensitive information from reaching AI models.",
        headline: "DLP Enforcement",
        subheadline: "Stop data leaks before they happen",
        description: "Remova's Data Loss Prevention (DLP) enforcement actively scans all AI interactions for sensitive data patterns — Social Security numbers, credit card numbers, API keys, passwords, internal IDs, and other regulated data types. Detected content is automatically blocked and logged for security review.",
        benefits: ["Automatic PII pattern detection", "API key and secret scanning", "Financial data protection", "Configurable data patterns", "Automatic security logging"],
        useCases: ["Preventing SSN exposure in AI prompts", "Blocking credit card numbers from being shared", "Detecting uploaded documents with sensitive data", "Enforcing data classification policies"]
    },
    {
        slug: "vendor-agnostic",
        title: "Vendor-Agnostic Architecture",
        metaTitle: "Vendor-Agnostic AI Platform | No Lock-In | Remova",
        metaDescription: "Zero lock-in to any AI provider. Switch between OpenAI, Anthropic, Google, Meta, and Mistral without changing workflows or code.",
        headline: "Vendor-Agnostic Architecture",
        subheadline: "Zero lock-in, total flexibility",
        description: "Remova is built on a fundamentally vendor-agnostic architecture. Your organization is never locked into a single AI provider. Switch between OpenAI, Anthropic, Google, Meta, Mistral, and dozens more without changing workflows, retraining users, or modifying integrations.",
        benefits: ["Zero vendor lock-in", "Seamless provider switching", "Consistent user experience", "Multi-provider redundancy", "Future-proof architecture"],
        useCases: ["Switching from GPT-4 to Claude without disruption", "Running multiple providers for redundancy", "Adopting new models as they launch", "Negotiating better rates by avoiding lock-in"]
    },
    {
        slug: "multi-tenancy",
        title: "Multi-Tenancy",
        metaTitle: "Multi-Tenant Enterprise AI Platform | Remova",
        metaDescription: "Deep hierarchical multi-tenancy supporting complex org charts. Department > Team > User structure with strict data and cost isolation.",
        headline: "Multi-Tenancy",
        subheadline: "Complex org structures, perfectly supported",
        description: "Remova's multi-tenancy architecture supports deep organizational hierarchies with strict isolation between departments, teams, and users. Each tenant gets isolated budgets, policies, model access, and audit logs — ensuring zero data or cost leakage between organizational units.",
        benefits: ["Deep hierarchical structure support", "Strict data isolation", "Independent budget management", "Separate policy enforcement", "Isolated audit trails"],
        useCases: ["Supporting 50+ departments in a single deployment", "Isolating R&D AI usage from marketing", "Managing subsidiary AI access independently", "Ensuring client data separation in consulting firms"]
    },
    {
        slug: "department-management",
        title: "Department Management",
        metaTitle: "AI Department Management & Team Controls | Remova",
        metaDescription: "Create departments, assign users, set budgets, and configure AI policies per team. Mirror your org chart in your AI governance layer.",
        headline: "Department Management",
        subheadline: "Mirror your org chart in your AI layer",
        description: "Create departments that mirror your organizational structure, assign users to teams, configure department-specific budgets, model access, and safety policies. Department heads get self-service management capabilities while global admins maintain oversight.",
        benefits: ["Org chart mirroring", "Department-specific policies", "Self-service team management", "Centralized oversight", "Flexible restructuring"],
        useCases: ["Creating departments for Engineering, Marketing, Sales, Legal", "Assigning different AI budgets per department", "Configuring stricter guardrails for the legal department", "Restructuring teams without losing historical data"]
    },
    {
        slug: "credit-system",
        title: "Credit System & FinOps",
        metaTitle: "AI Credit System & Financial Operations | Remova",
        metaDescription: "Universal credit protocol normalizing costs across all AI providers. Precise token tracking, automated renewal, and real-time cost auditing.",
        headline: "Credit System & FinOps",
        subheadline: "One currency for all your AI spending",
        description: "Remova's Universal Credit Protocol creates a single internal currency that normalizes costs across all AI providers. Track precise token consumption, automate monthly credit renewals, audit spending in real-time, and generate financial reports — all through one unified FinOps dashboard.",
        benefits: ["Universal credit normalization", "Precise token-level tracking", "Automated renewal management", "Real-time cost auditing", "Financial reporting tools"],
        useCases: ["Comparing true costs across GPT-4o, Claude, and Gemini", "Automating monthly budget allocation and renewal", "Generating quarterly AI spending reports", "Tracking cost-per-task across departments"]
    },
    {
        slug: "websocket-streaming",
        title: "WebSocket Streaming",
        metaTitle: "Real-Time AI Streaming | Low Latency | Remova",
        metaDescription: "Low-latency real-time AI response streaming via WebSocket. Instant text delivery for a seamless chat experience in enterprise AI.",
        headline: "WebSocket Streaming",
        subheadline: "Instant, real-time AI responses",
        description: "Remova uses WebSocket connections for ultra-low-latency AI response streaming. Users see AI responses appear in real-time, character by character — just like typing. No waiting for complete responses, no buffering delays. The same premium experience as direct AI provider interfaces.",
        benefits: ["Ultra-low-latency streaming", "Character-by-character delivery", "Persistent connections", "Automatic reconnection", "REST API fallback"],
        useCases: ["Real-time AI chat for customer support teams", "Interactive coding assistance", "Live document drafting with AI", "Time-sensitive decision support"]
    },
    {
        slug: "custom-system-prompts",
        title: "Custom System Prompts",
        metaTitle: "Custom System Prompts for Enterprise AI | Remova",
        metaDescription: "Configure AI behavior with role-based system prompts. Inject expert personas, business context, and behavioral guidelines per department.",
        headline: "Custom System Prompts",
        subheadline: "Shape AI behavior for every use case",
        description: "Define custom system prompts that shape AI behavior for specific roles and departments. Inject expert personas like 'Senior Legal Counsel' or 'Financial Analyst', provide business-specific context, and set behavioral guidelines — ensuring AI responses are tailored, accurate, and on-brand.",
        benefits: ["Role-specific AI behavior", "Expert persona injection", "Business context integration", "Behavioral guideline enforcement", "Per-department configuration"],
        useCases: ["Creating a 'Legal Drafting' persona for the legal team", "Injecting product knowledge for the sales team", "Setting tone guidelines for customer support AI", "Configuring technical depth for engineering teams"]
    },
    {
        slug: "failover-resiliency",
        title: "Failover & Resiliency",
        metaTitle: "AI Failover & High Availability | Remova",
        metaDescription: "Automatic failover and model switching during provider outages. Continuity fallbacks ensure your enterprise AI never goes down.",
        headline: "Failover & Resiliency",
        subheadline: "Enterprise AI that never goes down",
        description: "Remova's resiliency protocols ensure uninterrupted AI service even when providers experience outages. Automatic failover logic switches to backup models seamlessly, while continuity fallbacks maintain conversation context across provider switches. Your team's AI access stays online, always.",
        benefits: ["Automatic provider failover", "Seamless model switching", "Context preservation", "Zero-downtime architecture", "Health monitoring and alerts"],
        useCases: ["Maintaining AI access during OpenAI outages", "Switching to Claude when GPT-4 is slow", "Ensuring 99.99% AI availability for critical workflows", "Automatic recovery from provider rate limits"]
    },
    {
        slug: "self-service-onboarding",
        title: "Self-Service Onboarding",
        metaTitle: "Self-Service AI Platform Onboarding | Remova",
        metaDescription: "Automated onboarding flows for new organizations and users. Sign up, configure departments, and deploy AI to your team in minutes.",
        headline: "Self-Service Onboarding",
        subheadline: "From signup to deployment in minutes",
        description: "Remova's self-service onboarding enables organizations to go from signup to full deployment without touching support. Automated flows guide admins through organization setup, department creation, user provisioning, policy configuration, and model selection. Scale from one to one thousand users in minutes.",
        benefits: ["Zero-touch deployment", "Guided setup wizard", "Automated user provisioning", "Quick department configuration", "Instant AI access"],
        useCases: ["Deploying AI to a 100-person team in one afternoon", "Onboarding new departments self-service", "Provisioning contractor access quickly", "Scaling from pilot to company-wide rollout"]
    },
    {
        slug: "headless-api",
        title: "Headless API Integration",
        metaTitle: "Headless AI API for Custom Integrations | Remova",
        metaDescription: "Embed Remova's AI governance into your own applications via headless API. Build custom AI interfaces while maintaining enterprise controls.",
        headline: "Headless API Integration",
        subheadline: "Embed governance into any application",
        description: "Use Remova's headless API to embed AI governance capabilities into your own applications, internal tools, or customer-facing products. All of Remova's security, cost controls, and guardrails are available programmatically — allowing custom integrations while maintaining enterprise-grade governance.",
        benefits: ["Full API access to governance features", "Custom application embedding", "Programmatic policy enforcement", "Scoped API key management", "Comprehensive API documentation"],
        useCases: ["Building a custom AI chat for internal tools", "Embedding governed AI into customer products", "Integrating AI governance into CI/CD pipelines", "Creating custom AI dashboards"]
    },
    {
        slug: "executive-roi-dashboard",
        title: "Executive ROI Dashboard",
        metaTitle: "AI ROI Dashboard for Executives | Remova",
        metaDescription: "Measure AI return on investment with executive dashboards. Track productivity gains, cost savings, and governance effectiveness across your organization.",
        headline: "Executive ROI Dashboard",
        subheadline: "Prove the value of your AI investment",
        description: "Remova's executive dashboard provides C-level visibility into AI ROI across the organization. Track productivity gains, measure cost savings from intelligent routing, review governance effectiveness, and generate board-ready reports that justify your AI investment with hard data.",
        benefits: ["ROI measurement tools", "Productivity gain tracking", "Cost savings analysis", "Board-ready reporting", "Trend analysis over time"],
        useCases: ["Presenting AI ROI to the board of directors", "Justifying AI budget increases with data", "Comparing department efficiency gains", "Tracking governance cost avoidance"]
    },
];
