"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
    AlertTriangle,
    Download,
    Lock,
    Menu,
    Plus,
    Search,
    Send,
} from "lucide-react";

type DemoTab = "chat" | "dashboard";

type BudgetItem = {
    team: string;
    spent: number;
    budget: number;
};

const budgetData: BudgetItem[] = [
    { team: "Engineering", spent: 7420, budget: 9000 },
    { team: "Support", spent: 2310, budget: 3500 },
    { team: "Sales", spent: 3890, budget: 5000 },
    { team: "Marketing", spent: 1680, budget: 2500 },
];

const activityRows = [
    "Policy blocked: detected customer payment data in prompt.",
    "New budget cap enabled for Support department.",
    "AI safety score improved to 96.4% in weekly report.",
    "Suspicious prompt pattern routed to admin review.",
];

const sampleMessages = [
    {
        role: "user",
        text: "Create a short summary of yesterday's support tickets.",
    },
    {
        role: "assistant",
        text: "Summary prepared. Sensitive customer fields were masked by policy layer.",
    },
];

export default function GuestProductDemo() {
    const [activeTab, setActiveTab] = useState<DemoTab>("chat");
    const [menuOpen, setMenuOpen] = useState(true);
    const [showSignup, setShowSignup] = useState(false);
    const [blockedAction, setBlockedAction] = useState("send messages");

    const totals = useMemo(() => {
        const spent = budgetData.reduce((sum, item) => sum + item.spent, 0);
        const budget = budgetData.reduce((sum, item) => sum + item.budget, 0);
        const usage = Math.round((spent / budget) * 100);
        return { spent, budget, usage };
    }, []);

    function openSignup(action: string) {
        setBlockedAction(action);
        setShowSignup(true);
    }

    return (
        <>
            <div className="flex h-full min-h-[100dvh] w-full flex-col bg-white dark:bg-[#131314]">
                <div className="border-b border-slate-200 px-3 py-2 dark:border-white/10 md:px-6">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 dark:text-white/70 dark:hover:bg-white/10"
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label="Toggle demo menu"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                            <Image
                                src="/images/remova logo (4).png"
                                alt="Remova"
                                width={132}
                                height={36}
                                className="h-8 w-auto object-contain dark:brightness-0 dark:invert"
                            />
                            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                                Guest demo
                            </span>
                        </div>
                        <div className="hidden items-center gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() => setActiveTab("chat")}
                                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${activeTab === "chat"
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                        : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                                    }`}
                            >
                                Chat
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("dashboard")}
                                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${activeTab === "dashboard"
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                        : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                                    }`}
                            >
                                Dashboard
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative flex min-h-0 flex-1 overflow-hidden">
                    {menuOpen && (
                        <aside className="hidden w-72 flex-shrink-0 border-r border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-[#131314] lg:block">
                            <button
                                type="button"
                                onClick={() => openSignup("create conversations")}
                                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 dark:bg-[#282a2c] dark:text-[#e3e3e3] dark:hover:bg-[#37393b]"
                            >
                                <Plus className="h-4 w-4" />
                                New Chat
                            </button>
                            <div className="relative mb-3">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    readOnly
                                    value="Q1 budget summary"
                                    className="w-full rounded-2xl border border-transparent bg-slate-100 py-2 pl-9 pr-3 text-sm text-slate-700 dark:bg-[#282a2c] dark:text-[#e3e3e3]"
                                />
                            </div>
                            <div className="space-y-1">
                                <button className="w-full rounded-full bg-[#c2e7ff] px-3 py-2 text-left text-sm text-[#001d35] dark:bg-[#004a77] dark:text-[#c2e7ff]">
                                    Finance Forecast Review
                                </button>
                                <button className="w-full rounded-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-[#e3e3e3] dark:hover:bg-[#28292a]">
                                    Sales Enablement Draft
                                </button>
                                <button className="w-full rounded-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-[#e3e3e3] dark:hover:bg-[#28292a]">
                                    Product Launch Checklist
                                </button>
                            </div>
                        </aside>
                    )}

                    <section className="flex min-w-0 flex-1 flex-col bg-white dark:bg-[#131314]">
                        <div className="border-b border-slate-200 px-3 py-2 dark:border-white/10 sm:hidden">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("chat")}
                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${activeTab === "chat"
                                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                            : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                                        }`}
                                >
                                    Chat
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("dashboard")}
                                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${activeTab === "dashboard"
                                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                            : "bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                                        }`}
                                >
                                    Dashboard
                                </button>
                            </div>
                        </div>

                        {activeTab === "chat" ? (
                            <div className="flex h-full min-h-0 flex-1 flex-col px-2 py-3 sm:px-6 sm:py-5">
                                <div className="flex-1 overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-[#1e1f20] sm:p-5">
                                    <div className="space-y-3">
                                        {sampleMessages.map((message) => (
                                            <div
                                                key={`${message.role}-${message.text}`}
                                                className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm ${message.role === "user"
                                                        ? "ml-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                                                        : "bg-white text-slate-800 dark:bg-[#131314] dark:text-[#e3e3e3]"
                                                    }`}
                                            >
                                                {message.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        openSignup("send messages");
                                    }}
                                    className="mt-3 rounded-[28px] border border-slate-200 bg-slate-100 p-2 dark:border-white/5 dark:bg-[#1e1f20]"
                                >
                                    <div className="flex items-end gap-2">
                                        <textarea
                                            rows={1}
                                            placeholder="Enter a prompt here"
                                            className="h-12 max-h-52 w-full resize-none bg-transparent px-3 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-500 dark:text-[#e3e3e3] dark:placeholder:text-[#e3e3e3]/50"
                                        />
                                        <button
                                            type="submit"
                                            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-[#37393b] dark:text-[#e3e3e3]"
                                            aria-label="Send"
                                        >
                                            <Send className="h-4 w-4" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="h-full overflow-y-auto p-3 sm:p-6">
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Organization Dashboard</h2>
                                        <p className="text-sm text-slate-500 dark:text-white/50">AI Operations Dashboard</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => openSignup("export organization data")}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
                                    >
                                        <Download className="h-4 w-4" />
                                        Export
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                    <DashboardCard label="Total Cost (30d)" value={`$${totals.spent.toLocaleString()}`} />
                                    <DashboardCard label="Tokens Generated" value="1,244,000" />
                                    <DashboardCard label="Active Members" value="128" />
                                    <DashboardCard label="Credits Available" value={`$${(totals.budget - totals.spent).toLocaleString()}`} />
                                </div>

                                <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr,1fr]">
                                    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#171718]">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Department Budget Monitor</p>
                                        <div className="mt-4 space-y-4">
                                            {budgetData.map((item) => {
                                                const ratio = Math.min(100, Math.round((item.spent / item.budget) * 100));
                                                return (
                                                    <div key={item.team}>
                                                        <div className="mb-1 flex items-center justify-between text-sm">
                                                            <span className="font-medium text-slate-700 dark:text-slate-200">{item.team}</span>
                                                            <span className="text-slate-500 dark:text-slate-400">
                                                                ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()}
                                                            </span>
                                                        </div>
                                                        <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                                                            <div
                                                                className={`h-full ${ratio > 85 ? "bg-rose-500" : "bg-emerald-500"}`}
                                                                style={{ width: `${ratio}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#171718]">
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Recent Audit Logs</p>
                                        <ul className="mt-3 space-y-2">
                                            {activityRows.map((row) => (
                                                <li
                                                    key={row}
                                                    className="flex items-start gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-[#1f2022] dark:text-slate-200"
                                                >
                                                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                                                    <span>{row}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>

            {showSignup && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#171718]">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">Demo Mode</p>
                        <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">Create your account to continue</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            Demo mode allows browsing. You need an account to {blockedAction}.
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <a
                                href="https://app.remova.org/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
                            >
                                Sign up
                            </a>
                            <a
                                href="https://app.remova.org/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
                            >
                                Log in
                            </a>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowSignup(false)}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                        >
                            <Lock className="h-4 w-4" />
                            Continue in demo
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

function DashboardCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#171718]">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
        </div>
    );
}
