import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const HIGHLIGHTS = [
    {
        icon: "solar:bolt-circle-linear",
        title: "Electrical & Power",
        text: "HV/LV distribution, grid connection, and standby power.",
    },
    {
        icon: "solar:temperature-linear",
        title: "Mechanical & MEP",
        text: "HVAC, plumbing, fire-fighting, and full MEP coordination.",
    },
    {
        icon: "solar:sun-linear",
        title: "Renewable Energy",
        text: "Solar PV design and commissioning from commercial to utility scale.",
    },
    {
        icon: "solar:clipboard-check-linear",
        title: "Project Delivery",
        text: "Project management and FIDIC construction supervision.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: narrative */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            Who We Are
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                            A trusted engineering &amp; consultancy partner.
                        </h2>
                        <div className="space-y-5 text-slate-400 leading-relaxed">
                            <p>
                                GENEC Electrix Ltd is a Ghanaian-owned multidisciplinary
                                engineering and consultancy firm headquartered in Accra.
                                Founded and led by Ing. Isaac Ofosu Appiah, the firm delivers
                                integrated solutions spanning electrical power systems,
                                mechanical building services, renewable energy, MEP engineering
                                design, project management, and construction supervision.
                            </p>
                            <p>
                                We operate across the public and private sectors in Ghana,
                                engaging on complex infrastructure projects that demand rigorous
                                technical standards, international code compliance, and
                                disciplined project controls — mobilising comprehensive
                                interdisciplinary teams for major capital projects.
                            </p>
                        </div>
                        <Link
                            href="/company"
                            className="inline-flex items-center gap-2 text-white mt-8 text-sm font-medium hover:text-cyan-400 transition-colors"
                        >
                            More about the company{" "}
                            <Icon icon="solar:arrow-right-linear" />
                        </Link>
                    </div>

                    {/* Right: capability highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {HIGHLIGHTS.map((item) => (
                            <div
                                key={item.title}
                                className="group p-6 rounded-2xl border border-white/10 bg-slate-900/40 hover:border-cyan-500/20 transition-colors"
                            >
                                <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Icon icon={item.icon} width="22" />
                                </div>
                                <h3 className="text-base font-medium text-white mb-1.5">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
