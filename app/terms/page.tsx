import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
    title: "Terms of Service | Remova",
    description: "Legal terms and conditions for using the Remova platform.",
};

export default function TermsPage() {
    const lastUpdated = "January 31, 2026";
    const effectiveDate = "January 31, 2026";

    return (
        <div className="min-h-screen bg-white dark:bg-[#131314] text-slate-900 dark:text-white transition-colors duration-300">
            {/* Header / Back Link */}
            <div className="container mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-bold uppercase tracking-wider text-sm mb-12 group"
                >
                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>

                <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 backdrop-blur-md shadow-sm">
                    <span className="tracking-wide uppercase">Effective Date: {effectiveDate}</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
                    Terms of <br /> <span className="text-blue-500">Service</span>
                </h1>

                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-16 leading-relaxed">
                    This Terms of Service Agreement ("Agreement") is a legally binding contract between you ("User," "you," or "your") and Remova, a Delaware C Corporation ("Company," "we," "us," or "our"). By accessing or using the Remova platform and services, you agree to be bound by this Agreement.
                </p>

                <div className="space-y-16">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">1</span>
                            Acceptance of Terms
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                By creating an account, accessing, or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Service.
                            </p>
                            <p>
                                If you are entering into this Agreement on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. In such case, "you" and "your" shall refer to such entity.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">2</span>
                            Description of Service
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Remova provides an AI governance and cost management platform designed to help organizations monitor, control, and optimize their use of Large Language Models (LLMs) and other artificial intelligence services (collectively, the "Service"). The Service may include software, APIs, dashboards, analytics tools, and related documentation.
                            </p>
                            <p>
                                We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">3</span>
                            Account Registration and Security
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                            </p>
                            <p>
                                You are solely responsible for safeguarding your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to protect your account credentials.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">4</span>
                            Acceptable Use Policy
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                You agree to use the Service only for lawful purposes and in compliance with all applicable federal, state, local, and international laws and regulations. You shall not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the Service in any way that violates any applicable law or regulation;</li>
                                <li>Attempt to gain unauthorized access to the Service, other accounts, or computer systems;</li>
                                <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Service;</li>
                                <li>Use the Service to develop a competing product or service;</li>
                                <li>Interfere with or disrupt the integrity or performance of the Service;</li>
                                <li>Transmit any viruses, malware, or other malicious code;</li>
                                <li>Use the Service to infringe upon the intellectual property rights of others.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">5</span>
                            Fees, Payment, and Billing
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                Certain features of the Service are provided on a paid subscription basis. All fees are quoted in U.S. Dollars and are exclusive of applicable taxes. You are responsible for paying all applicable taxes.
                            </p>
                            <p>
                                Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are non-refundable except as expressly set forth herein or as required by applicable law.
                            </p>
                            <p>
                                We reserve the right to change our fees upon thirty (30) days' prior written notice. Your continued use of the Service after the fee change becomes effective constitutes your agreement to pay the modified fees.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">6</span>
                            Intellectual Property Rights
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                The Service and all content, features, and functionality thereof, including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, and the arrangement thereof, are owned by the Company, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                            <p>
                                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service solely for your internal business purposes during the term of your subscription.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">7</span>
                            User Data and Content
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                You retain all rights to any data, content, or materials you submit, post, or display through the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and display such User Content solely as necessary to provide the Service to you.
                            </p>
                            <p>
                                You represent and warrant that you own or have the necessary rights to submit User Content and that such content does not violate the rights of any third party.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">8</span>
                            Disclaimer of Warranties
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p className="uppercase">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                            </p>
                            <p className="uppercase">
                                WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS, OR RELIABILITY OF ANY CONTENT OBTAINED THROUGH THE SERVICE.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">9</span>
                            Limitation of Liability
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p className="uppercase">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER THE COMPANY WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            </p>
                            <p className="uppercase">
                                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO US DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM OR (B) ONE HUNDRED DOLLARS ($100).
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">10</span>
                            Indemnification
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                You agree to indemnify, defend, and hold harmless the Company and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with: (a) your access to or use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights, including intellectual property rights; or (d) your User Content.
                            </p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">11</span>
                            Termination
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                You may terminate your account at any time by contacting us or using the account cancellation feature within the Service. We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                            </p>
                            <p>
                                Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
                            </p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">12</span>
                            Governing Law and Dispute Resolution
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                            </p>
                            <p>
                                Any dispute, controversy, or claim arising out of or relating to these Terms or the Service shall be resolved by binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in the State of Delaware. The arbitrator's decision shall be final and binding, and judgment on the award may be entered in any court having jurisdiction thereof.
                            </p>
                            <p>
                                YOU AND THE COMPANY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                            </p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">13</span>
                            Modifications to Terms
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the effective date of the changes. Your continued use of the Service after the effective date of the changes constitutes your acceptance of the modified Terms.
                            </p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">14</span>
                            Miscellaneous
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>
                                <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and the Company regarding the Service and supersede all prior agreements and understandings.
                            </p>
                            <p>
                                <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                            </p>
                            <p>
                                <strong>Waiver:</strong> No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term.
                            </p>
                            <p>
                                <strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Company Information */}
                <div className="mt-24 p-8 rounded-3xl border-2 border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
                    <h3 className="text-xl font-black uppercase mb-6">Company Information</h3>
                    <div className="text-slate-600 dark:text-slate-400 font-medium space-y-2">
                        <p><strong>Legal Entity:</strong> Remova, a Delaware C Corporation</p>
                        <p><strong>Representative:</strong> Ozzy Ocak</p>
                        <p><strong>Address:</strong> 1111b South Governors Ave, STE 39322, Dover, DE 19904, United States</p>
                    </div>
                </div>

                <div className="mt-12 p-8 rounded-3xl border-4 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5">
                    <h3 className="text-xl font-black uppercase mb-4">Questions About These Terms?</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                        If you have any questions about these Terms of Service, please contact our legal team.
                    </p>
                    <Link
                        href="mailto:notifications@remova.org?subject=Terms%20of%20Service%20Inquiry"
                        className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Contact Legal
                    </Link>
                </div>
            </div>
        </div>
    );
}
