import Link from "next/link";
import React from "react";

export default function ServicesCTA() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-medium text-white tracking-tight mb-6">
                    Ready to upgrade your infrastructure?
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Contact our engineering team to discuss your project requirements or
                    request a technical proposal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/#contact"
                        className="px-8 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors w-full sm:w-auto text-center"
                    >
                        Get in Touch
                    </Link>
                    <button className="px-8 py-3 rounded-full bg-transparent border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors w-full sm:w-auto cursor-pointer">
                        View Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}
