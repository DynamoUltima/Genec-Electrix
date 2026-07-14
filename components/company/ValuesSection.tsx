import { Icon } from "@iconify/react";
import React from "react";

export default function ValuesSection() {
    return (
        <section className="py-24 border-t border-white/5 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-2xl font-medium text-white tracking-tight mb-2">
                        Our Core Values
                    </h2>
                    <p className="text-slate-400 text-sm">
                        The framework that guides every decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Card 1: Wide */}
                    <div className="md:col-span-2 relative group p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-white/20 transition-all">
                        <div className="absolute inset-0 bg-grid-small opacity-0 group-hover:opacity-20 transition-opacity" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Icon icon="solar:shield-star-linear" width="24" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Integrity
                                </h3>
                                <p className="text-slate-400 max-w-md">
                                    Transparent and ethical professional conduct at all times —
                                    the foundation of every client and stakeholder relationship
                                    we build.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative group p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-white/20 transition-all">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                                <Icon icon="solar:medal-ribbon-linear" width="24" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Excellence
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Uncompromising standards in design and delivery on every
                                    assignment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative group p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-white/20 transition-all">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                                <Icon icon="solar:lightbulb-linear" width="24" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Innovation
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    Embracing smart, sustainable engineering solutions across
                                    power and MEP.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Wide */}
                    <div className="md:col-span-2 relative group p-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.03] to-transparent overflow-hidden hover:border-white/20 transition-all">
                        <div className="absolute inset-0 bg-grid-small opacity-0 group-hover:opacity-20 transition-opacity" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                <Icon icon="solar:hand-shake-linear" width="24" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Partnership
                                </h3>
                                <p className="text-slate-400 max-w-md">
                                    Building lasting client and stakeholder relationships. We
                                    operate as an extension of your team — clear, honest
                                    engineering advice, start to finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
