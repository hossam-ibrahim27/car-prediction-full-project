import { useLocation, useNavigate } from "react-router-dom";
import DemoSection from "../components/LandingSections/DemoSection";
import FeaturesSection from "../components/LandingSections/FeaturesSection";
import HowItWorkSection from "../components/LandingSections/HowItWorkSection";
import { useEffect, useRef } from "react";


const STATS = [
    { value: "500K+", label: "Cars Analyzed" },
    { value: "98.5%", label: "Accuracy Rate" },
    { value: "50K+", label: "Happy Users" },
];
/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                       */
/* ------------------------------------------------------------------ */

const SectionEyebrow: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400">
        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 1l1.9 5.8H18l-4.95 3.6L15 16.2 10 12.6l-5 3.6 1.95-5.8L2 6.8h6.1z" />
        </svg>
        {children}
    </span>
);

/* ------------------------------------------------------------------ */
/*  Landing Page                                                       */
/* ------------------------------------------------------------------ */

const LandingPage: React.FC = () => {
    const { hash } = useLocation();
    const navigate = useNavigate();
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (hash) {
                navigate("/", { replace: true });
                window.scrollTo(0, 0);
                return;
            }
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 50);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    }, [hash, navigate]);
    return (
        <main className="bg-[#0b0f19]">
            {/* ---------------- HERO ---------------- */}
            <section className="relative overflow-hidden px-4 pb-20 pt-24 text-center sm:px-6 lg:px-10">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
                />

                <div className="relative mx-auto max-w-4xl">
                    <div className="flex justify-center">
                        <SectionEyebrow>Powered by Advanced AI</SectionEyebrow>
                    </div>

                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        AI-Powered Car Price &{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Condition Evaluation
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
                        Upload your vehicle details and get instant price prediction,
                        condition analysis, and negotiation insights powered by
                        cutting-edge AI.
                    </p>

                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => navigate("/predict")}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-150 hover:bg-blue-500"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5 5 5M12 5v13"
                                />
                            </svg>
                            Evaluate My Vehicle
                        </button>
                        <a
                            href="#demo"
                            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-150 hover:bg-slate-800"
                        >
                            See Demo
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-3 gap-6 border-t border-slate-800/80 pt-10">
                        {STATS.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl font-bold text-white sm:text-3xl">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- HOW IT WORKS ---------------- */}
            {/* <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-3 text-slate-400">
                        Get your vehicle evaluation in three simple steps
                    </p>

                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {STEPS.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 text-left transition-colors duration-150 hover:border-blue-500/40"
                            >
                                <span className="text-4xl font-extrabold text-blue-500/30">
                                    {step.number}
                                </span>
                                <h3 className="mt-4 text-lg font-semibold text-white">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            <HowItWorkSection id="how-it-works" />
            {/* ---------------- FEATURES ---------------- */}
            {/* <section id="features" className="px-4 py-20 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Powerful Features
                    </h2>
                    <p className="mt-3 text-slate-400">
                        Everything you need to make informed vehicle purchase decisions
                    </p>

                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {FEATURES.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 text-left transition-colors duration-150 hover:border-blue-500/40"
                            >
                                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
                                    <svg
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        {feature.icon}
                                    </svg>
                                </span>
                                <h3 className="text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                    {feature.description}
                                </p>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </section> */}
            <FeaturesSection id="features" />
            {/* ---------------- DEMO ---------------- */}
            <DemoSection id={"demo"} />
        </main>
    );
};

export default LandingPage;
