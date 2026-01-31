import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-slate-900/20 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                    {/* Main Feature */}
                    <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-[#050912] border border-white/5 group">
                        <div className="absolute inset-0 bg-linear-to-t from-[#02040a] via-transparent to-transparent z-10" />
                        {/* Abstract Visualization */}
                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-900/40 via-[#050912] to-[#02040a]" />
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34,211,238,0.05) 10px, rgba(34,211,238,0.05) 11px)",
                            }}
                        />

                        <div className="absolute bottom-0 left-0 p-10 z-20">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                                    Featured Project
                                </span>
                            </div>
                            <h3 className="text-3xl font-medium text-white tracking-tight mb-3">
                                Nordic Offshore Wind Link
                            </h3>
                            <p className="text-slate-400 max-w-md">
                                Engineering the HVDC converter stations for one of the world's
                                largest offshore wind farms, delivering 1.2GW of clean energy to
                                the mainland grid.
                            </p>
                            <Link
                                href="#"
                                className="inline-flex items-center gap-2 text-white mt-6 text-sm font-medium hover:text-cyan-400 transition-colors"
                            >
                                Read Case Study <Icon icon="solar:arrow-right-linear" />
                            </Link>
                        </div>
                    </div>

                    {/* Secondary Features */}
                    <div className="flex flex-col gap-6">
                        <div className="flex-1 rounded-3xl bg-[#050912] border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Icon icon="solar:settings-linear" width="64" className="text-cyan-900" />
                            </div>
                            <h4 className="text-xl font-medium text-white tracking-tight mb-2">
                                Smart Maintenance
                            </h4>
                            <p className="text-sm text-slate-400">
                                Predictive analytics using IoT sensors to reduce downtime by 40%.
                            </p>
                        </div>

                        <div className="flex-1 rounded-3xl bg-[#050912] border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Icon icon="solar:globe-linear" width="64" className="text-cyan-900" />
                            </div>
                            <h4 className="text-xl font-medium text-white tracking-tight mb-2">
                                Global Standards
                            </h4>
                            <p className="text-sm text-slate-400">
                                ISO 9001 certified engineering processes ensuring consistency
                                worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
