import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = join(process.cwd(), "public/images/blog");

const markets = [
  {
    slug: "ai-governance-new-york-financial-services",
    label: "New York",
    industry: "Financial Services",
    accent: "#2563eb",
    second: "#10b981",
  },
  {
    slug: "ai-governance-california-saas-privacy",
    label: "California",
    industry: "SaaS Privacy",
    accent: "#0f766e",
    second: "#f59e0b",
  },
  {
    slug: "ai-governance-texas-energy-industrial",
    label: "Texas",
    industry: "Energy and Industrial",
    accent: "#b91c1c",
    second: "#2563eb",
  },
  {
    slug: "ai-governance-boston-healthcare-life-sciences",
    label: "Boston",
    industry: "Healthcare and Life Sciences",
    accent: "#7c3aed",
    second: "#14b8a6",
  },
  {
    slug: "ai-governance-seattle-cloud-developer-teams",
    label: "Seattle",
    industry: "Cloud and Developer Teams",
    accent: "#0369a1",
    second: "#22c55e",
  },
  {
    slug: "ai-governance-london-financial-services",
    label: "London",
    industry: "Financial Services",
    accent: "#1d4ed8",
    second: "#dc2626",
  },
  {
    slug: "ai-governance-german-manufacturers",
    label: "Germany",
    industry: "Manufacturing",
    accent: "#111827",
    second: "#facc15",
  },
  {
    slug: "ai-governance-french-enterprises",
    label: "France",
    industry: "Enterprise Privacy",
    accent: "#1e40af",
    second: "#ef4444",
  },
  {
    slug: "ai-governance-dutch-saas-platform-teams",
    label: "Netherlands",
    industry: "SaaS and Platform Teams",
    accent: "#f97316",
    second: "#2563eb",
  },
  {
    slug: "ai-governance-swiss-finance-pharma",
    label: "Switzerland",
    industry: "Finance and Pharma",
    accent: "#dc2626",
    second: "#0f172a",
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function text(value, x, y, size, weight = 800, fill = "#0f172a", extra = "") {
  return `<text x="${x}" y="${y}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" ${extra}>${escapeXml(value)}</text>`;
}

function heroSvg(market) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(market.label)} AI governance control visual</title>
  <desc id="desc">Buyer-facing control visual for ${escapeXml(market.industry)} governance controls.</desc>
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#e5e7eb" stroke-width="1"/>
    </pattern>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#0f172a" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.85"/>
  <path d="M0 512 C210 472 290 586 490 535 C690 484 805 405 1200 462 L1200 630 L0 630 Z" fill="${market.accent}" opacity="0.08"/>
  <rect x="74" y="72" width="1052" height="486" rx="26" fill="#ffffff" stroke="#d8e0ed" stroke-width="2" filter="url(#soft)"/>
  <circle cx="944" cy="188" r="78" fill="${market.accent}" opacity="0.12"/>
  <circle cx="1010" cy="270" r="116" fill="${market.second}" opacity="0.11"/>
  <rect x="112" y="118" width="254" height="46" rx="23" fill="${market.accent}" opacity="0.1"/>
  ${text(`${market.label} / ${market.industry}`, 134, 148, 18, 900, market.accent)}
  ${text("Localized AI", 112, 244, 64, 950)}
  ${text("Governance Guide", 112, 308, 64, 950)}
  ${text("Controls that connect data, users, models, workflows, and audit evidence.", 116, 370, 24, 800, "#475569")}
  <rect x="112" y="428" width="210" height="82" rx="18" fill="#f8fafc" stroke="#dbe3ef"/>
  ${text("Policy", 140, 462, 18, 900, "#64748b")}
  ${text("Allow / block", 140, 492, 24, 950, market.accent)}
  <rect x="346" y="428" width="210" height="82" rx="18" fill="#f8fafc" stroke="#dbe3ef"/>
  ${text("Data", 374, 462, 18, 900, "#64748b")}
  ${text("Redact", 374, 492, 24, 950, market.second)}
  <rect x="580" y="428" width="210" height="82" rx="18" fill="#f8fafc" stroke="#dbe3ef"/>
  ${text("Evidence", 608, 462, 18, 900, "#64748b")}
  ${text("Audit trail", 608, 492, 24, 950, "#0f172a")}
  <g transform="translate(860 350)">
    <rect x="0" y="0" width="184" height="122" rx="22" fill="#111827"/>
    <path d="M42 78 L78 42 L116 78 L146 48" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="42" cy="78" r="8" fill="${market.second}"/>
    <circle cx="78" cy="42" r="8" fill="${market.second}"/>
    <circle cx="116" cy="78" r="8" fill="${market.second}"/>
    <circle cx="146" cy="48" r="8" fill="${market.second}"/>
  </g>
</svg>`;
}

function matrixSvg(market) {
  const nodes = ["User", "Data", "Model", "Workflow", "Audit"];
  const cards = nodes
    .map((node, index) => {
      const x = 92 + index * 208;
      const connector = index < nodes.length - 1
        ? `<path d="M${x + 152} 286 L${x + 196} 286" stroke="${market.accent}" stroke-width="5" stroke-linecap="round"/><path d="M${x + 188} 274 L${x + 204} 286 L${x + 188} 298" fill="none" stroke="${market.accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`
        : "";
      return `<rect x="${x}" y="224" width="152" height="124" rx="18" fill="#ffffff" stroke="#dbe3ef" stroke-width="2"/>
      ${text(node, x + 76, 294, 23, 950, "#0f172a", 'text-anchor="middle"')}
      ${connector}`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(market.label)} AI governance evidence matrix</title>
  <desc id="desc">A control path for localized AI governance evidence.</desc>
  <defs>
    <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
      <path d="M 42 0 L 0 0 0 42" fill="none" stroke="#e5e7eb" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="#ffffff"/>
  <rect width="1200" height="675" fill="url(#grid)" opacity="0.8"/>
  <rect x="70" y="70" width="1060" height="535" rx="26" fill="#ffffff" stroke="#d8e0ed" stroke-width="2"/>
  ${text(`${market.label} AI Governance Evidence Matrix`, 108, 138, 38, 950)}
  ${text(`${market.industry}: every AI request should leave usable evidence without exposing unnecessary content.`, 110, 178, 21, 800, "#475569")}
  ${cards}
  <rect x="108" y="420" width="984" height="118" rx="20" fill="#f8fafc" stroke="#dbe3ef"/>
  ${text("Control decision", 142, 464, 20, 950, market.accent)}
  ${text("Evaluate identity, data class, approved model route, allowed workflow, budget owner, and required review before the model call completes.", 142, 500, 20, 800, "#334155")}
  ${text("Evidence retained", 142, 566, 20, 950, market.second)}
  ${text("Store policy result, redaction event, model route, exception status, spend signal, and reviewer decision for audit-ready reconstruction.", 348, 566, 20, 800, "#334155")}
</svg>`;
}

await mkdir(outDir, { recursive: true });

for (const market of markets) {
  await writeFile(join(outDir, `${market.slug}-hero.svg`), heroSvg(market));
  await writeFile(join(outDir, `${market.slug}-matrix.svg`), matrixSvg(market));
}

console.log(`[localized-assets] Wrote ${markets.length * 2} SVG assets to ${outDir}`);
