import React from 'react';

const STEPS = [
    {
        number: "01",
        title: "Enter Vehicle Details",
        description:
            "Provide key specs like make, model, year, mileage, and condition to build an accurate profile.",
    },
    {
        number: "02",
        title: "AI Processes Market Data",
        description:
            "Our ML models analyze historical market trends, specs, and condition parameters instantly.",
    },
    {
        number: "03",
        title: "Get Price & Smart Advice",
        description:
            "Receive a complete report with predicted price range, pros & cons, and negotiation insights.",
    },
];

const HowItWorkSection: React.FC<{ id?: string }> = ({ id }) => {
    return (
        <section id={id} className="px-4 py-20 sm:px-6 lg:px-10">
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
        </section>
    );
}

export default HowItWorkSection;
