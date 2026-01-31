import { Icon } from "@iconify/react";
import React from "react";

interface HeroProps {
    onStartProject: () => void;
    onViewCaseStudies: () => void;
}

export default function Hero({ onStartProject, onViewCaseStudies }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    Powering the Next Generation Grid
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-500 max-w-4xl mx-auto mb-6">
                    Engineering the flow of energy.
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    GENEC designs, builds, and maintains critical electrical infrastructure.
                    From renewable integration to high-voltage transmission, we power the
                    future.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button
                        onClick={onStartProject}
                        className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Start a Project
                        <Icon icon="lucide:zap" className="text-black" />
                    </button>

                    {/* CTA Button triggering the Modal */}
                    <button
                        onClick={onViewCaseStudies}
                        className="group w-full sm:w-auto h-12 px-8 rounded-full bg-transparent border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                        View Case Studies
                        <span className="bg-white/10 rounded-md px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:text-white transition-colors">
                            3
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
