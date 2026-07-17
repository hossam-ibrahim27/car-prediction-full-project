import React from "react";

export const inputClasses =
    "w-full rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-600 shadow-sm outline-none transition-all duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 hover:border-slate-700";

export const selectClasses =
    "w-full appearance-none rounded-lg border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-sm text-slate-100 shadow-sm outline-none transition-all duration-150 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 hover:border-slate-700";

interface FieldShellProps {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}

export const FieldShell: React.FC<FieldShellProps> = ({
    label,
    htmlFor,
    children,
}) => (
    <div className="flex flex-col gap-1.5">
        <label
            htmlFor={htmlFor}
            className="text-sm font-medium text-slate-300 tracking-wide"
        >
            {label} <span className="text-blue-500">*</span>
        </label>
        {children}
    </div>
);

export const ChevronIcon: React.FC = () => (
    <svg
        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

interface SelectFieldProps {
    id: string;
    label: string;
    value: string;
    options: string[];
    placeholder: string;
    onChange: (value: string) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
    id,
    label,
    value,
    options,
    placeholder,
    onChange,
}) => (
    <FieldShell label={label} htmlFor={id}>
        <div className="relative">
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={selectClasses}
            >
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <ChevronIcon />
        </div>
    </FieldShell>
);

interface NumberFieldProps {
    id: string;
    label: string;
    value: number;
    placeholder: string;
    step?: number;
    onChange: (value: number) => void;
}

export const NumberField: React.FC<NumberFieldProps> = ({
    id,
    label,
    value,
    placeholder,
    step,
    onChange,
}) => (
    <FieldShell label={label} htmlFor={id}>
        <input
            id={id}
            type="number"
            min={0}
            step={step ?? 1}
            value={value === 0 ? "" : value}
            onChange={(e) => onChange(Number(e.target.value))}
            placeholder={placeholder}
            className={inputClasses}
        />
    </FieldShell>
);