import React from "react";

const STATS = [
    { value: "25+", label: "Years of Engineering Excellence" },
    { value: "38+", label: "Years Senior Leadership Experience" },
    { value: "7", label: "Key Specialist Professionals" },
    { value: "Multi-Disciplinary", label: "Engineering & Consultancy" },
];

export default function CompanyStats() {
    return (
        <section className="border-b border-white/5 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="text-3xl font-semibold text-white tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
