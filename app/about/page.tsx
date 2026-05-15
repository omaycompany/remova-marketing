import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CircleDollarSign,
    Eye,
    FileSearch,
    Fingerprint,
    Layers3,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";
import ExternalAppLink from "@/components/ui/ExternalAppLink";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_URL, SITE_NAME, absoluteUrl, buildKeywords } from "@/lib/seo";

const officeImage = "/images/about/remova-office.jpg";
const founderImage = "/images/about/ozzy-ocak-founder.png";

export const metadata: Metadata = {
    title: "About Remova",
    description:
        "Learn about Remova, the enterprise AI governance platform founded by Ozzy Ocak to help companies use AI with data protection, policy controls, audit visibility, and cost ownership.",
    keywords: buildKeywords([
        "about remova",
        "remova founder",
        "ozzy ocak",
        "enterprise ai governance company",
        "ai governance platform",
        "safe ai adoption",
        "ai data protection",
    ]),
    openGraph: {
        title: "About Remova",
        description:
            "Remova helps companies use frontier AI safely with policy controls, sensitive-data protection, audit visibility, and budget ownership.",
        url: absoluteUrl("/about"),
        siteName: SITE_NAME,
        images: [
            {
                url: absoluteUrl(officeImage),
                width: 1400,
                height: 350,
                alt: "Remova office entrance",
            },
            DEFAULT_OG_IMAGE,
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Remova",
        description:
            "The enterprise AI governance company founded by Ozzy Ocak for safe, controlled AI adoption.",
        images: [absoluteUrl(officeImage), DEFAULT_OG_IMAGE_URL],
    },
    alternates: { canonical: "/about" },
};

const principles = [
    {
        title: "AI Should Be Useful At Work",
        text: "Teams should be able to use capable models for real work without routing every request through slow manual approvals.",
        Icon: Sparkles,
    },
    {
        title: "Control Should Happen Before Exposure",
        text: "Sensitive data needs to be detected, masked, governed, or blocked before it reaches an external model.",
        Icon: LockKeyhole,
    },
    {
        title: "Governance Must Be Visible",
        text: "Security, legal, finance, and IT leaders need a clear record of usage, policy events, access, and spend.",
        Icon: Eye,
    },
    {
        title: "Choice Matters",
        text: "Companies should be able to use approved models from different providers while keeping one consistent control layer.",
        Icon: Layers3,
    },
];

const operatingModel = [
    {
        label: "Unify",
        title: "One governed AI workspace",
        text: "Employees get a practical place to use approved models, while administrators keep central control over access, rules, and visibility.",
        Icon: Users,
    },
    {
        label: "Protect",
        title: "Sensitive-data controls",
        text: "Prompts and files can be checked for confidential data, personal information, internal identifiers, and other risk signals before model use.",
        Icon: Fingerprint,
    },
    {
        label: "Enforce",
        title: "Policy rules in the flow",
        text: "Organizations can define what is allowed, what should be flagged, and what should be blocked across teams and use cases.",
        Icon: ShieldCheck,
    },
    {
        label: "Account",
        title: "Budget ownership",
        text: "Department-level budgets and usage views help companies understand where AI spend goes and keep costs predictable.",
        Icon: CircleDollarSign,
    },
];

const commitments = [
    "Model access should be broad enough for productive teams and narrow enough for responsible companies.",
    "Audit trails should make governance provable instead of dependent on policy documents alone.",
    "Security controls should reduce risk without forcing employees back into unmanaged shadow AI tools.",
    "Finance teams should be able to see who is spending on AI, which teams are growing usage, and where limits are needed.",
    "AI adoption should work for the whole company, not only for technical teams.",
];

export default function AboutPage() {
    const aboutJsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": absoluteUrl("/about#about-page"),
        name: "About Remova",
        url: absoluteUrl("/about"),
        description:
            "Remova is an enterprise AI governance platform for companies that need policy controls, sensitive-data protection, audit visibility, and budget management for AI usage.",
        isPartOf: {
            "@id": absoluteUrl("/#website"),
        },
        mainEntity: {
            "@type": "Organization",
            name: "Remova",
            url: absoluteUrl("/"),
            founder: {
                "@type": "Person",
                name: "Ozzy Ocak",
                image: absoluteUrl(founderImage),
            },
        },
    };

    return (
        <div className="flex flex-col bg-white dark:bg-[#131314]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />

            <section className="relative min-h-[88vh] overflow-hidden bg-slate-950 px-4 pt-40 pb-12 text-white sm:px-6 lg:px-8">
                <Image
                    src={officeImage}
                    alt="Remova office entrance"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/65" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

                <div className="container relative z-10 mx-auto flex min-h-[calc(88vh-13rem)] max-w-6xl flex-col justify-end">
                    <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-md">
                        <Building2 className="h-4 w-4" />
                        Enterprise AI governance company
                    </div>
                    <h1 className="max-w-5xl text-5xl font-black leading-[0.88] tracking-tighter sm:text-7xl lg:text-8xl">
                        About Remova
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
                        Remova helps companies put AI to work without losing control of sensitive data,
                        model access, policy enforcement, audit visibility, or team-level spend.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-[2.5rem] bg-white px-8 py-4 text-base font-black text-slate-950 transition hover:scale-105 active:scale-95"
                        >
                            Start with Remova <ArrowRight className="ml-2 h-5 w-5" />
                        </ExternalAppLink>
                        <Link
                            href="/features"
                            className="inline-flex items-center justify-center rounded-[2.5rem] border border-white/30 px-8 py-4 text-base font-black text-white transition hover:bg-white hover:text-slate-950"
                        >
                            Explore the platform
                        </Link>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
                            Why we exist
                        </p>
                        <h2 className="text-4xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
                            Companies need AI adoption and AI control at the same time.
                        </h2>
                    </div>
                    <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        <p>
                            AI is already changing how teams write, research, analyze, code, support customers,
                            and make decisions. The challenge for companies is no longer whether employees will
                            use AI. The challenge is whether that usage happens in a governed environment.
                        </p>
                        <p>
                            Remova was built for organizations that want the productivity of ChatGPT, Claude,
                            Gemini, Llama, Mistral, and other capable models while keeping practical control over
                            sensitive data, policy boundaries, user access, audit trails, and budget ownership.
                        </p>
                        <p>
                            Our view is simple: employees should not have to choose between doing their best work
                            and protecting the company. Governance should be built into the way AI is used every day.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {principles.map(({ title, text, Icon }) => (
                            <article
                                key={title}
                                className="rounded-lg border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#131314]"
                            >
                                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-white/10 dark:text-white">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mb-3 text-lg font-black leading-tight text-slate-900 dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                    {text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white px-4 py-24 dark:border-white/10 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
                        <Image
                            src={founderImage}
                            alt="Ozzy Ocak, founder of Remova"
                            width={800}
                            height={800}
                            sizes="(min-width: 1024px) 38vw, 100vw"
                            className="aspect-square w-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                            Founder
                        </p>
                        <h2 className="text-4xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
                            Ozzy Ocak founded Remova to make enterprise AI adoption safer, clearer, and easier to operate.
                        </h2>
                        <div className="mt-8 space-y-5 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            <p>
                                Ozzy&apos;s founding thesis is that AI will become standard business infrastructure,
                                but only if companies can trust how it is used. Remova reflects that belief: give
                                teams access to strong models, then surround that access with the controls a serious
                                organization needs.
                            </p>
                            <p>
                                As founder, Ozzy shapes Remova around the practical questions leaders ask before
                                expanding AI across departments: What data can leave the company? Which models are
                                approved? Who used AI for what work? Which teams are spending the most? Which policy
                                events need review?
                            </p>
                            <p>
                                The result is a platform built for the daily reality of enterprise AI: employees need
                                speed, security teams need control, finance teams need predictability, and executives
                                need confidence that adoption is measurable and governed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-950 px-4 py-24 text-white dark:border-white/10 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-12 max-w-3xl">
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
                            What we build
                        </p>
                        <h2 className="text-4xl font-black leading-[0.95] tracking-tighter sm:text-5xl">
                            A control layer for companies using modern AI.
                        </h2>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-300">
                            Remova sits between company users and approved AI models so teams can work with AI while
                            administrators maintain policy, security, and cost visibility.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {operatingModel.map(({ label, title, text, Icon }) => (
                            <article
                                key={title}
                                className="rounded-lg border border-white/10 bg-white/[0.04] p-7"
                            >
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-300">
                                        {label}
                                    </span>
                                    <Icon className="h-6 w-6 text-emerald-300" />
                                </div>
                                <h3 className="mb-3 text-2xl font-black tracking-tight">{title}</h3>
                                <p className="text-base font-medium leading-relaxed text-slate-300">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-white px-4 py-24 dark:border-white/10 dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                            Our commitments
                        </p>
                        <h2 className="text-4xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white sm:text-5xl">
                            Built for adoption that can survive scrutiny.
                        </h2>
                        <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            Remova is designed for companies where AI use has to work for employees, security,
                            procurement, legal, finance, and leadership at the same time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {commitments.map((commitment) => (
                            <div
                                key={commitment}
                                className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
                            >
                                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-300" />
                                <p className="text-base font-bold leading-relaxed text-slate-700 dark:text-slate-200">
                                    {commitment}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 dark:border-white/10 dark:bg-white/5 sm:px-6 lg:px-8">
                <div className="container mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "For employees",
                            text: "A straightforward way to use AI for writing, analysis, research, operations, coding, and everyday work.",
                            Icon: Users,
                        },
                        {
                            title: "For security and IT",
                            text: "Access controls, policy events, data-protection workflows, and audit visibility that make AI usage governable.",
                            Icon: FileSearch,
                        },
                        {
                            title: "For leaders",
                            text: "A clearer view of AI adoption, team-level usage, spend trends, and the controls needed to expand safely.",
                            Icon: Building2,
                        },
                    ].map(({ title, text, Icon }) => (
                        <article
                            key={title}
                            className="rounded-lg border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-[#131314]"
                        >
                            <Icon className="mb-6 h-7 w-7 text-slate-900 dark:text-white" />
                            <h3 className="mb-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                                {title}
                            </h3>
                            <p className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                                {text}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-white px-4 py-24 text-center dark:bg-[#131314] sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                        <ShieldCheck className="h-7 w-7" />
                    </div>
                    <h2 className="text-4xl font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white sm:text-6xl">
                        Bring AI into the company without giving up control.
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                        Remova gives teams access to useful AI while keeping the company&apos;s data, policy,
                        audit, and budget requirements in the same operating model.
                    </p>
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                        <ExternalAppLink
                            href="https://app.remova.org/register"
                            className="inline-flex items-center justify-center rounded-[2.5rem] bg-slate-900 px-9 py-4 text-base font-black text-white transition hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900"
                        >
                            Get started <ArrowRight className="ml-2 h-5 w-5" />
                        </ExternalAppLink>
                        <Link
                            href="/models"
                            className="inline-flex items-center justify-center rounded-[2.5rem] border border-slate-300 px-9 py-4 text-base font-black text-slate-900 transition hover:border-slate-900 dark:border-white/20 dark:text-white dark:hover:border-white"
                        >
                            See supported models
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
