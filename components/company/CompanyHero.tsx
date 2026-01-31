import React from "react";

export default function CompanyHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-white/10 text-slate-300 text-xs font-medium mb-8">
                        <span>Est. 2008</span>
                        <span className="h-3 w-px bg-white/10" />
                        <span>Global Infrastructure Partners</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8">
                        Building the backbone of a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                            resilient future.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                        We are a collective of engineers, data scientists, and strategists
                        dedicated to modernizing the world's energy infrastructure. We
                        bridge the gap between legacy systems and the renewable grid.
                    </p>
                </div>
            </div>
        </section>
    );
}
