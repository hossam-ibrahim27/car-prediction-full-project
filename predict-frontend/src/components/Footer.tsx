import React from "react";
const PRODUCT_LINKS = [
    {
        key: 0,
        name: "Features",
        path: "/#features"
    }, {
        key: 1,
        name: "How It Works",
        path: "/#how-it-works",
    }, {
        key: 2,
        name: "Demo",
        path: "/#demo"
    }
];


const SOCIAL_ICONS: { link: string, label: string; path: string, key: number }[] = [
    {
        link: "https://www.youtube.com/playlist?list=PLbN9RDC_bEhM",
        label: "Youtube", key: 1,
        path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
    {
        link: "https://www.linkedin.com/in/hossam27",
        label: "LinkedIn", key: 2,
        path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
    },
    {
        link: "https://github.com/hossam-ibrahim27",
        label: "GitHub", key: 3,
        path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77 5.44 5.44 0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-slate-800/80 bg-[#0b0f19]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                    <div>
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
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
                            <span className="text-lg font-semibold text-white">
                                AutoIntel AI
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                            Making car buying smarter with AI-powered insights and
                            evaluations.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            {SOCIAL_ICONS.map((icon) => (
                                <a
                                    key={icon.key}
                                    href={icon.link}
                                    aria-label={icon.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors duration-150 hover:border-slate-700 hover:text-white"
                                    target="_blank"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.6}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d={icon.path}
                                        />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
                        <ul className="space-y-3">
                            {PRODUCT_LINKS.map((link) => (
                                <a key={link.key} href={link.path}>
                                    <li>
                                        <span className="text-sm text-slate-400 transition-colors duration-150 hover:text-white">{link.name}</span>
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-2">
                                <a href="https://www.linkedin.com/in/hossam_27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2  transition-colors w-fit">
                                    <svg
                                        className="h-4 w-4 text-slate-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.6}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"
                                        />
                                    </svg>
                                    <span>hossam_27</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <a href="mailto:ihossam968@gmail.co"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2  transition-colors w-fit">
                                    <svg
                                        className="h-4 w-4 text-slate-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.6}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>ihossam968@gmail.com</span>
                                </a>
                            </li>
                            <li>Cairo ,EG</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800/80 pt-6 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} Hossam Ibrahim (Agentic AI | Computer Vision | ML | DL). All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
