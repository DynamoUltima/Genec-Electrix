import { Icon } from "@iconify/react";
import React from "react";

export default function ManifestoSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Abstract Graphic representing the company structure */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-[4/3] group">
                            <div className="absolute inset-0 bg-grid opacity-30" />

                            {/* Stylized decorative elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border border-cyan-500/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-24 h-24 rounded-full border border-indigo-500/20" />
                                </div>
                                <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent rotate-45" />
                                <div className="absolute w-64 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent -rotate-45" />
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                                alt="Office"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 grayscale transition-filter duration-300 group-hover:grayscale-0"
                            />

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
                                            Employee Owned
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            Since inception in 2008
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                            Driven by complexity, <br />
                            grounded in physics.
                        </h2>
                        <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
                            <p>
                                GENEC began as a boutique consultancy solving niche high-voltage
                                problems. Today, we are a comprehensive engineering partner for
                                utilities, IPPs, and industrial giants facing the challenges of
                                the energy transition.
                            </p>
                            <p>
                                We believe that the future of energy isn't just about new
                                sources—it's about intelligent integration. Our team combines
                                deep domain expertise in power systems with modern computation
                                to solve problems others walk away from.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 flex gap-8">
                            <div>
                                <h4 className="text-white font-medium mb-1">Our DNA</h4>
                                <p className="text-sm text-slate-500">
                                    Precision, Integrity, Innovation
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Our Goal</h4>
                                <p className="text-sm text-slate-500">
                                    Net-zero infrastructure by 2040
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
