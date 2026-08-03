from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "docs"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

PAGE_WIDTH, PAGE_HEIGHT = A4
INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#475569")
ACCENT = colors.HexColor("#4f46e5")
PALE = colors.HexColor("#eef2ff")
LINE = colors.HexColor("#dbe3ef")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverKicker", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ACCENT, spaceAfter=8, uppercase=True))
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=29, leading=33, textColor=INK, alignment=TA_LEFT, spaceAfter=15))
styles.add(ParagraphStyle(name="CoverDeck", parent=styles["BodyText"], fontName="Helvetica", fontSize=13, leading=19, textColor=MUTED, spaceAfter=20))
styles.add(ParagraphStyle(name="SectionTitle", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=18, leading=22, textColor=INK, spaceBefore=12, spaceAfter=8))
styles.add(ParagraphStyle(name="CardTitle", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED, spaceAfter=7))
styles.add(ParagraphStyle(name="Checklist", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=14, leftIndent=12, firstLineIndent=-12, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="Reference", parent=styles["BodyText"], fontName="Helvetica", fontSize=8, leading=11, textColor=MUTED, spaceAfter=4))


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 17 * mm, PAGE_WIDTH - 18 * mm, 17 * mm)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(INK)
    canvas.drawString(18 * mm, 11 * mm, "REMOVA")
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(PAGE_WIDTH - 18 * mm, 11 * mm, f"remova.org  |  {doc.page}")
    canvas.restoreState()


def card(title, body):
    content = [Paragraph(title, styles["CardTitle"]), Paragraph(body, styles["BodySmall"])]
    table = Table([[content]], colWidths=[PAGE_WIDTH - 44 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.5, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return table


def checklist(items):
    return [Paragraph(f"[ ]&nbsp;&nbsp;{item}", styles["Checklist"]) for item in items]


def build_pdf(filename, kicker, title, deck, sections, references):
    path = OUTPUT_DIR / filename
    doc = BaseDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        topMargin=22 * mm,
        bottomMargin=23 * mm,
        title=title,
        author="Remova",
        subject=deck,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
    doc.addPageTemplates([PageTemplate(id="remova", frames=[frame], onPage=header_footer)])

    story = [
        Spacer(1, 16 * mm),
        Paragraph(kicker.upper(), styles["CoverKicker"]),
        Paragraph(title, styles["CoverTitle"]),
        Paragraph(deck, styles["CoverDeck"]),
        card("How to use this resource", "Assign one accountable owner, work through each section with security, legal, procurement, IT, and the business sponsor, then save decisions and evidence with the vendor or AI program record."),
        Spacer(1, 8 * mm),
    ]

    for section_title, intro, items in sections:
        story.extend([
            KeepTogether([
                Paragraph(section_title, styles["SectionTitle"]),
                Paragraph(intro, styles["BodySmall"]),
            ]),
            *checklist(items),
            Spacer(1, 4 * mm),
        ])

    story.extend([
        Paragraph("Reference frameworks", styles["SectionTitle"]),
        Paragraph("Use the latest applicable versions and confirm legal requirements with qualified counsel for your jurisdiction and use case.", styles["BodySmall"]),
        *[Paragraph(reference, styles["Reference"]) for reference in references],
    ])
    doc.build(story)
    return path


security_sections = [
    ("1. Vendor and service boundary", "Define exactly what is being purchased before evaluating controls.", [
        "Name the service owner, business sponsor, intended users, and approved workflows.",
        "List model providers, subprocessors, hosting regions, support access, and external connectors.",
        "Document whether customer data, employee data, source code, credentials, or regulated data may enter the service.",
        "Record contract term, renewal date, pricing basis, data-use terms, and an exit path.",
    ]),
    ("2. Identity and access", "Access should follow company identity, least privilege, and lifecycle controls.", [
        "Require SSO for workforce access and MFA for privileged administration.",
        "Map roles to approved models, tools, data classes, and administrative actions.",
        "Test joiner, mover, leaver, dormant-account, break-glass, and service-account processes.",
        "Confirm access logs show who changed policy, routing, retention, and connector settings.",
    ]),
    ("3. Data protection and retention", "Decide what the service can receive, store, reuse, and disclose.", [
        "Confirm encryption in transit and at rest, key ownership, backup scope, and deletion behavior.",
        "Define prompt, response, file, embedding, log, support, and backup retention separately.",
        "Verify whether inputs or outputs are used for model training, product improvement, or human review.",
        "Test redaction, export, deletion, legal hold, regional routing, and tenant isolation.",
    ]),
    ("4. AI-specific security", "Evaluate risks created by prompts, models, retrieval, agents, and tools.", [
        "Test prompt injection, sensitive data disclosure, unsafe output, excessive agency, and resource abuse.",
        "Require allowlisted tools, scoped credentials, outbound controls, and approval for high-impact actions.",
        "Record model changes, system instructions, retrieval sources, policy events, tool calls, and overrides.",
        "Define quality, safety, security, and cost thresholds with a rollback process.",
    ]),
    ("5. Assurance and incident readiness", "Evidence should be reviewable before launch and during operation.", [
        "Review independent assurance, penetration testing scope, vulnerability handling, and remediation timelines.",
        "Agree notification timelines, investigation support, evidence preservation, and customer communication duties.",
        "Run an incident tabletop covering data exposure, compromised credentials, harmful output, and provider outage.",
        "Set an approval decision, open risks, compensating controls, owner, due date, and review cadence.",
    ]),
]

governance_sections = [
    ("1. Establish the operating model", "Make AI ownership and decision rights visible.", [
        "Name an executive sponsor and accountable owners across security, privacy, legal, procurement, IT, and business teams.",
        "Define which decisions are centralized and which may be made by departments.",
        "Create one intake path for AI tools, models, agents, connectors, and high-impact use cases.",
        "Set review cadences for the program, vendors, models, incidents, exceptions, and performance.",
    ]),
    ("2. Build the inventory", "A useful inventory connects technology to purpose, data, people, and evidence.", [
        "Record owner, users, workflow, model, vendor, deployment, data classes, regions, connectors, and lifecycle state.",
        "Include pilots, embedded AI features, browser tools, APIs, agents, and employee-purchased services.",
        "Link each item to risk assessment, approval, contract, controls, tests, training, and incidents.",
        "Define discovery methods and a process for reconciling unknown or duplicate tools.",
    ]),
    ("3. Classify risk and approve use", "Risk should be assessed at the workflow level, not only the vendor level.", [
        "Evaluate impact, affected people, decision authority, data sensitivity, autonomy, reversibility, and regulatory context.",
        "Define prohibited, restricted, pilot, approved, and deprecated states with clear entry and exit criteria.",
        "Require human review and appeal paths where outputs may materially affect people or critical operations.",
        "Document accepted risk, exceptions, compensating controls, owner, expiry date, and reassessment triggers.",
    ]),
    ("4. Put controls into daily work", "Policies should become technical and operational defaults.", [
        "Enforce identity, role access, model allowlists, data handling, regional routing, retention, and spend limits.",
        "Use approved workflow templates for recurring work and require approval before consequential agent actions.",
        "Provide contextual warnings, safe alternatives, escalation routes, and role-based training.",
        "Keep audit evidence for policy decisions, redactions, overrides, tool calls, approvals, and model changes.",
    ]),
    ("5. Measure and improve", "Operate AI governance as a living management system.", [
        "Track adoption, blocked events, sensitive-data detections, exceptions, incidents, model changes, cost, quality, and user outcomes.",
        "Review metrics by workflow and risk tier so high activity is not confused with business value.",
        "Test controls regularly and record failures, corrective actions, owners, deadlines, and verification evidence.",
        "Retire unused workflows, revoke access, preserve required records, and migrate users to approved alternatives.",
    ]),
]

references = [
    "NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework",
    "NIST Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework",
    "OWASP Top 10 for LLM Applications: https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    "ISO/IEC 42001 overview: https://www.iso.org/standard/81230.html",
]

build_pdf(
    "ai-security-procurement-checklist.pdf",
    "Enterprise AI procurement",
    "AI Security Procurement Checklist",
    "A practical buyer checklist for evaluating AI vendors, model services, assistants, and agent platforms before contract and launch.",
    security_sections,
    references,
)

build_pdf(
    "enterprise-ai-governance-handbook.pdf",
    "Enterprise AI governance",
    "Enterprise AI Governance Handbook",
    "A concise operating guide for establishing ownership, inventory, risk decisions, controls, evidence, and continuous improvement across enterprise AI use.",
    governance_sections,
    references,
)

print("Generated buyer-facing PDFs in public/docs")
