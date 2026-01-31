import React from "react";

export default function ServicesHero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
            {/* Abstract gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    End-to-End Solutions
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                    Engineering for the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                        Connected Infrastructure
                    </span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    From high-voltage grid analysis to industrial automation, we provide
                    the technical expertise required to build resilient, future-proof
                    energy systems.
                </p>
            </div>
        </section>
    );
}
