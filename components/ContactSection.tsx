import { Icon } from "@iconify/react";
import React from "react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Ready to energize your project?
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                    Partner with GENEC for world-class electrical engineering solutions that
                    scale with your ambitions.
                </p>

                <form className="max-w-md mx-auto space-y-4 text-left">
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder=" "
                            className="peer w-full bg-[#0e121b] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-sm"
                        />
                        <label className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#02040a] peer-focus:px-1 pointer-events-none">
                            Email Address
                        </label>
                    </div>
                    <button
                        type="button"
                        className="w-full bg-[#06b6d4] hover:bg-[#0891b2] text-black font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        Get in Touch
                        <Icon icon="solar:plain-linear" />
                    </button>
                    <p className="text-center text-xs text-slate-600 mt-4">
                        We respect your inbox. No spam, ever.
                    </p>
                </form>
            </div>
        </section>
    );
}
