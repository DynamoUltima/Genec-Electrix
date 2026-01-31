"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-white" : "text-slate-400";
    };

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-semibold tracking-tighter text-white hover:text-cyan-400 transition-colors"
                >
                    GENEC
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link
                        href="/services"
                        className={`${isActive("/services")} hover:text-white transition-colors`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/projects"
                        className={`${isActive("/projects")} hover:text-white transition-colors`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/company"
                        className={`${isActive("/company")} hover:text-white transition-colors`}
                    >
                        Company
                    </Link>
                    <Link
                        href="/careers"
                        className={`${isActive("/careers")} hover:text-white transition-colors`}
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
