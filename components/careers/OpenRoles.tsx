"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";

type Department = "All" | "Engineering" | "Design" | "Operations";

export default function OpenRoles() {
    const [activeTab, setActiveTab] = useState<Department>("All");

    const roles = [
        {
            id: 1,
            title: "Senior Power Systems Engineer",
            department: "Engineering",
            location: "London, UK",
            type: "Full-time",
            isNew: true,
            icon: "lucide:code-2",
            iconColor: "text-slate-400 group-hover:text-cyan-400",
            borderColor: "group-hover:border-cyan-500/30",
            titleColor: "group-hover:text-cyan-400",
        },
        {
            id: 2,
            title: "SCADA Automation Lead",
            department: "Engineering",
            location: "Remote (EU)",
            type: "Full-time",
            isNew: false,
            icon: "lucide:cpu",
            iconColor: "text-slate-400 group-hover:text-purple-400",
            borderColor: "group-hover:border-purple-500/30",
            titleColor: "group-hover:text-purple-400",
        },
        {
            id: 3,
            title: "Embedded Systems Engineer",
            department: "Engineering",
            location: "Berlin, DE",
            type: "Contract",
            isNew: false,
            icon: "lucide:terminal",
            iconColor: "text-slate-400 group-hover:text-orange-400",
            borderColor: "group-hover:border-orange-500/30",
            titleColor: "group-hover:text-orange-400",
        },
        {
            id: 4,
            title: "Technical Product Manager",
            department: "Design",
            location: "Remote (US/EU)",
            type: "Full-time",
            isNew: false,
            icon: "lucide:pen-tool",
            iconColor: "text-slate-400 group-hover:text-emerald-400",
            borderColor: "group-hover:border-emerald-500/30",
            titleColor: "group-hover:text-emerald-400",
        },
    ];

    const filteredRoles =
        activeTab === "All"
            ? roles
            : roles.filter((role) => role.department === activeTab);

    const departments = ["All", "Engineering", "Design", "Operations"];

    return (
        <section id="open-roles" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                {/* Filters / Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <h2 className="text-3xl font-medium text-white tracking-tight">
                        Open Positions
                    </h2>

                    {/* Custom Segmented Control */}
                    <div className="inline-flex bg-white/5 p-1 rounded-lg border border-white/10 self-start md:self-auto">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setActiveTab(dept as Department)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === dept
                                        ? "text-white bg-white/10 shadow-sm border border-white/5"
                                        : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Roles List */}
                <div className="space-y-3 animate-fade-in">
                    {filteredRoles.length > 0 ? (
                        filteredRoles.map((role) => (
                            <a
                                key={role.id}
                                href="#"
                                className="group block p-5 rounded-xl border border-white/5 bg-linear-to-r from-white/2 to-transparent hover:border-white/20 hover:from-white/4 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center transition-colors ${role.iconColor} ${role.borderColor}`}
                                        >
                                            <Icon icon={role.icon} />
                                        </div>
                                        <div>
                                            <h4
                                                className={`text-white font-medium transition-colors ${role.titleColor}`}
                                            >
                                                {role.title}
                                            </h4>
                                            <div className="flex items-center gap-3 mt-1.5">
                                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Icon icon="lucide:map-pin" width="12" />{" "}
                                                    {role.location}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-slate-700" />
                                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Icon icon="lucide:clock" width="12" /> {role.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {role.isNew && (
                                            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-medium text-cyan-400">
                                                New
                                            </span>
                                        )}
                                        <Icon
                                            icon="lucide:arrow-right"
                                            className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all"
                                        />
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="p-8 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center">
                            <p className="text-slate-500 text-sm mb-4">
                                No open roles in {activeTab} right now.
                            </p>
                            <a
                                href="#"
                                className="text-sm text-white hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                            >
                                Join talent network{" "}
                                <Icon icon="lucide:arrow-right" width="14" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
