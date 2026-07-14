import { Icon } from "@iconify/react";
import React from "react";

type Affiliation = {
    icon: string;
    name: string;
    detail: string;
};

const AFFILIATIONS: Affiliation[] = [
    {
        icon: "solar:diploma-verified-linear",
        name: "Ghana Institution of Engineers (GhIE)",
        detail: "Multiple team members registered as Professional Engineers (PE-GhIE).",
    },
    {
        icon: "solar:ruler-pen-linear",
        name: "Ghana Institution of Surveyors (GhIS)",
        detail: "Fellow of the Quantity Surveying Division (FGhIS).",
    },
    {
        icon: "solar:global-linear",
        name: "American Academy of Project Management",
        detail: "FAAPM, CIPM, MPM — international project management recognition.",
    },
    {
        icon: "solar:temperature-linear",
        name: "ASHRAE",
        detail: "American Society of Heating, Refrigerating & Air-Conditioning Engineers — Ghana Chapter.",
    },
    {
        icon: "solar:bolt-circle-linear",
        name: "Energy Commission of Ghana",
        detail: "Certified Electrical Wiring Inspectors (CEW-I) and Certified Wiring Professionals (CEWP).",
    },
    {
        icon: "solar:calculator-linear",
        name: "International Cost Engineering Council",
        detail: "MICEC — international cost engineering standards.",
    },
    {
        icon: "solar:medal-star-linear",
        name: "Project Management Institute (PMI)",
        detail: "PMP-certified project managers — global PM certification.",
    },
    {
        icon: "solar:buildings-3-linear",
        name: "Chartered Institute of Building (CIOB)",
        detail: "Incorporate of CIOB — construction management body.",
    },
    {
        icon: "solar:map-arrow-square-linear",
        name: "Federation of International Surveyors (FIG)",
        detail: "MFIG — global surveying and quantity surveying body.",
    },
];

export default function AffiliationsSection() {
    return (
        <section className="py-24 border-t border-white/5 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-2xl font-medium text-white tracking-tight mb-2">
                        Affiliations &amp; Accreditations
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Our team holds membership across the major professional bodies
                        relevant to engineering and consultancy in Ghana and abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {AFFILIATIONS.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-slate-900/40 hover:border-white/20 transition-all"
                        >
                            <div className="shrink-0 w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <Icon icon={item.icon} width="22" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-white leading-snug">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
