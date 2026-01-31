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
                            Global Reach, Local Expertise
                        </h2>
                        <p className="text-slate-400 mb-8">
                            We operate out of four strategic hubs, allowing us to support
                            projects across time zones and regulatory environments.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:map-point-linear"
                                    className="text-cyan-400 mt-1"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        London, UK
                                    </div>
                                    <div className="text-slate-500 text-xs">EMEA HQ</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:map-point-linear"
                                    className="text-cyan-400 mt-1"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        Austin, TX
                                    </div>
                                    <div className="text-slate-500 text-xs">Americas</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:map-point-linear"
                                    className="text-cyan-400 mt-1"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        Singapore
                                    </div>
                                    <div className="text-slate-500 text-xs">APAC</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Icon
                                    icon="solar:map-point-linear"
                                    className="text-cyan-400 mt-1"
                                />
                                <div>
                                    <div className="text-white font-medium text-sm">
                                        Berlin, DE
                                    </div>
                                    <div className="text-slate-500 text-xs">Innovation Lab</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-950 rounded-2xl p-8 border border-white/10 text-center">
                        <h3 className="text-xl font-medium text-white mb-3">
                            Work with us
                        </h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Start your next big project with a team that understands your
                            goals.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors"
                        >
                            Contact our Offices
                            <Icon icon="solar:arrow-right-linear" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
