import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper";
import {
    SelectField,
    NumberField,
} from "../components/FormFields";
import {
    type CarInputData,
    type PredictionResponse,
    EMPTY_CAR_INPUT,
    MANUFACTURERS,
    CATEGORIES,
    COLORS,
    FUEL_TYPES,
    GEAR_BOX_TYPES,
    DRIVE_WHEELS,
    WHEEL_OPTIONS,
    Leather_OPTIONS,
    Model,
} from "../types/car";

const localServer = "http://127.0.0.1:8000/predict"
const API_URL = localServer;

const STEP_LABELS = ["Vehicle Basics", "Specifications", "Review & Predict"];

// Sub-component defined above main component to ensure clean module evaluation
const SummaryItem: React.FC<{ label: string; value: string | number }> = ({
    label,
    value,
}) => (
    <div>
        <dt className="text-slate-500">{label}</dt>
        <dd className="mt-0.5 font-medium text-slate-200">{value || "—"}</dd>
    </div>
);

const PredictPage: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<CarInputData>(EMPTY_CAR_INPUT);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<PredictionResponse | null>(null);

    const updateField = <K extends keyof CarInputData>(
        key: K,
        value: CarInputData[K]
    ) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const isStepOneValid =
        formData.Levy >= 0 &&
        formData.Manufacturer !== "" &&
        formData.Model.trim() !== "" &&
        formData.Prod_year > 0 &&
        formData.Category !== "" &&
        formData.Leather_interior !== "" &&
        formData.Fuel_type !== "" &&
        formData.Engine_volume > 0;
        
        const isStepTwoValid =
        formData.Mileage > 0 &&
        formData.Gear_box_type !== "" &&
        formData.Drive_wheels !== "" &&
        formData.Wheel !== "" &&
        formData.Color !== "" &&
        formData.Airbags !== "";

    const goNext = () => {
        setError(null);
        if (step === 1 && !isStepOneValid) {
            setError("Please complete every field before continuing.");
            return;
        }
        if (step === 2 && !isStepTwoValid) {
            setError("Please complete every field before continuing.");
            return;
        }
        setStep((s) => Math.min(s + 1, 3));
    };

    const goPrevious = () => {
        setError(null);
        if (step === 1) {
            navigate("/");
            return;
        }
        setStep((s) => Math.max(s - 1, 1));
    };

    const handlePredict = async (): Promise<void> => {
        setError(null);
        setIsSubmitting(true);
        setResult(null);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(
                    `Prediction request failed (status ${response.status}).`
                );
            }

            const data: PredictionResponse = await response.json();
            setResult(data);
            console.log(data)
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Something went wrong while contacting the prediction service.";
            setError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const formattedPrice =
        result != null
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: result.currency ?? "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(result.predicted_price)
            : null;

    return (
        <main className="min-h-[calc(100vh-4rem)] bg-[#0b0f19] px-4 py-14 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-3xl">
                <Stepper steps={STEP_LABELS} currentStep={step} />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-black/20 sm:p-9">
                    {!result && (
                        <div className="mb-8 text-center">
                            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
                                <svg
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 13h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H6.828a2 2 0 00-1.414.586L3.586 7.414A2 2 0 003 8.828V18a2 2 0 002 2z"
                                    />
                                </svg>
                            </span>
                            <h1 className="text-2xl font-bold text-white">
                                {step === 1
                                    ? "Vehicle Details"
                                    : step === 2
                                        ? "Technical Specifications"
                                        : "Review & Predict"}
                            </h1>
                            <p className="mt-1 text-sm text-slate-400">
                                {step === 3
                                    ? "Confirm your details and get an instant estimate."
                                    : "Provide accurate information for best results."}
                            </p>
                        </div>
                    )}

                    {/* ---------------- STEP 1 ---------------- */}
                    {step === 1 && (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <NumberField
                                id="levy"
                                label="Levy"
                                value={formData.Levy}
                                placeholder="e.g., 862, 446, 831 , 1055"
                                onChange={(v) => updateField("Levy", v)}
                            />
                            <SelectField
                                id="manufacturer"
                                label="Brand"
                                value={formData.Manufacturer}
                                options={MANUFACTURERS}
                                placeholder="Select Brand"
                                onChange={(v) => updateField("Manufacturer", v)}
                            />
                            <SelectField
                                id="model"
                                label="Model"
                                value={formData.Model}
                                options={Model}
                                placeholder="Select Model"
                                onChange={(v) => updateField("Model", v)}
                            />
                            <NumberField
                                id="Prod_year"
                                label="Production Year"
                                value={formData.Prod_year}
                                placeholder="e.g., 2010, 2020, 2005"
                                onChange={(v) => updateField("Prod_year", v)}
                            />
                            <SelectField
                                id="category"
                                label="Category"
                                value={formData.Category}
                                options={CATEGORIES}
                                placeholder="Select category"
                                onChange={(v) => updateField("Category", v)}
                            />
                            <SelectField
                                id="Leather Interior"
                                label="Leather Interior"
                                value={formData.Leather_interior}
                                options={Leather_OPTIONS}
                                placeholder="Select Leather Interior"
                                onChange={(v) => updateField("Leather_interior", v)}
                            />
                            <SelectField
                                id="fuel-type"
                                label="Fuel Type"
                                value={formData.Fuel_type}
                                options={FUEL_TYPES}
                                placeholder="Select fuel type"
                                onChange={(v) => updateField("Fuel_type", v)}
                            />
                            <NumberField
                                id="engine-volume"
                                label="Engine Volume (L)"
                                value={formData.Engine_volume}
                                placeholder="e.g., 2.0,  2.5, 1.8, 1.6, 1.5"
                                step={0.1}
                                onChange={(v) => updateField("Engine_volume", v)}
                            />
                        </div>
                    )}
                    {/* ---------------- STEP 2 ---------------- */}
                    {step === 2 && (
                        <div className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <NumberField
                                    id="mileage"
                                    label="Kilometers Driven"
                                    value={formData.Mileage}
                                    placeholder="e.g., 150000,  200000, 160000, 120000"
                                    onChange={(v) => updateField("Mileage", v)}
                                />
                                <SelectField
                                    id="gear-box-type"
                                    label="Transmission"
                                    value={formData.Gear_box_type}
                                    options={GEAR_BOX_TYPES}
                                    placeholder="Select transmission"
                                    onChange={(v) => updateField("Gear_box_type", v)}
                                />
                                <SelectField
                                    id="drive-wheels"
                                    label="Drive Wheels"
                                    value={formData.Drive_wheels}
                                    options={DRIVE_WHEELS}
                                    placeholder="Select drive wheels"
                                    onChange={(v) => updateField("Drive_wheels", v)}
                                />
                                <SelectField
                                    id="wheel"
                                    label="Wheel Side"
                                    value={formData.Wheel}
                                    options={WHEEL_OPTIONS}
                                    placeholder="Select wheel side"
                                    onChange={(v) => updateField("Wheel", v)}
                                />
                                <SelectField
                                    id="color"
                                    label="Color"
                                    value={formData.Color}
                                    options={COLORS}
                                    placeholder="Select color"
                                    onChange={(v) => updateField("Color", v)}
                                />
                                <NumberField
                                    id="airbags"
                                    label="Airbags"
                                    value={Number(formData.Airbags) || 0}
                                    placeholder="e.g., 4, 8, 12, 6, 10"
                                    onChange={(v) => updateField("Airbags", String(v))}
                                />
                            </div>
                        </div>
                    )}

                    {/* ---------------- STEP 3 ---------------- */}
                    {step === 3 && (
                        <div>
                            {!result && !isSubmitting && (
                                <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl border border-slate-800 bg-slate-950/60 p-6 text-sm sm:grid-cols-3">
                                    <SummaryItem label="Levy" value={formData.Levy} />
                                    <SummaryItem label="Brand" value={formData.Manufacturer} />
                                    <SummaryItem label="Model" value={formData.Model} />
                                    <SummaryItem label="Production Year" value={formData.Prod_year} />
                                    <SummaryItem label="Category" value={formData.Category} />
                                    <SummaryItem
                                        label="Leather Interior"
                                        value={formData.Leather_interior ? "Yes" : "No"}
                                    />
                                    <SummaryItem label="Fuel Type" value={formData.Fuel_type} />
                                    <SummaryItem
                                        label="Engine Volume"
                                        value={`${formData.Engine_volume} L`}
                                    />
                                    <SummaryItem
                                        label="Mileage"
                                        value={`${formData.Mileage.toLocaleString()} km`}
                                    />
                                    <SummaryItem
                                        label="Transmission"
                                        value={formData.Gear_box_type}
                                    />
                                    <SummaryItem
                                        label="Drive Wheels"
                                        value={formData.Drive_wheels}
                                    />
                                    <SummaryItem label="Wheel Side" value={formData.Wheel} />
                                    <SummaryItem label="Color" value={formData.Color} />
                                    <SummaryItem label="Airbags" value={String(formData.Airbags)} />
                                </div>
                            )}

                            {/* Result / loading / error states */}
                            <div className="relative mt-6 flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 px-6 py-10 text-center">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl"
                                />
                                {isSubmitting ? (
                                    <div className="relative flex flex-col items-center gap-4">
                                        <svg
                                            className="h-10 w-10 animate-spin text-blue-500"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-20"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-90"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>
                                        <p className="text-sm text-slate-400">
                                            Analyzing your vehicle...
                                        </p>
                                    </div>
                                ) : result ? (
                                    <div className="relative">
                                        <p className="text-sm text-slate-500">
                                            Predicted Market Price
                                        </p>
                                        <p
                                            className="mt-1 text-4xl font-bold text-white sm:text-5xl"
                                            style={{
                                                textShadow: "0 0 40px rgba(37, 99, 235, 0.45)",
                                            }}
                                        >
                                            {formattedPrice}
                                        </p>
                                        {typeof result.confidence === "number" && (
                                            <p className="mt-2 text-sm font-medium text-blue-400">
                                                {Math.round(result.confidence * 100)}% confidence
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <p className="relative max-w-xs text-sm text-slate-500">
                                        Review the details above, then press{" "}
                                        <span className="text-slate-300">Predict Price</span> to
                                        get your instant estimate.
                                    </p>
                                )}
                            </div>

                            {error && (
                                <div className="mt-5 rounded-lg border border-red-900/60 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                                    {error}
                                </div>
                            )}
                        </div>
                    )}

                    {step !== 3 && error && (
                        <div className="mt-5 rounded-lg border border-red-900/60 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                            {error}
                        </div>
                    )}

                    {/* ---------------- NAVIGATION ---------------- */}
                    <div className="mt-9 flex items-center justify-between border-t border-slate-800 pt-6">
                        <button
                            type="button"
                            onClick={goPrevious}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white"
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
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Previous
                        </button>

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={goNext}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-150 hover:bg-blue-500"
                            >
                                Next Step
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
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={handlePredict}
                                disabled={isSubmitting}
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-150 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting && (
                                    <svg
                                        className="h-4 w-4 animate-spin text-white"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        />
                                    </svg>
                                )}
                                {isSubmitting
                                    ? "Predicting..."
                                    : result
                                        ? "Predict Again"
                                        : "Predict Price"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PredictPage;