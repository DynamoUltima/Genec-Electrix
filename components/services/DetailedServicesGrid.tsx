import { Icon } from "@iconify/react";
import React from "react";

type Service = {
    icon: string;
    title: string;
    description: string;
    points: string[];
    color: string;
};

const SERVICES: Service[] = [
    {
        icon: "lucide:zap",
        title: "Electrical & Power Systems",
        description:
            "Design and supervision of HV/LV power distribution, grid connection, standby generation, and building electrical systems.",
        points: [
            "HV/MV/LV distribution design",
            "Earthing & lightning protection",
            "Switchgear, ATS & distribution boards",
        ],
        color: "cyan",
    },
    {
        icon: "lucide:thermometer",
        title: "Mechanical & MEP Engineering",
        description:
            "Full mechanical building services — HVAC, plumbing, fire-fighting, and integrated MEP coordination.",
        points: [
            "HVAC design & optimisation (ASHRAE)",
            "Plumbing & fire-fighting systems",
            "Sewage Treatment Plants (STP)",
        ],
        color: "blue",
    },
    {
        icon: "lucide:sun",
        title: "Renewable Energy & Solar PV",
        description:
            "Solar PV system design, energy-efficiency analysis, and commissioning oversight from residential to utility scale.",
        points: [
            "Solar PV design (up to utility scale)",
            "Battery storage & backup power",
            "Energy efficiency audits",
        ],
        color: "emerald",
    },
    {
        icon: "lucide:clipboard-list",
        title: "Project & Contract Management",
        description:
            "PMP-certified project management with programme scheduling, risk control, and FIDIC contract administration.",
        points: [
            "Programme scheduling & KPI tracking",
            "Risk registers & escalation matrices",
            "FIDIC claims administration",
        ],
        color: "orange",
    },
    {
        icon: "lucide:hard-hat",
        title: "Construction Supervision",
        description:
            "Acting as the Engineer under FIDIC — site instructions, variation orders, and interim payment certification.",
        points: [
            "Resident site supervision",
            "Non-conformance management",
            "Interim payment certificates",
        ],
        color: "purple",
    },
    {
        icon: "lucide:activity",
        title: "Testing, Commissioning & Handover",
        description:
            "Structured testing and commissioning of all systems, culminating in formal handover with full documentation.",
        points: [
            "SAT/FAT execution",
            "As-built documentation",
            "O&M manuals & training",
        ],
        color: "rose",
    },
    {
        icon: "lucide:file-search",
        title: "Design Review",
        description:
            "Independent, code-benchmarked review of infrastructure design documents against international standards.",
        points: [
            "Compliance with IEC / BS / ICAO codes",
            "Constructability & value engineering",
            "Stage-gate review & approvals",
        ],
        color: "cyan",
    },
    {
        icon: "lucide:leaf",
        title: "Environmental & HSE Management",
        description:
            "Environmental impact management and HSE compliance aligned with Ghana EPA and IFC Performance Standards.",
        points: [
            "EPA Environmental Management Plans",
            "HSE induction & monitoring",
            "Community & stakeholder liaison",
        ],
        color: "emerald",
    },
    {
        icon: "lucide:map",
        title: "Master Planning & Feasibility",
        description:
            "Master plan and land-use review, demand forecasting, and feasibility studies for major capital projects.",
        points: [
            "Master plan & land-use review",
            "20-year demand forecasting",
            "Lifecycle cost analysis",
        ],
        color: "blue",
    },
];

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
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
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
