import Link from 'next/link';
import { Shield, Lock, Eye, FileText, ChevronLeft } from 'lucide-react';

export const metadata = {
    title: "Privacy Protocol",
    description: "Detailed information about how Remova handles your data and ensures privacy.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-[#131314] text-slate-900 dark:text-white transition-colors duration-300">
            {/* Header / Back Link */}
            <div className="container mx-auto px-4 pt-32 pb-8 sm:px-6 lg:px-8 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-bold uppercase tracking-wider text-sm mb-12 group"
                >
                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Protocol
                </Link>

                <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-base font-bold text-slate-900 dark:text-white backdrop-blur-md shadow-sm">
                    <Shield className="h-5 w-5 text-emerald-500 animate-pulse" />
                    <span className="tracking-wide uppercase">REMOVA_PRIVACY_v2.4</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
                    Privacy <br /> <span className="text-emerald-500">Protocol</span>
                </h1>

                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-16 leading-relaxed">
                    At Remova, privacy is not a policy; it's a technical constraint. Our architecture is designed to minimize data footprint while maximizing protection for your organization's intelligence.
                </p>

                <div className="space-y-16">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">1</span>
                            Zero-Retention Architecture
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Remova implements a stateless proxy model. We do not store your prompts, model outputs, or conversation history on our servers. History is stored exclusively on the user's local browser storage.
                            </p>
                            <p>
                                Once a request is processed through our Security Layer, the context is immediately purged from our active memory buffers.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">2</span>
                            Real-Time Redaction
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Our Security Layer automatically identifies and redacts Personally Identifiable Information (PII) before it reaches the AI model providers. This includes names, emails, API keys, and financial data.
                            </p>
                            <p>
                                This process happens in-stream, ensuring that sensitive data never leaves your controlled environment.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">3</span>
                            Model Provider Privacy
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                We use Enterprise-grade APIs from model providers (OpenAI, Anthropic, Google). Under these agreements, your data is NOT used for training their base models.
                            </p>
                            <p>
                                Remova acts as a secondary shield, ensuring that even if a provider's policy changes, your data remains secure behind our governance layer.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-24 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                    <h3 className="text-xl font-black uppercase mb-4">Contact Security Unit</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                        For specific inquiries regarding our security architecture or compliance certificates, contact our technical success team.
                    </p>
                    <Link
                        href="mailto:notifications@remova.org?subject=Security%20Protocol%20Inquiry"
                        className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </div>
    );
}
