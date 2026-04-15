"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
    AlertTriangle,
    ChevronDown,
    Download,
    EyeOff,
    Lock,
    Menu,
    Mic,
    Plus,
    Search,
    Send,
    Settings,
    Shield,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    User,
} from "lucide-react";
import DemoComposerModelPicker, { type DemoModelInfo } from "@/components/demo/DemoComposerModelPicker";

type DemoTab = "chat" | "dashboard";
type MessageRole = "user" | "assistant";
type Severity = "low" | "medium" | "high";
type EventType = "mask" | "block" | "warn" | "budget" | "policy";

type DemoMessage = {
    id: string;
    role: MessageRole;
    text: string;
};

type DemoConversation = {
    id: string;
    title: string;
    preview: string;
    messages: DemoMessage[];
};

type AuditEvent = {
    id: string;
    title: string;
    detail: string;
    type: EventType;
    severity: Severity;
    timestamp: string;
};

type BudgetItem = {
    team: string;
    spent: number;
    budget: number;
};

type SafetyMetric = {
    label: string;
    value: string;
    detail: string;
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

const initialConversations: DemoConversation[] = [
    {
        id: "finance",
        title: "Finance Forecast Review",
        preview: "Q1 budget summary",
        messages: [
            {
                id: "finance-u1",
                role: "user",
                text: "Create a short summary of yesterday's support tickets.",
            },
            {
                id: "finance-a1",
                role: "assistant",
                text: "Summary prepared. Sensitive customer fields were masked by policy layer before the response was delivered.",
            },
        ],
    },
    {
        id: "pii",
        title: "PII Redaction Demo",
        preview: "Customer address was sanitized",
        messages: [
            {
                id: "pii-u1",
                role: "user",
                text: "Please email the shipping delay update to ozzy@example.com and send the replacement to 25 Ibrahim Tatlises Apt, Tarabya Boulevard.",
            },
            {
                id: "pii-a1",
                role: "assistant",
                text: "Contact details and physical address were masked before processing. Remova keeps the workflow moving with sanitized placeholders and logs the redaction event for review.",
            },
        ],
    },
    {
        id: "guardrails",
        title: "Guardrail Escalation",
        preview: "Payment data request blocked",
        messages: [
            {
                id: "guard-u1",
                role: "user",
                text: "Use card 4242 4242 4242 4242 and CVV 123 to charge the overdue invoice.",
            },
            {
                id: "guard-a1",
                role: "assistant",
                text: "This request was blocked. Payment card details cannot be processed in chat. The event was routed to policy review and tagged as restricted financial data.",
            },
        ],
    },
    {
        id: "ops",
        title: "AI Ops Weekly Review",
        preview: "Why did safety score improve?",
        messages: [
            {
                id: "ops-u1",
                role: "user",
                text: "Why did the AI safety score improve this week?",
            },
            {
                id: "ops-a1",
                role: "assistant",
                text: "Safety score improved because prompt masking coverage increased in Support and Finance, repeated secret-leak prompts were blocked earlier, and exception routing volume dropped below the weekly threshold.",
            },
        ],
    },
];

const initialEvents: AuditEvent[] = [
    {
        id: "event-1",
        title: "Policy blocked restricted financial data",
        detail: "Card-like payment details were detected in a support workflow and blocked before model dispatch.",
        type: "block",
        severity: "high",
        timestamp: "2m ago",
    },
    {
        id: "event-2",
        title: "Prompt masking applied to customer address",
        detail: "Physical address and email were replaced with placeholders before routing to the selected model.",
        type: "mask",
        severity: "medium",
        timestamp: "9m ago",
    },
    {
        id: "event-3",
        title: "Budget alert sent to Engineering owner",
        detail: "Team spend crossed 82% of monthly allocation; notifications were issued without blocking usage.",
        type: "budget",
        severity: "low",
        timestamp: "18m ago",
    },
    {
        id: "event-4",
        title: "Guardrail profile updated for HR workflows",
        detail: "PII redaction confidence threshold raised for employee records and payroll prompts.",
        type: "policy",
        severity: "medium",
        timestamp: "43m ago",
    },
];

const suggestionPrompts = [
    "Summarize this week's policy incidents.",
    "Explain how prompt masking works for addresses.",
    "Can you process card number 4242 4242 4242 4242?",
    "Show me the budget risk by department.",
];

const formatTimestamp = () => "just now";

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const containsPaymentData = (value: string) => /\b(?:\d[ -]*?){13,16}\b|\bcvv\b|\biban\b|\baccount number\b/i.test(value);
const containsSensitiveIdentityData = (value: string) =>
    /@|\b(?:address|phone|passport|social security|ssn|customer id|tax id|iban|home)\b/i.test(value);

export default function GuestProductDemo() {
    const [activeTab, setActiveTab] = useState<DemoTab>("chat");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [blockedAction, setBlockedAction] = useState("export organization data");
    const [search, setSearch] = useState("");
    const [selectedModelId, setSelectedModelId] = useState("remova-1.0");
    const [composerInput, setComposerInput] = useState("");
    const [conversations, setConversations] = useState(initialConversations);
    const [activeConversationId, setActiveConversationId] = useState(initialConversations[0]?.id ?? "finance");
    const [auditEvents, setAuditEvents] = useState(initialEvents);
    const [guardrailScore, setGuardrailScore] = useState(96.4);
    const [redactionRate, setRedactionRate] = useState(98.1);
    const [escalationsOpen, setEscalationsOpen] = useState(3);
    const [maskedPrompts, setMaskedPrompts] = useState(24);
    const [blockedPrompts, setBlockedPrompts] = useState(7);

    const navMenuRef = useRef<HTMLDivElement | null>(null);

    const filteredConversations = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return conversations;
        return conversations.filter((conversation) => {
            const haystack = `${conversation.title} ${conversation.preview} ${conversation.messages.map((message) => message.text).join(" ")}`.toLowerCase();
            return haystack.includes(query);
        });
    }, [conversations, search]);

    const activeConversation = useMemo(
        () => conversations.find((conversation) => conversation.id === activeConversationId) ?? conversations[0],
        [activeConversationId, conversations],
    );

    const totals = useMemo(() => {
        const spent = budgetData.reduce((sum, item) => sum + item.spent, 0);
        const budget = budgetData.reduce((sum, item) => sum + item.budget, 0);
        return { spent, budget };
    }, []);

    const safetyMetrics: SafetyMetric[] = useMemo(
        () => [
            {
                label: "Guardrail coverage",
                value: `${guardrailScore.toFixed(1)}%`,
                detail: "Prompts evaluated against policy and DLP classifiers before routing.",
            },
            {
                label: "Prompt masking success",
                value: `${redactionRate.toFixed(1)}%`,
                detail: `${maskedPrompts} prompts sanitized this week without blocking normal work.`,
            },
            {
                label: "Blocked high-risk prompts",
                value: `${blockedPrompts}`,
                detail: "Restricted financial data and secret leakage attempts stopped before inference.",
            },
            {
                label: "Open escalations",
                value: `${escalationsOpen}`,
                detail: "Events routed to admins because confidence or severity exceeded policy thresholds.",
            },
        ],
        [blockedPrompts, escalationsOpen, guardrailScore, maskedPrompts, redactionRate],
    );

    function openSignup(action: string) {
        setBlockedAction(action);
        setShowSignup(true);
    }

    function pushAuditEvent(event: Omit<AuditEvent, "id" | "timestamp">) {
        setAuditEvents((prev) => [
            {
                id: createId(),
                timestamp: formatTimestamp(),
                ...event,
            },
            ...prev,
        ].slice(0, 8));
    }

    function appendMessages(userText: string, assistantText: string) {
        setConversations((prev) =>
            prev.map((conversation) =>
                conversation.id === activeConversationId
                    ? {
                        ...conversation,
                        preview: userText,
                        messages: [
                            ...conversation.messages,
                            { id: createId(), role: "user", text: userText },
                            { id: createId(), role: "assistant", text: assistantText },
                        ],
                    }
                    : conversation,
            ),
        );
    }

    function handleSendAttempt() {
        const prompt = composerInput.trim();
        if (!prompt) return;

        if (containsPaymentData(prompt)) {
            appendMessages(
                prompt,
                "This request was blocked. Remova does not allow card numbers, CVV values, bank identifiers, or payment instructions to pass through chat. The prompt was halted before model execution and logged as a high-severity guardrail event.",
            );
            setBlockedPrompts((value) => value + 1);
            setEscalationsOpen((value) => value + 1);
            setGuardrailScore((value) => Math.min(99.4, value + 0.2));
            pushAuditEvent({
                title: "Restricted payment data blocked",
                detail: "The demo prompt contained payment credentials. Delivery was prevented and the case was escalated for review.",
                type: "block",
                severity: "high",
            });
        } else if (containsSensitiveIdentityData(prompt)) {
            const sanitizedPrompt = prompt
                .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[EMAIL]")
                .replace(/\b\d{1,4}\s+[A-Za-z0-9.,' -]{6,}/g, "[ADDRESS]");

            appendMessages(
                prompt,
                `Sensitive personal details were masked before processing. Sanitized prompt: ${sanitizedPrompt}. Remova keeps the workflow usable while removing direct identifiers from the model context.`,
            );
            setMaskedPrompts((value) => value + 1);
            setRedactionRate((value) => Math.min(99.6, value + 0.1));
            pushAuditEvent({
                title: "Prompt masking applied",
                detail: "Direct identifiers were replaced with placeholders before the request was routed to the model.",
                type: "mask",
                severity: "medium",
            });
        } else if (/budget|cost|spend|department/i.test(prompt)) {
            appendMessages(
                prompt,
                "Engineering is closest to its monthly budget threshold at 82%, followed by Sales at 78%. No team is blocked yet, but notifications are active and Finance receives auto-escalations once any team passes 90%.",
            );
            pushAuditEvent({
                title: "Budget summary requested",
                detail: "A finance-style summary was generated from the organization dashboard demo state.",
                type: "budget",
                severity: "low",
            });
        } else if (/guardrail|policy|safety|redaction|mask/i.test(prompt)) {
            appendMessages(
                prompt,
                "Current guardrails cover prompt classification, PII masking, restricted payment data blocking, and admin escalation for uncertain cases. High-risk prompts are stopped, medium-risk prompts are sanitized, and low-risk prompts are logged for trend review.",
            );
            pushAuditEvent({
                title: "Guardrail policy explained",
                detail: "The demo assistant returned a governance summary covering masking, blocking, and escalation behavior.",
                type: "policy",
                severity: "low",
            });
        } else {
            appendMessages(
                prompt,
                "Draft complete. The request stayed inside approved policy boundaries, so no masking or blocking was required. Usage and token spend were still recorded in the organization dashboard.",
            );
            pushAuditEvent({
                title: "Low-risk prompt completed",
                detail: "The request passed policy checks and was answered without redaction or escalation.",
                type: "warn",
                severity: "low",
            });
        }

        setComposerInput("");
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
                        className={`hidden h-full flex-shrink-0 flex-col border-r border-white/5 bg-[#131314] transition-all duration-300 lg:flex ${sidebarCollapsed ? "w-20" : "w-72"}`}
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
                                <div className="flex-1 overflow-y-auto px-3 pb-3">
                                    <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/35">Recent</p>
                                    <div className="space-y-1">
                                        {filteredConversations.map((conversation) => {
                                            const isActive = conversation.id === activeConversationId;
                                            return (
                                                <button
                                                    key={conversation.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setActiveConversationId(conversation.id);
                                                        setActiveTab("chat");
                                                    }}
                                                    className={`w-full rounded-full px-3 py-2 text-left text-sm transition ${isActive
                                                        ? "bg-[#004a77] text-[#c2e7ff]"
                                                        : "text-[#e3e3e3] hover:bg-[#28292a]"}`}
                                                >
                                                    <div className="truncate">{conversation.title}</div>
                                                    <div className={`truncate text-xs ${isActive ? "text-[#c2e7ff]/70" : "text-white/35"}`}>
                                                        {conversation.preview}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="border-t border-white/5 px-3 py-3">
                                    <button
                                        type="button"
                                        onClick={() => openSignup("manage workspace settings")}
                                        className="flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-sm text-white/70 transition hover:bg-[#28292a] hover:text-white"
                                    >
                                        <Settings className="h-4 w-4" />
                                        Settings
                                    </button>
                                </div>
                            </section>
                        )}
                    </aside>

                    <section className="flex min-w-0 flex-1 flex-col bg-[#131314]">
                        {activeTab === "chat" ? (
                            <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-[#131314]">
                                <div className="border-b border-white/5 px-4 py-3 sm:px-6">
                                    <div className="mx-auto flex w-full max-w-[980px] flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h2 className="text-sm font-semibold text-white">{activeConversation?.title}</h2>
                                            <p className="text-xs text-white/45">Live guest demo with synthetic governance events</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestionPrompts.map((prompt) => (
                                                <button
                                                    key={prompt}
                                                    type="button"
                                                    onClick={() => setComposerInput(prompt)}
                                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                                                >
                                                    {prompt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain px-1 sm:px-4">
                                    <div className="mx-auto w-full max-w-[980px] space-y-3 py-4">
                                        {activeConversation?.messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user"
                                                    ? "ml-auto max-w-[86%] bg-[#2a2d33] text-[#e3e3e3]"
                                                    : "mr-auto max-w-[86%] bg-transparent text-[#e3e3e3]"}`}
                                            >
                                                <div className="whitespace-pre-wrap">{message.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0 bg-[#131314] px-1 pb-2 pt-2 sm:px-4">
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            handleSendAttempt();
                                        }}
                                        className="mx-auto mb-2 w-full max-w-[980px] px-1 sm:px-4"
                                    >
                                        <div className="relative flex flex-col rounded-[28px] border border-white/5 bg-[#1e1f20] p-3 shadow-sm transition-colors focus-within:bg-[#282a2c]">
                                            <div className="mb-2 flex flex-wrap items-center gap-2 px-1 text-[11px] text-white/35">
                                                <span className="rounded-full bg-white/[0.05] px-2 py-1">Prompt masking active</span>
                                                <span className="rounded-full bg-white/[0.05] px-2 py-1">PII redaction active</span>
                                                <span className="rounded-full bg-white/[0.05] px-2 py-1">Guardrail review on high-risk prompts</span>
                                            </div>
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
                                                        value={composerInput}
                                                        onChange={(event) => setComposerInput(event.target.value)}
                                                        onKeyDown={(event) => {
                                                            if (event.key === "Enter" && !event.shiftKey) {
                                                                event.preventDefault();
                                                                handleSendAttempt();
                                                            }
                                                        }}
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
                                <div className="mx-auto max-w-7xl space-y-4">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">Organization Dashboard</h2>
                                            <p className="mt-1 text-sm text-white/50">AI governance, cost control, and safety operations in one surface</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setActiveTab("chat")}
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                                            >
                                                <Sparkles className="h-4 w-4" />
                                                Back to chat
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => openSignup("export organization data")}
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                                            >
                                                <Download className="h-4 w-4" />
                                                Export
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                        <DashboardCard label="Total spend (30d)" value={`$${totals.spent.toLocaleString()}`} detail={`$${(totals.budget - totals.spent).toLocaleString()} budget remaining`} />
                                        <DashboardCard label="Guardrail coverage" value={`${guardrailScore.toFixed(1)}%`} detail="Prompt, output, and DLP checks live" />
                                        <DashboardCard label="Masked prompts" value={`${maskedPrompts}`} detail="PII and direct identifiers sanitized" />
                                        <DashboardCard label="Open escalations" value={`${escalationsOpen}`} detail="Awaiting admin review or owner acknowledgment" />
                                    </div>

                                    <div className="grid gap-4 xl:grid-cols-[1.25fr,0.9fr]">
                                        <Panel title="Department Budget Monitor" subtitle="Spend posture by team with alert thresholds">
                                            <div className="space-y-4">
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
                                                                    className={`h-full ${ratio > 85 ? "bg-rose-500" : ratio > 75 ? "bg-amber-400" : "bg-emerald-500"}`}
                                                                    style={{ width: `${ratio}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </Panel>

                                        <Panel title="AI Safety Posture" subtitle="Current operating thresholds and control state">
                                            <div className="grid gap-3">
                                                {safetyMetrics.map((metric) => (
                                                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-[#1e1f20] px-4 py-3">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <p className="text-sm font-medium text-white/70">{metric.label}</p>
                                                            <p className="text-lg font-semibold text-white">{metric.value}</p>
                                                        </div>
                                                        <p className="mt-1 text-xs leading-5 text-white/45">{metric.detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Panel>
                                    </div>

                                    <div className="grid gap-4 xl:grid-cols-3">
                                        <Panel title="Prompt Masking Pipeline" subtitle="How sensitive content is handled before inference">
                                            <div className="space-y-3 text-sm text-white/75">
                                                <PipelineStep icon={<Search className="h-4 w-4" />} label="Detect" description="Emails, addresses, customer IDs, and payment markers are scanned before model routing." />
                                                <PipelineStep icon={<EyeOff className="h-4 w-4" />} label="Sanitize" description="Matched entities are replaced with stable placeholders such as [EMAIL], [ADDRESS], or [ACCOUNT_ID]." />
                                                <PipelineStep icon={<ShieldCheck className="h-4 w-4" />} label="Route" description="Only the sanitized prompt reaches the selected model. Original text stays restricted to approved reviewers." />
                                            </div>
                                        </Panel>

                                        <Panel title="Sensitive Data Controls" subtitle="Guardrails active across the organization">
                                            <div className="grid gap-3 text-sm">
                                                <ControlRow label="PII redaction" value="Enabled" tone="good" />
                                                <ControlRow label="Payment data blocking" value="Strict" tone="high" />
                                                <ControlRow label="Secret leakage detection" value="Enabled" tone="good" />
                                                <ControlRow label="Low-confidence escalation" value="Admins only" tone="warn" />
                                                <ControlRow label="Retention for masked prompts" value="30 days" tone="neutral" />
                                            </div>
                                        </Panel>

                                        <Panel title="Model Governance" subtitle="How model access is controlled in this demo org">
                                            <div className="space-y-3 text-sm text-white/75">
                                                <InfoLine icon={<Shield className="h-4 w-4 text-sky-300" />} text="Default routing keeps most traffic on Remova 1.0 for consistent policy enforcement." />
                                                <InfoLine icon={<ShieldAlert className="h-4 w-4 text-amber-300" />} text="Premium models require the same masking and policy checks before request execution." />
                                                <InfoLine icon={<Sparkles className="h-4 w-4 text-emerald-300" />} text={`Current composer selection: ${demoModels.find((model) => model.id === selectedModelId)?.name ?? "Remova 1.0"}.`} />
                                            </div>
                                        </Panel>
                                    </div>

                                    <div className="grid gap-4 xl:grid-cols-[1.05fr,0.95fr]">
                                        <Panel title="Recent Audit Logs" subtitle="Latest policy, masking, and budget events">
                                            <ul className="space-y-2">
                                                {auditEvents.map((event) => (
                                                    <li key={event.id} className="rounded-2xl border border-white/10 bg-[#1f2022] px-4 py-3">
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="flex items-start gap-3">
                                                                <EventIcon type={event.type} />
                                                                <div>
                                                                    <p className="text-sm font-medium text-white">{event.title}</p>
                                                                    <p className="mt-1 text-xs leading-5 text-white/50">{event.detail}</p>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <SeverityBadge severity={event.severity} />
                                                                <p className="mt-1 text-[11px] text-white/35">{event.timestamp}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Panel>

                                        <Panel title="Guardrail Coverage" subtitle="Operational view of enforcement depth by category">
                                            <div className="space-y-4">
                                                <CoverageBar label="PII masking" value={98} tone="emerald" />
                                                <CoverageBar label="Financial data blocking" value={100} tone="rose" />
                                                <CoverageBar label="Prompt classification" value={96} tone="sky" />
                                                <CoverageBar label="Exception routing" value={92} tone="amber" />
                                                <CoverageBar label="Budget anomaly alerts" value={88} tone="violet" />
                                            </div>
                                        </Panel>
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

function DashboardCard({ label, value, detail }: { label: string; value: string; detail: string }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#171718] p-4">
            <p className="text-sm font-medium text-white/60">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            <p className="mt-1 text-xs leading-5 text-white/40">{detail}</p>
        </div>
    );
}

function Panel({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-[#171718] p-4">
            <div className="mb-4">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-white/45">{subtitle}</p>
            </div>
            {children}
        </div>
    );
}

function PipelineStep({ icon, label, description }: { icon: ReactNode; label: string; description: string }) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#1e1f20] px-4 py-3">
            <div className="mt-0.5 text-sky-300">{icon}</div>
            <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="mt-1 text-xs leading-5 text-white/50">{description}</p>
            </div>
        </div>
    );
}

function ControlRow({ label, value, tone }: { label: string; value: string; tone: "good" | "warn" | "high" | "neutral" }) {
    const toneClass = {
        good: "bg-emerald-500/15 text-emerald-300",
        warn: "bg-amber-500/15 text-amber-300",
        high: "bg-rose-500/15 text-rose-300",
        neutral: "bg-white/10 text-white/70",
    }[tone];

    return (
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#1e1f20] px-4 py-3">
            <span className="text-white/75">{label}</span>
            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${toneClass}`}>{value}</span>
        </div>
    );
}

function InfoLine({ icon, text }: { icon: ReactNode; text: string }) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#1e1f20] px-4 py-3">
            <div className="mt-0.5">{icon}</div>
            <p className="text-xs leading-5 text-white/65">{text}</p>
        </div>
    );
}

function EventIcon({ type }: { type: EventType }) {
    if (type === "mask") return <EyeOff className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" />;
    if (type === "block") return <ShieldAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-300" />;
    if (type === "budget") return <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300" />;
    return <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />;
}

function SeverityBadge({ severity }: { severity: Severity }) {
    const style = {
        low: "bg-white/10 text-white/70",
        medium: "bg-amber-500/15 text-amber-300",
        high: "bg-rose-500/15 text-rose-300",
    }[severity];

    return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${style}`}>{severity}</span>;
}

function CoverageBar({ label, value, tone }: { label: string; value: number; tone: "emerald" | "rose" | "sky" | "amber" | "violet" }) {
    const color = {
        emerald: "bg-emerald-500",
        rose: "bg-rose-500",
        sky: "bg-sky-500",
        amber: "bg-amber-400",
        violet: "bg-violet-500",
    }[tone];

    return (
        <div>
            <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-white/75">{label}</span>
                <span className="text-white/50">{value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}
