export type ResourceGuide = {
    slug: string;
    title: string;
    eyebrow: string;
    description: string;
    metaDescription: string;
    pdfPath: string;
    pdfLabel: string;
    audience: string;
    readTime: string;
    summary: string[];
    sections: {
        heading: string;
        body: string;
    }[];
    checklist: string[];
    relatedLinks: {
        label: string;
        href: string;
    }[];
};

export const resourceGuides: ResourceGuide[] = [
    {
        slug: "ultimate-guide-trade-privacy-2025",
        title: "Ultimate Guide to Trade Privacy 2025",
        eyebrow: "Trade Privacy Guide",
        description:
            "A practical manual for companies that need to understand where public trade records create exposure, how removal windows work, and what to document before filing requests.",
        metaDescription:
            "Download Remova's 2025 trade privacy guide covering public trade data exposure, removal workflows, documentation, and operational follow-up.",
        pdfPath: "/docs/ultimate-guide-trade-privacy-2025.pdf",
        pdfLabel: "Download the trade privacy PDF",
        audience: "Founders, operations leaders, import teams, and privacy owners handling supplier visibility risk.",
        readTime: "Guide packet",
        summary: [
            "Where public shipment records can expose customers, suppliers, routes, and buying patterns.",
            "Which evidence to gather before asking CBP, a trade-data platform, or a search platform to review exposed records.",
            "How to track coverage windows after removal so the same exposure does not quietly reappear.",
        ],
        sections: [
            {
                heading: "Why this guide exists",
                body:
                    "Trade privacy work is easy to underestimate because the sensitive data rarely looks like a password or a bank account number. A supplier name, consignee, container route, or product description can still reveal a business relationship that competitors can use. This guide is written for teams that want a calm operating process instead of one-off panic searches.",
            },
            {
                heading: "How to use it",
                body:
                    "Start by mapping the records that matter most: current suppliers, strategic customers, seasonal routes, and product lines that reveal margin or sourcing strategy. Then use the guide to decide which records need a CBP confidentiality request, which platform pages or search snippets should be reviewed, which relationships should be monitored, and which records can be left alone because they do not create meaningful commercial risk.",
            },
            {
                heading: "What Remova adds",
                body:
                    "Remova treats removal as an ongoing coverage problem. A filed request is not the finish line, especially when public vessel manifest data, platform indexes, and search snippets move on different schedules. The useful work is keeping a source list, recording dates, tracking platforms that mirror the data, and checking whether new shipments recreate the same exposure under a slightly different spelling.",
            },
        ],
        checklist: [
            "Create a list of customer and supplier names that should not appear together publicly.",
            "Record the platform, URL, entity name, shipment date, and exposed relationship for each finding.",
            "Check whether CBP vessel manifest confidentiality is the right path for importer, consignee, exporter, or shipper names and addresses.",
            "Keep a follow-up calendar because some platforms refresh from new source data after an initial removal.",
            "Separate urgent competitive exposure from low-risk historical records so the team does not waste effort.",
        ],
        relatedLinks: [
            { label: "Sensitive data protection", href: "/features/sensitive-data-protection" },
            { label: "AI privacy articles", href: "/blog/category/privacy" },
            { label: "Resources hub", href: "/resources" },
        ],
    },
    {
        slug: "importyeti-removal-guide",
        title: "ImportYeti Removal Guide",
        eyebrow: "Removal Workflow",
        description:
            "A step-by-step guide for finding company exposure on ImportYeti, preserving the right evidence, understanding the CBP confidentiality path, and tracking what changed after a request.",
        metaDescription:
            "Use Remova's ImportYeti removal guide to identify exposed shipment data, prepare evidence, understand CBP confidentiality requests, and track follow-up checks.",
        pdfPath: "/docs/importyeti-removal-guide.pdf",
        pdfLabel: "Download the ImportYeti PDF",
        audience: "Operators and founders who want a documented process before contacting trade data platforms.",
        readTime: "Field checklist",
        summary: [
            "How to search for the company names, alternate spellings, and supplier names that usually create the first exposure trail.",
            "What evidence to save before asking CBP, ImportYeti, or a search platform to review exposed records.",
            "How to verify whether removal changed the public page, search snippets, and linked supplier records.",
        ],
        sections: [
            {
                heading: "Start with a clean record",
                body:
                    "Before sending any request, capture what exists. Save the visible company page, exposed suppliers, shipment descriptions, dates, and any search result snippets that summarize the relationship. This avoids the common problem of not being able to prove what changed after the platform updates a page.",
            },
            {
                heading: "Search beyond the exact legal name",
                body:
                    "Import records often include abbreviations, punctuation differences, old addresses, freight forwarder spellings, and translated supplier names. The guide walks through those variations because most missed exposure comes from assuming the company only appears one way.",
            },
            {
                heading: "Treat removal as a loop",
                body:
                    "After CBP, ImportYeti, or a search platform handles a request, rerun the same searches and check whether linked pages still reveal the relationship. If supplier pages or public snippets keep the connection alive, document those separately instead of assuming the original request covered everything.",
            },
        ],
        checklist: [
            "Search company legal name, DBA names, old names, and common misspellings.",
            "Save source URLs and screenshots before submitting a request.",
            "Do not assume one ImportYeti page request suppresses future vessel manifest data; track CBP confidentiality and platform follow-up separately.",
            "Check supplier pages, customer pages, and search snippets after removal.",
            "Schedule a later review for newly imported records or refreshed indexes.",
        ],
        relatedLinks: [
            { label: "Trade privacy guide", href: "/resources/ultimate-guide-trade-privacy-2025" },
            { label: "Coverage windows explained", href: "/resources/coverage-windows-explained" },
            { label: "Privacy policy", href: "/privacy" },
        ],
    },
    {
        slug: "coverage-windows-explained",
        title: "Coverage Windows Explained",
        eyebrow: "Monitoring Note",
        description:
            "A plain-English explainer for understanding why removal coverage is time-bound, how data refreshes create new exposure, and what cadence teams should use for follow-up checks.",
        metaDescription:
            "Learn how trade data coverage windows work, why removed data can reappear, and how to plan follow-up monitoring after privacy requests.",
        pdfPath: "/docs/resources/coverage-windows-explained.pdf",
        pdfLabel: "Download the coverage windows PDF",
        audience: "Teams that have already filed removals and need a realistic monitoring cadence.",
        readTime: "Operational explainer",
        summary: [
            "What a coverage window means in practical terms: public manifest data, platform refreshes, and mirrored records.",
            "Why a removed result can come back without anyone intentionally reversing the removal.",
            "How to set a monitoring schedule that is useful without becoming busywork.",
        ],
        sections: [
            {
                heading: "Coverage is not a permanent state",
                body:
                    "A removal can clear a visible page today while new records arrive tomorrow from public vessel manifest data, paid subscriber datasets, or platform refreshes. That does not always mean the original request failed. It means the team needs to know which sources are covered, which dates were reviewed, and when the next refresh is likely to matter.",
            },
            {
                heading: "The useful unit is the relationship",
                body:
                    "Companies often track pages, but competitors care about relationships: which supplier serves which customer, which product moves through which route, and which shipment pattern repeats. Coverage reviews should ask whether the relationship is still discoverable, not only whether one URL disappeared.",
            },
            {
                heading: "A realistic cadence",
                body:
                    "High-risk supplier or customer relationships deserve a tighter review loop after new shipment periods. Older, low-risk records can be checked less often. The point is not to search constantly; it is to set a repeatable cadence that matches the commercial sensitivity of the relationship.",
            },
        ],
        checklist: [
            "Define which relationships are high-risk before scheduling monitoring.",
            "Track the last checked date separately from the original removal request date.",
            "Review public pages, search snippets, and mirrored supplier/customer views.",
            "Escalate only when the same sensitive relationship is visible again.",
        ],
        relatedLinks: [
            { label: "ImportYeti removal guide", href: "/resources/importyeti-removal-guide" },
            { label: "Trade privacy guide", href: "/resources/ultimate-guide-trade-privacy-2025" },
            { label: "Trust and privacy", href: "/privacy" },
        ],
    },
    {
        slug: "isms-scope-statement",
        title: "ISMS Scope Statement",
        eyebrow: "Security Review Packet",
        description:
            "A short security review artifact describing how to frame an information security management system scope for teams evaluating AI governance and privacy controls.",
        metaDescription:
            "Download Remova's ISMS scope statement artifact for security review, vendor diligence, and AI governance control discussions.",
        pdfPath: "/docs/isms-scope-statement.pdf",
        pdfLabel: "Download the ISMS scope PDF",
        audience: "Security, procurement, and compliance teams reviewing Remova or documenting their own control boundary.",
        readTime: "Procurement artifact",
        summary: [
            "What an ISMS scope statement should clarify before a vendor review starts.",
            "How to distinguish product controls, operational controls, and customer responsibilities.",
            "Which follow-up questions help security teams avoid vague platform claims.",
        ],
        sections: [
            {
                heading: "Why scope matters",
                body:
                    "Security review gets muddy when a vendor says a control exists but nobody knows where it applies. A scope statement narrows the conversation: systems, people, data types, support processes, and boundaries. That makes procurement faster and keeps technical reviewers from chasing irrelevant proof.",
            },
            {
                heading: "Use it as a question list",
                body:
                    "This artifact is most useful when paired with a live review. Ask which systems process customer data, which subprocessors are in scope, how logs are retained, what administrators can see, and which responsibilities stay with the customer. Good answers should be specific enough to map into a risk register.",
            },
            {
                heading: "Where it fits in AI governance",
                body:
                    "AI governance depends on more than model behavior. Identity, retention, logging, data minimization, and incident handling all sit around the model call. A clear scope statement helps buyers understand which controls are part of the product and which controls belong in their own operating process.",
            },
        ],
        checklist: [
            "Confirm which environments and support processes are included in the stated scope.",
            "Ask how customer data, prompt data, logs, and generated files are handled.",
            "Map the scope to procurement requirements before requesting evidence.",
            "Keep customer responsibilities explicit so rollout assumptions do not drift.",
        ],
        relatedLinks: [
            { label: "Security review checklist", href: "/resources" },
            { label: "Audit trails", href: "/features/audit-trails" },
            { label: "Privacy policy", href: "/privacy" },
        ],
    },
];

export function getResourceGuide(slug: string) {
    return resourceGuides.find((resource) => resource.slug === slug);
}
