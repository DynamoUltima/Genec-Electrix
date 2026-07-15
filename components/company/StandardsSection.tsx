import { Icon } from "@iconify/react";
import React from "react";

type Standard = {
    icon: string;
    name: string;
    detail: string;
};

const STANDARDS: Standard[] = [
    {
        icon: "solar:plane-linear",
        name: "ICAO Annex 14",
        detail: "Aerodromes — Volume I: Aerodrome Design & Operations. Airside geometry, obstacle limitation surfaces, and lighting reviewed against current SARPs.",
    },
    {
        icon: "solar:shield-check-linear",
        name: "GCADs",
        detail: "Ghana Civil Aviation Directives — national implementation of ICAO standards and local regulatory requirements for airport systems and operations.",
    },
    {
        icon: "solar:global-linear",
        name: "IATA ADRM",
        detail: "Airport Development Reference Manual — terminal Level of Service designed at Optimum standard for peak passenger throughput.",
    },
    {
        icon: "solar:document-text-linear",
        name: "FIDIC Silver Book",
        detail: "EPC/Turnkey Projects, 2nd Edition — full Engineer role: design review, site instructions, variation management, and payment certificates.",
    },
    {
        icon: "solar:bolt-circle-linear",
        name: "IEC / BS Standards",
        detail: "IEC 60364, BS 7671 (Wiring Regs), BS 5839 (Fire Detection), BS 7304 (Earthing), CIBSE Lighting Guide — terminal electrical and mechanical systems.",
    },
    {
        icon: "solar:temperature-linear",
        name: "ASHRAE 90.1",
        detail: "Energy Standard for Buildings — applied to HVAC design review for energy-efficient operation in tropical climates.",
    },
    {
        icon: "solar:leaf-linear",
        name: "Ghana EPA",
        detail: "Environmental Protection Agency Act 490 — Environmental Impact Assessment and Management Plan compliance across design and construction.",
    },
    {
        icon: "solar:buildings-3-linear",
        name: "Ghana Building Code",
        detail: "Building Regulations LI 1630 and Energy Commission Wiring Regulations LI 2008 — national standards for structural, civil, and MEP work.",
    },
];

export default function StandardsSection() {
    return (
        <section className="py-24 border-t border-white/5 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-2xl font-medium text-white tracking-tight mb-2">
                        Standards &amp; Codes
                    </h2>
                    <p className="text-slate-400 text-sm">
                        We design and supervise all work in strict accordance with the
                        international and Ghanaian standards that govern engineering,
                        safety, and environmental compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {STANDARDS.map((item) => (
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
