"use client";

import { FormEvent, useState } from "react";
import {
    AlertTriangle,
    ClipboardCheck,
    FileCog,
    Map,
    ShieldCheck,
    Waypoints,
    Calculator,
    type LucideIcon,
} from "lucide-react";

export type LeadMagnetId =
    | "readiness-check"
    | "use-case-selector"
    | "policy-generator"
    | "employee-safety-checklist"
    | "adoption-plan"
    | "risk-test"
    | "cost-calculator";

type LeadMagnet = {
    title: string;
    description: string;
    deliverable: string;
    icon: LucideIcon;
    showDemo?: boolean;
    sectionLabel?: string;
};

const leadMagnets: Record<LeadMagnetId, LeadMagnet> = {
    "readiness-check": {
        title: "How Exposed Is Your Company?",
        description: "Most companies already have employees using AI. The question is whether that's happening safely. Take 2 minutes to find out.",
        deliverable: "A short report showing where your biggest AI risks are right now.",
        icon: ClipboardCheck,
        sectionLabel: "Free Assessment",
    },
    "use-case-selector": {
        title: "Where Should Your Team Start with AI?",
        description: "Tell us your industry and team size. We'll tell you which AI use cases will save the most time with the least setup.",
        deliverable: "A shortlist of AI use cases ranked by impact and effort for your situation.",
        icon: Waypoints,
        sectionLabel: "Free Resource",
    },
    "policy-generator": {
        title: "Get a Draft AI Policy in 5 Minutes",
        description: "Answer 6 questions about your company. Get a real AI usage policy you can hand to legal this week.",
        deliverable: "A ready-to-review AI policy document customized to your company.",
        icon: FileCog,
        sectionLabel: "Free Resource",
    },
    "employee-safety-checklist": {
        title: "The 1-Page AI Safety Sheet",
        description: "Print this, pin it next to every screen. 10 rules your team should follow every time they use AI at work.",
        deliverable: "A printable 1-page PDF with 10 clear do's and don'ts for AI use.",
        icon: ShieldCheck,
        sectionLabel: "Free Resource",
    },
    "adoption-plan": {
        title: "Your 30-60-90 Day AI Rollout Plan",
        description: "What to do this month, next month, and the month after. A concrete plan for rolling AI out to your teams without chaos.",
        deliverable: "A 3-phase rollout plan with specific actions for each stage.",
        icon: Map,
        showDemo: true,
        sectionLabel: "Free Resource",
    },
    "risk-test": {
        title: "What Could Go Wrong?",
        description: "5 questions about how your company uses AI today. We'll show you the risks most companies miss until it's too late.",
        deliverable: "A risk breakdown with the 3 things you should fix first.",
        icon: AlertTriangle,
        showDemo: true,
        sectionLabel: "Free Assessment",
    },
    "cost-calculator": {
        title: "How Much Is AI Costing Your Company?",
        description: "Enter your team size, the models you use, and how often. We'll calculate what you're spending now, what you'll spend in 6 months, and where the money is actually going.",
        deliverable: "A cost projection showing your current AI spend, 6-month forecast, and the top 3 areas where you're overspending.",
        icon: Calculator,
        showDemo: true,
        sectionLabel: "Free Tool",
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
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [statusText, setStatusText] = useState("");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "submitting") return;

        setStatus("submitting");
        setStatusText("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "605d5350-f21e-4531-bd3c-219ad374486c",
                    email,
                    subject: `New Request for ${item.title}`,
                    magnet,
                }),
            });

            const payload = (await response.json().catch(() => ({}))) as { message?: string };

            if (!response.ok) {
                throw new Error(payload.message || "Something went wrong. Please try again.");
            }

            setStatus("success");
            setStatusText(payload.message || "Done. Check your inbox.");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setStatusText(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    }

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
                            {item.sectionLabel || "Free Resource"}
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

                        <form onSubmit={onSubmit} className="space-y-3">
                            <label htmlFor={`lead-magnet-email-${magnet}`} className="sr-only">
                                Email address
                            </label>
                            <input
                                id={`lead-magnet-email-${magnet}`}
                                type="email"
                                inputMode="email"
                                autoComplete="email"
                                placeholder="Work email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-slate-900 dark:border-white/20 dark:bg-[#0f1012] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white"
                            />

                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                                >
                                    {status === "submitting" ? "Sending..." : "Send to my email"}
                                </button>

                                {item.showDemo ? (
                                    <a
                                        href={demoHref}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-900 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                                    >
                                        Book demo
                                    </a>
                                ) : null}
                            </div>

                            {statusText ? (
                                <p
                                    className={`text-sm font-medium ${
                                        status === "success"
                                            ? "text-emerald-700 dark:text-emerald-300"
                                            : "text-red-700 dark:text-red-300"
                                    }`}
                                >
                                    {statusText}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
