"use client";

import { FormEvent, useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "605d5350-f21e-4531-bd3c-219ad374486c";

type SalesInquiryFormProps = {
    inquiryType: string;
    source: string;
    buttonLabel?: string;
    messagePlaceholder?: string;
    tone?: "light" | "dark";
};

type Web3FormsResponse = {
    success?: boolean;
    message?: string;
};

export default function SalesInquiryForm({
    inquiryType,
    source,
    buttonLabel = "Send inquiry",
    messagePlaceholder = "Team size, current AI tools, timeline, and what you want to improve",
    tone = "light",
}: SalesInquiryFormProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [statusText, setStatusText] = useState("");
    const dark = tone === "dark";

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === "submitting") return;

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("subject", `Remova inquiry: ${inquiryType}`);
        formData.append("from_name", "Remova website");
        formData.append("inquiry_type", inquiryType);
        formData.append("source", source);

        setStatus("submitting");
        setStatusText("");

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });
            const payload = (await response.json().catch(() => ({}))) as Web3FormsResponse;

            if (!response.ok || payload.success === false) {
                throw new Error(payload.message || "We could not send your request. Please try again.");
            }

            form.reset();
            setStatus("success");
            setStatusText("Thanks. Remova will follow up with you shortly.");
        } catch (error) {
            setStatus("error");
            setStatusText(error instanceof Error ? error.message : "We could not send your request. Please try again.");
        }
    }

    const fieldClass = dark
        ? "w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium text-white outline-none transition placeholder:text-slate-400 focus:border-emerald-300"
        : "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-slate-900 dark:border-white/20 dark:bg-[#0f1012] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-white";

    return (
        <form onSubmit={onSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
                <div>
                    <label htmlFor={`${source}-name`} className="sr-only">Full name</label>
                    <input id={`${source}-name`} name="name" type="text" autoComplete="name" placeholder="Full name" required className={fieldClass} />
                </div>
                <div>
                    <label htmlFor={`${source}-email`} className="sr-only">Work email</label>
                    <input id={`${source}-email`} name="email" type="email" inputMode="email" autoComplete="email" placeholder="Work email" required className={fieldClass} />
                </div>
            </div>

            <div>
                <label htmlFor={`${source}-company`} className="sr-only">Company</label>
                <input id={`${source}-company`} name="company" type="text" autoComplete="organization" placeholder="Company" required className={fieldClass} />
            </div>

            <div>
                <label htmlFor={`${source}-message`} className="sr-only">How can Remova help?</label>
                <textarea id={`${source}-message`} name="message" rows={4} placeholder={messagePlaceholder} required className={`${fieldClass} resize-y`} />
            </div>

            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <button
                type="submit"
                disabled={status === "submitting"}
                className={dark
                    ? "inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
                    : "inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"}
            >
                {status === "submitting" ? "Sending..." : buttonLabel}
            </button>

            <p className={`text-xs font-medium ${dark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
                We use these details only to respond to your request.
            </p>

            <p
                aria-live="polite"
                className={`min-h-5 text-sm font-bold ${
                    status === "success"
                        ? "text-emerald-600 dark:text-emerald-300"
                        : status === "error"
                            ? "text-red-600 dark:text-red-300"
                            : ""
                }`}
            >
                {statusText}
            </p>
        </form>
    );
}
