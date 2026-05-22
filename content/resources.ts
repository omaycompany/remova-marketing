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
            { label: "Trust Center", href: "/trust" },
            { label: "Audit trails", href: "/features/audit-trails" },
            { label: "Privacy policy", href: "/privacy" },
        ],
    },
];

export function getResourceGuide(slug: string) {
    return resourceGuides.find((resource) => resource.slug === slug);
}
