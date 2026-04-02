"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    AlertTriangle,
    ChevronDown,
    Download,
    Lock,
    Menu,
    Mic,
    Plus,
    Search,
    Send,
    Settings,
    User,
} from "lucide-react";
import DemoComposerModelPicker, { type DemoModelInfo } from "@/components/demo/DemoComposerModelPicker";

type DemoTab = "chat" | "dashboard";

type BudgetItem = {
    team: string;
    spent: number;
    budget: number;
};

const demoModels: DemoModelInfo[] = [
    {
        id: "remova-1.0",
        name: "Remova 1.0",
        description: "Auto-routes to the best model for each request.",
        contextLength: 64000,
    },
    {
        id: "openai/gpt-5.4",
        name: "GPT-5.4",
        description: "Strong general reasoning and structured outputs.",
        contextLength: 200000,
        inputPricePer1M: "5.00",
        outputPricePer1M: "15.00",
    },
    {
        id: "anthropic/claude-sonnet-4",
        name: "Claude Sonnet 4",
        description: "Fast long-form drafting and instruction following.",
        contextLength: 200000,
        inputPricePer1M: "3.00",
        outputPricePer1M: "15.00",
    },
    {
        id: "google/gemini-2.5-pro",
        name: "Gemini 2.5 Pro",
        description: "High-context analysis and multimodal planning.",
        contextLength: 1000000,
        inputPricePer1M: "3.50",
        outputPricePer1M: "10.50",
    },
];

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
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [blockedAction, setBlockedAction] = useState("send messages");
    const [search, setSearch] = useState("Q1 budget summary");
    const [selectedModelId, setSelectedModelId] = useState("remova-1.0");

    const navMenuRef = useRef<HTMLDivElement | null>(null);

    const totals = useMemo(() => {
        const spent = budgetData.reduce((sum, item) => sum + item.spent, 0);
        const budget = budgetData.reduce((sum, item) => sum + item.budget, 0);
        return { spent, budget };
    }, []);

    function openSignup(action: string) {
        setBlockedAction(action);
        setShowSignup(true);
    }

    useEffect(() => {
        const onMouseDown = (event: MouseEvent) => {
            if (showNavMenu && navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
                setShowNavMenu(false);
            }
        };

        if (showNavMenu) {
            document.addEventListener("mousedown", onMouseDown);
            return () => document.removeEventListener("mousedown", onMouseDown);
        }
    }, [showNavMenu]);

    return (
        <>
            <div className="dark flex h-full min-h-[100dvh] w-full flex-col overflow-hidden bg-[#131314] font-['Inter',sans-serif] text-[#e3e3e3]">
                <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#131314] text-white">
                    <div className="flex h-11 items-center justify-between gap-4 px-3 md:h-14 md:px-6">
                        <div className="flex items-center gap-4 md:gap-6">
                            <button type="button" className="flex items-center gap-2">
                                <Image
                                    src="/images/remova logo (4).png"
                                    alt="Remova"
                                    width={132}
                                    height={36}
                                    className="h-7 w-auto object-contain brightness-0 invert"
                                />
                            </button>
                            <div className="relative" ref={navMenuRef}>
                                <button
                                    type="button"
                                    onClick={() => setShowNavMenu((prev) => !prev)}
                                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition hover:text-white"
                                >
                                    {activeTab === "chat" ? "Chat" : "Organization"}
                                    <ChevronDown className={`h-4 w-4 transition-transform ${showNavMenu ? "rotate-180" : ""}`} />
                                </button>
                                {showNavMenu && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-2xl border border-white/10 bg-black/95 p-2 text-sm text-white shadow-2xl">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setActiveTab("chat");
                                                setShowNavMenu(false);
                                            }}
                                            className="w-full rounded-xl px-3 py-2 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                                        >
                                            Chat
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setActiveTab("dashboard");
                                                setShowNavMenu(false);
                                            }}
                                            className="w-full rounded-xl px-3 py-2 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                                        >
                                            Organization
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowNavMenu(false);
                                                openSignup("open settings");
                                            }}
                                            className="w-full rounded-xl px-3 py-2 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
                                        >
                                            Settings
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => openSignup("open settings")}
                                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                            >
                                <Settings className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => openSignup("manage your account")}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                            >
                                <User className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </nav>

                <div className="flex h-full min-h-0 flex-1 overflow-hidden bg-[#131314]">
                    <aside
                        className={`hidden h-full flex-shrink-0 flex-col border-r border-white/5 bg-[#131314] transition-all duration-300 lg:flex ${sidebarCollapsed ? "w-20" : "w-72"
                            }`}
                    >
                        {sidebarCollapsed ? (
                            <section className="flex h-full flex-col items-center gap-4 py-4">
                                <button
                                    type="button"
                                    onClick={() => setSidebarCollapsed(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:bg-white/10"
                                    title="Expand sidebar"
                                >
                                    <Menu className="h-5 w-5" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => openSignup("create conversations")}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#282a2c] text-white/70 hover:bg-[#37393b]"
                                    title="New chat"
                                >
                                    <Plus className="h-5 w-5" />
                                </button>
                            </section>
                        ) : (
                            <section className="flex h-full flex-col bg-[#131314] text-[#e3e3e3]">
                                <div className="flex items-center justify-between px-3 py-3">
                                    <button
                                        type="button"
                                        onClick={() => setSidebarCollapsed(true)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#e3e3e3] hover:bg-[#28292a]"
                                    >
                                        <Menu className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openSignup("create conversations")}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#282a2c] text-[#e3e3e3] hover:bg-[#37393b]"
                                        title="New chat"
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="mb-2 px-3 pb-2">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(event) => setSearch(event.target.value)}
                                            className="w-full rounded-2xl border border-white/5 bg-[#282a2c] py-2 pl-9 pr-4 text-sm text-[#e3e3e3] outline-none placeholder:text-slate-500"
                                            placeholder="Search chats..."
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto px-3">
                                    <div className="space-y-1">
                                        <button className="w-full rounded-full bg-[#004a77] px-3 py-2 text-left text-sm text-[#c2e7ff]">
                                            Finance Forecast Review
                                        </button>
                                        <button className="w-full rounded-full px-3 py-2 text-left text-sm text-[#e3e3e3] hover:bg-[#28292a]">
                                            Sales Enablement Draft
                                        </button>
                                        <button className="w-full rounded-full px-3 py-2 text-left text-sm text-[#e3e3e3] hover:bg-[#28292a]">
                                            Product Launch Checklist
                                        </button>
                                    </div>
                                </div>
                            </section>
                        )}
                    </aside>

                    <section className="flex min-w-0 flex-1 flex-col bg-[#131314]">
                        {activeTab === "chat" ? (
                            <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-[#131314]">
                                <div className="flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain px-1 sm:px-4">
                                    <div className="mx-auto w-full max-w-[980px] space-y-3 py-4">
                                        {sampleMessages.map((message) => (
                                            <div
                                                key={`${message.role}-${message.text}`}
                                                className={`rounded-2xl px-4 py-3 text-sm ${message.role === "user"
                                                        ? "ml-auto max-w-[86%] bg-white text-[#131314]"
                                                        : "mr-auto max-w-[86%] bg-[#0f1115] text-[#e3e3e3]"
                                                    }`}
                                            >
                                                {message.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0 bg-[#131314] px-1 pb-2 pt-2 sm:px-4">
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            openSignup("send messages");
                                        }}
                                        className="mx-auto mb-2 w-full max-w-[980px] px-1 sm:px-4"
                                    >
                                        <div className="relative flex flex-col rounded-[28px] border border-white/5 bg-[#1e1f20] p-3 shadow-sm transition-colors focus-within:bg-[#282a2c]">
                                            <div className="flex items-end gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => openSignup("upload files")}
                                                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#e3e3e3] hover:bg-[#37393b]"
                                                    title="Add image"
                                                >
                                                    <Plus className="h-5 w-5" />
                                                </button>
                                                <div className="flex flex-1 items-center py-2">
                                                    <textarea
                                                        rows={1}
                                                        placeholder="Enter a prompt here"
                                                        className="h-6 max-h-[200px] w-full resize-none bg-transparent text-base text-[#e3e3e3] outline-none placeholder:text-[#e3e3e3]/50"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => openSignup("use voice input")}
                                                    className="hidden h-10 w-10 items-center justify-center rounded-full text-[#e3e3e3] hover:bg-[#37393b] sm:flex"
                                                    title="Use microphone"
                                                >
                                                    <Mic className="h-5 w-5" />
                                                </button>
                                                <div className="flex items-center rounded-full bg-[#37393b] p-1">
                                                    <button
                                                        type="submit"
                                                        className="flex h-8 w-8 items-center justify-center rounded-full text-[#e3e3e3] hover:bg-white/10"
                                                        title="Send message"
                                                    >
                                                        <Send className="h-4 w-4" />
                                                    </button>
                                                    <DemoComposerModelPicker
                                                        availableModels={demoModels}
                                                        selectedModelId={selectedModelId}
                                                        onSelectModel={setSelectedModelId}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full overflow-y-auto bg-[#131314] px-4 py-6 lg:px-8">
                                <div className="mx-auto max-w-7xl">
                                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Organization Dashboard</h2>
                                            <p className="mt-1 text-sm text-white/50">AI Operations Dashboard</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => openSignup("export organization data")}
                                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                                        >
                                            <Download className="h-4 w-4" />
                                            Export
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                        <DashboardCard label="Total Cost (30d)" value={`$${totals.spent.toLocaleString()}`} />
                                        <DashboardCard label="Tokens Generated" value="1,244,000" />
                                        <DashboardCard label="Active Members" value="128" />
                                        <DashboardCard label="Credits Available" value={`$${(totals.budget - totals.spent).toLocaleString()}`} />
                                    </div>

                                    <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr,1fr]">
                                        <div className="rounded-2xl border border-white/10 bg-[#171718] p-4">
                                            <p className="text-sm font-semibold text-white">Department Budget Monitor</p>
                                            <div className="mt-4 space-y-4">
                                                {budgetData.map((item) => {
                                                    const ratio = Math.min(100, Math.round((item.spent / item.budget) * 100));
                                                    return (
                                                        <div key={item.team}>
                                                            <div className="mb-1 flex items-center justify-between text-sm">
                                                                <span className="font-medium text-slate-200">{item.team}</span>
                                                                <span className="text-slate-400">
                                                                    ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()}
                                                                </span>
                                                            </div>
                                                            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
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

                                        <div className="rounded-2xl border border-white/10 bg-[#171718] p-4">
                                            <p className="text-sm font-semibold text-white">Recent Audit Logs</p>
                                            <ul className="mt-3 space-y-2">
                                                {activityRows.map((row) => (
                                                    <li
                                                        key={row}
                                                        className="flex items-start gap-2 rounded-xl border border-white/10 bg-[#1f2022] px-3 py-2 text-xs text-slate-200"
                                                    >
                                                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                                                        <span>{row}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>

            {showSignup && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#171718] p-6 shadow-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400">Demo Mode</p>
                        <h3 className="mt-2 text-2xl font-black text-white">Create your account to continue</h3>
                        <p className="mt-2 text-sm text-slate-300">
                            Demo mode allows browsing. You need an account to {blockedAction}.
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <a
                                href="https://app.remova.org/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#131314]"
                            >
                                Sign up
                            </a>
                            <a
                                href="https://app.remova.org/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-slate-200"
                            >
                                Log in
                            </a>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowSignup(false)}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10"
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
        <div className="rounded-2xl border border-white/10 bg-[#0f1420] p-4">
            <p className="text-sm font-medium text-white/60">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
        </div>
    );
}
