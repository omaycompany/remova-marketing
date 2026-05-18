import type { BlogPost } from "./blog";

export const euAiActTimelineBlogPosts: BlogPost[] = [
    {
        slug: "eu-ai-act-timeline-companies-2026-delay",
        title: "EU AI Act Timeline for Companies: What Still Applies in 2026 After the Delay",
        metaDescription: "A practical EU AI Act timeline for companies after the 2026 AI Omnibus delay, covering what still applies, what moved, and what teams should document now.",
        category: "Compliance",
        date: "2026-05-18",
        lastModified: "2026-05-18",
        articleType: "NewsArticle",
        author: "Remova Compliance Research Team",
        readTime: "31 min",
        excerpt: "The EU AI Act delay does not pause the whole law. Companies still need 2026 work for transparency, AI literacy, model and vendor evidence, inventory, records, and high-risk preparation.",
        images: [
            {
                src: "/images/blog/how-to-choose-artificial-intelligence-tools-enterprise-evidence.png",
                alt: "Compliance, security, and legal teams reviewing an EU AI Act timeline, model evidence, and AI system records",
                caption: "The useful response to the EU AI Act delay is not to pause. It is to split the timeline by obligation and keep evidence work moving.",
                afterSection: 0,
                hero: true,
            },
            {
                src: "/images/blog/artificial-intelligence-tools-for-business-controls.png",
                alt: "EU AI Act company controls mapped to AI inventory, notices, model routes, redaction rules, and audit records",
                caption: "Companies need a practical control map that separates 2026 transparency work from later high-risk system files.",
                afterSection: 9,
            },
            {
                src: "/images/blog/artificial-intelligence-tools-for-business-review.png",
                alt: "Enterprise AI review meeting for EU AI Act evidence, vendor records, notices, and exception decisions",
                caption: "The timeline moved for some high-risk rules, but review packets, notices, logs, and vendor evidence still need owners.",
                afterSection: 17,
            },
        ],
        inlineCtas: [
            {
                afterSection: 5,
                eyebrow: "Timeline split",
                title: "Turn EU AI Act dates into real workflow evidence",
                description: "Remova helps teams classify AI usage, route approved models, mask sensitive data, and keep audit records for the controls that still matter in 2026.",
                primaryLabel: "Start in Remova",
                primaryHref: "https://app.remova.org/register",
                secondaryLabel: "See audit trails",
                secondaryHref: "/features/audit-trails",
            },
            {
                afterSection: 12,
                eyebrow: "Vendor and model records",
                title: "Keep model, vendor, data, and exception records in one place",
                description: "Use Remova to connect model routes, approved workflows, policy events, sensitive data classes, and owner decisions instead of scattering evidence across spreadsheets.",
                primaryLabel: "Create a safe workspace",
                primaryHref: "https://app.remova.org/register",
                secondaryLabel: "Compare models",
                secondaryHref: "/models",
            },
            {
                afterSection: 19,
                eyebrow: "2026 operating plan",
                title: "Make EU AI Act preparation visible in daily AI work",
                description: "Remova gives legal, security, IT, and business owners a shared view of who used AI, which model route applied, what data was protected, and what evidence exists.",
                primaryLabel: "Build the workflow",
                primaryHref: "https://app.remova.org/register",
                secondaryLabel: "View usage analytics",
                secondaryHref: "/features/usage-analytics",
            },
        ],
        sections: [
            {
                heading: "1. The Delay Is Not a Pause Button",
                content: `The EU AI Act timeline changed, but companies should not read that as permission to stop work. The useful interpretation is narrower: some high-risk AI system deadlines have moved, while other obligations are already active or still pointed at 2026. A company that treats the delay as a total reset will lose the time it needs to build an AI inventory, clean up vendor records, document model routes, prepare user notices, define human review, and collect evidence from real workflows.

As of May 18, 2026, the official <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">European Commission AI Act overview</a> says the AI Act entered into force on August 1, 2024, prohibited practices and AI literacy obligations started on February 2, 2025, and general-purpose AI model obligations started on August 2, 2025. The same official page now reflects the political agreement on the AI Omnibus: certain stand-alone high-risk AI system rules are set for December 2, 2027, and high-risk AI systems embedded into regulated products are set for August 2, 2028. The <a href="https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/pdf/" target="_blank" rel="noopener noreferrer">Council and Parliament announcement</a> described the agreement as provisional and listed additional changes, including a new deadline for transparency solutions for artificially generated content.

That means the company plan needs two tracks. Track one is the work that is already live or still urgent for 2026: prohibited practice review, AI literacy, general-purpose AI model evidence, transparency notices, content labeling, inventory, vendor diligence, logging, and exception review. Track two is high-risk system preparation: role classification, technical documentation, data quality files, human oversight, testing, incident process, post-deployment monitoring, and EU database readiness where applicable. The teams that separate those tracks will move faster and make fewer legal assumptions.`
            },
            {
                heading: "2. Start With the Timeline Split",
                content: `The first practical step is to turn the EU AI Act into a company timeline that people can use. Do not give every team one giant deadline. Give them a date map. February 2, 2025 matters because prohibited practices and AI literacy duties are already in force. August 2, 2025 matters because general-purpose AI model obligations apply to providers, and companies buying or routing those models need vendor evidence. August 2, 2026 still matters because the Act broadly applies and transparency obligations are part of the active planning window. December 2, 2027 now matters for certain stand-alone high-risk systems under the political agreement. August 2, 2028 matters for high-risk AI embedded in regulated products.

The owner for this timeline should be legal or compliance, but the record cannot live only in legal notes. Security needs to know what to log. IT needs to know what to inventory. Procurement needs to know which vendor documents to request. Product needs to know which customer notices are required. HR needs to know when employment AI is high impact. Support needs to know when a chatbot must identify itself. Engineering needs to know when a model route creates evidence duties.

The control is a timeline register with four fields for every obligation family: date, affected workflow, owner, and evidence source. The evidence source is the important part. If the company writes "AI literacy complete" but cannot show training scope, role coverage, completion dates, and exceptions, the timeline is not operational. Metrics should include obligations with owners, workflows mapped to dates, overdue evidence, and ambiguous date assumptions that still require counsel review.`
            },
            {
                heading: "3. Map Company Role Before Mapping Duties",
                content: `The EU AI Act does not assign the same duties to every company using AI. A company may be a provider, deployer, importer, distributor, product manufacturer, or user of a general-purpose AI model depending on the system and market path. One organization can play several roles at once. A software company that builds an AI screening feature for customers may be a provider for that system. The same company may be a deployer when its HR team uses a third-party AI tool internally. It may also buy access to general-purpose models through APIs and need vendor records even if it is not the model provider.

This role mapping should happen before teams argue about controls. The wrong role assumption creates wasted work. If a team treats itself only as a buyer, it may miss duties connected to a productized AI feature. If it treats every internal AI assistant as a full high-risk system, it may overburden low-risk workflows and lose attention for the systems that actually affect rights, safety, or access to services.

The owner should be legal, with system owners providing facts. The fact record should include who built the AI system, who places it on the EU market, who controls model behavior, who configures prompts and retrieval, who uses outputs, whose rights or opportunities may be affected, and which contracts define responsibility. Data classes matter too: employee data, customer personal data, financial data, health data, biometric data, credentials, confidential business data, and public content should not be mixed in one generic field.

Evidence should include a role decision, factual basis, owner, review date, and change trigger. Metrics should include systems with completed role mapping, systems with disputed role status, vendor dependencies without contracts, and workflows where the role changed after product or market expansion.`
            },
            {
                heading: "4. Keep Prohibited Practice Review Alive",
                content: `The prohibited-practice part of the EU AI Act is not waiting for a future high-risk deadline. Companies should already have reviewed whether any AI workflow falls near prohibited territory. For most enterprise teams, the likely issue is not an obvious social scoring program. It is a less dramatic workflow that drifts into unacceptable use through bad design, aggressive automation, or misuse by a business unit.

Examples deserve careful review. Does an AI system manipulate vulnerable people in a way that materially distorts behavior? Does a biometric or emotion-related use case create legal or workplace exposure? Does a customer ranking system become unfair exclusion rather than ordinary prioritization? Does a safety, HR, education, or financial workflow rely on inferred traits that should not be used? Does a security monitoring tool create a prohibited or high-risk practice when applied to employees? The question is not whether a vendor label sounds safe. The question is what the system actually does.

The owner should be legal with privacy, HR, security, and business owners in the room. The control is a prohibited-practice screening record for AI systems that affect people, decisions, opportunities, access, safety, surveillance, or vulnerable groups. Low-risk writing tools may not need a heavy review, but systems that rank, classify, monitor, score, infer, or deny something should not skip it.

Evidence should include use-case description, affected group, decision impact, data classes, model route, source data, human review path, and final decision. Metrics should include systems screened, systems blocked, systems redesigned, and exceptions escalated. Exceptions should be rare and counsel-owned.`
            },
            {
                heading: "5. AI Literacy Is Already an Operating Requirement",
                content: `AI literacy is one of the easiest requirements to underestimate because it sounds like training. Training is part of it, but the practical requirement is role readiness. People who build, buy, approve, use, monitor, or review AI need enough understanding to handle the specific systems in front of them. A sales representative using AI for outreach needs different guidance from an HR manager using an AI screening tool. A developer calling model APIs needs different guidance from a support agent using a chatbot console.

The official EU timeline treats AI literacy as already active from February 2, 2025. Companies should therefore be able to show more than a generic "AI policy acknowledged" record. The evidence should show which roles were trained, what risks were covered, which tools were included, who completed the training, which high-impact roles received extra guidance, and which exceptions remain open. If employees use AI in real work, the company should also show how it updates guidance when new tools, models, connectors, or data rules appear.

The owner should be learning and development or HR for delivery, with legal, security, and IT defining the content. The control is a role-based AI literacy matrix. The matrix should cover allowed tools, banned uses, sensitive data, output review, hallucination risk, customer notices, intellectual property, bias, prompt injection, model limits, and escalation.

Evidence should include the training record, audience, version, completion status, exceptions, role-specific addenda, and refresh cadence. Metrics should include completion by role, overdue training, high-risk system users trained before access, and policy violations after training.`
            },
            {
                heading: "6. General-Purpose AI Model Evidence Is Not Future Work",
                content: `General-purpose AI model obligations are already active for providers under the EU AI Act, and companies that use those models still need the buyer-side evidence. The official <a href="https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act" target="_blank" rel="noopener noreferrer">Commission fact page on general-purpose AI obligations</a> says the rules apply from August 2, 2025. The Commission's August 2025 announcement also notes that models already on the market before August 2, 2025 have until August 2, 2027 to ensure compliance. For enterprise buyers, the immediate task is to know which models are in use and what provider commitments are available.

The company does not need to become the foundation-model provider for every API it buys. But it does need to know which provider is involved, which model route is approved, whether the vendor has documentation, what contractual terms apply, whether customer data is used for training, where data is processed, how logs are retained, how incidents are reported, and whether the model is considered systemic risk by the provider or regulator.

The owner should be procurement and legal, with security and AI platform owners validating technical claims. The control is a model and vendor evidence file for every approved route. That file should include the model name, provider, version or family, access method, data processing terms, retention terms, security documents, copyright or training-content information where relevant, incident contact, and approval status.

Metrics should include approved models with complete evidence, model routes without owner, vendor documents nearing expiration, and unmanaged models detected in expense reports, browser logs, API keys, or employee surveys.`
            },
            {
                heading: "7. Article 50 Transparency Still Needs 2026 Attention",
                content: `Transparency obligations are easy to leave until late because they look like copywriting. They are not. The AI Act Service Desk timeline lists transparency rules as part of the August 2, 2026 application wave. The Council and Parliament provisional agreement also refers to transparency solutions for artificially generated content, with a new deadline of December 2, 2026 in that package. Companies should not wait for the last week to decide how chatbots identify themselves, how AI-generated content is labeled, which internal tools need notices, and how customer-facing systems communicate AI involvement.

The owner depends on the surface. Product owns customer UI notices. Support owns chatbot and ticketing flows. Marketing owns public content labeling where AI-generated content is published. Legal approves language. Security and IT verify that notices match the actual system behavior. If an AI assistant is embedded into a product, the notice should not be hidden in a policy page nobody sees. If a customer talks to a bot, the interaction should make that clear at the right moment.

The control is a transparency surface inventory. List every chatbot, voice assistant, generative content workflow, synthetic media workflow, customer-facing AI feature, and employee-facing assistant that could require notice or labeling. For each surface, record user type, notice text, display location, language coverage, accessibility, version, exception, and approval.

Evidence should include screenshots, UI copy versions, deployment dates, translated notices, change approvals, and testing records. Metrics should include surfaces reviewed, notices deployed, localization gaps, products using outdated copy, and AI-generated content workflows without labeling review.`
            },
            {
                heading: "8. The High-Risk Delay Changes Prioritization, Not the Need for Files",
                content: `The most important change after the 2026 political agreement is the high-risk timing. The Commission page now states that rules for systems in certain high-risk areas, including biometrics, critical infrastructure, education, employment, migration, asylum, and border control, will apply from December 2, 2027. It also states that high-risk systems integrated into products such as lifts or toys will apply from August 2, 2028. That is a meaningful change for companies, especially those struggling to prepare full high-risk files by August 2026.

But a later date does not make the file unnecessary. It changes sequencing. Teams should use the added time to improve the quality of inventory, role mapping, data quality evidence, testing records, human review, logging, incident process, and vendor documentation. Weak files do not become strong because the deadline moved. They become strong because system owners test them against real workflows.

The owner should be the business owner of each high-risk candidate with legal and compliance support. The control is a high-risk candidate register. Include systems that make, recommend, rank, classify, or materially influence decisions in employment, education, essential services, credit, healthcare, safety, biometrics, critical infrastructure, migration, law enforcement, justice, or regulated products.

Evidence should include the use-case facts, risk classification, data classes, affected people, decision impact, vendor role, model route, human review, testing, monitoring, and exceptions. Metrics should include high-risk candidates identified, files started, files complete, missing owners, and systems removed or redesigned after classification.`
            },
            {
                heading: "9. Product-Embedded AI Needs a Separate Track",
                content: `Product-embedded AI should not be managed the same way as an employee chatbot. The 2028 date for high-risk systems embedded in regulated products gives product and engineering teams more runway, but it also raises the bar for planning. If AI is part of a medical device, industrial machine, toy, lift, safety component, or other product subject to sector rules, the AI file may need to align with product safety, conformity assessment, quality management, post-market monitoring, documentation, and customer-facing instructions.

The mistake is letting product teams say "we are covered by the product process" while the AI-specific facts are missing. Product safety records may not capture model route, training assumptions, input data quality, drift, human override, prompt configuration, retrieval source, or output monitoring. AI-specific evidence should be connected to the product file, not floating separately in a research folder.

The owner should be product compliance or product quality, with engineering and legal support. The control is a product AI addendum for any regulated product that includes AI behavior. The addendum should state what the AI does, what it does not do, what decisions or recommendations it affects, what data it uses, what failure modes exist, how users are informed, how updates are controlled, and how incidents are handled.

Evidence should include model and software version, test records, user instructions, safety analysis, update approvals, monitoring outputs, field complaints, and corrective actions. Metrics should include product AI features mapped, product files with AI addenda, safety tests complete, and unresolved AI change requests.`
            },
            {
                heading: "10. Build an Inventory That Survives Date Changes",
                content: `The AI inventory is the anchor for every EU AI Act workstream. If the timeline changes but the inventory is weak, the company remains blind. A useful inventory is not just a list of tools. It is a structured map of AI systems, workflows, owners, data classes, model providers, integrations, users, geographies, decision impact, vendors, contracts, evidence status, and risk classification.

The inventory should include obvious systems and hidden ones. Obvious systems include customer chatbots, HR screening tools, fraud detection, underwriting, medical workflow tools, education tools, product AI features, developer coding assistants, support automation, marketing generation, call summarization, and sales prospecting tools. Hidden systems include browser extensions, vendor add-ons, spreadsheet plugins, AI features bundled into SaaS tools, API experiments, local models, and departmental subscriptions purchased on cards.

The owner should be IT or AI platform operations, but each business system owner must validate their entry. The control is a mandatory intake and recurring discovery process. Intake handles new tools. Discovery catches existing tools. Procurement records, SSO logs, expense reports, browser management, API gateways, endpoint telemetry, and employee surveys can all provide signals.

Evidence should include inventory source, owner, approval status, last review, model route, data class, user group, country, and exception status. Metrics should include systems inventoried, systems discovered outside intake, owner coverage, stale entries, unclassified systems, and tools blocked or consolidated. Remova's <a href="/features/usage-analytics">usage analytics</a> and <a href="/features/audit-trails">audit trails</a> can help turn inventory from a spreadsheet into runtime evidence.`
            },
            {
                heading: "11. Classify by Use Case, Not Tool Name",
                content: `Risk classification should follow the use case, not the product label. A general AI assistant used to summarize harmless public information may be low risk. The same model used to rank job candidates, prioritize patients, evaluate student performance, recommend credit decisions, or support access to essential services can become a high-risk candidate. A vendor's marketing category is not enough. The company must know what its people do with the system.

This is especially important for general-purpose models and copilots. Employees can use the same interface for drafting an email, analyzing customer complaints, reviewing contracts, ranking prospects, summarizing performance feedback, or creating code. One tool can contain many workflows. If the inventory only says "AI assistant approved," legal and security cannot understand which obligations apply.

The owner should be the workflow owner, not only the software owner. HR owns HR uses. Finance owns credit and payment uses. Product owns customer-facing AI features. Support owns customer service automation. Engineering owns coding and internal API workflows. Legal and compliance review classification, but the business owner supplies the facts.

The control is workflow-level classification. For each workflow, record purpose, users, affected people, input data, output type, decision impact, human review, vendor, model route, and country scope. Evidence should include the classification decision, reviewer, rationale, and reassessment trigger. Metrics should include classified workflows, high-impact workflows, workflows using approved tools outside approved purposes, and classification changes after model or process updates.`
            },
            {
                heading: "12. Assign Owners by Obligation Family",
                content: `One reason EU AI Act work stalls is that companies assign one broad owner and expect them to handle everything. That does not work. Different obligation families need different owners. Legal owns interpretation and applicability. Compliance owns the control map and evidence calendar. IT owns tool inventory and access. Security owns logging, sensitive data protection, incident response, and technical guardrails. Procurement owns vendor evidence and contract intake. HR owns AI literacy and employment workflows. Product owns customer-facing notices and AI features. Business system owners own the facts of how the system is used.

The control is an owner matrix with obligation families, not just names. Include prohibited practice review, AI literacy, general-purpose AI model evidence, transparency notices, high-risk candidate file, product-embedded AI file, vendor review, data quality evidence, human oversight, logging, incident response, retention, and customer or employee communications.

Every owner should have three duties: keep the record current, approve exceptions, and attend review when the system changes. If an owner can only answer policy questions but not produce evidence, the assignment is incomplete. If an owner can produce evidence but cannot approve a change, the assignment is incomplete too.

Evidence should include owner matrix, acceptance date, backup owner, escalation path, and review cadence. Metrics should include owner gaps, overdue owner reviews, exception volume by owner, and evidence items without owner. Exceptions should be time-bound and visible. The company should never have an AI workflow where everyone agrees the issue is important but nobody can approve a fix.`
            },
            {
                heading: "13. Update Procurement Before Buying More AI",
                content: `Procurement is one of the highest leverage places to prepare for the EU AI Act. If AI tools keep entering the company without the right intake questions, the evidence gap widens. Every new AI vendor should be asked what AI features are included, which models are used, whether the vendor is a provider or deployer for the relevant system, where data is processed, whether customer data trains models, how prompts and outputs are retained, what logs are available, how incidents are reported, whether subcontractors are used, and what documentation the vendor can provide.

Procurement should also catch AI hidden inside non-AI tools. A CRM add-on may summarize calls. A helpdesk may include ticket classification. A recruitment system may rank candidates. A security tool may use behavior analytics. A document platform may include generative drafting. If the intake form only asks "are you buying an AI tool," business owners may answer no because they are buying a sales, support, HR, or productivity tool that happens to include AI.

The owner should be procurement with legal and security. The control is an AI vendor intake gate. Low-risk tools can use a short form. High-impact tools need a deeper packet. The packet should include data processing terms, security documents, model documentation, retention, training-use terms, audit rights, incident contacts, and customer-facing commitments.

Evidence should include intake answers, risk rating, approved data classes, contract terms, review date, and renewal trigger. Metrics should include vendors reviewed, AI features discovered during renewal, rejected vendors, missing documents, and tools used before approval.`
            },
            {
                heading: "14. Capture Logs Before Anyone Asks for Them",
                content: `EU AI Act preparation depends on records, and records are hardest to recreate after the fact. Companies should decide now what AI usage logs they need. For many workflows, useful logs include user, team, timestamp, tool, model route, workflow, data class, redaction event, policy event, prompt category, output category, human reviewer, action taken, exception, and downstream system. For customer-facing systems, logs should also connect to source documents, notices shown, tool calls, escalation, and final outcome.

Logging should be balanced. Recording every raw prompt and output forever can create privacy and security exposure. Recording only aggregate counts may be useless for investigation. The practical design is layered: metadata and policy events by default, sanitized transcript where needed, restricted raw access only for approved incident or legal reasons, and retention rules by workflow.

The owner should be security and IT, with privacy and legal setting retention and access boundaries. The control is an AI evidence schema. Each workflow should state which fields are logged, which are redacted, which are searchable, which are exported, and how long they are retained.

Evidence should include schema version, logging configuration, redaction rules, access roles, retention tier, and sample records. Metrics should include workflows with logging enabled, missing fields, raw access events, redaction rate, policy events, and incident reconstruction time. Remova's <a href="/features/sensitive-data-protection">sensitive data protection</a> and <a href="/features/audit-trails">audit trails</a> are built for this kind of runtime record.`
            },
            {
                heading: "15. Prepare Human Review Packets for High-Impact Workflows",
                content: `Human oversight should not be a vague sentence in a policy. For high-impact workflows, the reviewer needs a packet that makes the decision understandable. If an AI system screens resumes, recommends account action, summarizes medical or financial facts, ranks students, prioritizes support cases, or flags fraud, the human reviewer should see the input, relevant source, AI output, confidence or uncertainty where available, known limitations, policy events, sensitive data flags, and suggested next step.

The packet should also show what the human can do. Can they override the output? Can they ask for more evidence? Can they escalate? Can they halt the workflow? Can they correct the system? Can they record disagreement? Oversight that does not give the human a real control is theater. It will not protect the company when a decision is challenged.

The owner should be the workflow owner with legal, compliance, and security review. The control is a reviewer interface and decision record. The record should capture who reviewed, what they saw, what decision they made, whether they accepted or rejected the AI recommendation, and why. Sensitive data should be masked where possible while preserving enough context to make a fair decision.

Evidence should include reviewer instructions, UI screenshots, test cases, decision logs, override records, and training completion. Metrics should include review completion, override rate, disagreement rate, escalation rate, reviewer errors, and outcomes later corrected. Exceptions should require a named owner and expiry date.`
            },
            {
                heading: "16. Data Quality and Bias Files Need Real Test Sets",
                content: `High-risk AI preparation cannot rely on vendor brochures that say a model is accurate. The company needs a data quality and bias file for systems that affect people, safety, rights, opportunities, or access to services. Even when the vendor provides model-level documentation, the deployer needs evidence for its own use case, population, input data, configuration, and operating context.

A practical file should include the intended purpose, data sources, excluded data, sensitive data handling, representativeness checks, known limitations, test cases, performance metrics, bias checks where relevant, reviewer results, incident history, and change triggers. If the system uses retrieval, include source quality and update cadence. If it uses prompts, include prompt version and test results. If it uses user-uploaded documents, include file-type and content risks.

The owner should be the system owner with data science, security, privacy, and legal support. The control is a use-case test set that reflects real inputs. Do not test only clean examples. Include edge cases, missing fields, minority-language inputs, ambiguous requests, unusual names, outdated documents, contradictory data, and sensitive data. For employment, credit, education, healthcare, and essential services, involve experts who understand the domain.

Evidence should include test set description, results, reviewer notes, bias checks, mitigations, residual risk, approval, and retest date. Metrics should include test coverage, failure rate, bias findings, false positives, false negatives, and unresolved mitigations. Exceptions should state why the system can continue operating while the issue is fixed.`
            },
            {
                heading: "17. Incident Reporting Needs a Playbook Before the Incident",
                content: `AI incidents do not wait for perfect legal interpretation. A company should already know how it will handle an AI system that exposes sensitive data, gives a harmful recommendation, fails in a high-impact workflow, produces discriminatory output, makes an unauthorized tool call, misleads a customer, or breaks a transparency promise. The EU AI Act has serious-incident concepts for high-risk systems, and even outside formal reporting, companies need a repeatable internal process.

The owner should be security operations for technical incidents, legal for external reporting analysis, privacy for personal data issues, and the business owner for customer or employee impact. The control is an AI incident playbook connected to existing security and privacy incident processes. The playbook should define severity, intake channels, evidence capture, containment, customer communication, regulator analysis, vendor notification, remediation, and post-incident review.

Evidence should include incident id, affected system, model route, data classes, timeline, logs, user impact, containment actions, vendor contacts, legal analysis, communications, root cause, and corrective actions. For customer-facing AI, preserve the exact notice, response, source evidence, and handoff path. For employee or candidate systems, preserve review records and decision logs.

Metrics should include AI incidents by severity, time to triage, time to contain, systems without logs, vendor response time, repeated root causes, and overdue corrective actions. Exceptions should be escalated quickly. A system that cannot produce incident evidence should not be allowed to expand into higher-impact workflows.`
            },
            {
                heading: "18. Employee Copilots Still Need Boundaries",
                content: `Many companies focus EU AI Act work on customer products and forget employee copilots. That is a mistake. Employee-facing AI may process confidential business data, customer data, HR information, source code, financial models, legal drafts, sales records, and strategic plans. It may also influence employment, performance, security, or customer outcomes if employees rely on it without review.

The practical question is not whether every employee copilot is high risk. Most ordinary drafting and summarization will not be. The question is which employee workflows become high impact because of the task. An assistant used to write a meeting summary is different from an assistant used to rank layoffs, evaluate candidates, decide customer refunds, recommend credit action, or generate clinical notes. The company needs a workflow view.

The owner should be IT and security for the access path, with HR, legal, finance, support, and business owners defining approved uses. The control is an approved-use matrix for employee AI tools. It should state which tools are allowed, which data classes are allowed, which workflows require human review, which workflows are banned, which model routes are approved, and when a business owner must request an exception.

Evidence should include tool approval, user groups, data rules, model route, role access, training, policy events, and exception approvals. Metrics should include active users by tool, sensitive data blocks, prohibited workflow attempts, unmanaged tools detected, and high-impact workflow requests. Remova's <a href="/features/role-access-control">role access controls</a> and <a href="/features/policy-guardrails">policy guardrails</a> help enforce these boundaries where work happens.`
            },
            {
                heading: "19. Customer Notices and Content Labels Need Product Discipline",
                content: `Customer notices and AI-generated content labels should be treated like product requirements, not legal copy pasted at the end. If a chatbot interacts with customers, the user should know they are interacting with AI. If content is artificially generated or manipulated in a way that triggers labeling duties, the label should travel with the content through the workflow. If a customer-facing AI feature makes recommendations or materially changes an experience, product teams should decide what explanation is needed.

The owner should be product management with legal approval and design support. The control is a notice and label specification. It should define when notice is shown, what the wording says, where it appears, what languages are supported, how screen readers handle it, how it appears on mobile, how changes are versioned, and what evidence proves deployment.

This is also a brand issue. Bad notices either hide the AI involvement or overexplain everything until users ignore them. Useful notices are plain, timely, and specific. "You are chatting with an AI assistant" is different from "AI may help summarize your support case before a human replies." The right text depends on the workflow.

Evidence should include UI screenshots, copy version, legal approval, deployment date, localization, accessibility testing, and exception list. Metrics should include notices deployed, products missing notices, label defects, user confusion reports, and customer complaints tied to AI disclosure. Exceptions should be approved by legal and product together, not left to individual teams.`
            },
            {
                heading: "20. How Remova Fits the 2026 Work",
                content: `Remova fits the practical middle layer between written requirements and daily AI usage. The EU AI Act timeline may move, but companies still need to know which AI workflows exist, who uses them, which model route applies, which data classes are present, which controls fired, which exceptions were approved, and what evidence can be produced later. That evidence is hard to maintain if every model, vendor, assistant, and business unit has separate logs.

With Remova, teams can route work through approved <a href="/models">models</a>, apply <a href="/features/sensitive-data-protection">sensitive data masking</a>, enforce <a href="/features/role-access-control">role access</a>, define <a href="/features/preset-workflows">preset workflows</a>, track <a href="/features/usage-analytics">usage analytics</a>, set <a href="/features/department-budgets">department budgets</a>, and preserve <a href="/features/audit-trails">audit trails</a>. That does not replace legal analysis. It gives legal, security, IT, procurement, and business teams the operational record they need.

For the EU AI Act timeline, the Remova workflow can start with inventory and approved model routes. Then add data class rules, workflow labels, owner fields, review events, and exception records. Customer-facing systems may still live in product code. HR systems may still live in HR platforms. Helpdesks may still own tickets. Remova helps standardize the AI-specific record across those environments.

The useful outcome is not a giant compliance binder. It is a daily evidence trail: who used AI, for what workflow, with what data protection, through which model, under which rule, with which review, and what happened after.`
            },
            {
                heading: "21. The 30-Day Plan",
                content: `In the first thirty days, focus on visibility and date correction. Update the company EU AI Act timeline to reflect the current split between already-active duties, 2026 transparency work, delayed stand-alone high-risk timing, and product-embedded timing. Add a note that the May 2026 agreement was political and that legal will confirm final adopted text. Then inventory the top AI systems, starting with customer-facing AI, HR, support, finance, security, product AI features, coding tools, and model APIs.

The owner should be compliance or legal for the timeline and IT for inventory collection. Each business unit should validate its tools. Do not wait for a perfect enterprise survey. Use procurement data, SSO, expense reports, browser management, API usage, and known product features to build the first version.

The control output is a ranked inventory: systems with likely 2026 obligations, high-risk candidates, product-embedded candidates, general-purpose model dependencies, customer-facing transparency surfaces, and low-risk employee tools. For each, name an owner and evidence gap.

Evidence should include the updated timeline, source links, inventory export, owner assignments, and open questions. Metrics should include top systems inventoried, systems with owner, systems with missing role classification, notices missing, vendor documents missing, and unmanaged tools discovered. The goal of the first month is not full completion. It is to stop guessing.`
            },
            {
                heading: "22. The 60-Day Plan",
                content: `By day sixty, move from visibility to control design. For every customer-facing AI system, decide whether a notice, chatbot disclosure, generated-content label, or source explanation is needed. For every approved model route, collect vendor and model evidence. For every high-risk candidate, start the system file. For every employee AI tool, publish approved and banned workflows. For every data class, decide what is allowed, masked, blocked, logged, or escalated.

The owner should shift from central teams to system owners. Legal and compliance should not write every record themselves. They should define the template and review the result. Product writes product AI files. HR writes employment AI files. Support writes chatbot and ticket automation files. Security writes logging and incident controls. Procurement writes vendor evidence records.

The control output is a set of templates that teams can actually complete: AI system profile, workflow classification, transparency surface record, vendor evidence file, high-risk candidate file, human review packet, incident playbook, and exception record. Each template should have required fields and examples.

Evidence should include completed templates for the top systems, notice screenshots, model/vendor records, logging schema, redaction rules, and exception approvals. Metrics should include templates completed, rejected records, missing evidence by owner, time to approve vendor AI, and high-risk candidate file completeness. The goal by day sixty is a repeatable operating model for the systems that matter most.`
            },
            {
                heading: "23. The 90-Day Plan",
                content: `By day ninety, test the system instead of admiring the plan. Pick real workflows and run tabletop reviews. For a customer chatbot, can the team show the user notice, model route, source documents, transcript retention, sensitive data redaction, escalation, and incident replay? For an HR AI workflow, can the team show training, human review, candidate data rules, decision record, bias test, and exception handling? For a product AI feature, can the team show the product file, user instructions, update control, and monitoring record?

The owner should be the compliance lead or program owner, but each workflow owner must demonstrate their own evidence. This is important. A central spreadsheet that says "complete" means little if the business owner cannot explain where the evidence lives and how the workflow changes when the model changes.

The control output is a ninety-day review report with findings, owners, due dates, and decisions. Include the issues that require leadership authority: systems to pause, vendors to replace, access to restrict, notices to ship, logs to add, and risky workflows to redesign.

Evidence should include tabletop notes, sample records, screenshots, logs, owner attestations, unresolved gaps, and remediation dates. Metrics should include workflows tested, evidence pass rate, incident replay time, missing logs, raw sensitive data exposure, and overdue remediations. The goal by day ninety is proof that the company can operate the timeline, not just describe it.`
            },
            {
                heading: "24. Metrics Leaders Should Review",
                content: `Leaders do not need every legal detail each week. They need a concise set of metrics that show whether EU AI Act preparation is moving. Start with inventory coverage: how many AI systems are known, classified, owned, approved, and still unknown. Add timeline coverage: which obligations are already active, which are due in 2026, which are delayed, and which still require legal confirmation. Add evidence coverage: which systems can produce logs, notices, vendor records, training records, human review records, and incident records.

Then add risk concentration. Which departments have the most AI usage? Which systems touch employee, customer, financial, health, biometric, security, or confidential data? Which workflows affect opportunities, access, safety, or legal rights? Which vendors lack documentation? Which model routes are unmanaged? Which tools were discovered outside procurement?

The owner should be the executive sponsor with inputs from legal, security, IT, procurement, HR, product, and business teams. The control is a monthly AI Act readiness dashboard. It should not be a vanity chart. Every red item should have an owner and action.

Metrics should include inventory completeness, owner coverage, role mapping completion, high-risk candidates, notices deployed, AI literacy completion, approved model routes, vendor evidence completeness, logging coverage, redaction events, exceptions, incidents, and remediation age. Exceptions should be visible. If a high-impact workflow lacks logs or owner, leadership should know before the regulator, customer, employee, or incident report forces the conversation.`
            },
            {
                heading: "25. Final Checklist for the 2026 Timeline",
                content: `Before calling the company ready for the next EU AI Act phase, run a simple checklist. Update the timeline with current official dates and a legal-status note. Separate already-active duties, 2026 duties, delayed stand-alone high-risk duties, and product-embedded high-risk duties. Name owners for each obligation family. Build the AI inventory. Classify workflows by use case. Map company role. Review prohibited practices. Document AI literacy. Collect general-purpose model evidence. Inventory transparency surfaces. Prepare notices and labels. Start high-risk candidate files. Create product AI addenda where needed.

Then test operations. Can the team find every approved model route? Can procurement identify AI features inside ordinary SaaS tools? Can product show notices? Can HR show role-specific training? Can security reconstruct an AI incident? Can privacy explain retention and redaction? Can business owners show human review records for high-impact workflows? Can legal see exceptions before they become permanent?

The final standard is practical. The EU AI Act delay should give companies more time to build better evidence, not an excuse to keep vague plans. The teams that win the next phase will not be the ones with the longest policy. They will be the ones that can show, workflow by workflow, what AI is used, who owns it, which data it touches, which rule applies, which evidence exists, and what changes when the timeline or system changes.`
            },
        ],
        faqs: [
            {
                question: "Did the EU AI Act get delayed in 2026?",
                answer: "Some high-risk AI system timelines changed after the May 2026 political agreement on AI Act simplification. The Commission page now lists December 2, 2027 for certain stand-alone high-risk systems and August 2, 2028 for high-risk systems embedded in regulated products. Other duties, including AI literacy, prohibited practice review, general-purpose AI model evidence, and transparency planning, still require attention.",
            },
            {
                question: "What still applies in 2026 under the EU AI Act?",
                answer: "Companies should still focus on already-active prohibited-practice and AI literacy obligations, general-purpose AI model evidence, transparency obligations, chatbot notices, content labeling, AI inventory, vendor records, logging, incident playbooks, and high-risk candidate preparation.",
            },
            {
                question: "Should companies pause high-risk AI work until 2027?",
                answer: "No. The extra time should be used to improve system files, role mapping, data quality evidence, human review, monitoring, vendor records, and incident processes. Waiting until the new deadline will leave the same evidence gaps in place.",
            },
            {
                question: "Does the EU AI Act matter for US companies?",
                answer: "It can. Companies outside the EU may be affected if they place AI systems on the EU market or use AI outputs connected to people in the EU. Applicability depends on the system, role, market path, and use case, so companies should confirm with counsel.",
            },
            {
                question: "What should companies do first after the EU AI Act delay?",
                answer: "Update the timeline, build or refresh the AI inventory, assign owners, identify customer-facing transparency surfaces, collect model and vendor evidence, and start files for high-risk candidates instead of treating the delay as a complete reset.",
            },
            {
                question: "How does Remova help with EU AI Act preparation?",
                answer: "Remova helps teams route approved models, mask sensitive data, enforce role access, track usage, capture audit trails, and connect AI workflows to owners, policy events, exceptions, and review evidence.",
            },
        ],
    },
];
