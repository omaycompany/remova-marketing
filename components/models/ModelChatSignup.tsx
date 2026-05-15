"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, Sparkles, X } from "lucide-react";

type LeadStatus = "idle" | "submitting" | "success" | "error";

const REGISTER_URL = "https://app.remova.org/register";

type Props = {
    modelName: string;
    provider: string;
    sourceSlug: string;
};

export default function ModelChatSignup({ modelName, provider, sourceSlug }: Props) {
    const [prompt, setPrompt] = useState("");
    const [email, setEmail] = useState("");
    const [showSignup, setShowSignup] = useState(false);
    const [status, setStatus] = useState<LeadStatus>("idle");
    const [statusText, setStatusText] = useState("");

    function registerUrlForEmail(emailAddress: string) {
        const url = new URL(REGISTER_URL);
        url.searchParams.set("email", emailAddress);
        return url.toString();
    }

    function onChatSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!prompt.trim()) return;
        setShowSignup(true);
    }

    async function onEmailSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "submitting") return;

        setStatus("submitting");
        setStatusText("");

        try {
            const submittedEmail = email.trim();
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "605d5350-f21e-4531-bd3c-219ad374486c",
                    email: submittedEmail,
                    subject: `New Model Chat Signup: ${modelName}`,
                    model: modelName,
                    provider,
                    prompt: prompt.trim(),
                    source: `/models/${sourceSlug}`,
                }),
            });

            const payload = (await response.json().catch(() => ({}))) as { message?: string };

            if (!response.ok) {
                throw new Error(payload.message || "Something went wrong. Please try again.");
            }

            setStatus("success");
            setStatusText(payload.message || "Redirecting...");
            setEmail("");
            setPrompt("");
            window.location.href = registerUrlForEmail(submittedEmail);
        } catch (error) {
            setStatus("error");
            setStatusText(error instanceof Error ? error.message : "Something went wrong. Please try again.");
        }
    }

    function closeSignup() {
        setShowSignup(false);
        if (status !== "success") return;
        setStatus("idle");
        setStatusText("");
    }

    return (
        <>
            <div className="rounded-3xl border-2 border-slate-900 bg-white shadow-[0_28px_90px_-50px_rgba(15,23,42,0.65)] dark:border-white dark:bg-[#131314]">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-white/10">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                            <p className="truncate text-sm font-black text-slate-900 dark:text-white">{modelName}</p>
                            <p className="truncate text-xs font-bold text-slate-500 dark:text-slate-400">{provider}</p>
                        </div>
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
                        Preview
                    </span>
                </div>

                <div className="min-h-[13rem] border-b border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.03]" />

                <form onSubmit={onChatSubmit} className="p-4">
                    <label htmlFor={`model-chat-${sourceSlug}`} className="sr-only">
                        Message
                    </label>
                    <div className="flex items-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 dark:border-white/10 dark:bg-white/5">
                        <textarea
                            id={`model-chat-${sourceSlug}`}
                            value={prompt}
                            onChange={(event) => setPrompt(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" && !event.shiftKey) {
                                    event.preventDefault();
                                    event.currentTarget.form?.requestSubmit();
                                }
                            }}
                            rows={2}
                            placeholder={`Message ${modelName}`}
                            className="min-h-12 flex-1 resize-none bg-transparent px-3 py-2 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-400"
                        />
                        <button
                            type="submit"
                            disabled={!prompt.trim()}
                            aria-label="Send message"
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            </div>

            {showSignup ? (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="model-chat-signup-title"
                >
                    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-6 shadow-2xl dark:bg-[#171718]">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                                    {modelName}
                                </p>
                                <h3 id="model-chat-signup-title" className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                                    Start with your email
                                </h3>
                            </div>
                            <button
                                type="button"
                                onClick={closeSignup}
                                aria-label="Close signup"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={onEmailSubmit} className="mt-5 space-y-3">
                            <label htmlFor={`model-chat-email-${sourceSlug}`} className="sr-only">
                                Work email
                            </label>
                            <div className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-3 dark:border-white/20 dark:bg-[#0f1012]">
                                <Mail className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
                                <input
                                    id={`model-chat-email-${sourceSlug}`}
                                    type="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    placeholder="Work email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-400"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                            >
                                {status === "submitting" ? "Sending..." : "Continue"}
                            </button>

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
            ) : null}
        </>
    );
}
