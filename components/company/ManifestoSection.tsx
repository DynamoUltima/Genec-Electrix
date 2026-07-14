import { Icon } from "@iconify/react";
import React from "react";

export default function ManifestoSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Abstract Graphic representing the company structure */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-4/3 group">
                            <div className="absolute inset-0 bg-grid-small opacity-30" />

                            {/* Stylized decorative elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border border-cyan-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-24 h-24 rounded-full border border-indigo-500/20" />
                                </div>
                                <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent rotate-45" />
                                <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent -rotate-45" />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/80 backdrop-blur border border-white/10 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <Icon
                                            icon="solar:users-group-rounded-linear"
                                            width="20"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white font-medium">
                                            Founder-Led
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Ing. Isaac Ofosu Appiah, CEO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                            Rigorous standards, <br />
                            interdisciplinary depth.
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
                            <p>
                                GENEC Electrix operates across the public and private sectors in
                                Ghana, engaging on complex infrastructure projects that demand
                                rigorous technical standards, international code compliance, and
                                disciplined project controls.
                            </p>
                            <p>
                                We maintain strategic alliances with specialist firms in aviation
                                infrastructure, quantity surveying, structural engineering,
                                geotechnics, and environmental management — enabling us to
                                mobilise comprehensive interdisciplinary teams for major capital
                                projects.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 flex gap-8">
                            <div>
                                <h4 className="text-white font-medium mb-1">Our DNA</h4>
                                <p className="text-sm text-slate-500">
                                    Integrity, Excellence, Innovation
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Our Focus</h4>
                                <p className="text-sm text-slate-500">
                                    Power, MEP &amp; renewable energy systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
