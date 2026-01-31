import { Icon } from "@iconify/react";
import React from "react";

export default function CareerCTA() {
    return (
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-linear-to-tl from-cyan-900/10 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="w-16 h-16 mx-auto bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-2xl">
                    <Icon icon="lucide:sparkles" className="text-cyan-400" width="28" />
                </div>
                <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                    Don't see your role?
                </h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
                    We are always looking for exceptional talent to help us modernize the
                    grid. Drop us a line and tell us how you can contribute.
                </p>

                <form className="max-w-md mx-auto space-y-4">
                    {/* Custom styled input */}
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-slate-900/50 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        />
                        <div className="absolute right-1.5 top-1.5">
                            <button
                                type="button"
                                className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                            >
                                Connect
                            </button>
                        </div>
                    </div>
                    <p className="text-xs text-slate-600">
                        We respect your privacy and only contact you about relevant
                        opportunities.
                    </p>
                </form>
            </div>
        </section>
    );
}
