import Link from 'next/link';
import { Gavel, Scale, FileCheck, ShieldAlert, ChevronLeft } from 'lucide-react';

export const metadata = {
    title: "Terms of Access",
    description: "Legal terms and conditions for using the Remova platform.",
};

export default function TermsPage() {
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
                    <Scale className="h-5 w-5 text-blue-500 animate-pulse" />
                    <span className="tracking-wide uppercase">ACCESS_GOVERNANCE_v2.4</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
                    Terms of <br /> <span className="text-blue-500">Access</span>
                </h1>

                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-16 leading-relaxed">
                    By initializing your organization on the Remova platform, you agree to comply with our governance protocols and acceptable use policies defined below.
                </p>

                <div className="space-y-16">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">1</span>
                            Service Authorization
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Access to Remova is granted through our Seat-based licensing model. Users must be authorized by their respective organization administrators.
                            </p>
                            <p>
                                You are responsible for all activity occurring under your user credentials and must notify the Remova Security Unit immediately of any unauthorized access.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">2</span>
                            Acceptable Use Protocol
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Remova must be used for lawful business purposes. Attempts to circumvent the Security Layer, dual-layer guardrails, or cost controls are strictly prohibited.
                            </p>
                            <p>
                                Automated scraping or reverse engineering of the Remova proprietary protocol will result in immediate termination of the license.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">3</span>
                            License & Payment
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Licensing is billed monthly according to the seat count. Credits are allocated per department and refreshed every billing cycle.
                            </p>
                            <p>
                                Non-payment or failure to maintain minimum seat requirements may result in downgraded access or protocol suspension.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="mt-24 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                    <h3 className="text-xl font-black uppercase mb-4">Request Legal Review</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                        Request our full Master Service Agreement (MSA) or specific compliance Addendums.
                    </p>
                    <Link
                        href="mailto:notifications@remova.org?subject=Legal%20Access%20Inquiry"
                        className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Request Documents
                    </Link>
                </div>
            </div>
        </div>
    );
}
