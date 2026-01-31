import { Icon } from "@iconify/react";
import React from "react";

export default function ProcessSection() {
    return (
        <section className="py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-medium text-white tracking-tight mb-6">
                            Engineering with Precision
                        </h2>
                        <p className="text-slate-400 font-light mb-8 leading-relaxed">
                            Our methodology combines advanced simulation tools with practical
                            field experience. We don't just design; we validate every
                            parameter to ensure operational certainty.
                        </p>

                        <div className="space-y-8">
                            <ProcessStep
                                number="1"
                                title="Concept & Feasibility"
                                description="Initial load estimations, grid availability checks, and technological ROI assessment."
                            />
                            <ProcessStep
                                number="2"
                                title="Simulation & Design"
                                description="Utilizing ETAP, PSCAD, and DigSILENT for digital twins and stress testing."
                            />
                            <ProcessStep
                                number="3"
                                title="Execution & Handover"
                                description="Procurement support, on-site commissioning, and as-built documentation."
                            />
                        </div>
                    </div>

                    {/* Right side visual representation */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900 relative">
                            {/* Decorative UI Grid representing software */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

                            <div className="absolute inset-6 border border-white/5 rounded-xl p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest text-slate-500">
                                        Grid Simulation v2.4
                                    </div>
                                </div>

                                {/* Mock Graph/Data */}
                                <div className="flex-1 flex gap-4">
                                    <div className="w-2/3 space-y-4">
                                        <div className="h-24 w-full bg-slate-800/50 rounded border border-white/5 relative overflow-hidden">
                                            <svg
                                                className="absolute bottom-0 left-0 right-0 h-full w-full text-cyan-500/20"
                                                viewBox="0 0 100 40"
                                                preserveAspectRatio="none"
                                            >
                                                <path
                                                    d="M0 30 Q 20 10 40 25 T 80 15 T 100 20 V 40 H 0 Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M0 30 Q 20 10 40 25 T 80 15 T 100 20"
                                                    stroke="currentColor"
                                                    strokeWidth="0.5"
                                                    fill="none"
                                                    className="text-cyan-400"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-16 w-full bg-slate-800/30 rounded border border-white/5" />
                                            <div className="h-16 w-full bg-slate-800/30 rounded border border-white/5" />
                                        </div>
                                        <div className="space-y-2 pt-2">
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full w-3/4 bg-cyan-500 rounded-full" />
                                            </div>
                                            <div className="flex justify-between text-[10px] text-slate-500">
                                                <span>Load Stability</span>
                                                <span>94%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 flex flex-col gap-2">
                                        <div className="h-8 bg-slate-800/50 rounded border border-white/5" />
                                        <div className="h-8 bg-slate-800/50 rounded border border-white/5" />
                                        <div className="h-8 bg-slate-800/50 rounded border border-white/5" />
                                        <div className="h-full bg-slate-800/20 rounded border border-white/5 mt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessStep({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-4 group">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-sm font-medium text-white group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                {number}
            </div>
            <div>
                <h4 className="text-white font-medium mb-1">{title}</h4>
                <p className="text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
}
