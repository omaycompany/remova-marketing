import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata = {
    title: "Privacy Policy | Remova",
    description: "Detailed information about how Remova handles your data and ensures privacy.",
};

export default function PrivacyPage() {
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
                    Privacy <br /> <span className="text-emerald-500">Policy</span>
                </h1>

                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 mb-16 leading-relaxed">
                    Remova, a Delaware C Corporation ("Company," "we," "us," or "our"), is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our platform and services. Please read this policy carefully.
                </p>

                <div className="space-y-16">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">1</span>
                            Information We Collect
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p><strong>Personal Information:</strong> When you register for an account, we collect information such as your name, email address, company name, job title, and billing information. We may also collect information you provide when contacting customer support.</p>
                            <p><strong>Usage Data:</strong> We automatically collect certain information when you access or use our Service, including your IP address, browser type, operating system, referring URLs, pages visited, and timestamps. This data helps us understand how users interact with our platform.</p>
                            <p><strong>Device Information:</strong> We may collect information about the device you use to access our Service, including device type, unique device identifiers, and mobile network information.</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">2</span>
                            How We Use Your Information
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We use the information we collect for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, operate, and maintain the Service;</li>
                                <li>To process transactions and send related billing information;</li>
                                <li>To communicate with you, including sending service-related notices and promotional communications (with your consent where required);</li>
                                <li>To respond to your inquiries and provide customer support;</li>
                                <li>To monitor and analyze usage patterns and trends to improve our Service;</li>
                                <li>To detect, prevent, and address technical issues, fraud, or security vulnerabilities;</li>
                                <li>To comply with legal obligations and enforce our Terms of Service.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">3</span>
                            Disclosure of Your Information
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service. These providers are obligated to protect your information.</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the transaction.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of our company, users, or others.</li>
                                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
                            </ul>
                            <p className="font-bold mt-4">We do not sell your personal information to third parties.</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">4</span>
                            Cookies and Tracking Technologies
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We use cookies and similar tracking technologies to collect and store information about your preferences and activity. Cookies are small data files stored on your device that help us improve your experience.</p>
                            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">5</span>
                            Data Retention
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">6</span>
                            Data Security
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We implement appropriate technical and organizational security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and regular security assessments.</p>
                            <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">7</span>
                            Your Privacy Rights
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>Depending on your jurisdiction, you may have certain rights regarding your personal information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
                                <li><strong>Correction:</strong> You may request that we correct inaccurate or incomplete personal information.</li>
                                <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
                                <li><strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.</li>
                                <li><strong>Data Portability:</strong> Where applicable, you may request a copy of your personal information in a structured, machine-readable format.</li>
                            </ul>
                            <p>To exercise any of these rights, please contact us using the information provided below. We will respond to your request within the timeframes required by applicable law.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">8</span>
                            California Privacy Rights (CCPA)
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with additional rights regarding your personal information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Right to Know:</strong> You may request information about the categories and specific pieces of personal information we have collected about you, the sources from which we collected it, our purposes for collecting it, and the categories of third parties with whom we share it.</li>
                                <li><strong>Right to Delete:</strong> You may request deletion of your personal information, subject to certain exceptions.</li>
                                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
                            </ul>
                            <p>To submit a CCPA request, please contact us at notifications@remova.org. We may need to verify your identity before processing your request.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">9</span>
                            Children's Privacy
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe we may have collected information from a child under 18, please contact us immediately.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">10</span>
                            International Data Transfers
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your country. By using our Service, you consent to the transfer of your information to the United States and other jurisdictions where we operate.</p>
                            <p>We take appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy when transferred internationally.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">11</span>
                            Third-Party Links
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>Our Service may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900">12</span>
                            Changes to This Privacy Policy
                        </h2>
                        <div className="pl-14 space-y-4 text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a prominent notice on our website prior to the effective date of the changes. Your continued use of the Service after the effective date of the revised policy constitutes your acceptance of the changes.</p>
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
                    <h3 className="text-xl font-black uppercase mb-4">Contact Us About Privacy</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                        If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us.
                    </p>
                    <Link
                        href="mailto:notifications@remova.org?subject=Privacy%20Policy%20Inquiry"
                        className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                        Contact Privacy Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
