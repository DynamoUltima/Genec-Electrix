import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function LocationsCTA() {
    return (
        <section className="py-24 border-t border-white/5 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-white/5 items-center">
                    <div>
                        <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                            Rooted in Ghana
                        </h2>
                        <p className="text-slate-400 mb-8">
                            Headquartered in Accra, we understand the local procurement
                            environment, community dynamics, and regulatory frameworks that
                            move projects forward across Ghana.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:map-point-linear"
                                    className="text-cyan-400 mt-1 shrink-0"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        Accra, Ghana
                                    </div>
                                    <div className="text-slate-500 text-xs">Headquarters</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:phone-linear"
                                    className="text-cyan-400 mt-1 shrink-0"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        +233 24 383 9480
                                    </div>
                                    <div className="text-slate-500 text-xs">Telephone</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 sm:col-span-2">
                                <Icon
                                    icon="solar:letter-linear"
                                    className="text-cyan-400 mt-1 shrink-0"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm break-all">
                                        info.genecelectrix@gmail.com
                                    </div>
                                    <div className="text-slate-500 text-xs">
                                        office.genec23@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-8 border border-white/10 text-center">
                        <h3 className="text-xl font-medium text-white mb-3">
                            Work with us
                        </h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Start your next project with a team that delivers to international
                            standards.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors"
                        >
                            Get in Touch
                            <Icon icon="solar:arrow-right-linear" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
