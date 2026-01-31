import { Icon } from "@iconify/react";
import React from "react";

export default function DetailedServicesGrid() {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-2xl font-medium text-white tracking-tight">
                        Core Capabilities
                    </h2>
                    <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                        View capability statement <Icon icon="lucide:arrow-up-right" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        icon="lucide:zap"
                        title="Power Systems Analysis"
                        description="Comprehensive grid modelling and simulation to ensure stability and compliance with regulatory standards."
                        points={[
                            "Load flow & fault analysis",
                            "Arc flash studies",
                            "Protection coordination",
                        ]}
                        color="cyan"
                    />

                    <ServiceCard
                        icon="lucide:wind"
                        title="Renewable Integration"
                        description="Seamlessly connecting solar, wind, and BESS assets to the grid with optimized control strategies."
                        points={[
                            "Grid connection applications",
                            "PPC design & commissioning",
                            "Harmonic analysis",
                        ]}
                        color="purple"
                    />

                    <ServiceCard
                        icon="lucide:cpu"
                        title="Automation & Control"
                        description="Designing intelligent SCADA and PLC systems for industrial efficiency and real-time monitoring."
                        points={[
                            "SCADA architecture design",
                            "PLC programming (IEC 61131)",
                            "HMI development",
                        ]}
                        color="emerald"
                    />

                    <ServiceCard
                        icon="lucide:ruler"
                        title="Detailed Engineering"
                        description="Complete electrical design packages from concept to construction drawings."
                        points={[
                            "HV/MV/LV Schematics",
                            "Cable scheduling & sizing",
                            "Earthing system design",
                        ]}
                        color="orange"
                    />

                    <ServiceCard
                        icon="lucide:activity"
                        title="Testing & Commissioning"
                        description="On-site validation to ensure systems operate safely and meet performance specifications."
                        points={[
                            "SAT/FAT execution",
                            "Relay injection testing",
                            "Troubleshooting & diagnostics",
                        ]}
                        color="blue"
                    />

                    <ServiceCard
                        icon="lucide:shield-check"
                        title="Compliance & Safety"
                        description="Ensuring infrastructure meets international safety standards and local grid codes."
                        points={[
                            "Regulatory compliance audits",
                            "Safety instrumented systems",
                            "Quality assurance",
                        ]}
                        color="rose"
                    />
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    icon,
    title,
    description,
    points,
    color,
}: {
    icon: string;
    title: string;
    description: string;
    points: string[];
    color: string;
}) {
    const colorMap: Record<
        string,
        {
            bg: string;
            border: string;
            text: string;
            pointText: string;
        }
    > = {
        cyan: {
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            text: "text-cyan-400",
            pointText: "text-cyan-500",
        },
        purple: {
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            text: "text-purple-400",
            pointText: "text-purple-500",
        },
        emerald: {
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            text: "text-emerald-400",
            pointText: "text-emerald-500",
        },
        orange: {
            bg: "bg-orange-500/10",
            border: "border-orange-500/20",
            text: "text-orange-400",
            pointText: "text-orange-500",
        },
        blue: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            text: "text-blue-400",
            pointText: "text-blue-500",
        },
        rose: {
            bg: "bg-rose-500/10",
            border: "border-rose-500/20",
            text: "text-rose-400",
            pointText: "text-rose-500",
        },
    };

    const c = colorMap[color] || colorMap.cyan;

    return (
        <div className="group p-8 rounded-2xl border border-white/10 bg-linear-to-b from-white/3 to-transparent hover:border-white/20 transition-all duration-300">
            <div
                className={`w-12 h-12 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center ${c.text} mb-6 group-hover:scale-110 transition-transform`}
            >
                <Icon icon={icon} width="24" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {points.map((point, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors"
                    >
                        <Icon icon="lucide:check" className={`${c.pointText} mt-0.5`} />{" "}
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    );
}
