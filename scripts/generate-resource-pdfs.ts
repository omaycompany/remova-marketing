import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { resourceGuides } from "../content/resources";

type PdfLine = {
    text: string;
    size: number;
    x: number;
    y: number;
    page: number;
};

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN_X = 54;
const MARGIN_TOP = 54;
const MARGIN_BOTTOM = 54;
const LINE_GAP = 5;
const BODY_WIDTH = PAGE_WIDTH - MARGIN_X * 2;

const sourceNotes: Record<string, string[]> = {
    "ultimate-guide-trade-privacy-2025": [
        "Source context: 19 CFR 103.31 allows publication of vessel manifest fields and provides a confidentiality process for importer, consignee, exporter, and shipper names and addresses.",
        "CBP states that vessel manifest information may be shared with paid subscribers unless a confidentiality request is granted.",
    ],
    "importyeti-removal-guide": [
        "Source context: ImportYeti describes its database as public customs shipment records from bills of lading and says companies may be missing when records are private or shipment mode is not sea freight.",
        "ImportYeti points people with publicly filed personal information to the CBP Vessel Manifest Confidentiality Request and its contact form.",
    ],
    "coverage-windows-explained": [
        "Source context: CBP vessel manifest data can be compiled daily, and trade platforms may refresh from public or subscriber data after a prior page-level change.",
    ],
    "isms-scope-statement": [
        "Source context: ISO/IEC 27001:2022 defines requirements for an information security management system and treats scope as part of the management-system boundary.",
    ],
};

function cleanText(value: string) {
    return value
        .replace(/<a\b[^>]*>/g, "")
        .replace(/<\/a>/g, "")
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function wrapText(text: string, size: number, width = BODY_WIDTH) {
    const maxChars = Math.max(24, Math.floor(width / (size * 0.53)));
    const words = cleanText(text).split(" ");
    const lines: string[] = [];
    let line = "";

    for (const word of words) {
        const next = line ? `${line} ${word}` : word;
        if (next.length > maxChars && line) {
            lines.push(line);
            line = word;
        } else {
            line = next;
        }
    }

    if (line) lines.push(line);
    return lines;
}

function escapePdf(value: string) {
    return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(lines: PdfLine[]) {
    const pages = groupLinesByPage(lines);
    const objects: string[] = [];
    objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";

    const pageIds: number[] = [];
    let nextObjectId = 4;

    for (const page of pages) {
        const pageObjectId = nextObjectId++;
        const contentObjectId = nextObjectId++;
        pageIds.push(pageObjectId);

        const stream = page
            .map((line) => `BT /F1 ${line.size} Tf 1 0 0 1 ${line.x} ${line.y} Tm (${escapePdf(line.text)}) Tj ET`)
            .join("\n");

        objects[contentObjectId] = `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`;
        objects[pageObjectId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectId} 0 R >>`;
    }

    objects[2] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

    let output = "%PDF-1.4\n";
    const offsets = [0];
    for (let id = 1; id < objects.length; id += 1) {
        offsets[id] = Buffer.byteLength(output);
        output += `${id} 0 obj\n${objects[id]}\nendobj\n`;
    }

    const xrefOffset = Buffer.byteLength(output);
    output += `xref\n0 ${objects.length}\n0000000000 65535 f\n`;
    for (let id = 1; id < objects.length; id += 1) {
        output += `${String(offsets[id]).padStart(10, "0")} 00000 n\n`;
    }
    output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
    return output;
}

function groupLinesByPage(sourceLines: PdfLine[]) {
    const pages: PdfLine[][] = [];
    for (const line of sourceLines) {
        pages[line.page] ??= [];
        pages[line.page].push(line);
    }
    return pages.filter(Boolean);
}

function layoutResource(resource: (typeof resourceGuides)[number]) {
    const lines: PdfLine[] = [];
    let y = PAGE_HEIGHT - MARGIN_TOP;
    let page = 0;

    const addLine = (text: string, size: number, indent = 0) => {
        if (y < MARGIN_BOTTOM) {
            page += 1;
            y = PAGE_HEIGHT - MARGIN_TOP;
        }
        lines.push({ text: cleanText(text), size, x: MARGIN_X + indent, y, page });
        y -= size + LINE_GAP;
    };

    const addWrapped = (text: string, size = 10, indent = 0, gap = 8) => {
        for (const line of wrapText(text, size, BODY_WIDTH - indent)) addLine(line, size, indent);
        y -= gap;
    };

    const addHeading = (text: string) => {
        y -= 8;
        addLine(text, 14);
        y -= 2;
    };

    addLine(resource.title, 22);
    addLine(resource.eyebrow, 10);
    y -= 8;
    addWrapped(resource.description, 11, 0, 10);
    addWrapped(`Audience: ${resource.audience}`, 10, 0, 10);

    addHeading("What This Resource Covers");
    for (const item of resource.summary) addWrapped(`- ${item}`, 10, 10, 3);

    for (const section of resource.sections) {
        addHeading(section.heading);
        addWrapped(section.body, 10, 0, 8);
    }

    addHeading("Before You Use This PDF");
    for (const item of resource.checklist) addWrapped(`- ${item}`, 10, 10, 3);

    const notes = sourceNotes[resource.slug];
    if (notes?.length) {
        addHeading("Fact-Check Notes");
        for (const note of notes) addWrapped(`- ${note}`, 9, 10, 3);
    }

    addHeading("Related Links");
    for (const link of resource.relatedLinks) addWrapped(`- ${link.label}: https://www.remova.org${link.href}`, 9, 10, 3);
    addWrapped(`Canonical page: https://www.remova.org/resources/${resource.slug}`, 9, 0, 0);

    return lines;
}

for (const resource of resourceGuides) {
    const target = path.join(process.cwd(), "public", resource.pdfPath.replace(/^\//, ""));
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, buildPdf(layoutResource(resource)), "binary");
    console.log(`Generated ${target}`);
}
