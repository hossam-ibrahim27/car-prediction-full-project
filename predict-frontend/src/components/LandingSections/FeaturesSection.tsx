import React from 'react';

const FEATURES = [
    {
        title: "AI Price Prediction",
        description:
            "Get accurate market price predictions using advanced machine learning regression models trained on extensive vehicle market data.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 17l6-6 4 4 8-8M21 7v6h-6"
            />
        ),
    },
    {
        title: "Detailed Condition Assessment",
        description:
            "Input key vehicle specs, mileage, and known flaws to automatically evaluate overall condition and impact on market value.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
        ),
    },
    {
        title: "Smart Negotiation Assistant",
        description:
            "Get intelligent negotiation tips and optimal price ranges based on historical market trends and model analysis.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
        ),
    },
    {
        title: "Buy or Avoid Recommendation",
        description:
            "Receive clear, data-driven recommendations on whether a deal is worth pursuing based on comprehensive price-to-condition analysis.",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        ),
    },
];

const FeaturesSection: React.FC<{ id?: string }> = ({ id }) => {
    return (
        <section id={id} className="px-4 py-20 sm:px-6 lg:px-10">
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
        </section>
    );
}

export default FeaturesSection;
