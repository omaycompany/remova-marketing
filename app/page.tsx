import Link from "next/link";
import { ShieldCheck, Wallet, Users, FileText, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

const pillars = [
    {
        icon: ShieldCheck,
        title: "Policy Guardrails",
        text: "Apply enforceable policy checks to AI inputs and outputs across teams.",
    },
    {
        icon: FileText,
        title: "Sensitive Data Protection",
        text: "Reduce accidental disclosure risk with configurable protection controls.",
    },
    {
        icon: Wallet,
        title: "Department Budget Controls",
        text: "Set limits, alerts, and ownership so AI costs stay predictable.",
    },
    {
        icon: Users,
        title: "Role-Based Operations",
        text: "Delegate safely with scoped access for admins, managers, and teams.",
    },
];

const capabilities = [
    "Policy enforcement for daily AI workflows",
    "Role-based access and administrative boundaries",
    "Department-level spend controls and alerts",
    "Traceable activity records for governance reviews",
    "Knowledge grounding for approved internal context",
    "Preset workflows for repeatable team tasks",
    "Governed API access for internal applications",
    "Onboarding controls for controlled rollout",
];

const rolloutSteps = [
    {
        step: "1",
        title: "Define Governance Baseline",
        text: "Set policy, access, retention, and budget defaults before broad rollout.",
    },
    {
        step: "2",
        title: "Launch a Focused Pilot",
        text: "Start with selected teams, validate controls, and gather operational feedback.",
    },
    {
        step: "3",
        title: "Scale by Department",
        text: "Expand in planned waves with clear ownership and team-level governance settings.",
    },
    {
        step: "4",
        title: "Operate with Review Cadence",
        text: "Use analytics and audit records to tune controls and sustain governance quality.",
    },
];

export default function LandingPage() {
    return (
        <div className="flex flex-col">
            <section className="relative px-4 pt-44 pb-20 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-5 py-2 text-sm font-bold text-slate-900 dark:text-white">
                        <ShieldCheck className="h-4 w-4" />
                        GOVERNED AI FOR COMPANIES
                    </div>
                    <h1 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[0.88]">
                        Deploy AI with
                        <br />
                        <span className="text-slate-500 dark:text-slate-300">control and clarity</span>
                    </h1>
                    <p className="max-w-3xl text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10">
                        Remova helps organizations run AI with enforceable policy controls, clear access boundaries,
                        and predictable team-level cost governance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="https://app.remova.org/register"
                            className="rounded-[2.5rem] bg-slate-900 dark:bg-white px-10 py-5 text-lg font-black text-white dark:text-slate-900 transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="https://app.remova.org/login"
                            className="rounded-[2.5rem] border-2 border-slate-200 dark:border-white/10 px-10 py-5 text-lg font-black text-slate-900 dark:text-white transition hover:bg-slate-50 dark:hover:bg-white/5 text-center"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="mb-12 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.92]">
                        Why teams choose Remova
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6"
                                >
                                    <Icon className="h-6 w-6 text-slate-900 dark:text-white mb-4" />
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="mb-6 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.92]">
                            Core capabilities
                        </h2>
                        <p className="text-lg font-medium text-slate-600 dark:text-slate-300 max-w-2xl">
                            Use one governance layer to manage policy, access, spending, and operational visibility
                            across enterprise AI usage.
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-slate-900 dark:border-white bg-white dark:bg-[#131314] p-8">
                        <ul className="space-y-4">
                            {capabilities.map((capability) => (
                                <li key={capability} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{capability}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] border-t border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-4 py-1.5 text-xs font-black text-slate-900 dark:text-white">
                        <Zap className="h-3.5 w-3.5" />
                        ROLLOUT PLAYBOOK
                    </div>
                    <h2 className="mb-12 text-4xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-5xl leading-[0.92]">
                        Roll out AI with control from day one
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {rolloutSteps.map((item) => (
                            <div key={item.step} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-black">
                                        {item.step}
                                    </span>
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white">{item.title}</h3>
                                </div>
                                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ
                items={[
                    {
                        question: "What is Remova?",
                        answer:
                            "Remova is an enterprise AI governance platform focused on policy enforcement, sensitive data protection, role-based operations, and budget controls.",
                    },
                    {
                        question: "Who is Remova for?",
                        answer:
                            "Remova is built for organizations that need to scale AI usage across teams while maintaining clear governance and operational accountability.",
                    },
                    {
                        question: "Can we control AI costs by department?",
                        answer:
                            "Yes. Remova supports department-level budget controls, thresholds, and usage visibility to improve cost predictability.",
                    },
                    {
                        question: "How does Remova support governance reviews?",
                        answer:
                            "Remova provides activity records and analytics views that help teams run recurring governance, risk, and compliance reviews.",
                    },
                    {
                        question: "Can Remova be integrated into internal workflows?",
                        answer:
                            "Yes. Remova supports governed API usage so teams can embed policy-safe AI workflows into internal applications.",
                    },
                ]}
                title="Common Questions"
            />

            <section className="py-24 px-4 text-center bg-white dark:bg-[#131314] border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-5xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-7xl leading-[0.9]">
                        Ready to run AI with governance?
                    </h2>
                    <p className="mb-12 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Start with policy, access, and budget controls that scale across your organization.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Sign Up
                        <ArrowRight className="inline h-5 w-5 ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
