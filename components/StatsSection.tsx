import React from "react";

export default function StatsSection() {
    return (
        <section className="border-y border-white/5 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            25<span className="text-slate-500">+</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Years of Excellence
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            38<span className="text-slate-500">+</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Years Senior Leadership
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            50<span className="text-slate-500">MWp</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Largest Solar PV
                        </span>
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                        <span className="text-3xl font-medium text-white tracking-tight">
                            7
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                            Key Specialists
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
