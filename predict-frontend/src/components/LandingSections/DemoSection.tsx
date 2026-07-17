import { useNavigate } from "react-router-dom";
import carImage from "../../../src/assets/1.jpg";
const DEMO_CAR = {
    title: "2020 Tesla Model 3 Long Range",
    specs: "35,000 km • Electric • Automatic",
    price: "$42,500",
    confidence: "96% confidence",
    negotiationRange: "$40,000 - $44,000",
    conditionScore: 92,
    image: carImage,
};

const DemoSection: React.FC<{ id?: string }> = ({ id }) => {
    const navigate = useNavigate();
    return (

        <section id={id} className="px-4 py-20 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    See It In Action
                </h2>
                <p className="mt-3 text-slate-400">
                    Example prediction for a 2020 Tesla Model 3
                </p>

                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 text-left shadow-xl shadow-black/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <img
                                src={DEMO_CAR.image}
                                alt={DEMO_CAR.title}
                                className="h-56 w-full object-cover sm:h-full"
                            />
                        </div>

                        <div className="flex flex-col justify-between p-7">
                            <div>
                                <p className="text-sm text-slate-500">
                                    Predicted Market Price
                                </p>
                                <p className="mt-1 text-4xl font-bold text-white">
                                    {DEMO_CAR.price}
                                </p>
                                <p className="mt-1 text-sm font-medium text-blue-400">
                                    {DEMO_CAR.confidence}
                                </p>

                                <p className="mt-5 text-sm text-slate-500">
                                    Negotiation Range
                                </p>
                                <p className="mt-1 text-lg font-semibold text-slate-200">
                                    {DEMO_CAR.negotiationRange}
                                </p>

                                <p className="mt-5 text-sm text-slate-500">
                                    Condition Score
                                </p>
                                <div className="mt-2 flex items-center gap-3">
                                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                                            style={{ width: `${DEMO_CAR.conditionScore}%` }}
                                        />
                                    </div>
                                    <span className="text-lg font-bold text-white">
                                        {DEMO_CAR.conditionScore}
                                    </span>
                                </div>

                                <div className="mt-5 flex items-center gap-2 border-t border-slate-800 pt-5 text-sm font-semibold text-emerald-400">
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Good Deal - Recommended
                                </div>
                            </div>

                            <p className="mt-6 text-xs text-slate-500">
                                {DEMO_CAR.title} · {DEMO_CAR.specs}
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => navigate("/predict")}
                    className="mt-10 rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-150 hover:bg-blue-500"
                >
                    Try It With Your Vehicle
                </button>
            </div>
        </section>
    );
}

export default DemoSection;
