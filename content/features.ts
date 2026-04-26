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
    faqs?: { question: string; answer: string }[];
    lastModified?: string;
}

export const features: Feature[] = [
    {
        slug: "sensitive-data-protection",
        lastModified: "2026-04-26",
        title: "Sensitive Data Masking",
        metaTitle: "Sensitive Data Masking for Enterprise AI",
        metaDescription: "Detect and mask confidential data before it reaches AI models. Names, financials, and internal info get caught automatically.",
        headline: "Sensitive Data Masking",
        subheadline: "Confidential info gets masked before AI ever sees it",
        description: "Someone on your team pastes a client name into a prompt. Or drops a spreadsheet with revenue numbers into a chat. Normally that data goes straight to the model. With Remova, it doesn't. The system spots sensitive content and replaces it before the request leaves your environment. The AI still works, it just never sees the real names or numbers.\n\nOur sensitive data protection engine uses advanced contextual detection to identify Personally Identifiable Information (PII), Protected Health Information (PHI), financial records, and proprietary intellectual property. It goes beyond simple regex matching, understanding the context of the data to prevent sophisticated leaks. When sensitive information is detected, it is immediately tokenized or redacted based on your specific organizational policies.\n\nThis means your employees can interact with powerful large language models securely, without the friction of constantly self-censoring their prompts. If an employee tries to upload a confidential quarterly earnings report for summarization, the system intercepts the payload, masks the specific financial figures, sends the secure template to the AI, and then re-inserts the protected data into the final output locally. The enterprise gets the productivity boost of AI without compromising its security posture.",
        benefits: [
            "Client names, financials, and internal identifiers get caught and replaced automatically. Our context-aware scanning engine identifies PII, PHI, and proprietary data before it leaves your network, ensuring continuous compliance.",
            "People don't need to think about it because masking runs silently in the background. Employees can use AI naturally without slowing down to manually sanitize their inputs, preserving their productivity gains.",
            "Legal can have stricter rules than marketing because you set policies per department. Customize redaction sensitivity based on the user's role, ensuring that high-risk teams operate under appropriate constraints.",
            "Every time something gets masked, there's a detailed log entry with context. Security teams gain full visibility into what types of sensitive data are being targeted, aiding in threat hunting and compliance audits.",
            "The platform covers all models and all conversations, leaving no blind spots. Whether a team is using an internal model or a public API, the same stringent data protection rules apply universally."
        ],
        useCases: [
            "Keeping client names out of prompts when sales drafts outreach. Sales representatives can generate highly personalized emails without ever exposing actual customer CRM data to third-party language models.",
            "Letting legal use AI for research without leaking case details. Attorneys can summarize massive legal documents and depositions while the system automatically redacts privileged client identities.",
            "Finance using AI to draft reports without exposing raw numbers. Financial analysts can leverage generative AI for market analysis while sensitive revenue projections are strictly masked from the underlying engine.",
            "HR getting AI help with policies without employee data going to the model. Human resources can safely draft performance review summaries, knowing that individual employee names and salaries are entirely protected."
        ],
        faqs: [
            {
                question: "How does the sensitive data masking actually work?",
                answer: "The system intercepts the prompt before it reaches the AI model, scans it using context-aware NLP to identify sensitive data, replaces that data with secure tokens, and then de-tokenizes the response when it returns to the user."
            },
            {
                question: "Does masking slow down the AI response time?",
                answer: "No, our edge-optimized scanning engine adds less than 50 milliseconds of latency, making the redaction process completely imperceptible to the end user."
            },
            {
                question: "Can we customize what gets masked?",
                answer: "Absolutely. You can define custom regular expressions, specific keywords, or connect to your existing data classification tags to ensure your unique intellectual property is protected."
            },
            {
                question: "What happens if a user repeatedly tries to upload PII?",
                answer: "The system logs every attempt. If a user consistently violates policy, their manager or the security team can be alerted automatically via our preset governance workflows."
            }
        ]
    },
    {
        slug: "policy-guardrails",
        lastModified: "2026-04-26",
        title: "AI Safety Controls",
        metaTitle: "AI Safety Controls for Enterprise Teams",
        metaDescription: "Set clear rules for what AI can and can't do in your company. Block risky outputs, flag edge cases, let safe work through.",
        headline: "AI Safety Controls",
        subheadline: "Set the rules. The system enforces them.",
        description: "You tell Remova what's off-limits. Maybe that's competitor pricing. Maybe it's medical claims. Maybe it's anything that looks like legal advice. The system checks every prompt and every response against your rules. If something's clearly fine, it goes through instantly. If it's borderline, someone gets a flag. If it's a hard no, it's blocked. Your rules, applied everywhere, every time.\n\nTraditional acceptable use policies are often ignored because they live in unread PDF documents. Remova transforms these static documents into dynamic, enforceable code. By placing a governance layer between your users and the AI models, every interaction is evaluated in real-time. This ensures that employees cannot inadvertently generate or distribute content that violates regulatory standards or internal brand guidelines.\n\nOur policy engine is highly configurable. You can define granular rules that apply only to specific departments or roles. For instance, the customer support team might be strictly prohibited from generating financial advice, while the finance team is explicitly permitted to do so. This nuanced approach prevents governance from becoming a blanket obstacle, allowing safe, compliant innovation to thrive across the enterprise.",
        benefits: [
            "Define rules in plain language. You can simply state 'Block medical advice' or 'Flag competitor mentions', and the system translates that intent into enforced constraints.",
            "Borderline cases get flagged for review instead of silently passing through. This human-in-the-loop escalation path ensures that legitimate, nuanced work isn't blocked by overly rigid automation.",
            "Normal everyday work isn't slowed down at all. The vast majority of safe, compliant queries process instantly without requiring any manual oversight or administrative approval.",
            "Same rules across the whole company. Eliminate shadow IT by ensuring that no team can bypass your core security standards simply by using a different model or endpoint.",
            "You can see which rules fire most and where. Detailed telemetry allows the governance team to identify whether a specific rule is causing too much friction or if a department needs targeted training."
        ],
        useCases: [
            "Blocking content generation on topics your company shouldn't touch. Prevent employees from accidentally generating and sharing controversial political statements or unsanctioned financial projections.",
            "Making sure customer-facing outputs get reviewed by a person first. Any AI-generated content destined for external publication can be automatically routed to a manager for sign-off.",
            "Setting company-wide content standards that apply to every AI interaction. Enforce brand voice, tone, and ethical guidelines seamlessly across all generative tasks.",
            "Catching claims that need legal sign-off before they go anywhere. Automatically detect language resembling warranties, guarantees, or legal commitments and block it pending legal review."
        ],
        faqs: [
            {
                question: "Can we apply different policies to different teams?",
                answer: "Yes, policies are highly granular. You can enforce strict compliance rules on the finance team while giving the marketing team more creative freedom."
            },
            {
                question: "What happens if a prompt is blocked?",
                answer: "The user receives immediate, constructive feedback explaining which policy was violated, allowing them to adjust their prompt. They can also request a manual exception if necessary."
            },
            {
                question: "Does this protect against malicious prompts like <a href='/glossary/prompt-injection'>prompt injection</a>?",
                answer: "Yes, our safety controls include dedicated defensive layers that detect and block adversarial tactics, jailbreak attempts, and <a href='/glossary/prompt-injection'>prompt injection</a> attacks."
            },
            {
                question: "How difficult is it to update the rules?",
                answer: "It's instantaneous. When you update a rule in the centralized dashboard, the change propagates immediately across all users and models in your enterprise."
            }
        ]
    },
    {
        slug: "department-budgets",
        lastModified: "2026-04-26",
        title: "Cost Controls",
        metaTitle: "AI Cost Controls by Department",
        metaDescription: "Set AI spending limits per department. Get alerts when budgets run low. See where every dollar goes.",
        headline: "Cost Controls",
        subheadline: "Set a number per team. Get warned before it runs out.",
        description: "You give marketing a monthly AI budget. You give engineering a different one. When a team hits 80%, their lead gets a heads-up. When they hit the cap, usage stops or gets throttled. At the end of the month, you see exactly what each team spent and on what. That's it. No guesswork, no surprise invoices.\n\nWithout centralized AI cost controls, enterprise spending often spirals out of control. Individual teams spin up separate API accounts, experiment with highly expensive frontier models for trivial tasks, and leave unused instances running. Remova centralizes the financial governance of AI, providing a single pane of glass for the CFO and IT department to monitor aggregate spend while distributing accountability down to the department managers.\n\nOur system allows you to define distinct budget pools: an operational budget for everyday tasks, and an innovation budget for exploratory pilot programs. You can configure soft alerts to notify managers when usage is trending higher than expected, and hard caps that prevent further API calls once a limit is reached. This granular visibility ensures you maximize the ROI of your AI investments without risking massive bill shock.",
        benefits: [
            "Each department gets a monthly budget you control. Allocate funds based on actual business needs, ensuring that high-impact teams have the resources they require while experimental teams operate safely.",
            "Alerts go out before anyone hits zero. Proactive notifications give managers the opportunity to review usage patterns and request budget expansions before critical workflows are interrupted.",
            "You see cost breakdowns by team and by user. Granular reporting eliminates the mystery of aggregate cloud bills, allowing you to identify exactly which workflows and individuals are driving costs.",
            "Hard caps or soft warnings. Your choice per team. Apply strict shut-off limits to temporary contractors, while configuring gentle warnings for essential executive teams to ensure uninterrupted service.",
            "Spending trends are visible over time for planning. Historical data enables accurate forecasting, helping finance teams predict next quarter's required AI investment with precision."
        ],
        useCases: [
            "Giving departments their own AI budget so nobody overspends. Prevent a single ambitious engineering project from consuming the entire organization's monthly AI allowance.",
            "Team leads getting a warning when they're nearing their limit. Empower managers to optimize their team's prompt efficiency and model selection before they run out of funds.",
            "Figuring out which projects are burning through AI budget fastest. Rapidly identify highly inefficient workflows or rogue scripts that are generating excessive API calls.",
            "Using real usage data when you plan next quarter's budget. Base financial planning on concrete telemetry rather than relying on rough estimates and vendor sales pitches."
        ],
        faqs: [
            {
                question: "Can we set different budgets for different models?",
                answer: "Yes, you can restrict certain teams to cheaper, faster models while reserving expensive frontier models only for approved, high-budget workflows."
            },
            {
                question: "What happens when a team hits their hard cap?",
                answer: "Their access to the models is paused, and they receive a notification. They can then use a preset workflow to request an emergency budget increase from their department head."
            },
            {
                question: "Does this replace our cloud provider's billing dashboard?",
                answer: "It augments it. While your cloud provider shows total API spend, Remova breaks that spend down by internal team, user, and specific project context."
            },
            {
                question: "How quickly are costs updated?",
                answer: "Costs are tracked and aggregated in near real-time, meaning your alerts will fire almost immediately as usage scales, preventing surprise overnight overages."
            }
        ]
    },
    {
        slug: "team-ai-workspaces",
        lastModified: "2026-04-26",
        title: "Team AI Workspaces",
        metaTitle: "Dedicated AI Workspaces for Each Department",
        metaDescription: "Each team gets its own AI setup with the right models, rules, and budget. Marketing gets one thing. Legal gets another.",
        headline: "Team AI Workspaces",
        subheadline: "Marketing gets one setup. Legal gets another. That's the point.",
        description: "Marketing wants creative writing help. Legal wants careful document review. Engineering wants code. These aren't the same use case, so why give everyone the same tool? Remova lets you set up separate AI environments per team. Each one has its own models, its own rules, and its own budget. Team leads manage their space. IT keeps the overview.\n\nA one-size-fits-all approach to enterprise AI inevitably leads to friction. If IT locks down the system tightly enough for the legal department, the marketing team will find it too restrictive and turn to <a href='/glossary/shadow-ai'><a href='/glossary/shadow-ai'>shadow AI</a></a>. If it's loose enough for marketing, it becomes a massive compliance liability for HR and Finance. Team Workspaces solve this by isolating environments logically while maintaining a single unified governance and billing backend.\n\nWithin a workspace, a department head can pre-load specific system prompts, upload trusted departmental documents for grounding, and pin preferred models to the dashboard. When a new team member joins, they are automatically provisioned into their department's workspace via single sign-on (SSO). They immediately see the exact tools, templates, and data access they need to be productive, without having to configure anything themselves.",
        benefits: [
            "Each team gets an AI setup that matches what they actually do. A dedicated environment prevents the clutter of irrelevant tools and ensures users interact only with the models suited for their specific workflows.",
            "Team leads handle their own day-to-day settings. Decentralize administrative bottlenecks by empowering managers to update system prompts and document libraries without filing an IT ticket.",
            "Only the models that make sense for a team are available to that team. Hide expensive reasoning models from teams that only need basic summarization, saving significantly on API costs.",
            "New people join a workspace and start working immediately. Seamless SSO integration means zero onboarding friction; employees log in and instantly access their department's customized AI assistant.",
            "IT has visibility across all workspaces without managing each one. Centralized IT retains global control over security, compliance, and billing, even as individual teams customize their daily experience."
        ],
        useCases: [
            "Marketing gets a writing-focused workspace with brand rules built in. Automatically apply the corporate tone of voice and restrict outputs to specific messaging frameworks.",
            "Support gets an assistant connected to your help center docs. Agents can instantly query a restricted, highly accurate knowledge base without hallucinating generic internet advice.",
            "Engineering gets code models. Nobody else needs them. Expose powerful coding assistants exclusively to developers while blocking them from non-technical staff to reduce security risks and cost.",
            "A new department gets a working AI setup in under an hour. Rapidly deploy secure, governed AI environments for newly acquired subsidiaries or newly formed project teams."
        ],
        faqs: [
            {
                question: "Can an employee be part of multiple workspaces?",
                answer: "Yes. If an employee's role spans multiple departments—like a product manager working with both engineering and marketing—they can seamlessly toggle between assigned workspaces."
            },
            {
                question: "Who controls the settings in a team workspace?",
                answer: "Global security and budget limits are set by IT and Finance. Within those boundaries, designated Team Leads can customize system prompts, allowed models, and reference documents."
            },
            {
                question: "How does this prevent shadow AI?",
                answer: "By giving teams an AI environment that is actually customized to their specific needs, you remove the primary incentive for them to seek out unsanctioned third-party tools."
            },
            {
                question: "Can we share data between workspaces?",
                answer: "By default, workspaces are siloed to prevent data leakage between departments (e.g., HR data leaking to Sales). However, administrators can explicitly bridge specific knowledge bases if needed."
            }
        ]
    },
    {
        slug: "frontier-models",
        lastModified: "2026-04-26",
        title: "Frontier Models, Your Safety",
        metaTitle: "Frontier AI Models with On-Prem Level Safety",
        metaDescription: "Use GPT-4o, Claude, Gemini and more. Every interaction still goes through your company's rules, masking, and logging.",
        headline: "Frontier Models, Your Safety",
        subheadline: "Use the best models out there. Your safety rules still apply.",
        description: "GPT-4o, Claude, Gemini, Llama, and whatever comes next. Remova gives your teams access to all of them from one place. The difference: every message goes through your masking, your safety rules, your audit log. You're not choosing between a good model and a safe setup. You get both.\n\nThe AI landscape is evolving at breakneck speed. Committing your entire enterprise architecture to a single model provider is a recipe for vendor lock-in and rapid obsolescence. By abstracting the model layer behind Remova's gateway, you future-proof your organization. When a provider releases a revolutionary new model, you can enable it for your teams instantly, knowing that your existing <a href='/features/sensitive-data-protection'><a href='/features/sensitive-data-protection'>DLP</a></a> and governance rules apply automatically.\n\nThis architecture also solves the fragmentation problem. Instead of purchasing separate enterprise licenses for OpenAI, Anthropic, and Google—and trying to manage billing, compliance, and user provisioning across three disparate portals—Remova unifies them. Your users get a single, intuitive interface where they can select the best model for their specific task, and your security team gets a single pane of glass to monitor all AI activity.",
        benefits: [
            "All major models available from a single platform. Prevent vendor lock-in by maintaining the flexibility to route different tasks to the most capable or cost-effective providers.",
            "Every prompt passes through your company's safety layer first. Regardless of whether a user selects Claude or GPT-4, your sensitive data masking and policy guardrails are strictly enforced.",
            "Data masking applies regardless of which model is used. Our intermediate gateway sanitizes the payload before it hits the external API, meaning PII never reaches the third-party provider.",
            "Switch models anytime. Your rules carry over automatically. You never have to rewrite your compliance logic or access controls just because you added a new model to your stack.",
            "When a new model launches, it shows up with your existing rules already applied. Accelerate your adoption of cutting-edge technology without waiting months for a lengthy security review."
        ],
        useCases: [
            "Teams using Claude for writing and GPT for analysis, both governed the same way. Match the unique strengths of different models to specific workflows without creating compliance gaps.",
            "Trying out a new model release without building new safety rules from scratch. Safely beta-test the latest releases from major providers with a controlled group of power users.",
            "Picking the right model per task without worrying about which one is 'safe enough'. Employees can focus on productivity rather than trying to navigate a fragmented security landscape.",
            "Using the latest frontier model the same week it launches. Drastically reduce the time-to-value for new AI advancements while maintaining absolute regulatory compliance."
        ],
        faqs: [
            {
                question: "Do we need separate API keys for each provider?",
                answer: "You can either plug in your own existing enterprise API keys, or use Remova's managed billing to handle all provider costs through a single unified invoice."
            },
            {
                question: "How quickly are new models added to the platform?",
                answer: "We typically integrate and test major new frontier models (like a new GPT or Claude version) within 48 hours of their public API release."
            },
            {
                question: "Can we restrict certain models to specific teams?",
                answer: "Yes. Through Team Workspaces, you can ensure that only your advanced data science team has access to the most expensive reasoning models, while everyone else uses faster, cheaper alternatives."
            },
            {
                question: "What happens if a model provider experiences an outage?",
                answer: "Our gateway architecture allows users to easily toggle to an alternative provider's model to complete their work, minimizing organizational downtime."
            }
        ]
    },
    {
        slug: "role-access-control",
        lastModified: "2026-04-26",
        title: "Role-Based Access",
        metaTitle: "Role-Based AI Access for Enterprise Teams",
        metaDescription: "Control who can use which AI models and features. Assign access by role. Keep it simple.",
        headline: "Role-Based Access",
        subheadline: "Different people get different access. Simple as that.",
        description: "Not everyone needs the same thing. A new hire probably shouldn't have access to the most expensive model or the ability to upload sensitive documents. Remova lets you set access by role: basic user, team lead, admin. Each role sees the models and features they're supposed to see. If someone's role changes, their access changes with it.\n\nManaging access manually across dozens of AI tools creates a massive administrative burden for IT and severely increases the risk of over-provisioning. Remova integrates directly with your existing Identity Provider (IdP) via SAML/SSO (Okta, Azure AD, Ping). When a user joins the organization or changes departments, their AI access rights update automatically based on their group mapping.\n\nThis role-based access control (<a href='/features/role-access-control'><a href='/features/role-access-control'>RBAC</a></a>) extends beyond just model selection. It dictates whether a user can upload files, whether their prompts are subject to human review, and whether they can view the prompt histories of other team members. It is the fundamental building block for zero-trust AI adoption in a large enterprise.",
        benefits: [
            "Access levels follow your org structure. Connects to your existing single sign-on to eliminate the need to manage separate usernames, passwords, and lifecycles for your AI tools.",
            "Team leads add and remove people without waiting on IT. Decentralize administration safely by allowing managers to assign predefined roles within their approved departmental budgets.",
            "Premium models stay reserved for people who need them. Tailor the toolkit to the job function, optimizing both productivity and API spend by limiting access to frontier models.",
            "Every change is logged so you know who has access to what. Ensure that only designated compliance officers and IT admins have access to the global, unredacted audit trails.",
            "New hires get the right level based on their role, automatically. When someone joins or leaves the company, their AI access adjusts instantly, drastically reducing the risk of ex-employees retaining access."
        ],
        useCases: [
            "Keeping expensive models for the people who actually need them. Give the dev team access to advanced reasoning models while restricting sales to faster, cheaper drafting tools.",
            "Department heads managing their own team's access. Let managers see their team's usage stats and approve exceptions without exposing sensitive cross-organizational data.",
            "Restricting uploads and knowledge base access to specific roles. Prevent junior staff or contractors from uploading highly confidential internal documents to generative systems.",
            "New employees landing in the right access tier on day one. Ensure rapid onboarding by automatically provisioning the exact set of AI tools required for an employee's specific job function."
        ],
        faqs: [
            {
                question: "Which Identity Providers (IdPs) do you support?",
                answer: "We support all major SAML 2.0 and OIDC identity providers, including Okta, Azure Active Directory (Entra ID), Google Workspace, and Ping Identity."
            },
            {
                question: "Can we create custom roles?",
                answer: "Yes, you can create infinitely customizable roles and map them to specific IdP groups, defining granular permissions for models, budgets, and features."
            },
            {
                question: "Does RBAC apply to the API as well?",
                answer: "Absolutely. If a developer generates an API key tied to a specific role, that key is bound by all the exact same policy and access constraints as the user interface."
            },
            {
                question: "What happens if a user changes departments?",
                answer: "When their group membership is updated in your IdP, their Remova access immediately syncs, granting them their new tools and revoking the old ones without manual intervention."
            }
        ]
    },
    {
        slug: "preset-workflows",
        lastModified: "2026-04-26",
        title: "Ready-Made AI Workflows",
        metaTitle: "Pre-Built AI Workflows for Common Business Tasks",
        metaDescription: "Pre-configured AI workflows for common tasks. Email drafts, document summaries, report writing. Safety rules included.",
        headline: "Ready-Made AI Workflows",
        subheadline: "Most people don't want to write prompts. Give them workflows.",
        description: "The blank chat box is fine for exploration, but most work is repetitive. Summarize this report. Draft a reply to this email. Pull the key numbers from this document. Remova lets you package these into workflows with the right model, the right rules, and the right output format already set. People click a button and get results. No prompt engineering required.\n\nWhile 'prompt engineering' has become a buzzword, the reality is that enterprise employees are hired for their domain expertise, not their ability to coax the right response out of an LLM. Preset workflows bridge this gap. An administrator or department power-user can design a highly optimized, multi-step prompt template. Once tested, they publish it as a simple button or form within their team's workspace.\n\nThis standardization guarantees quality and consistency. If five different analysts need to summarize competitor earnings calls, they shouldn't be writing five different prompts. By using a centralized workflow, the enterprise ensures that every summary follows the exact same structure, uses the same approved analytical model, and adheres to the same data masking policies. It turns AI from an open-ended playground into a scalable business process.",
        benefits: [
            "People start getting value from AI on day one. By removing the need to learn prompt engineering, you dramatically accelerate enterprise-wide adoption and time-to-value.",
            "Each workflow has the right model and safety rules baked in. Guarantee that critical compliance checks and brand voice guidelines are automatically applied to every output.",
            "There's no way to accidentally work around the rules inside a workflow. Because the underlying prompt logic is locked, users cannot inadvertently 'jailbreak' the system or bypass <a href='/features/sensitive-data-protection'>DLP</a> controls.",
            "Build your own workflows for tasks specific to your company. Create highly specialized tools that address your unique operational bottlenecks without needing to write custom software.",
            "Good workflows spread across teams naturally. A successful workflow designed by the marketing team can be easily duplicated and adapted by the sales or recruiting teams."
        ],
        useCases: [
            "Sales gets a one-click proposal email drafter. Reps can input three bullet points and immediately generate a polished, brand-compliant proposal tailored to the prospect's industry.",
            "Legal gets a document summarizer with confidentiality rules applied. Attorneys can rapidly extract key clauses and liabilities from 100-page contracts using a vetted, secure analytical model.",
            "Project managers get a weekly status report generator. Turn raw meeting notes and scattered JIRA tickets into a cohesive executive summary with a single click.",
            "Support gets an FAQ assistant that pulls from your actual docs. Agents can input a complex customer query and receive a standardized, accurate response drafted directly from internal SOPs."
        ],
        faqs: [
            {
                question: "Do users need to know how to code to build a workflow?",
                answer: "No. Workflows are built using a simple drag-and-drop interface where you combine a prompt template with variables (like text boxes or file uploads)."
            },
            {
                question: "Can we restrict a workflow to a specific department?",
                answer: "Yes, workflows can be published globally, or restricted exclusively to a specific Team Workspace."
            },
            {
                question: "Can a workflow use multiple models?",
                answer: "Yes, advanced workflows can chain actions together. For example, using a fast model to extract data, and a reasoning model to analyze that extracted data."
            },
            {
                question: "How do we update a workflow if our process changes?",
                answer: "The workflow creator or admin can update the underlying prompt template centrally. The changes immediately take effect for everyone using that workflow."
            }
        ]
    },
    {
        slug: "knowledge-grounding",
        lastModified: "2026-04-26",
        title: "Company Knowledge Base",
        metaTitle: "AI Grounded in Your Company's Knowledge",
        metaDescription: "Upload your docs. AI uses them to answer questions. Internal policies, product specs, SOPs. Real answers from real sources.",
        headline: "Company Knowledge Base",
        subheadline: "Upload your docs. AI answers from them.",
        description: "Out of the box, AI knows nothing about your company. It doesn't know your return policy, your product specs, or how your internal processes work. Remova lets you upload documents and the AI starts referencing them when people ask questions. HR uploads the handbook, product uploads the specs, support uploads the help docs. Each team sees their own sources.\n\nWithout grounding, large language models are prone to hallucinations—confidently inventing answers that sound plausible but are entirely factually incorrect. By implementing <a href='/glossary/rag'>Retrieval-Augmented Generation</a> (<a href='/glossary/rag'><a href='/glossary/rag'>RAG</a></a>) at the enterprise level, Remova restricts the model's answers exclusively to the documents you have officially approved and uploaded. This transforms a generic AI into a highly specialized corporate assistant.\n\nThe system automatically processes PDFs, Word documents, wikis, and intranet sites, converting them into searchable vector embeddings. When an employee asks a question, the system first retrieves the most relevant paragraphs from your knowledge base, feeds that specific context to the LLM, and instructs it to synthesize an answer. Crucially, every answer generated through this process includes citations, allowing users to click through to the exact page of the original source document to verify the information.",
        benefits: [
            "AI answers reference your real documents, not guesses from the internet. Completely eliminate hallucinations by forcing the model to rely strictly on your verified corporate data.",
            "Each team has its own knowledge base. HR docs don't show up for engineering. Maintain strict information silos so that sensitive departmental strategies aren't accidentally exposed to the broader company.",
            "Access is controlled. Only authorized people query each knowledge base. Integration with your IdP ensures that if a user isn't allowed to read a document in your file system, the AI won't summarize it for them either.",
            "Fewer wrong answers because the AI has approved sources to work from. Instill trust in your workforce by providing an AI that accurately cites its sources for every single claim it makes.",
            "Upload a new document and it's available to the AI right away. The ingestion pipeline works in near real-time, meaning updated policies or new product specs are immediately queryable by the team."
        ],
        useCases: [
            "Employees asking policy questions and getting answers from the actual handbook. Dramatically reduce the number of routine, repetitive questions submitted to the HR helpdesk.",
            "Support responding to customers using real product docs, not memory. Equip your customer success agents with an instant-recall assistant that knows every detail of your technical documentation.",
            "New hires learning company processes through AI that knows the SOPs. Accelerate the onboarding ramp-up time by allowing new employees to query your standard operating procedures conversationally.",
            "Anyone searching internal docs without digging through shared drives. Replace clunky, keyword-based intranet search bars with a semantic engine that actually understands what the user is looking for."
        ],
        faqs: [
            {
                question: "What file types can we upload to the knowledge base?",
                answer: "The system supports PDFs, Word documents, plain text, markdown, CSVs, and can even crawl specific intranet URLs or Confluence pages."
            },
            {
                question: "Does the AI train on our uploaded documents?",
                answer: "No. The documents are used purely for retrieval-augmented generation (<a href='/glossary/rag'><a href='/glossary/rag'>RAG</a></a>) at inference time. Your data is never used to train the base <a href='/glossary/foundation-model'>foundation models</a>."
            },
            {
                question: "How do we ensure outdated documents aren't used?",
                answer: "The dashboard allows administrators to easily view, manage, and delete older documents. You can also set expiration dates for specific uploads so they auto-purge."
            },
            {
                question: "Can we connect this to our existing SharePoint or Google Drive?",
                answer: "Yes, enterprise tier customers can configure automated syncing so that when a document is updated in SharePoint, the AI knowledge base automatically ingests the new version."
            }
        ]
    },
    {
        slug: "audit-trails",
        lastModified: "2026-04-26",
        title: "Audit Trail",
        metaTitle: "Complete AI Audit Trail for Enterprise",
        metaDescription: "Every AI interaction, every safety event, every admin change. Logged with context. Exportable anytime.",
        headline: "Audit Trail",
        subheadline: "When someone asks 'what happened?', you have an answer.",
        description: "Every AI conversation, every prompt, every response. Every time masking kicks in. Every time a safety rule fires. Every time an admin changes a setting. It's all logged with timestamps, user info, and context. You can search it, filter it, export it. When the compliance team shows up, or when you just need to understand what happened last Tuesday, the data is there.\n\nOperating AI in a regulated industry requires absolute proof of governance. Without a comprehensive <a href='/features/audit-trails'><a href='/features/audit-trails'>audit trail</a></a>, defending your organization against a data breach claim or an intellectual property lawsuit is nearly impossible. Remova provides a cryptographically secure, immutable log of all platform activity. This ensures that the records cannot be retroactively altered or deleted by malicious actors attempting to cover their tracks.\n\nThe audit system is designed for massive scale and deep searchability. Instead of dumping raw, unstructured JSON logs into a bucket, Remova structures the telemetry so that compliance officers can run complex queries. You can instantly filter events to see every time the marketing department triggered a 'competitor mention' rule while using the GPT-4 model during the month of October. This level of granular visibility turns compliance from a massive headache into a streamlined, automated process.",
        benefits: [
            "Full record of every AI conversation across the organization. Maintain a comprehensive, searchable archive of all prompts and responses to satisfy strict regulatory requirements.",
            "Masking and safety events are logged with the details that matter. Instantly see not just that a rule fired, but exactly which user triggered it, from which IP address, and what the original unredacted text was.",
            "Admin changes are tracked too. Who changed what, when. Ensure accountability within your IT and security teams by logging every time a budget limit is altered or a safety rule is disabled.",
            "Export logs for compliance reports whenever you need them. Easily output filtered data sets in standard formats (CSV, JSON, PDF) to hand directly to internal or external auditors.",
            "Search by person, team, date, or type of event. Drastically reduce the time required to conduct internal investigations by utilizing our lightning-fast semantic search across millions of log entries."
        ],
        useCases: [
            "Pulling records for a compliance audit. Effortlessly satisfy requests from regulators by proving that specific safety controls were active and effective during the audited time period.",
            "Investigating a specific conversation when something goes sideways. Rapidly reconstruct the exact sequence of events that led to an inappropriate output or a blocked action.",
            "Monthly usage reports for leadership. Aggregate audit data to demonstrate the ROI of the governance platform by showing exactly how many sensitive data leaks were successfully prevented.",
            "Showing regulators that AI usage is documented and governed. Provide irrefutable evidence that your enterprise takes AI safety seriously and enforces its policies uniformly."
        ],
        faqs: [
            {
                question: "How long are the audit logs retained?",
                answer: "By default, logs are retained for 1 year, but enterprise customers can configure indefinite retention or set custom auto-purge schedules based on their internal data retention policies."
            },
            {
                question: "Who has access to the audit trails?",
                answer: "Access is strictly controlled by <a href='/features/role-access-control'>Role-Based Access Control</a> (<a href='/features/role-access-control'><a href='/features/role-access-control'>RBAC</a></a>). Typically, only designated compliance officers, legal counsel, and top-tier IT admins have permission to view global unredacted logs."
            },
            {
                question: "Can we export the logs to our SIEM (like Splunk or Datadog)?",
                answer: "Yes, Remova offers real-time streaming integration with all major SIEM platforms so your security operations center (SOC) can monitor AI events alongside your other network telemetry."
            },
            {
                question: "Are the audit logs themselves secure?",
                answer: "Absolutely. All logs are encrypted at rest using AES-256 and encrypted in transit via TLS 1.3, ensuring that your compliance data is never compromised."
            }
        ]
    },
    {
        slug: "usage-analytics",
        lastModified: "2026-04-26",
        title: "Usage Dashboard",
        metaTitle: "AI Usage Dashboard for Enterprise",
        metaDescription: "See who's using AI, what it costs, and which safety rules are firing. One dashboard. Real-time data.",
        headline: "Usage Dashboard",
        subheadline: "Who's using AI. What it costs. Where the rules kick in.",
        description: "The dashboard shows three things. Adoption: which teams are active and how much they're using AI. Cost: what's being spent and by whom. Safety: how many times masking or rules fired and where. It updates in real time. You can break it down by team, by person, or by time period. Share views with leadership without building a slide deck.\n\nData without visualization is just noise. The Remova Usage Dashboard translates millions of raw API calls and log events into actionable business intelligence. Leaders need to know whether their massive investment in generative AI is actually driving adoption, or if it's just a handful of power users racking up the entire bill. \n\nBy unifying financial data (<a href='/features/department-budgets'><a href='/features/department-budgets'>FinOps</a></a>) with security data (SecOps) on a single pane of glass, executives gain unprecedented visibility. You can instantly see correlations—like the fact that the engineering team spends the most money, but the marketing team triggers the most <a href='/features/sensitive-data-protection'><a href='/features/sensitive-data-protection'>DLP</a></a> warnings. This holistic view enables targeted interventions: adjusting budgets, providing specific compliance training, or identifying departments that need help finding the right use cases for AI.",
        benefits: [
            "Adoption, cost, and safety data in one screen. Eliminate the need to cross-reference cloud billing portals with separate security tools and identity management dashboards.",
            "Break it down by team, department, or individual. Drill down from a macro-level organizational overview to the specific daily habits of a single team member.",
            "See trends over weeks and months. Track whether AI adoption is steadily growing organically or if it plateaued after the initial novelty wore off.",
            "Real-time numbers, not a report from three weeks ago. Make critical operational decisions based on what is happening right now, preventing minor issues from escalating into major overages.",
            "Share views directly with leadership. Generate secure, read-only links to specific dashboard views so the C-suite can track KPIs without needing administrative access."
        ],
        useCases: [
            "Reporting to the C-suite on AI adoption and spend each month. Effortlessly export beautiful charts that clearly demonstrate the ROI of the organization's AI initiatives.",
            "Finding out which teams are getting real value vs. barely touching it. Identify departments with low adoption rates and proactively offer them training and pre-built workflows to boost their productivity.",
            "Spotting unusual patterns that might need attention. Quickly notice if a single user's token consumption spikes 500% in one day, which could indicate a compromised account or a runaway automated script.",
            "Using actual data to plan the next quarter's AI budget. Replace guesswork with concrete, historical consumption data when negotiating cloud commitments or internal departmental allocations."
        ],
        faqs: [
            {
                question: "How frequently does the dashboard data update?",
                answer: "The dashboards are powered by a real-time streaming architecture, meaning adoption numbers, costs, and safety alerts are typically updated within seconds of the event occurring."
            },
            {
                question: "Can department managers see this data?",
                answer: "Yes, you can configure the dashboard so that department heads only see the telemetry relevant to their specific team, while global admins see the entire enterprise."
            },
            {
                question: "Does the dashboard track token usage or just API calls?",
                answer: "It tracks both. You can see total API requests, but more importantly, you can view the exact breakdown of input tokens versus output tokens, which is how most frontier models are priced."
            },
            {
                question: "Can I create custom charts?",
                answer: "Yes, the dashboard includes a custom report builder that allows you to plot any tracked metric (cost, tokens, users, blocked prompts) across any timeframe."
            }
        ]
    },
    {
        slug: "retention-controls",
        lastModified: "2026-04-26",
        title: "Data Retention",
        metaTitle: "AI Data Retention Controls",
        metaDescription: "Set how long AI conversation data is kept. Auto-delete when the period expires. Different rules for different teams.",
        headline: "Data Retention",
        subheadline: "Set how long data stays. It deletes itself when the time's up.",
        description: "Some teams need conversations kept for 90 days for compliance. Others want them gone in a week. You set the rule per team or per sensitivity level, and Remova handles the rest. When the retention window closes, the data is deleted. No manual cleanup, no forgotten conversations sitting around.\n\nData minimization is a core principle of modern privacy frameworks like GDPR, CCPA, and HIPAA. Storing every single AI conversation indefinitely creates a massive, searchable attack surface if your organization is ever breached. By implementing automated data retention policies, Remova ensures that your AI usage footprint shrinks automatically over time, drastically reducing your legal and security liabilities.\n\nOur retention engine is highly granular. You can establish a global default (e.g., all conversations delete after 30 days), but create specific exceptions based on department or workflow. For instance, the marketing team's generative brainstorming might be purged weekly, while the legal team's contract analysis is securely retained for three years to comply with specific regulatory hold requirements.",
        benefits: [
            "Different retention periods per team or sensitivity level. Avoid one-size-fits-all policies that either violate compliance mandates or needlessly hoard terabytes of low-value data.",
            "Automatic deletion when the clock runs out. Remove the burden of manual database cleanup from your IT team; the system continuously sweeps and cryptographically shreds expired logs.",
            "Helps meet GDPR and internal data policies without extra work. Prove to regulators that your enterprise strictly enforces the principle of data minimization across all its generative AI applications.",
            "Control who can access stored conversations. Even while data is actively retained, <a href='/features/role-access-control'>Role-Based Access Control</a> ensures that only authorized administrators can retrieve historical prompt logs.",
            "Clear view of what's been retained and what's been purged. The dashboard provides a verifiable timeline showing exactly when specific datasets were permanently destroyed."
        ],
        useCases: [
            "General teams: auto-delete after 30 days. Maintain enough history for users to refer back to their recent work without creating long-term security liabilities.",
            "Legal and compliance: keep interactions longer for audit purposes. Ensure that critical analyses and compliance-related queries are preserved precisely as long as the law requires.",
            "Meeting data minimization requirements without manual effort. Confidently check the compliance box during vendor risk assessments by demonstrating automated data lifecycle management.",
            "Showing employees how their AI usage data is handled. Increase internal adoption by being transparent with staff that their AI brainstorming sessions won't be kept on file indefinitely."
        ],
        faqs: [
            {
                question: "Is the data actually deleted or just hidden?",
                answer: "When a retention period expires, the data is permanently, cryptographically destroyed. It cannot be recovered by you, by us, or by a forensic audit."
            },
            {
                question: "Can we put a 'legal hold' on specific user data?",
                answer: "Yes, administrators can freeze the retention clock for specific users or teams in the event of an ongoing investigation or eDiscovery request."
            },
            {
                question: "Does this retention apply to uploaded documents?",
                answer: "Yes, you can set separate retention and auto-delete policies for documents uploaded into the <a href='/glossary/rag'>Retrieval-Augmented Generation</a> (<a href='/glossary/rag'>RAG</a>) knowledge base."
            },
            {
                question: "What happens if a user manually deletes a chat?",
                answer: "By default, user-deleted chats are removed from their interface immediately, but are still retained in the global audit log until the official retention period expires."
            }
        ]
    },
    {
        slug: "model-governance",
        lastModified: "2026-04-26",
        title: "Model Access Controls",
        metaTitle: "AI Model Access Controls for Enterprise",
        metaDescription: "Decide which teams get access to which AI models. Roll out new models in phases. Keep expensive models where they belong.",
        headline: "Model Access Controls",
        subheadline: "Not every team needs the most expensive model.",
        description: "Some tasks are fine with a standard model. Others genuinely need frontier-level reasoning. Remova lets you decide which models are available to which teams. When a new model launches, you roll it out to a test group first instead of making it available to everyone at once. It's about putting the right tool in the right hands.\n\nThe difference in cost between a standard AI model and a frontier reasoning model can be 50x or even 100x per token. Without strict model governance, an enterprise will rapidly hemorrhage budget as employees default to the most expensive tool for basic tasks like summarizing an email or drafting a Slack message. Remova provides the fine-grained controls necessary to align model capabilities with actual business requirements.\n\nFurthermore, model governance is essential for risk management. When a new foundation model is released to the public, it may exhibit novel security vulnerabilities or behavioral quirks that your organization hasn't vetted yet. With Remova, you can completely block that new model globally, or provision it exclusively to a secure sandbox team for evaluation before deciding to deploy it to the wider enterprise.",
        benefits: [
            "Control which models each department can access. Prevent your marketing interns from using highly expensive coding models to draft basic social media copy.",
            "Keep expensive frontier models for teams that need the performance. Ensure that your data scientists and senior analysts always have access to the heavy compute they require without breaking the bank.",
            "New models roll out in phases, not all at once. Test the safety, efficacy, and cost-profile of new AI releases with a controlled pilot group before authorizing a company-wide deployment.",
            "One place to manage model availability across the organization. Eliminate the need to chase down different department heads to update permissions across multiple disjointed AI vendor platforms.",
            "Users see a consistent set of models based on their team. Provide a curated, uncluttered interface that prevents users from feeling overwhelmed by a dozen identical-looking AI options."
        ],
        useCases: [
            "Reserving the most capable models for teams with complex analysis needs. Guarantee that complex financial forecasting or deep code refactoring tasks are powered by the most intelligent engines available.",
            "Testing a new model with one department before opening it up. Allow your IT security team to aggressively red-team a new Anthropic or OpenAI release before granting it to general staff.",
            "Keeping a standard set of approved models per department. Establish a reliable, predictable baseline of AI capability that department managers can plan their workflows around.",
            "Preventing ad-hoc model selection that drives up costs. Stop the common phenomenon of employees defaulting to the 'smartest' option when a cheaper, faster model would have been sufficient."
        ],
        faqs: [
            {
                question: "Can we force a specific model to be the default for everyone?",
                answer: "Yes, you can set a highly efficient, cost-effective model as the global default, requiring users to actively switch if they need advanced reasoning."
            },
            {
                question: "What happens if an employee's requested model is blocked?",
                answer: "They won't even see the model in their interface dropdown. If they attempt to access it via API, the gateway will return a clear permissions error."
            },
            {
                question: "Can we restrict models based on data sensitivity?",
                answer: "Yes, through our routing engine, you can dictate that highly sensitive data (like PII) is only processed by locally hosted open-source models rather than external APIs."
            },
            {
                question: "Does this apply to image generation models too?",
                answer: "Absolutely. You can control access to DALL-E, Midjourney APIs, or custom image generators using the exact same role-based governance framework."
            }
        ]
    },
    {
        slug: "api-access",
        lastModified: "2026-04-26",
        title: "API Access",
        metaTitle: "Governed AI API Access for Internal Apps",
        metaDescription: "Add AI to your internal tools through Remova's API. Same rules, same <a href='/features/audit-trails'>audit trail</a>, same cost controls as everything else.",
        headline: "API Access",
        subheadline: "Your devs connect to Remova instead of OpenAI directly. Same power, full governance.",
        description: "If your developers connect directly to OpenAI or Anthropic, they skip every rule you've set up. Masking, safety controls, audit logging, budget caps. All bypassed. Remova's API gives developers the same models through a governed endpoint. Same capabilities, but every call goes through your rules and shows up in your dashboard.\n\nBuilding internal AI applications often creates a severe governance loophole. A development team building an automated customer support triager or an internal research agent typically hardcodes an API key directly into their application backend. This immediately fragments your security posture, turning your internal apps into unregulated black boxes where sensitive data can freely leak out.\n\nBy routing internal application traffic through the Remova API gateway, you standardize security across both UI users and software clients. Developers simply point their existing OpenAI SDKs (or any standard REST client) at the Remova endpoint. The gateway transparently handles the authentication, runs the payload through your data masking engine, enforces rate limits and budget caps, and logs the transaction before securely passing it to the final LLM provider. Your developers get to ship faster because they don't have to build custom <a href='/features/sensitive-data-protection'>DLP</a> or logging solutions from scratch.",
        benefits: [
            "Internal apps get AI with the same rules as the rest of the platform. Maintain a unified security perimeter that applies equally to human employees using a chat UI and automated scripts running in the background.",
            "One API endpoint. Easy to integrate, impossible to work around. The API is fully compatible with standard OpenAI SDK formats, requiring zero structural changes to your developers' existing codebase.",
            "API calls appear in the same dashboard as regular usage. Track the exact cost and token consumption of your custom internal applications alongside your departmental user metrics.",
            "Budget caps apply to API usage. No hidden bills from internal tools. Prevent an infinite loop or a poorly written script in an internal tool from silently bankrupting your monthly cloud budget.",
            "Ship AI features faster without reinventing safety from scratch. Accelerate time-to-market for custom internal solutions by offloading the complex governance and compliance requirements to the Remova gateway."
        ],
        useCases: [
            "Adding AI to an internal CRM without creating a security hole. Safely automatically summarize customer support tickets by ensuring that any credit card numbers or PII are masked before analysis.",
            "Building smart search for your intranet with governed AI behind it. Power a semantic search bar that strictly adheres to the role-based access controls defined in your identity provider.",
            "Automating workflows with AI while keeping the <a href='/features/audit-trails'>audit trail</a>. Run a script that reviews incoming vendor contracts nightly, with a guaranteed, tamper-proof log of every analysis.",
            "Product teams prototyping AI features without security concerns. Give your engineers a safe sandbox where they can experiment with frontier models without exposing the enterprise to data leak risks."
        ],
        faqs: [
            {
                question: "Is the API compatible with the OpenAI SDK?",
                answer: "Yes, our gateway is a drop-in replacement. You simply change the base URL in your existing Python or Node.js code and use a Remova-generated API key."
            },
            {
                question: "Does the gateway introduce latency to our applications?",
                answer: "Our edge-optimized proxy architecture adds less than 50ms of latency, ensuring your internal apps remain highly responsive."
            },
            {
                question: "Can we set different rate limits for different applications?",
                answer: "Yes, you can generate specific API keys for different internal apps and assign independent token budgets, rate limits, and allowed models to each one."
            },
            {
                question: "Does the API support streaming responses?",
                answer: "Yes, Server-Sent Events (SSE) streaming is fully supported through the API, allowing you to build real-time conversational interfaces internally."
            }
        ]
    },
    {
        slug: "onboarding-controls",
        lastModified: "2026-04-26",
        title: "Onboarding",
        metaTitle: "Enterprise AI Onboarding Controls",
        metaDescription: "Get new teams up and running with AI fast. Access, budgets, and safety rules pre-configured.",
        headline: "Onboarding",
        subheadline: "New team, new department? Set up in minutes, not weeks.",
        description: "When a new department wants AI, you shouldn't need a two-week project to set it up. Remova walks through the basics: who gets access, what's their budget, which rules apply. The team lead takes it from there. Everything starts with reasonable defaults that you can adjust later. The alternative is teams finding their own tools, which is how <a href='/glossary/shadow-ai'><a href='/glossary/shadow-ai'>shadow AI</a></a> starts.\n\nEnterprise agility requires secure, frictionless provisioning. When a new subsidiary is acquired, or a temporary tiger-team is formed for a critical initiative, IT cannot be the bottleneck for AI access. If the official onboarding process takes a month of security reviews, employees will simply bypass IT and use their personal credit cards to buy unsanctioned tools. Remova provides a streamlined, secure onboarding template.\n\nAdministrators can configure 'Blueprint' workspaces. These are pre-packaged environments that contain standard data loss prevention rules, an initial budget allocation, and a curated set of foundational models. When a new department requests an AI workspace, an admin can clone a Blueprint and deploy it instantly. The department manager is then granted local administrative rights to fine-tune the system prompts and upload team-specific knowledge documents without needing further IT intervention.",
        benefits: [
            "Structured setup that covers access, budget, and safety rules. Standardize your deployment process by utilizing pre-configured blueprints that guarantee compliance from day one.",
            "Defaults are reasonable out of the box. Adjust as needed. Prevent decision paralysis by starting new teams with industry-standard safety configurations rather than forcing them to build policies from scratch.",
            "Team leads own their space from the start. Empower department managers with delegated administration rights, drastically reducing the ongoing support ticket volume hitting your central IT desk.",
            "New departments go live fast without losing governance. Achieve the speed of a startup while maintaining the robust security posture required of a heavily regulated enterprise.",
            "Less rework later because the foundation was set up right. Ensure that teams don't accidentally embed non-compliant AI processes into their workflows simply because they lacked proper guidance initially."
        ],
        useCases: [
            "Getting a pilot program running in a day. Rapidly spin up an isolated, strictly budgeted sandbox environment to test a new generative AI strategy with a handful of power users.",
            "New departments starting with standard controls already in place. Immediately grant newly hired teams access to safe, governed AI tools as a standard part of their IT onboarding sequence.",
            "Avoiding the manual setup overhead that slows rollouts. Replace massive provisioning spreadsheets and endless approval emails with automated, template-driven workspace creation.",
            "Making sure every team starts governed, not retrofitted after the fact. Eradicate <a href='/glossary/shadow-ai'>shadow AI</a> by providing a compliant, superior alternative before employees feel the need to look elsewhere."
        ],
        faqs: [
            {
                question: "Can we automate workspace creation through our IdP?",
                answer: "Yes, using our SCIM provisioning integration, when you create a new designated group in Okta or Azure AD, Remova will automatically spin up a corresponding secure AI workspace."
            },
            {
                question: "Do new users need a tutorial?",
                answer: "Remova includes built-in, context-aware onboarding guides that walk new users through your specific corporate policies and show them how to use their customized team workflows."
            },
            {
                question: "What happens if a new team overspends their initial budget?",
                answer: "Their access is temporarily paused and a notification is sent to the central IT or Finance admin, who can review the usage and adjust the allocation with a single click."
            },
            {
                question: "Can a team easily clone an existing successful workspace?",
                answer: "Yes, if the Marketing team creates a highly effective workspace with great system prompts, Sales can clone that exact setup as a starting point for their own environment."
            }
        ]
    },
];
