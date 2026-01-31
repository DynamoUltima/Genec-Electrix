import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="#"
                    className="text-xl font-semibold tracking-tighter text-white hover:text-cyan-400 transition-colors"
                >
                    GENEC
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
                    <Link
                        href="/services"
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/projects"
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/company"
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        Company
                    </Link>
                    <Link
                        href="/careers"
                        className="text-white hover:text-cyan-400 transition-colors"
                    >
                        Careers
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="hidden sm:flex text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all items-center gap-2 group"
                    >
                        <span>Contact Us</span>
                        <Icon
                            icon="solar:arrow-right-linear"
                            className="group-hover:translate-x-0.5 transition-transform text-slate-400"
                        />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
