import type { Metadata } from "next";
import Link from 'next/link';
import { ShieldCheck, Lock, Coins, EyeOff, Building2, Layers, Check, Handshake, Brain, Sparkles, Cpu, FileText, BarChart3, History, Zap, Shield, MessageSquare, Bot, ToggleRight, LayoutDashboard, Database, Ghost, Smartphone, Wand2, FileSpreadsheet, ShieldAlert, XCircle, Search, Server, FileLock2, AlertTriangle, Workflow, FileType, Key, BoxSelect, MonitorDot, Gauge, Scale, BookOpen, Fingerprint, Eye, LockKeyhole, Umbrella, RefreshCw, Slash, FileClock, SearchX, UserMinus, Diamond, Users, UserCog, UserCheck, KeyRound, Plug, Wallet, Receipt, Hourglass, Bell, CreditCard, Antenna, MessagesSquare, FileOutput, Printer } from 'lucide-react';
import FAQ from '@/components/ui/FAQ';
import ExternalAppLink from '@/components/ui/ExternalAppLink';
import SafeEmailLink from '@/components/ui/SafeEmailLink';
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, SITE_URL, buildKeywords } from '@/lib/seo';

export const metadata: Metadata = {
    title: "Remova | Enterprise AI Governance for Teams",
    description: "Remova helps companies give teams access to ChatGPT, Claude, Gemini, and other AI models with policy controls, sensitive-data masking, role-based access, audit visibility, and department-level budget controls.",
    keywords: buildKeywords([
        "enterprise ai governance platform",
        "ai control layer",
        "model agnostic ai governance",
        "safer ai for teams",
        "chatgpt for work",
        "ai data safety",
        "ai access controls",
        "ai policy controls",
        "sensitive data protection",
        "ai budget controls"
    ]),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Remova | Enterprise AI Governance for Teams",
        description: "Deploy AI with data safety, access controls, audit visibility, and team-level budget control.",
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [DEFAULT_OG_IMAGE],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Remova | Enterprise AI Governance for Teams",
        description: "Deploy AI with data safety, privacy protections, policy guardrails, and budget controls.",
        images: [DEFAULT_OG_IMAGE_URL],
    },
};

const homepageFaqs = [
    {
        question: "What is Remova?",
        answer: "Remova is an enterprise AI governance platform that helps companies give teams access to multiple AI models with policy controls, sensitive-data masking, role-based access, audit visibility, and budget management."
    },
    {
        question: "How does Remova ensure data privacy?",
        answer: "Remova applies policy checks and sensitive-data controls before requests reach external models, with visibility for administrators and governance teams."
    },
    {
        question: "Can I manage AI costs across different departments?",
        answer: "Yes. Remova lets organizations define department-level budgets, set hard and soft thresholds, and track spend trends by team."
    },
    {
        question: "Does Remova support on-premises deployment?",
        answer: "Yes. Remova supports private deployment patterns for organizations with strict security and data residency requirements."
    },
    {
        question: "What AI models are supported?",
        answer: "Remova supports a broad model catalog, so teams can use approved models from one governed interface."
    },
    {
        question: "How is model usage billed?",
        answer: "Each monthly seat includes $50 in Remova model credits. Usage is charged at the Remova rates shown on the /models page and deducted from your monthly credits. If you need more, you can top up. Companies can bring their own provider keys, but the monthly Remova subscription is still required."
    },
    {
        question: "What security documents are available for procurement review?",
        answer: "Remova can provide a security review packet with DPA language, subprocessors, architecture diagrams, encryption and retention details, incident-response process, and a current SOC 2 status summary."
    }
];

const aiProviders = [
    { name: "ChatGPT", logoSrc: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ChatGPT-Logo.svg" },
    { name: "Claude", logoSrc: "https://cdn.simpleicons.org/anthropic/111827" },
    { name: "Gemini", logoSrc: "https://cdn.simpleicons.org/googlegemini/111827" },
    { name: "Meta", logoSrc: "https://cdn.simpleicons.org/meta/111827" },
    { name: "Mistral AI", logoSrc: "https://cdn.simpleicons.org/mistralai/111827" },
    { name: "DeepSeek", logoSrc: "https://cdn.simpleicons.org/deepseek/111827" },
    { name: "xAI", logoSrc: "https://cdn.simpleicons.org/x/111827" },
    { name: "Perplexity", logoSrc: "https://cdn.simpleicons.org/perplexity/111827" },
];

export default function LandingPage() {
    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homepageFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <div className="flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative px-4 pt-48 pb-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto text-center max-w-[90rem] relative z-10">
                    <h1 className="mb-8 text-6xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl lg:text-[9rem] xl:text-[9.5rem] leading-[0.92] select-none uppercase">
                        A Safer Way <br /> To Use AI
                    </h1>
                    <p className="mx-auto mb-12 max-w-3xl text-2xl text-slate-600 dark:text-slate-300 sm:text-3xl leading-relaxed font-medium">
                        Let your team use ChatGPT, Claude, and Gemini without losing control of company data.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-20">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="w-full sm:w-auto rounded-[2.5rem] bg-slate-900 dark:bg-white px-12 py-6 text-2xl font-black text-white dark:text-slate-900 transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Get Started
                        </ExternalAppLink>
                    </div>
                </div>
            </section>

            {/* AI Provider Slider */}
            <section aria-label="AI providers on Remova" className="relative overflow-hidden border-y border-slate-200/80 bg-white px-4 py-10 dark:border-white/10 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                            {aiProviders.map((provider) => (
                                <div
                                    key={provider.name}
                                    className="flex h-10 min-w-[10rem] items-center justify-center gap-3 opacity-75 grayscale transition duration-300 hover:opacity-100 dark:opacity-80 dark:hover:opacity-100"
                                >
                                    <img
                                        src={provider.logoSrc}
                                        alt={`${provider.name} logo`}
                                        className="h-7 w-7 object-contain dark:invert"
                                        loading="lazy"
                                    />
                                    <span className="whitespace-nowrap text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                                        {provider.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 text-base font-black text-slate-500 dark:text-slate-400 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                        <span>
                            Govern access to <strong className="text-slate-900 dark:text-white">300+ AI models</strong> from one Remova workspace
                        </span>
                        <span className="hidden h-px bg-slate-200 dark:bg-white/10 sm:block" />
                        <span className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                            <ShieldCheck className="h-5 w-5" />
                            with extra safety controls
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                <div className="container mx-auto max-w-[96rem]">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {[
                            { eyebrow: "Data protection", title: "Reduce AI Data Leaks", visual: "leaks" },
                            { eyebrow: "Policy control", title: "Reduce AI Misuse", visual: "misuse" },
                            { eyebrow: "Vendor control", title: "Control Third-Party AI Access", visual: "third-parties" },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-9 transition-colors hover:border-slate-400 dark:border-white/10 dark:bg-[#17181a] dark:hover:border-white/30 xl:p-10"
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.018)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem] dark:bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]" />
                                <div className="pointer-events-none absolute right-8 top-24 hidden h-40 w-52 text-slate-950 opacity-[0.08] transition-opacity group-hover:opacity-[0.12] dark:text-white dark:opacity-[0.09] dark:group-hover:opacity-[0.14] sm:block" aria-hidden="true">
                                    {item.visual === "leaks" && (
                                        <svg viewBox="0 0 220 160" fill="none" className="h-full w-full">
                                            <path d="M28 46h92c17 0 30 13 30 30v54" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M28 82h54c17 0 30 13 30 30v18" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M150 130l-13-13m13 13l13-13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <circle cx="28" cy="46" r="9" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="28" cy="82" r="9" stroke="currentColor" strokeWidth="1.5" />
                                            <rect x="154" y="24" width="42" height="42" rx="8" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M165 45h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    {item.visual === "misuse" && (
                                        <svg viewBox="0 0 220 160" fill="none" className="h-full w-full">
                                            <circle cx="110" cy="72" r="44" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M80 104l60-64" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M48 132h124M64 132V92M156 132V92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M100 58h20M98 78h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    {item.visual === "third-parties" && (
                                        <svg viewBox="0 0 220 160" fill="none" className="h-full w-full">
                                            <rect x="32" y="48" width="58" height="58" rx="12" stroke="currentColor" strokeWidth="1.5" />
                                            <rect x="130" y="48" width="58" height="58" rx="12" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M90 77h40M110 57v40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M96 118l28-82M124 118L96 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <circle cx="61" cy="77" r="9" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="159" cy="77" r="9" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    )}
                                </div>
                                <div className="relative flex min-h-[18rem] flex-col justify-between">
                                    <div className="flex items-start justify-between gap-6">
                                        <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                                            {item.eyebrow}
                                        </p>
                                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-500/70" />
                                    </div>

                                    <div className="relative max-w-[15rem]">
                                        <div className="mb-5 h-px w-20 bg-slate-900 dark:bg-white" />
                                        <h2 className="text-2xl font-black uppercase leading-[0.98] tracking-tight text-slate-900 dark:text-white">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className="mt-6 h-px w-full max-w-32 bg-slate-200 dark:bg-white/15" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alternating Feature Sections */}
            <div id="safety" className="flex flex-col w-full">

                {/* 1. Departmental Cost Control */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Budget Chart Diagram */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex flex-col justify-center relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="flex justify-between items-end mb-6">
                                        <h3 className="font-black text-2xl uppercase text-slate-900 dark:text-white leading-none">Monthly <br /> Spend</h3>
                                        <span className="font-sans font-bold text-slate-500 dark:text-slate-400">$8,420 / $10k</span>
                                    </div>
                                    <div className="space-y-4 w-full relative z-10">
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Engineering</span>
                                                <span className="text-red-500">85%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-900 dark:bg-white w-[85%] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Marketing</span>
                                                <span className="text-emerald-500">24%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[24%] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Sales</span>
                                                <span className="text-blue-500">42%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[42%] rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-[80%] border-l-2 border-dashed border-red-500/50 z-0">
                                        <div className="absolute top-4 left-2 text-xs font-black text-red-500 uppercase tracking-widest rotate-90 origin-top-left translate-y-8">Limit</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Coins className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Departmental <br /> Cost Control
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Enforce strict budget limits. Stop runaway costs before they start.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Allocated Budgets per Team</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Auto-Stop logic when limits reached</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Data Redaction and Protection */}
                {/* 2. Data Redaction and Protection */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <ShieldCheck className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Data Redaction <br /> & Protection
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Your organization is protected by 2 levels of security.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>
                                            <strong className="text-emerald-600 dark:text-emerald-400">Layer 1 (Fast):</strong>
                                            <br />Instant rule matching. Zero latency.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-blue-500" />
                                        <span>
                                            <strong className="text-blue-600 dark:text-blue-400">Layer 2 (Semantic):</strong>
                                            <br />Detect prompt-injection attempts and policy violations.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* Visual: File Upload Rejection Scenario */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 relative overflow-hidden flex items-center justify-center p-6 sm:p-10 group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-slate-200/50 dark:bg-black/40 backdrop-blur-3xl" />

                                    {/* Chat/Upload Interface */}
                                    <div className="w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col relative z-10 transition-transform hover:scale-[1.02] duration-500">
                                        {/* Header */}
                                        <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-sans font-medium text-slate-400">SECURE_CHANNEL_ENCRYPTED</span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-6">

                                            {/* User Upload Action */}
                                            <div className="flex flex-col items-end gap-2">
                                                <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm font-medium shadow-sm">
                                                    Analyze this data for Q3 projections.
                                                </div>
                                                {/* File Attachment */}
                                                <div className="group flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 pr-6 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-red-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                                                        <FileSpreadsheet className="h-6 w-6 text-green-600 dark:text-green-500" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">employees_salary_dump.xlsx</span>
                                                        <span className="text-[10px] text-slate-500">Spreadsheet • 1.2 MB</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* AI Rejection/System Alert */}
                                            <div className="flex gap-3 animate-pulse-slow">
                                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-500/30">
                                                    <ShieldAlert className="h-4 w-4 text-red-600 dark:text-red-400" />
                                                </div>
                                                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20 p-4 rounded-2xl rounded-tl-sm w-full shadow-sm">
                                                    <p className="text-red-800 dark:text-red-400 font-bold text-xs mb-1.5 flex items-center gap-1.5">
                                                        <XCircle className="h-3.5 w-3.5" />
                                                        UPLOAD REJECTED
                                                    </p>
                                                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                                                        You are attempting to upload <strong className="text-red-700 dark:text-red-400">Personal Data (PII)</strong>.
                                                        <br className="my-1" />
                                                        This violates the <span className="underline decoration-red-300 dark:decoration-red-700">Employee Privacy Policy</span>. Action has been blocked and logged.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Chat Like Usual */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Chat Interface Mock */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-6 flex flex-col justify-end relative overflow-hidden shadow-2xl group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="space-y-6 w-full max-w-md mx-auto">
                                        <div className="bg-white dark:bg-white/10 p-5 rounded-3xl rounded-tl-none self-start shadow-sm border border-slate-200 dark:border-white/5">
                                            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                                                Research the latest AI trends and create a PDF summary.
                                            </p>
                                        </div>
                                        <div className="bg-slate-900 dark:bg-white p-5 rounded-3xl rounded-tr-none self-end text-white dark:text-slate-900 shadow-md flex items-center gap-4 ml-auto">
                                            <FileText className="h-10 w-10 shrink-0" />
                                            <div>
                                                <p className="text-sm sm:text-base font-bold">AI_Trends_2026.pdf</p>
                                                <p className="text-xs opacity-70">Generated Report • 2.4MB</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-center pt-2">
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <MessageSquare className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Use ChatGPT <br /> at Work
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Use ChatGPT at work, with control and protection.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <Sparkles className="h-6 w-6 text-emerald-500 mt-1" />
                                        <span>Web research workflows</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <FileText className="h-6 w-6 text-blue-500 mt-1" />
                                        <span>Create PDFs & Presentations</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <Building2 className="h-6 w-6 text-purple-500 mt-1" />
                                        <span>Generate visual assets</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Select Your AI Providers */}
                {/* 4. Select Your AI Providers */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Cpu className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    ChatGPT, Claude, <br /> and Gemini
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Give people access to the models they know, with the right safeguards.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Show approved models for each team.</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Route usage by role and rules.</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* Visual: Model Selection Grid */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex flex-col justify-center gap-4 relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    {['ChatGPT', 'Claude', 'Gemini'].map((model, i) => (
                                        <div key={i} className="bg-white dark:bg-white/10 p-4 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-white/5 shadow-sm transform transition hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <Bot className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                                                <span className="font-bold text-slate-900 dark:text-white">{model}</span>
                                            </div>
                                            <ToggleRight className="h-8 w-8 text-emerald-500" />
                                        </div>
                                    ))}
                                    <div className="text-center font-bold text-slate-400 dark:text-slate-500 mt-2">
                                        Approved models available as needed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Custom AI Management */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Custom Model Builder */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-50 pointer-events-none" />
                                    <div className="flex flex-col items-center gap-6 z-10 w-full max-w-sm">
                                        <div className="bg-white dark:bg-white/10 p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg w-full text-center">
                                            <Wand2 className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                                            <h4 className="font-bold text-xl text-slate-900 dark:text-white">Marketing Helper v2</h4>
                                            <p className="text-sm text-slate-500 mt-1">Base: ChatGPT • Temp: 0.7</p>
                                        </div>
                                        <div className="h-12 w-0.5 bg-slate-300 dark:bg-white/20" />
                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            <div className="bg-slate-900 dark:bg-white p-4 rounded-2xl text-center shadow-lg">
                                                <span className="text-white dark:text-slate-900 font-bold text-sm">Marketing Dept</span>
                                            </div>
                                            <div className="bg-slate-200 dark:bg-white/20 p-4 rounded-2xl text-center">
                                                <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">Sales Dept</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Wand2 className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Team AI <br /> Setup
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Set up AI tools for the way each team works.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-purple-500" />
                                        <span>Deploy for specific departments</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-purple-500" />
                                        <span>Or deploy across the company</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. No History! No Personal Data! */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Privacy Shield */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-emerald-500/5" />
                                    <div className="relative flex items-center justify-center h-full w-full">
                                        <div className="h-40 w-40 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-500/10 z-10 animate-pulse">
                                            <EyeOff className="h-20 w-20 text-emerald-500" />
                                        </div>
                                        {/* Orbiting particles */}
                                        <div className="absolute h-64 w-64 border border-dashed border-slate-300 dark:border-white/20 rounded-full animate-spin-slow duration-[10s]" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mt-32">
                                            <span className="text-xs font-sans font-bold bg-white dark:bg-black px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 shadow-xl">
                                                Controlled Retention
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Ghost className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Private <br /> by Default
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Keep conversations under company control.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Workspace history follows your retention rules</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Sensitive data controls before model routing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Safety CTA 2 - Monochrome & Clean */}
            <section className="py-32 px-4 bg-white dark:bg-[#131314] text-slate-900 dark:text-white text-center relative overflow-hidden border-b-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                        Use AI without <br /> giving up control.
                    </h2>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="inline-block mt-4 rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-900 dark:bg-white px-12 py-5 text-xl font-black uppercase tracking-wider text-white dark:text-slate-900 hover:bg-transparent hover:text-slate-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                    >
                        Secure My Org
                    </ExternalAppLink>
                </div>
            </section>

            {/* Pricing Section */}
            {/* Pricing Section - Enterprise Ready */}
            <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300 border-b-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex flex-col md:flex-row items-baseline gap-6 mb-24 border-b-2 border-slate-900 dark:border-white pb-8">
                        <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl w-full">
                            LICENSING
                        </h2>
                    </div>

                    <div className="border-2 border-slate-900 dark:border-white bg-white dark:bg-[#131314] rounded-[2.5rem] overflow-hidden">
                        <div className="grid lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-900 dark:divide-white">

                            {/* Left Column: Economics */}
                            <div className="lg:col-span-4 p-12 flex flex-col justify-between bg-slate-50 dark:bg-white/5">
                                <div>
                                    <h3 className="text-5xl font-black uppercase text-slate-900 dark:text-white mb-2 leading-none">Enterprise <br /> Plan</h3>
                                    <p className="font-sans text-slate-500 dark:text-slate-400 mb-12 uppercase tracking-widest text-sm">Global License</p>

                                    <div className="mb-12">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-8xl font-black text-slate-900 dark:text-white tracking-tighter">$50</span>
                                            <span className="text-2xl font-sans text-slate-500 dark:text-slate-400 font-bold">/ seat / month</span>
                                        </div>
                                        <p className="text-slate-900 dark:text-white font-bold mt-4 border-l-4 border-slate-900 dark:border-white pl-4">
                                            Minimum 10 seats required
                                        </p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 font-sans font-bold mt-4 leading-relaxed">
                                            Includes $50 in monthly model credits. Usage consumes credits at the Remova rates shown on the /models page. Add top-ups when you need more. Bring-your-own keys are supported with an active subscription.
                                        </p>
                                    </div>
                                </div>
                                <ExternalAppLink
                                    href="https://app.remova.org/register"
                                    className="w-full py-5 text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-black uppercase hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors rounded-[2.5rem]"
                                >
                                    Contact Sales
                                </ExternalAppLink>
                            </div>

                            {/* Right Column: Scope */}
                            <div className="lg:col-span-8 p-12">
                                <div className="grid md:grid-cols-2 gap-16">
                                    {/* Intelligence */}
                                    <div>
                                        <ul className="space-y-6">
                                            {[
                                                "ChatGPT, Claude, and Gemini access",
                                                "Visual creation tools",
                                                "Document creation"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4 group">
                                                    <div className="h-3 w-3 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                    <span className="font-sans text-base font-bold text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Safety */}
                                    <div>
                                        <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-8 border-b-2 border-slate-900 dark:border-white pb-4">
                                            Safety & Access
                                        </h4>
                                        <ul className="space-y-6">
                                            {[
                                                "Sensitive data redaction",
                                                "Executive analytics",
                                                "SSO and directory sync",
                                                "Data location controls",
                                                "Leak detection"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4 group">
                                                    <div className="h-3 w-3 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                    <span className="font-sans text-base font-bold text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                        {/* Concierge Support */}
                        <div className="border-2 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 p-12 flex flex-col justify-between rounded-[2.5rem] overflow-hidden">
                            <div>
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white mb-2 leading-none">Monthly <br /> Concierge</h3>
                                <p className="font-sans text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest text-sm">Strategic AI Support</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">$2,500</span>
                                        <span className="text-xl font-sans text-slate-500 dark:text-slate-400 font-bold">/ month</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Dedicated AI Strategy Consultant",
                                        "Priority Integration Support"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="h-2 w-2 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0" />
                                            <span className="font-sans text-sm font-bold text-slate-700 dark:text-slate-300">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* On-Prem AI Setup */}
                        <div className="border-2 border-slate-900 dark:border-white bg-slate-900 dark:bg-white p-12 flex flex-col justify-between text-white dark:text-slate-900 rounded-[2.5rem] overflow-hidden">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-4xl font-black uppercase leading-none">On-Prem <br /> AI Setup</h3>
                                    <ShieldCheck className="h-10 w-10" />
                                </div>
                                <p className="opacity-60 font-sans mb-8 uppercase tracking-widest text-sm">Dedicated Private AI</p>

                                <div className="mb-8">
                                    <span className="block text-5xl font-black tracking-tighter uppercase">Starting from $5,000 / month</span>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Private AI infrastructure with powerful NVIDIA chips",
                                        "Deployment of Full Control Layer",
                                        "Local AI Model Serving",
                                        "Full Source Code Access Option",
                                        "Configurable Data Outbound Controls"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="h-2 w-2 bg-white dark:bg-slate-900 mt-1.5 flex-shrink-0" />
                                            <span className="font-sans text-sm font-bold opacity-90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <SafeEmailLink
                                mailbox="sales"
                                subject="On-Prem Architecture Inquiry"
                                className="w-full py-4 text-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-lg font-black uppercase hover:opacity-90 transition-opacity rounded-[2.5rem]"
                            >
                                Request Architecture Link
                            </SafeEmailLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Remova Section - BIG BOLD REDESIGN */}
            <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="mb-16 text-center text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
                        Why Remova?
                    </h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Card 1 */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-2xl">
                                <History className="h-12 w-12 animate-icon-shake" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Reduce <br /> Misuse Risk
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                Block policy-violating prompts, risky requests, and non-compliant usage <span className="text-orange-600 dark:text-orange-400 font-bold">before</span> they reach production workflows.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-red-600 text-white shadow-2xl">
                                <FileText className="h-12 w-12 animate-draw" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Prevent Data <br /> Leaks
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                PII, API keys, and financial data are leaving your chat windows. We detect and redact sensitive info <span className="text-red-600 dark:text-red-400 font-bold">instantly</span>.
                            </p>
                        </div>

                        {/* Card 3 - Manage Budgets */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-2xl">
                                <BarChart3 className="h-12 w-12 animate-draw" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Manage <br /> Budgets
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                Don't let AI costs surprise you. Set strict <span className="text-blue-600 dark:text-blue-400 font-bold">allowances</span> per team and track every token spent in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety CTA 1 (Moved) */}
            <section className="py-24 px-4 bg-white dark:bg-[#131314] text-center border-y border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-8 inline-flex p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-emerald-500">
                        <AlertTriangle className="h-10 w-10 animate-pulse" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-slate-900 dark:text-white">
                        Keep the same safeguards <br /> across every model.
                    </h2>
                    <p className="text-2xl sm:text-3xl font-bold opacity-90 max-w-2xl mx-auto border-4 border-slate-900 dark:border-white rounded-full py-4 px-8 inline-block text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors cursor-default">
                        Build it once. Use it everywhere.
                    </p>
                </div>
            </section>
            {/* FAQ Section */}
            <FAQ
                items={homepageFaqs}
                title="Common Questions about safer AI at work"
            />

            {/* Bottom CTA - Bolder Style */}
            <section className="py-32 px-4 text-center bg-white dark:bg-[#131314] transition-colors duration-300 border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-8xl leading-[0.9]">
                        Ready to <br className="hidden sm:block" /> bring AI into the company safely?
                    </h2>
                    <p className="mb-12 text-xl font-sans text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Give your team access to ChatGPT, Claude, and Gemini with the right controls in place.
                    </p>
                    <ExternalAppLink
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Get Started
                    </ExternalAppLink>
                </div>
            </section>
        </div>

    );
}
