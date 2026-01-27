import Link from 'next/link';
import { ShieldCheck, Lock, Coins, EyeOff, Building2, Layers, Check, Handshake, Brain, Sparkles, Cpu, FileText, BarChart3, History, Zap, Shield, MessageSquare, Bot, ToggleRight, LayoutDashboard, Database, Ghost, Smartphone, Wand2, FileSpreadsheet, ShieldAlert, XCircle, Search, Server, FileLock2, AlertTriangle, Workflow, FileType, Key, BoxSelect, MonitorDot, Gauge, Scale, BookOpen, Fingerprint, Eye, LockKeyhole, Umbrella, RefreshCw, Slash, FileClock, SearchX, UserMinus, Diamond, Users, UserCog, UserCheck, KeyRound, Plug, Wallet, Receipt, Hourglass, Bell, CreditCard, Antenna, MessagesSquare, FileOutput, Printer } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative px-4 pt-48 pb-32 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto text-center max-w-[90rem] relative z-10">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 px-6 py-2 text-base font-bold text-slate-900 dark:text-white backdrop-blur-md shadow-sm">
                        <Shield className="h-5 w-5 text-black dark:text-white animate-draw" />
                        <span className="tracking-wide">THE ENTERPRISE CONTROL LAYER</span>
                    </div>
                    <h1 className="mb-8 text-7xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl lg:text-[10rem] leading-[0.85] select-none">
                        REMOVE RISK <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 dark:from-white dark:to-slate-400">
                            FROM AI
                        </span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-3xl text-2xl text-slate-600 dark:text-slate-300 sm:text-3xl leading-relaxed font-medium">
                        Cost controls. Privacy shields. Custom models.<br />
                        Deploy ChatGPT, Claude, and Gemini with <span className="text-slate-900 dark:text-white font-bold underline decoration-4 decoration-emerald-500 underline-offset-4">zero fear.</span>
                    </p>
                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-20">
                        <Link
                            href="https://app.remova.org/register"
                            className="w-full sm:w-auto rounded-[2.5rem] bg-slate-900 dark:bg-white px-12 py-6 text-2xl font-black text-white dark:text-slate-900 transition-all hover:scale-105 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Start Now
                        </Link>
                        <Link
                            href="https://app.remova.org/login"
                            className="w-full sm:w-auto rounded-[2.5rem] border-2 border-slate-200 dark:border-white/10 bg-transparent px-12 py-6 text-2xl font-black text-slate-900 dark:text-white transition hover:bg-slate-50 dark:hover:bg-white/5 hover:border-slate-300"
                        >
                            Book Demo
                        </Link>
                    </div>

                    {/* Main Hero Video/Image Placeholder - Bigger & Bolder */}
                    <div className="relative mx-auto max-w-6xl aspect-[16/9] rounded-[2rem] overflow-hidden border-8 border-slate-900/5 dark:border-white/5 shadow-2xl bg-slate-900 dark:bg-black group perspective-1000">
                        {/* Placeholder Interface */}
                        <div className="absolute inset-0 flex items-center justify-center bg-[#0F1117]">
                            <div className="text-center space-y-4">
                                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 animate-pulse">
                                    <Shield className="h-10 w-10 text-white/20" />
                                </div>
                                <p className="font-sans text-slate-500 text-lg">REMOVA_AGENTS_ACTIVE: 420</p>
                            </div>
                        </div>

                        {/* Dynamic shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />
                    </div>
                </div>
            </section>

            {/* Alternating Feature Scctions */}
            <div id="safety" className="flex flex-col w-full">

                {/* 1. Departmental Cost Control */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Budget Chart Diagram */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex flex-col justify-center relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="flex justify-between items-end mb-6">
                                        <h3 className="font-black text-2xl uppercase text-slate-900 dark:text-white leading-none">Monthly <br /> Spend</h3>
                                        <span className="font-sans font-bold text-slate-500 dark:text-slate-400">$8,420 / $10k</span>
                                    </div>
                                    <div className="space-y-4 w-full relative z-10">
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Engineering</span>
                                                <span className="text-red-500">85%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-900 dark:bg-white w-[85%] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Marketing</span>
                                                <span className="text-emerald-500">24%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[24%] rounded-full" />
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="flex justify-between text-xs font-bold uppercase mb-1 text-slate-600 dark:text-slate-300">
                                                <span>Sales</span>
                                                <span className="text-blue-500">42%</span>
                                            </div>
                                            <div className="h-4 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 w-[42%] rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-[80%] border-l-2 border-dashed border-red-500/50 z-0">
                                        <div className="absolute top-4 left-2 text-xs font-black text-red-500 uppercase tracking-widest rotate-90 origin-top-left translate-y-8">Limit</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Coins className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Departmental <br /> Cost Control
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Enforce strict budget limits. Stop runaway costs before they start.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Allocated Budgets per Team</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Auto-Stop logic when limits reached</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Data Redaction and Protection */}
                {/* 2. Data Redaction and Protection */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <ShieldCheck className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Data Redaction <br /> & Protection
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Your organization is protected by 2 levels of security.
                                </p>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>
                                            <strong className="text-emerald-600 dark:text-emerald-400">Layer 1 (Fast):</strong>
                                            <br />Instant rule matching. Zero latency.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-blue-500" />
                                        <span>
                                            <strong className="text-blue-600 dark:text-blue-400">Layer 2 (Semantic):</strong>
                                            <br />Detect jailbreaks & competitor mentions.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* Visual: File Upload Rejection Scenerio */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 relative overflow-hidden flex items-center justify-center p-6 sm:p-10 group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-slate-200/50 dark:bg-black/40 backdrop-blur-3xl" />

                                    {/* Chat/Upload Interface */}
                                    <div className="w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col relative z-10 transition-transform hover:scale-[1.02] duration-500">
                                        {/* Header */}
                                        <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-sans font-medium text-slate-400">SECURE_CHANNEL_ENCRYPTED</span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-6">

                                            {/* User Upload Action */}
                                            <div className="flex flex-col items-end gap-2">
                                                <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm font-medium shadow-sm">
                                                    Analyze this data for Q3 projections.
                                                </div>
                                                {/* File Attachment */}
                                                <div className="group flex items-center gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/10 pr-6 relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-red-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                                                        <FileSpreadsheet className="h-6 w-6 text-green-600 dark:text-green-500" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-bold text-slate-700 dark:text-slate-200">employees_salary_dump.xlsx</span>
                                                        <span className="text-[10px] text-slate-500">Spreadsheet • 1.2 MB</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* AI Rejection/System Alert */}
                                            <div className="flex gap-3 animate-pulse-slow">
                                                <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-500/30">
                                                    <ShieldAlert className="h-4 w-4 text-red-600 dark:text-red-400" />
                                                </div>
                                                <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20 p-4 rounded-2xl rounded-tl-sm w-full shadow-sm">
                                                    <p className="text-red-800 dark:text-red-400 font-bold text-xs mb-1.5 flex items-center gap-1.5">
                                                        <XCircle className="h-3.5 w-3.5" />
                                                        UPLOAD REJECTED
                                                    </p>
                                                    <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed">
                                                        You are attempting to upload <strong className="text-red-700 dark:text-red-400">Personal Data (PII)</strong>.
                                                        <br className="my-1" />
                                                        This violates the <span className="underline decoration-red-300 dark:decoration-red-700">Employee Privacy Policy</span>. Action has been blocked and logged.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Chat Like Usual */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Chat Interface Mock */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-6 flex flex-col justify-end relative overflow-hidden shadow-2xl group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="space-y-6 w-full max-w-md mx-auto">
                                        <div className="bg-white dark:bg-white/10 p-5 rounded-3xl rounded-tl-none self-start shadow-sm border border-slate-200 dark:border-white/5">
                                            <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                                                Research the latest AI trends and create a PDF summary.
                                            </p>
                                        </div>
                                        <div className="bg-slate-900 dark:bg-white p-5 rounded-3xl rounded-tr-none self-end text-white dark:text-slate-900 shadow-md flex items-center gap-4 ml-auto">
                                            <FileText className="h-10 w-10 shrink-0" />
                                            <div>
                                                <p className="text-sm sm:text-base font-bold">AI_Trends_2026.pdf</p>
                                                <p className="text-xs opacity-70">Generated Report • 2.4MB</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-center pt-2">
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                            <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <MessageSquare className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Chat Like <br /> Usual
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Our app has same features with flagship AI interfaces.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <Sparkles className="h-6 w-6 text-emerald-500 mt-1" />
                                        <span>Deep Web Research</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <FileText className="h-6 w-6 text-blue-500 mt-1" />
                                        <span>Create PDFs & Presentations</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <Building2 className="h-6 w-6 text-purple-500 mt-1" />
                                        <span>Generate Images & Videos</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Select Your AI Providers */}
                {/* 4. Select Your AI Providers */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Cpu className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Select Your <br /> AI Providers
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    We have 300+ up to date AI models already deployed for you.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Create a curated selection among them.</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>Make your employees use only the ones you want.</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* Visual: Model Selection Grid */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex flex-col justify-center gap-4 relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    {['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Llama 3 70B'].map((model, i) => (
                                        <div key={i} className="bg-white dark:bg-white/10 p-4 rounded-2xl flex items-center justify-between border border-slate-200 dark:border-white/5 shadow-sm transform transition hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <Bot className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                                                <span className="font-bold text-slate-900 dark:text-white">{model}</span>
                                            </div>
                                            <ToggleRight className={`h-8 w-8 ${i < 2 ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'}`} />
                                        </div>
                                    ))}
                                    <div className="text-center font-bold text-slate-400 dark:text-slate-500 mt-2">
                                        + 296 more models
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Custom AI Management */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Custom Model Builder */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-50 pointer-events-none" />
                                    <div className="flex flex-col items-center gap-6 z-10 w-full max-w-sm">
                                        <div className="bg-white dark:bg-white/10 p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg w-full text-center">
                                            <Wand2 className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                                            <h4 className="font-bold text-xl text-slate-900 dark:text-white">Marketing Helper v2</h4>
                                            <p className="text-sm text-slate-500 mt-1">Base: GPT-4o • Temp: 0.7</p>
                                        </div>
                                        <div className="h-12 w-0.5 bg-slate-300 dark:bg-white/20" />
                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            <div className="bg-slate-900 dark:bg-white p-4 rounded-2xl text-center shadow-lg">
                                                <span className="text-white dark:text-slate-900 font-bold text-sm">Marketing Dept</span>
                                            </div>
                                            <div className="bg-slate-200 dark:bg-white/20 p-4 rounded-2xl text-center">
                                                <span className="text-slate-500 dark:text-slate-400 font-bold text-sm">Sales Dept</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Wand2 className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Custom AI <br /> Management
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Create custom AI models with ease.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-purple-500" />
                                        <span>Deploy for specific departments</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-purple-500" />
                                        <span>Or deploy for your entire team</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Complete Control Over AI Usage */}
                {/* 6. Complete Control Over AI Usage */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <LayoutDashboard className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    Complete <br /> Control
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Track models, costs, policy violations, AI task types, everything!
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white">Track Costs</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white">Policy Violations</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white">Model Usage</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white">Task Types</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* Visual: Dashboard Mock */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-6 flex flex-col gap-4 relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="h-1/3 w-full bg-white dark:bg-white/10 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 flex items-center p-4">
                                        <div className="h-full w-2 bg-emerald-500 rounded-full mr-4" />
                                        <div className="flex-1">
                                            <div className="h-2 w-1/3 bg-slate-200 dark:bg-white/20 rounded mb-2" />
                                            <div className="h-2 w-3/4 bg-slate-200 dark:bg-white/20 rounded" />
                                        </div>
                                    </div>
                                    <div className="h-1/3 w-full bg-white dark:bg-white/10 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 flex items-center p-4">
                                        <div className="h-full w-2 bg-blue-500 rounded-full mr-4" />
                                        <div className="flex-1">
                                            <div className="h-2 w-1/2 bg-slate-200 dark:bg-white/20 rounded mb-2" />
                                            <div className="h-2 w-full bg-slate-200 dark:bg-white/20 rounded" />
                                        </div>
                                    </div>
                                    <div className="h-1/3 w-full bg-white dark:bg-white/10 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 flex items-center p-4">
                                        <div className="h-full w-2 bg-red-500 rounded-full mr-4" />
                                        <div className="flex-1">
                                            <div className="h-2 w-1/4 bg-slate-200 dark:bg-white/20 rounded mb-2" />
                                            <div className="h-2 w-2/3 bg-slate-200 dark:bg-white/20 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. No History! No Personal Data! */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                {/* Visual: Privacy Shield */}
                                <div className="aspect-[4/3] rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
                                    {/* Dynamic shine effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform ease-in-out" />

                                    <div className="absolute inset-0 bg-emerald-500/5" />
                                    <div className="relative flex items-center justify-center h-full w-full">
                                        <div className="h-40 w-40 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-500/10 z-10 animate-pulse">
                                            <EyeOff className="h-20 w-20 text-emerald-500" />
                                        </div>
                                        {/* Orbiting particles */}
                                        <div className="absolute h-64 w-64 border border-dashed border-slate-300 dark:border-white/20 rounded-full animate-spin-slow duration-[10s]" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mt-32">
                                            <span className="text-xs font-sans font-bold bg-white dark:bg-black px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 shadow-xl">
                                                Local Storage Only
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 mb-8 border-4 border-transparent hover:scale-105 transition-transform">
                                    <Ghost className="h-12 w-12 animate-draw" />
                                </div>
                                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-6xl mb-6 leading-[0.9]">
                                    No History! <br /> No Personal Data!
                                </h2>
                                <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                                    Remova only keeps conversations on users browsers. Its completely private.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>No server-side history logs</span>
                                    </li>
                                    <li className="flex items-start gap-4 text-lg font-bold text-slate-900 dark:text-white">
                                        <div className="mt-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                                        <span>No personal data shared with Remova</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            {/* How It Works Section */}
            <section id="protocol" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300 border-b-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex flex-col md:flex-row items-baseline gap-6 mb-24 border-b-2 border-slate-900 dark:border-white pb-8">
                        <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl w-full">
                            PROTOCOL
                        </h2>
                        <p className="text-xl font-sans text-slate-500 dark:text-slate-400 shrink-0">
                            // DEPLOYMENT_SEQUENCE
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">

                        {/* Step 1 */}
                        <div className="group flex flex-col justify-between h-full">
                            <div>
                                <div className="border-l-4 border-slate-900 dark:border-white pl-6 mb-8 group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-colors py-2">
                                    <span className="block text-8xl font-black text-slate-200 dark:text-white/20 -ml-1 mb-[-4rem] relative z-0">01</span>
                                    <h3 className="relative z-10 text-3xl font-black uppercase text-slate-900 dark:text-white leading-none">
                                        Initialize <br /> & Auth
                                    </h3>
                                </div>
                                <p className="text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed pl-7 border-l border-dashed border-slate-300 dark:border-white/20">
                                    Sign up instantly. Provision your entire team via Single Sign-On (SSO), Enterprise Identity Management, or manual invitation. Scale from one to one thousand users in seconds.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="group flex flex-col justify-between h-full">
                            <div>
                                <div className="border-l-4 border-slate-900 dark:border-white pl-6 mb-8 group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-colors py-2">
                                    <span className="block text-8xl font-black text-slate-200 dark:text-white/20 -ml-1 mb-[-4rem] relative z-0">02</span>
                                    <h3 className="relative z-10 text-3xl font-black uppercase text-slate-900 dark:text-white leading-none">
                                        Structure <br /> & Govern
                                    </h3>
                                </div>
                                <p className="text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed pl-7 border-l border-dashed border-slate-300 dark:border-white/20">
                                    Mirror your org chart. Create distinct departments, allocate strict budget perimeters, and activate your global Security Layer to govern all data flow.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="group flex flex-col justify-between h-full">
                            <div>
                                <div className="border-l-4 border-slate-900 dark:border-white pl-6 mb-8 group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-colors py-2">
                                    <span className="block text-8xl font-black text-slate-200 dark:text-white/20 -ml-1 mb-[-4rem] relative z-0">03</span>
                                    <h3 className="relative z-10 text-3xl font-black uppercase text-slate-900 dark:text-white leading-none">
                                        Optimize <br /> & Run
                                    </h3>
                                </div>
                                <p className="text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed pl-7 border-l border-dashed border-slate-300 dark:border-white/20">
                                    Execute usage. Customize the experience with efficient presets, custom guardrails, and specific AI model version controls for every team.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Safety CTA 2 - Monochrome & Clean */}
            <section className="py-32 px-4 bg-white dark:bg-[#131314] text-slate-900 dark:text-white text-center relative overflow-hidden border-b-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                        Don't trust <span className="inline-block border-4 border-slate-900 dark:border-white px-4 py-1 mx-2 transform -rotate-2">LLMs<span className="text-slate-900 dark:text-white">,</span></span><br />
                        add a control layer!
                    </h2>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block mt-4 rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-900 dark:bg-white px-12 py-5 text-xl font-black uppercase tracking-wider text-white dark:text-slate-900 hover:bg-transparent hover:text-slate-900 dark:hover:bg-transparent dark:hover:text-white transition-all duration-300"
                    >
                        Secure My Org
                    </Link>
                </div>
            </section>

            {/* Pricing Section */}
            {/* Pricing Section - Enterprise Ready */}
            <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300 border-b-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex flex-col md:flex-row items-baseline gap-6 mb-24 border-b-2 border-slate-900 dark:border-white pb-8">
                        <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl w-full">
                            LICENSING
                        </h2>
                        <p className="text-xl font-sans text-slate-500 dark:text-slate-400 shrink-0">
                            // COMMERCIAL_MODELS
                        </p>
                    </div>

                    <div className="border-2 border-slate-900 dark:border-white bg-white dark:bg-[#131314] rounded-[2.5rem] overflow-hidden">
                        <div className="grid lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-slate-900 dark:divide-white">

                            {/* Left Column: Economics */}
                            <div className="lg:col-span-4 p-12 flex flex-col justify-between bg-slate-50 dark:bg-white/5">
                                <div>
                                    <h3 className="text-5xl font-black uppercase text-slate-900 dark:text-white mb-2 leading-none">Super <br /> Enterprise</h3>
                                    <p className="font-sans text-slate-500 dark:text-slate-400 mb-12 uppercase tracking-widest text-sm">Global License</p>

                                    <div className="mb-12">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-8xl font-black text-slate-900 dark:text-white tracking-tighter">$50</span>
                                            <span className="text-2xl font-sans text-slate-500 dark:text-slate-400 font-bold">/ seat</span>
                                        </div>
                                        <p className="text-slate-900 dark:text-white font-bold mt-4 border-l-4 border-slate-900 dark:border-white pl-4">
                                            Minimum 10 seats required
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="https://app.remova.org/register"
                                    className="w-full py-5 text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-black uppercase hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors rounded-[2.5rem]"
                                >
                                    Initialize Contract
                                </Link>
                            </div>

                            {/* Right Column: Scope */}
                            <div className="lg:col-span-8 p-12">
                                <div className="grid md:grid-cols-2 gap-16">
                                    {/* Intelligence */}
                                    <div>
                                        <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-8 border-b-2 border-slate-900 dark:border-white pb-4">
                                            Cognitive Engine
                                        </h4>
                                        <ul className="space-y-6">
                                            {[
                                                "Hyper-Modal Access (GPT-4o, Claude 3.5, Gemini 1.5)",
                                                "Visual Creativity Engine (DALL-E 3 & High-Fi)",
                                                "Document Forge (Auto PDF/Report Gen)",
                                                "Intelligent Routing (Auto-Optimization)",
                                                "Context-Aware Grounding (Private Data)",
                                                "Universal API Gateway (300+ Active Models)",
                                                "Deep Web Research & Real-time Synthesis",
                                                "Custom Model Fine-tuning & Deployment",
                                                "Multi-Modal Pipeline Orchestration",
                                                "Adaptive Latency-Optimized Inference"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4 group">
                                                    <div className="h-3 w-3 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                    <span className="font-sans text-base font-bold text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Governance */}
                                    <div>
                                        <h4 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-8 border-b-2 border-slate-900 dark:border-white pb-4">
                                            Global Governance
                                        </h4>
                                        <ul className="space-y-6">
                                            {[
                                                "Dual-Layer Guardrails (Fast & Semantic)",
                                                "PII & Secret Shield (Instant Redaction)",
                                                "Hierarchical Policy Engine (Global RBAC)",
                                                "Executive Analytics & ROI Dashboards",
                                                "Full Audit Transparency (1-Year Retention)",
                                                "SSO & Directory Sync (Okta, Azure AD)",
                                                "Custom Data Sovereignty & Geofencing",
                                                "Proactive Compliance & Leak Detection",
                                                "Unified Billing & Departmental Budgets",
                                                "White-Glove Support & Technical Success"
                                            ].map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-4 group">
                                                    <div className="h-3 w-3 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                                    <span className="font-sans text-base font-bold text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mt-8">
                        {/* Concierge Support */}
                        <div className="border-2 border-slate-900 dark:border-white bg-slate-50 dark:bg-white/5 p-12 flex flex-col justify-between rounded-[2.5rem] overflow-hidden">
                            <div>
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white mb-2 leading-none">Monthly <br /> Concierge</h3>
                                <p className="font-sans text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest text-sm">Strategic AI Support</p>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">$2,500</span>
                                        <span className="text-xl font-sans text-slate-500 dark:text-slate-400 font-bold">/ month</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Dedicated AI Strategy Consultant",
                                        "Quarterly Workflow Optimization",
                                        "Custom Guardrail Development",
                                        "Priority Integration Support",
                                        "Monthly Executive ROI Audit"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="h-2 w-2 bg-slate-900 dark:bg-white mt-1.5 flex-shrink-0" />
                                            <span className="font-sans text-sm font-bold text-slate-700 dark:text-slate-300">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="mailto:notifications@remova.org?subject=Concierge%20Strategy%20Inquiry"
                                className="w-full py-4 text-center border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white text-lg font-black uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors rounded-[2.5rem]"
                            >
                                Contact Strategy Team
                            </Link>
                        </div>

                        {/* On-Prem Deployment */}
                        <div className="border-2 border-slate-900 dark:border-white bg-slate-900 dark:bg-white p-12 flex flex-col justify-between text-white dark:text-slate-900 rounded-[2.5rem] overflow-hidden">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-4xl font-black uppercase leading-none">On-Prem <br /> Deployment</h3>
                                    <ShieldCheck className="h-10 w-10" />
                                </div>
                                <p className="opacity-60 font-sans mb-8 uppercase tracking-widest text-sm">Ultimate Control</p>

                                <div className="mb-8">
                                    <span className="text-5xl font-black tracking-tighter uppercase">Custom Quote</span>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    {[
                                        "Private Air-Gapped Infrastructure",
                                        "Deployment of Full Control Layer",
                                        "Local AI Model Serving (Llama, Mistral)",
                                        "Full Source Code Access Option",
                                        "Zero-Data-Outbound Guarantee"
                                    ].map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="h-2 w-2 bg-white dark:bg-slate-900 mt-1.5 flex-shrink-0" />
                                            <span className="font-sans text-sm font-bold opacity-90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="mailto:notifications@remova.org?subject=On-Prem%20Architecture%20Inquiry"
                                className="w-full py-4 text-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-lg font-black uppercase hover:opacity-90 transition-opacity rounded-[2.5rem]"
                            >
                                Request Architecture Link
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Remova Section - BIG BOLD REDESIGN */}
            <section id="resources" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="mb-16 text-center text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
                        Why Remova?
                    </h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Card 1 */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-2xl">
                                <History className="h-12 w-12 animate-icon-shake" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Stop Employee <br /> Misuse
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                Your team is asking the wrong things. Block non-compliant code generation, competitor analysis, and biased prompts <span className="text-orange-600 dark:text-orange-400 font-bold">before</span> they happen.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-red-600 text-white shadow-2xl">
                                <FileText className="h-12 w-12 animate-draw" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Kill Data <br /> Leaks
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                PII, API keys, and financial data are leaving your chat windows. We detect and redact sensitive info <span className="text-red-600 dark:text-red-400 font-bold">instantly</span>.
                            </p>
                        </div>

                        {/* Card 3 - Manage Budgets */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-2xl">
                                <BarChart3 className="h-12 w-12 animate-draw" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Manage <br /> Budgets
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                Don't let AI costs surprise you. Set strict <span className="text-blue-600 dark:text-blue-400 font-bold">allowances</span> per team and track every token spent in real-time.
                            </p>
                        </div>

                        {/* Card 4 - Control AI Costs */}
                        <div className="group relative overflow-hidden rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-slate-100 dark:bg-white/5 p-10 transition-transform hover:scale-[1.01]">
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-2xl">
                                <Coins className="h-12 w-12 animate-icon-shake" />
                            </div>
                            <h3 className="mb-6 text-4xl font-black uppercase leading-none tracking-tight text-slate-900 dark:text-white">
                                Control <br /> AI Costs
                            </h3>
                            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                                Stop paying for waste. Optimize model routing and enforce <span className="text-emerald-600 dark:text-emerald-400 font-bold">caps</span> so you only pay for value, not hallucinations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety CTA 1 (Moved) */}
            <section className="py-24 px-4 bg-white dark:bg-[#131314] text-center border-y border-slate-100 dark:border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-8 inline-flex p-4 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-emerald-500">
                        <AlertTriangle className="h-10 w-10 animate-pulse" />
                    </div>
                    <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-slate-900 dark:text-white">
                        You shouldn't trust <br /> your AI provider.
                    </h2>
                    <p className="text-2xl sm:text-3xl font-bold opacity-90 max-w-2xl mx-auto border-4 border-slate-900 dark:border-white rounded-full py-4 px-8 inline-block text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors cursor-default">
                        Add a control layer now!
                    </p>
                </div>
            </section>
            {/* Product Feature Table Section */}
            {/* Product Feature Table Section - Bolder & Less Colorful */}
            <section id="product" className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#131314] transition-colors duration-300">
                <div className="container mx-auto max-w-[90rem]">
                    <div className="flex flex-col md:flex-row items-baseline gap-6 mb-24 border-b-2 border-slate-900 dark:border-white pb-8">
                        <h2 className="text-6xl font-black tracking-tighter text-slate-900 dark:text-white sm:text-8xl w-full">
                            CAPABILITIES
                        </h2>
                        <p className="text-xl font-sans text-slate-500 dark:text-slate-400 shrink-0">
                            // SYSTEM_OVERVIEW_V.2.0
                        </p>
                    </div>

                    <div className="space-y-24">

                        {/* 1. Core AI & Orchestration Engine */}
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-1">
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white leading-none mb-4">Core <br /> Engine</h3>
                                <div className="h-2 w-24 bg-slate-900 dark:bg-white" />
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-t border-slate-200 dark:border-white/10">
                                    {[
                                        { title: "Adaptive Intelligence Routing", desc: "Dynamic query routing logic based on real-time constraints." },
                                        { title: "Cost-Optimized Selection", desc: "Algorithms to select the most budget-friendly model for a given task." },
                                        { title: "Latency-Based Routing", desc: "Performance prioritization for time-sensitive queries." },
                                        { title: "Privacy-Constraint Routing", desc: "Automatic routing to sovereign/local models for sensitive data." },
                                        { title: "Universal API Gateway", desc: "Single-point access to a global network of models." },
                                        { title: "300+ Model Access", desc: "Integration with a vast library of top-tier LLMs." },
                                        { title: "Vendor-Agnostic Architecture", desc: "Zero lock-in to any single model provider (OpenAI, Anthropic, etc.)." },
                                        { title: "Multi-Modal Pipeline (Text)", desc: "Optimized pipelines for text generation and analysis." },
                                        { title: "Multi-Modal Pipeline (Image)", desc: "State-of-the-art visual generation capabilities." },
                                        { title: "Multi-Modal Pipeline (Video)", desc: "Integrated video generation support." },
                                        { title: "Context-Aware Presets", desc: "Pre-configured settings for specific business roles." },
                                        { title: "Role-Based System Prompts", desc: "Automatic injection of expert personas (e.g., 'Legal Drafting')." },
                                        { title: "Enterprise Semantic Memory", desc: "AI retention of organizational context across sessions." },
                                        { title: "Knowledge Graph Building", desc: "Automated construction of organizational knowledge over time." },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2">
                                            <div className="md:w-1/3 mb-2 md:mb-0">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. Security, Compliance & Trust */}
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-1">
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white leading-none mb-4">Security <br /> & Trust</h3>
                                <div className="h-2 w-24 bg-slate-900 dark:bg-white" />
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-t border-slate-200 dark:border-white/10">
                                    {[
                                        { title: "Semantic Input Filtering", desc: "Real-time analysis of user prompts before processing." },
                                        { title: "Semantic Output Filtering", desc: "Verification of AI responses to prevent brand damage." },
                                        { title: "DLP Enforcement", desc: "Active blocking of PII or sensitive internal data." },
                                        { title: "Brand Safety", desc: "Guardrails to ensure on-brand tone and content." },
                                        { title: "Resiliency Protocols", desc: "Failover logic for model provider outages." },
                                        { title: "Continuity Fallbacks", desc: "Seamless switching to backup models during downtime." },
                                        { title: "Sensitive Word Blocking", desc: "Custom-tuned blocklists for prohibited terms." },
                                        { title: "Immutable Audit Logs", desc: "Permanent records of all system activity." },
                                        { title: "Forensic Analysis", desc: "Deep-dive capability into past user interactions." },
                                        { title: "Zero-Retention", desc: "Technical assurance that data is ephemeral." },
                                        { title: "No-Training Architecture", desc: "Prevention of client data being used for model training." },
                                        { title: "Data Sovereignty", desc: "Geographic restriction options for data processing." },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2">
                                            <div className="md:w-1/3 mb-2 md:mb-0">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3. Multi-Tenancy & Governance */}
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-1">
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white leading-none mb-4">Governance <br /> & Access</h3>
                                <div className="h-2 w-24 bg-slate-900 dark:bg-white" />
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-t border-slate-200 dark:border-white/10">
                                    {[
                                        { title: "Deep Hierarchical Structure", desc: "Support for complex org charts (Department > Team > User)." },
                                        { title: "Cost Center Isolation", desc: "Separation of budgets and usage by department." },
                                        { title: "RBAC (Admin)", desc: "Full system control and oversight permissions." },
                                        { title: "RBAC (Department Head)", desc: "Management capabilities limited to specific teams." },
                                        { title: "RBAC (Standard User)", desc: "Access-limited operational roles." },
                                        { title: "Strict Data Isolation", desc: "Logical separation of data between tenants and teams." },
                                        { title: "Self-Service Onboarding", desc: "Automated flows for new organization setup." },
                                        { title: "Scoped API Access", desc: "Secure key generation for internal developers." },
                                        { title: "Headless Integration", desc: "Tools for embedding Remova logic into other apps." },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2">
                                            <div className="md:w-1/3 mb-2 md:mb-0">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 4. Financial Operations & Billing */}
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-1">
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white leading-none mb-4">FinOps <br /> & Billing</h3>
                                <div className="h-2 w-24 bg-slate-900 dark:bg-white" />
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-t border-slate-200 dark:border-white/10">
                                    {[
                                        { title: "Universal Credit Protocol", desc: "Internal currency normalizing costs across providers." },
                                        { title: "Cross-Provider Normalization", desc: "Unified pricing regardless of underlying model variance." },
                                        { title: "Smart Renewal Logic", desc: "Automated handling of monthly credit resets." },
                                        { title: "Precise Token Tracking", desc: "Micro-accounting of token consumption." },
                                        { title: "Real-Time Cost Auditing", desc: "Live dashboard of spend vs. budget." },
                                        { title: "Hard Budget Limits", desc: "Enforcement of strict spending caps." },
                                        { title: "Soft Budget Alerts", desc: "Notifications for approaching budget thresholds." },
                                        { title: "Subscription Engine", desc: "Management of recurring billing and plan tiers." },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2">
                                            <div className="md:w-1/3 mb-2 md:mb-0">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 5. Collaboration & Productivity */}
                        <div className="grid lg:grid-cols-4 gap-12">
                            <div className="lg:col-span-1">
                                <h3 className="text-4xl font-black uppercase text-slate-900 dark:text-white leading-none mb-4">Collaboration <br /> Tools</h3>
                                <div className="h-2 w-24 bg-slate-900 dark:bg-white" />
                            </div>
                            <div className="lg:col-span-3">
                                <div className="border-t border-slate-200 dark:border-white/10">
                                    {[
                                        { title: "WebSocket Streaming", desc: "Low-latency, real-time text delivery." },
                                        { title: "Infinite Context", desc: "Smart windowing for long-running chats." },
                                        { title: "Secure RAG Pipeline", desc: "Retrieval-Augmented Generation for internal docs." },
                                        { title: "Document Parsing", desc: "Secure text extraction from uploaded files." },
                                        { title: "Automated Reporting", desc: "Automated creation of structured documents." },
                                        { title: "Publication Typesetting", desc: "High-fidelity formatting for exports." },
                                        { title: "Central Dashboard", desc: "Single-pane-of-glass view for all usage, costs, and safety alerts." },
                                    ].map((feature, i) => (
                                        <div key={i} className="flex flex-col md:flex-row py-4 border-b border-slate-200 dark:border-white/10 group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors px-2">
                                            <div className="md:w-1/3 mb-2 md:mb-0">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-base">{feature.title}</h4>
                                            </div>
                                            <div className="md:w-2/3">
                                                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* Bottom CTA - Bolder Style */}
            <section className="py-32 px-4 text-center bg-white dark:bg-[#131314] transition-colors duration-300 border-t-2 border-slate-900 dark:border-white">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="mb-8 text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white sm:text-8xl leading-[0.9]">
                        Ready to <br className="hidden sm:block" /> secure your AI?
                    </h2>
                    <p className="mb-12 text-xl font-sans text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Join the organizations that trust Remova to deploy LLMs safely and confidently.
                    </p>
                    <Link
                        href="https://app.remova.org/register"
                        className="inline-block rounded-[2.5rem] border-4 border-slate-900 dark:border-white bg-transparent px-10 py-5 text-xl font-black uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </section>
        </div>

    );
}
