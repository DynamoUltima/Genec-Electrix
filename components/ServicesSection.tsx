import { Icon } from "@iconify/react";
import React from "react";

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                        Core Capabilities
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                        Comprehensive electrical engineering services tailored for industrial,
                        commercial, and utility-scale applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ServiceCard
                        icon="lucide:activity"
                        title="Grid Analysis"
                        description="Advanced load flow analysis, short circuit studies, and stability assessments for robust power networks."
                    />
                    <ServiceCard
                        icon="lucide:zap"
                        title="High Voltage"
                        description="Design and implementation of transmission lines and substations up to 400kV with precision engineering."
                    />
                    <ServiceCard
                        icon="lucide:cpu"
                        title="Automation & SCADA"
                        description="Intelligent control systems for real-time monitoring, maximizing efficiency and operational safety."
                    />
                    <ServiceCard
                        icon="lucide:sun"
                        title="Renewable Integration"
                        description="Seamlessly connecting solar, wind, and storage assets to the main grid infrastructure."
                    />
                    <ServiceCard
                        icon="lucide:shield-check"
                        title="Safety Audits"
                        description="Comprehensive arc flash studies and compliance audits to meet international safety standards."
                    />
                    <ServiceCard
                        icon="lucide:lightbulb"
                        title="Consultancy"
                        description="Expert technical advisory for infrastructure planning, feasibility studies, and cost optimization."
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
}: {
    icon: string;
    title: string;
    description: string;
}) {
    return (
        <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-cyan-500/30 hover:bg-white/4 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                <Icon icon={icon} width="20" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
    );
}
