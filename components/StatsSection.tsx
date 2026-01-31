import React from "react";

export default function StatsSection() {
    return (
        <section className="border-y border-white/5 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            2.4<span className="text-slate-500">GW</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Power Generated
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            150<span className="text-slate-500">+</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Substations Built
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            99.9<span className="text-slate-500">%</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Uptime Reliability
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            30<span className="text-slate-500">yrs</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Industry Heritage
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
