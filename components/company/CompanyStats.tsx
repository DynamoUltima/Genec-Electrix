import React from "react";

export default function CompanyStats() {
    return (
        <section className="border-b border-white/5 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-1">
                        <div className="text-3xl font-semibold text-white tracking-tight">
                            15+
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Years of Excellence
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-semibold text-white tracking-tight">
                            200+
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Projects Delivered
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-semibold text-white tracking-tight">
                            $4B+
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Asset Value Engineered
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-semibold text-white tracking-tight">
                            4
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                            Global Hubs
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
