import {
    AlertTriangle,
    ClipboardCheck,
    FileCog,
    Map,
    ShieldCheck,
    Waypoints,
    type LucideIcon,
} from "lucide-react";

export type LeadMagnetId =
    | "readiness-check"
    | "use-case-selector"
    | "policy-generator"
    | "employee-safety-checklist"
    | "adoption-plan"
    | "risk-test";

type LeadMagnet = {
    title: string;
    description: string;
    deliverable: string;
    icon: LucideIcon;
    emailSubject: string;
    emailBody: string;
    showDemo?: boolean;
};

const leadMagnets: Record<LeadMagnetId, LeadMagnet> = {
    "readiness-check": {
        title: "AI Readiness Check",
        description: "Answer a few questions to see how ready your company is to adopt AI safely.",
        deliverable: "A readiness level with the next actions worth taking.",
        icon: ClipboardCheck,
        emailSubject: "Send me the AI Readiness Check",
        emailBody: "Hi Remova,\n\nPlease send me the AI Readiness Check.\n\nCompany:\nRole:\n",
    },
    "use-case-selector": {
        title: "Safe AI Use Case Selector",
        description: "Choose your team and goals, then start with the AI use cases that fit best and carry the least risk.",
        deliverable: "Recommended first use cases for your company.",
        icon: Waypoints,
        emailSubject: "Send me the Safe AI Use Case Selector",
        emailBody: "Hi Remova,\n\nPlease send me the Safe AI Use Case Selector.\n\nTeam:\nGoal:\n",
    },
    "policy-generator": {
        title: "AI Policy Generator",
        description: "Generate a practical internal AI policy your team can review, edit, and put into use.",
        deliverable: "A draft AI policy tailored to company usage.",
        icon: FileCog,
        emailSubject: "Send me the AI Policy Generator",
        emailBody: "Hi Remova,\n\nPlease send me the AI Policy Generator.\n\nCompany:\nIndustry:\n",
    },
    "employee-safety-checklist": {
        title: "Employee AI Safety Checklist",
        description: "Give employees a simple checklist for using AI without exposing company data or creating avoidable risk.",
        deliverable: "A 1-page checklist for daily safe AI use.",
        icon: ShieldCheck,
        emailSubject: "Send me the Employee AI Safety Checklist",
        emailBody: "Hi Remova,\n\nPlease send me the Employee AI Safety Checklist.\n\nCompany:\nTeam size:\n",
    },
    "adoption-plan": {
        title: "AI Adoption Plan",
        description: "Get a phased rollout plan that balances practical adoption, security, privacy, and employee readiness.",
        deliverable: "A recommended plan for what to do first, next, and later.",
        icon: Map,
        emailSubject: "Send me the AI Adoption Plan",
        emailBody: "Hi Remova,\n\nPlease send me the AI Adoption Plan.\n\nCompany:\nPriority:\n",
        showDemo: true,
    },
    "risk-test": {
        title: "AI Risk Test",
        description: "Test what can go wrong before teams start using AI loosely across the company.",
        deliverable: "A short risk summary with the main gaps to close.",
        icon: AlertTriangle,
        emailSubject: "Send me the AI Risk Test",
        emailBody: "Hi Remova,\n\nPlease send me the AI Risk Test.\n\nCompany:\nMain concern:\n",
        showDemo: true,
    },
};

const demoHref = `mailto:notifications@remova.org?subject=${encodeURIComponent(
    "Book a Remova Demo"
)}&body=${encodeURIComponent("Hi Remova,\n\nI want to book a demo.\n\nCompany:\nRole:\n")}`;

type Props = {
    magnet: LeadMagnetId;
    tone?: "white" | "slate";
};

export default function LeadMagnetSection({ magnet, tone = "white" }: Props) {
    const item = leadMagnets[magnet];
    const Icon = item.icon;

    return (
        <section
            className={`border-t border-slate-200 px-4 py-20 sm:px-6 lg:px-8 dark:border-white/10 ${
                tone === "slate" ? "bg-slate-50 dark:bg-white/5" : "bg-white dark:bg-[#131314]"
            }`}
        >
            <div className="container mx-auto max-w-5xl">
                <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10 dark:border-white/10 dark:bg-white/[0.03]">
                    <div>
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                            <Icon className="h-6 w-6" />
                        </div>
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                            Start Smaller
                        </p>
                        <h2 className="mb-4 text-3xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-4xl leading-[0.95]">
                            {item.title}
                        </h2>
                        <p className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                            {item.description}
                        </p>
                    </div>

                    <div className="flex flex-col justify-between gap-6 rounded-2xl bg-slate-50 p-6 dark:bg-white/5">
                        <div>
                            <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                                You get
                            </p>
                            <p className="text-base font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                                {item.deliverable}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`mailto:notifications@remova.org?subject=${encodeURIComponent(item.emailSubject)}&body=${encodeURIComponent(item.emailBody)}`}
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                Send to my email
                            </a>
                            {item.showDemo ? (
                                <a
                                    href={demoHref}
                                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                                >
                                    Book demo
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
