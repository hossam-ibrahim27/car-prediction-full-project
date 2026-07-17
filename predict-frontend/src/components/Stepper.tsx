import React from "react";

interface StepperProps {
    steps: string[];
    currentStep: number; // 1-based
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="mb-10 flex items-center justify-center">
            {steps.map((label, idx) => {
                const stepNumber = idx + 1;
                const isComplete = stepNumber < currentStep;
                const isActive = stepNumber === currentStep;
                const isLast = idx === steps.length - 1;

                return (
                    <div key={label} className="flex items-center">
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200 ${isComplete
                                        ? "bg-blue-600 text-white"
                                        : isActive
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40"
                                            : "bg-slate-800 text-slate-500"
                                    }`}
                            >
                                {isComplete ? (
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                ) : (
                                    stepNumber
                                )}
                            </div>
                            <span
                                className={`hidden text-xs font-medium sm:block ${isActive ? "text-slate-200" : "text-slate-500"
                                    }`}
                            >
                                {label}
                            </span>
                        </div>
                        {!isLast && (
                            <div
                                className={`mx-3 h-0.5 w-16 rounded-full transition-colors duration-200 sm:w-24 ${isComplete ? "bg-blue-600" : "bg-slate-800"
                                    }`}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
