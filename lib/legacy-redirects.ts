const legacyBlogSlugs = [
    "why-ai-governance-matters-2026",
    "shadow-ai-enterprise-risk",
    "ai-cost-management-guide",
    "pii-redaction-best-practices",
    "eu-ai-act-compliance-guide",
    "building-ai-governance-program",
    "ai-guardrails-implementation",
    "zero-history-architecture-explained",
    "ai-for-regulated-industries",
    "multi-model-strategy-enterprise",
    "prompt-injection-prevention",
    "department-ai-budgets",
    "hipaa-compliant-ai-deployment",
    "soc2-ai-governance",
    "responsible-ai-framework",
    "ai-security-threat-landscape",
    "llm-evaluation-enterprise",
    "ai-onboarding-employees",
    "ai-roi-measurement",
    "gdpr-ai-compliance",
    "nist-ai-rmf-guide",
    "ai-vendor-evaluation-checklist",
    "ai-chatbot-vs-ai-platform",
    "ai-model-routing-strategies",
    "comparison-ai-governance-frameworks",
    "enterprise-ai-security-architecture",
    "ai-content-creation-enterprise",
    "cost-of-ai-data-breach",
    "ai-for-customer-service",
    "ai-bias-detection-guide",
    "air-gapped-ai-deployment",
    "ai-audit-trail-best-practices",
    "future-of-enterprise-ai-2026",
    "choosing-right-ai-models",
    "ai-integration-strategies",
    "ciso-guide-ai-adoption",
    "ai-knowledge-base-setup",
    "ai-compliance-dashboard",
    "enterprise-ai-mistakes",
    "api-key-protection-ai",
    "iso-27001-ai-controls",
    "zero-trust-ai-security",
    "ai-incident-response-plan",
    "penetration-testing-ai",
    "encryption-ai-data",
    "data-classification-ai",
    "insider-threat-ai",
    "supply-chain-ai-risk",
    "cyber-insurance-ai",
    "mfa-ai-access",
    "ai-access-review",
    "ai-security-monitoring",
    "ccpa-ai-compliance",
    "ai-privacy-impact",
    "intellectual-property-ai",
    "ai-whistleblower-protection",
    "quantum-computing-ai-security",
    "ai-deepfake-enterprise",
    "social-engineering-ai",
    "ai-change-management",
    "ai-center-of-excellence",
    "measuring-ai-productivity",
    "ai-training-program-design",
    "ai-champion-program",
    "ai-it-service-management",
    "managing-multiple-ai-vendors",
    "ai-organizational-structure",
    "ai-executive-reporting",
    "ai-maturity-model",
    "ai-disaster-recovery",
    "ai-capacity-planning",
    "ai-performance-benchmarking",
    "ai-user-feedback-loops",
    "ai-procurement-guide",
    "ai-service-level-agreements",
    "ai-total-cost-ownership",
    "ai-cross-functional-teams",
    "ai-innovation-governance-balance",
    "ai-technical-debt",
    "ai-insurance-industry",
    "ai-pharmaceutical",
    "ai-real-estate",
    "ai-telecommunications",
    "ai-energy-utilities",
    "ai-construction",
    "ai-agriculture",
    "ai-hospitality",
    "ai-media-entertainment",
    "ai-transportation",
    "ai-nonprofit",
    "ai-consulting-firms",
    "ai-accounting-firms",
    "ai-private-equity",
    "ai-venture-capital",
    "ai-supply-chain",
    "ai-cybersecurity-teams",
    "ai-data-analytics-teams",
    "ai-product-management",
    "ai-executive-assistants",
    "rag-architecture-guide",
    "vector-database-comparison",
    "ai-observability-guide",
    "fine-tuning-vs-rag",
    "ai-testing-strategies",
    "prompt-engineering-enterprise",
    "ai-caching-strategies",
    "token-optimization-guide",
    "ai-api-rate-limiting",
    "multimodal-ai-enterprise",
    "ai-streaming-architecture",
    "ai-function-calling-guide",
    "ai-memory-systems",
    "ai-model-failover",
    "structured-outputs-ai",
    "ai-batch-processing",
    "ai-webhook-integration",
    "ai-sdk-comparison",
    "kubernetes-ai-deployment",
    "ai-logging-best-practices",
    "state-of-enterprise-ai-2026",
    "ai-regulation-global-tracker",
    "enterprise-ai-spending-analysis",
    "ai-talent-market-2026",
    "open-source-vs-proprietary-models",
    "ai-market-consolidation",
    "small-language-models",
    "ai-sustainability-enterprise",
    "ai-worker-displacement",
    "generative-ai-vs-predictive-ai",
    "ai-copilot-comparison",
    "ai-in-boardroom",
    "ai-digital-transformation",
    "multicloud-ai-strategy",
    "ai-data-mesh-integration",
    "ai-edge-computing",
    "ai-blockchain-identity",
    "conversational-ai-enterprise",
    "ai-automated-testing",
    "ai-personalization-privacy",
    "ai-agent-governance",
    "agentic-ai-security",
    "ai-reasoning-models",
    "ai-code-generation-governance",
    "ai-synthetic-data-generation",
    "differential-privacy-ai",
    "federated-learning-enterprise",
    "ai-model-governance-lifecycle",
    "ai-ethics-committee-guide",
    "sovereign-ai-movement",
    "ai-explainability-enterprise",
    "ai-watermarking-detection",
    "confidential-computing-ai",
    "ai-digital-twins-governance",
    "autonomous-ai-decision-making",
    "ai-organizational-learning",
    "ai-competitive-intelligence",
    "ai-crisis-communication",
    "ai-vendor-lock-in-escape",
    "future-proofing-ai-governance",
    "ai-value-chain-analysis",
    "ai-platform-migration-guide",
    "ai-accessibility-enterprise",
    "end-to-end-ai-governance",
    "ai-governance-roi-study",
    "ai-partnership-models",
    "enterprise-ai-2028-vision",
    "ai-ethics-case-studies",
    "building-ai-trust",
    "ai-governance-maturity-assessment",
    "importgenius-opt-out-supplier-protection",
    "how-to-remove-company-information-from-panjiva",
    "rcep-afcfta-opportunity-2025",
    "japan-customs-data-removal-asia-trade-protection",
    "panjiva-vs-importgenius-vs-remova-comparison",
    "supply-chain-open-book-5-minute-check",
    "south-korea-customs-data-removal-tech-trade-guide",
    "can-you-remove-data-from-importyeti-answer",
    "india-customs-data-removal-business-protection-guide",
    "more-complete-panjiva-alternative-total-data-privacy",
    "digital-tariffs-and-data-sovereignty-2025",
    "chinese-suppliers-poaching-european-clients",
    "how-to-make-your-companys-shipping-data-private-2025-guide",
    "eu-cbam-green-tariffs-2025",
    "cybersecurity-blind-spot-firewall-cant-stop-competitors",
    "cbp-manifest-confidentiality-filing-guide",
    "remova-review-privacy-as-a-service-platform-worth-it",
    "why-data-viewers-not-enough-proactive-removal-service",
    "mexico-customs-data-removal-usmca-trade-guide",
    "germany-customs-data-removal-eu-trade-protection",
    "calculating-true-cost-supplier-data-leak",
    "usa-customs-data-removal-complete-guide-2025",
    "panjiva-data-removal",
    "microsoft-365-copilot-governance-checklist",
] as const;

export const legacyResourceSlugs = [
    "ai-governance-starter-kit",
    "enterprise-ai-security-checklist",
    "ai-vendor-evaluation-scorecard",
    "hipaa-ai-compliance-guide",
    "gdpr-ai-compliance-template",
    "ai-budget-planning-worksheet",
    "ai-acceptable-use-policy",
    "nist-ai-rmf-mapping-guide",
    "eu-ai-act-readiness-assessment",
    "ai-incident-response-playbook",
    "soc2-ai-controls-mapping",
    "ai-training-curriculum",
    "ai-roi-calculator",
    "ai-policy-communication-kit",
    "ai-maturity-assessment-tool",
    "comparison-matrix-ai-platforms",
    "quarterly-ai-review-template",
    "ai-risk-register-template",
    "ai-governance-kpi-dashboard",
    "ai-deployment-runbook",
    "prompt-library-enterprise",
    "ai-security-architecture-blueprint",
    "ai-ethics-framework-template",
    "data-sovereignty-playbook",
] as const;

export const legacyModelSlugs = [
    "ernie-45-21b-a3b-thinking",
    "r1-0528",
    "mistral-medium-3",
    "glm-45-air-free",
    "gpt-51-codex-max",
    "qwen-vl-plus",
    "qwen3-4b-free",
    "gemma-3-12b-free",
    "mistral-small-4",
    "nemotron-3-super",
    "ministral-3-14b-2512",
    "deepseek-v31-terminus",
    "gpt-51-codex",
    "claude-haiku-45",
] as const;

export const legacyAlternativeSlugs = [
    "ai21-labs",
    "scale-ai",
] as const;

export const legacyCompareSlugs = [
    "chatgpt-enterprise-vs-claude-enterprise",
    "remova-vs-glean",
    "remova-vs-arthur-ai",
    "best-llm-cost-management-tools",
    "remova-vs-writer",
    "remova-vs-datarobot",
    "microsoft-copilot-vs-google-gemini",
    "fiddler-ai-vs-arthur-ai",
] as const;

export const legacyUseCaseSlugs = [
    "regulatory-compliance",
    "enterprise-ai-rollout",
    "ai-customer-support",
] as const;

export const legacyGlossarySlugs = [
    "compliance-framework",
    "model-endpoint",
    "dlp",
] as const;

export const legacyFeatureSlugs = [
    "role-based-access",
    "credit-system",
] as const;

export const legacyBlogCategorySlugs = [
    "us-manufacturing-defense",
    "asian-competition",
    "chinese-competition",
    "competitive-threats",
    "supplier-protection",
] as const;

export const legacyCustomerSlugs = [
    "insurance-carrier",
] as const;

export const legacyIntegrationSlugs = [
    "aws",
] as const;

export const legacyTrustSlugs = [
    "penetration-testing",
    "soc2-roadmap",
    "security-leadership",
    "iso-27001-roadmap",
] as const;

export const legacyServiceSlugs = [
    "manifest-privacy",
    "government-privacy-filing",
    "leakwatch",
    "optout",
] as const;

export const legacyTopLevelSlugs = [
    "forgot-password",
    "login",
    "gdpr-compliance-checker",
    "commercial-invoice-template",
    "us-customs-import-requirements-checklist",
    "pricing",
    "responsibilities",
    "container-tracking",
    "open-tools",
    "transparency",
    "company-exposure-checker",
    "customs-duty-calculator",
    "why-remova",
    "public-benefit",
    "disclosures",
    "trade-data-leak-scanner",
    "hs-code-directory",
    "trade-agreement-finder",
    "how-to-fill-out-bill-of-lading",
    "isf-importer-security-filing-deadline-rules",
    "investor-relations",
    "tests",
    "careers",
    "organization",
    "membership",
] as const;

const legacyBlogSlugSet = new Set<string>(legacyBlogSlugs);
const legacyResourceSlugSet = new Set<string>(legacyResourceSlugs);
const legacyModelSlugSet = new Set<string>(legacyModelSlugs);
const legacyAlternativeSlugSet = new Set<string>(legacyAlternativeSlugs);
const legacyCompareSlugSet = new Set<string>(legacyCompareSlugs);
const legacyUseCaseSlugSet = new Set<string>(legacyUseCaseSlugs);
const legacyGlossarySlugSet = new Set<string>(legacyGlossarySlugs);
const legacyFeatureSlugSet = new Set<string>(legacyFeatureSlugs);
const legacyBlogCategorySlugSet = new Set<string>(legacyBlogCategorySlugs);
const legacyCustomerSlugSet = new Set<string>(legacyCustomerSlugs);
const legacyIntegrationSlugSet = new Set<string>(legacyIntegrationSlugs);
const legacyTrustSlugSet = new Set<string>(legacyTrustSlugs);
const legacyServiceSlugSet = new Set<string>(legacyServiceSlugs);
const legacyTopLevelSlugSet = new Set<string>(legacyTopLevelSlugs);

const legacyBlogRedirectTargets: Record<string, string> = {
    "ai-cost-management-guide": "/blog/ai-cost-management-finops-guide",
    "eu-ai-act-compliance-guide": "/blog/eu-ai-act-enterprise-readiness-checklist",
    "ai-center-of-excellence": "/use-cases/ai-center-of-excellence",
    "end-to-end-ai-governance": "/blog/what-is-enterprise-ai-governance-2026-guide",
    "department-ai-budgets": "/features/department-budgets",
    "prompt-injection-prevention": "/glossary/prompt-injection",
    "hipaa-compliant-ai-deployment": "/use-cases/healthcare",
    "ai-incident-response-plan": "/blog/ai-incident-response-sensitive-data-llm",
    "ai-vendor-evaluation-checklist": "/blog/ai-vendor-risk-management-llm-tools",
    "enterprise-ai-security-architecture": "/blog/enterprise-ai-security-ciso-playbook",
    "ai-product-management": "/blog",
    "microsoft-365-copilot-governance-checklist": "/blog/microsoft-365-copilot-security-checklist",
};

const legacyResourceRedirectTargets: Record<string, string> = {
    "ai-acceptable-use-policy": "/blog/ai-acceptable-use-policy-template",
    "eu-ai-act-readiness-assessment": "/blog/eu-ai-act-readiness-checklist-generative-ai",
    "ai-incident-response-playbook": "/blog/ai-incident-response-sensitive-data-llm",
    "ai-security-architecture-blueprint": "/blog/enterprise-ai-security-ciso-playbook",
    "ai-vendor-evaluation-scorecard": "/blog/ai-vendor-risk-management-llm-tools",
};

const legacyAlternativeRedirectTargets: Record<string, string> = {
    "ai21-labs": "/alternative",
    "scale-ai": "/alternative",
};

const legacyCompareRedirectTargets: Record<string, string> = {
    "chatgpt-enterprise-vs-claude-enterprise": "/compare/remova-vs-chatgpt-enterprise",
    "remova-vs-glean": "/alternative/glean",
    "remova-vs-arthur-ai": "/compare/ai-security-vs-ai-governance-platforms",
    "best-llm-cost-management-tools": "/features/department-budgets",
    "remova-vs-writer": "/compare/remova-vs-suite-ai-addon",
    "remova-vs-datarobot": "/compare/best-enterprise-ai-governance-platforms",
    "microsoft-copilot-vs-google-gemini": "/compare/remova-vs-microsoft-copilot",
    "fiddler-ai-vs-arthur-ai": "/compare/ai-security-vs-ai-governance-platforms",
};

const legacyUseCaseRedirectTargets: Record<string, string> = {
    "regulatory-compliance": "/use-cases/compliance-lead",
    "enterprise-ai-rollout": "/use-cases/ai-center-of-excellence",
    "ai-customer-support": "/use-cases/safe-ai-chat",
};

const legacyGlossaryRedirectTargets: Record<string, string> = {
    "compliance-framework": "/glossary/ai-governance",
    "model-endpoint": "/features/api-access",
    "dlp": "/features/sensitive-data-protection",
};

const legacyFeatureRedirectTargets: Record<string, string> = {
    "role-based-access": "/features/role-access-control",
    "credit-system": "/features/department-budgets",
};

const legacyTrustRedirectTargets: Record<string, string> = {
    "penetration-testing": "/blog",
    "soc2-roadmap": "/resources/soc2-ai-controls-mapping",
    "security-leadership": "/features/audit-trails",
    "iso-27001-roadmap": "/blog/iso-27001-ai-controls",
};

const legacyServiceRedirectTargets: Record<string, string> = {
    "manifest-privacy": "/features/sensitive-data-protection",
    "government-privacy-filing": "/features/sensitive-data-protection",
    "leakwatch": "/features/sensitive-data-protection",
    "optout": "/privacy",
};

const legacyTopLevelRedirectTargets: Record<string, string> = {
    "forgot-password": "https://app.remova.org/forgot-password",
    "login": "https://app.remova.org/login",
    "gdpr-compliance-checker": "/blog/gdpr-ai-compliance",
    "commercial-invoice-template": "/resources",
    "us-customs-import-requirements-checklist": "/resources",
    "pricing": "https://app.remova.org/register",
    "responsibilities": "/privacy",
    "container-tracking": "/resources",
    "open-tools": "/resources",
    "transparency": "/glossary/ai-transparency",
    "company-exposure-checker": "/features/sensitive-data-protection",
    "customs-duty-calculator": "/resources",
    "why-remova": "/",
    "public-benefit": "/",
    "disclosures": "/privacy",
    "trade-data-leak-scanner": "/features/sensitive-data-protection",
    "hs-code-directory": "/resources",
    "trade-agreement-finder": "/resources",
    "how-to-fill-out-bill-of-lading": "/resources",
    "isf-importer-security-filing-deadline-rules": "/resources",
    "investor-relations": "/",
    "tests": "/",
    "careers": "/",
    "organization": "https://app.remova.org/organization",
    "membership": "https://app.remova.org/register",
};

export const legacyBlogStaticParams = legacyBlogSlugs.map((slug) => ({ slug }));
export const legacyResourceStaticParams = legacyResourceSlugs.map((slug) => ({ slug }));
export const legacyModelStaticParams = legacyModelSlugs.map((slug) => ({ slug }));
export const legacyAlternativeStaticParams = legacyAlternativeSlugs.map((slug) => ({ slug }));
export const legacyCompareStaticParams = legacyCompareSlugs.map((slug) => ({ slug }));
export const legacyUseCaseStaticParams = legacyUseCaseSlugs.map((slug) => ({ slug }));
export const legacyGlossaryStaticParams = legacyGlossarySlugs.map((slug) => ({ slug }));
export const legacyFeatureStaticParams = legacyFeatureSlugs.map((slug) => ({ slug }));
export const legacyBlogCategoryStaticParams = legacyBlogCategorySlugs.map((slug) => ({ slug }));
export const legacyCustomerStaticParams = legacyCustomerSlugs.map((slug) => ({ slug }));
export const legacyIntegrationStaticParams = legacyIntegrationSlugs.map((slug) => ({ slug }));
export const legacyTrustStaticParams = legacyTrustSlugs.map((slug) => ({ slug }));
export const legacyServiceStaticParams = legacyServiceSlugs.map((slug) => ({ slug }));
export const legacyTopLevelStaticParams = legacyTopLevelSlugs.map((legacy) => ({ legacy }));

export function getLegacyBlogRedirect(slug: string): string | undefined {
    if (!legacyBlogSlugSet.has(slug)) return undefined;
    return legacyBlogRedirectTargets[slug] ?? "/blog";
}

export function getLegacyResourceRedirect(slug: string): string | undefined {
    if (!legacyResourceSlugSet.has(slug)) return undefined;
    return legacyResourceRedirectTargets[slug] ?? "/resources";
}

export function getLegacyFeatureRedirect(slug: string): string | undefined {
    if (!legacyFeatureSlugSet.has(slug)) return undefined;
    return legacyFeatureRedirectTargets[slug] ?? "/features";
}

export function getLegacyModelRedirect(slug: string): string | undefined {
    if (!legacyModelSlugSet.has(slug)) return undefined;
    return "/models";
}

export function getLegacyAlternativeRedirect(slug: string): string | undefined {
    if (!legacyAlternativeSlugSet.has(slug)) return undefined;
    return legacyAlternativeRedirectTargets[slug] ?? "/alternative";
}

export function getLegacyCompareRedirect(slug: string): string | undefined {
    if (!legacyCompareSlugSet.has(slug)) return undefined;
    return legacyCompareRedirectTargets[slug] ?? "/compare";
}

export function getLegacyUseCaseRedirect(slug: string): string | undefined {
    if (!legacyUseCaseSlugSet.has(slug)) return undefined;
    return legacyUseCaseRedirectTargets[slug] ?? "/use-cases";
}

export function getLegacyGlossaryRedirect(slug: string): string | undefined {
    if (!legacyGlossarySlugSet.has(slug)) return undefined;
    return legacyGlossaryRedirectTargets[slug] ?? "/glossary";
}

export function getLegacyBlogCategoryRedirect(slug: string): string | undefined {
    if (!legacyBlogCategorySlugSet.has(slug)) return undefined;
    return "/blog";
}

export function getLegacyCustomerRedirect(slug: string): string | undefined {
    if (!legacyCustomerSlugSet.has(slug)) return undefined;
    return "/use-cases/insurance";
}

export function getLegacyIntegrationRedirect(slug: string): string | undefined {
    if (!legacyIntegrationSlugSet.has(slug)) return undefined;
    return "/alternative/aws-bedrock";
}

export function getLegacyTrustRedirect(slug: string): string | undefined {
    if (!legacyTrustSlugSet.has(slug)) return undefined;
    return legacyTrustRedirectTargets[slug] ?? "/privacy";
}

export function getLegacyServiceRedirect(slug: string): string | undefined {
    if (!legacyServiceSlugSet.has(slug)) return undefined;
    return legacyServiceRedirectTargets[slug] ?? "/features/sensitive-data-protection";
}

export function getLegacyTopLevelRedirect(legacy: string): string | undefined {
    if (!legacyTopLevelSlugSet.has(legacy)) return undefined;
    return legacyTopLevelRedirectTargets[legacy] ?? "/";
}
