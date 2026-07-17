import React from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
    { label: "Demo", href: "/#demo" },
];

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2.5 transition-opacity duration-150 hover:opacity-90"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-indigo-600/30">
                        <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 3l1.664 1.664M17.336 4.664L19 3m-9 12v3m4-3v3m4-6h3M2 12h3m14.336 4.336L19 21m-14 0l1.664-1.664M12 8a4 4 0 100 8 4 4 0 000-8z"
                            />
                        </svg>
                    </span>
                    <span className="text-lg font-semibold tracking-tight text-white">
                        AutoIntel AI
                    </span>
                </button>

                <nav className="hidden items-center gap-8 sm:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors duration-150 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => navigate("/predict")}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-150 hover:bg-blue-500 sm:hidden"
                >
                    Try It
                </button>
            </div>
        </header>
    );
};

export default Navbar;
