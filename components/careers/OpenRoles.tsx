"use client";

import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Department = "All" | "Engineering" | "Design" | "Operations";

interface Career {
    id: string;
    title: string;
    department?: string;
    location: string;
    type: string;
    description?: string;
    requirements?: string;
    salary?: string;
    status: string;
    createdAt?: { seconds: number };
}

// Map a job title/type to a visual style
function getRoleStyle(index: number) {
    const styles = [
        {
            icon: "lucide:code-2",
            iconColor: "text-slate-400 group-hover:text-cyan-400",
            borderColor: "group-hover:border-cyan-500/30",
            titleColor: "group-hover:text-cyan-400",
        },
        {
            icon: "lucide:cpu",
            iconColor: "text-slate-400 group-hover:text-purple-400",
            borderColor: "group-hover:border-purple-500/30",
            titleColor: "group-hover:text-purple-400",
        },
        {
            icon: "lucide:terminal",
            iconColor: "text-slate-400 group-hover:text-orange-400",
            borderColor: "group-hover:border-orange-500/30",
            titleColor: "group-hover:text-orange-400",
        },
        {
            icon: "lucide:pen-tool",
            iconColor: "text-slate-400 group-hover:text-emerald-400",
            borderColor: "group-hover:border-emerald-500/30",
            titleColor: "group-hover:text-emerald-400",
        },
        {
            icon: "lucide:briefcase",
            iconColor: "text-slate-400 group-hover:text-amber-400",
            borderColor: "group-hover:border-amber-500/30",
            titleColor: "group-hover:text-amber-400",
        },
    ];
    return styles[index % styles.length];
}

export default function OpenRoles() {
    const [activeTab, setActiveTab] = useState<Department>("All");
    const [careers, setCareers] = useState<Career[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCareers() {
            try {
                const careersRef = collection(db, "careers");
                const q = query(careersRef, where("status", "==", "open"));
                const snapshot = await getDocs(q);
                const data: Career[] = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Career, "id">),
                }));
                setCareers(data);
            } catch (err) {
                console.error("Error fetching careers:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchCareers();
    }, []);

    // Derive unique departments from fetched data + always include "All"
    const uniqueDepartments = [
        "All",
        ...Array.from(
            new Set(careers.map((c) => c.department).filter(Boolean))
        ),
    ] as Department[];

    const filteredRoles =
        activeTab === "All"
            ? careers
            : careers.filter((role) => role.department === activeTab);

    // Is a role "new" if created within the last 7 days?
    const isNew = (career: Career) => {
        if (!career.createdAt?.seconds) return false;
        const sevenDaysAgo = Date.now() / 1000 - 7 * 24 * 60 * 60;
        return career.createdAt.seconds > sevenDaysAgo;
    };

    return (
        <section id="open-roles" className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header + Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <h2 className="text-3xl font-medium text-white tracking-tight">
                        Open Positions
                    </h2>

                    {/* Department filter — only rendered if there are departments */}
                    {uniqueDepartments.length > 1 && (
                        <div className="inline-flex bg-white/5 p-1 rounded-lg border border-white/10 self-start md:self-auto">
                            {uniqueDepartments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveTab(dept)}
                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                        activeTab === dept
                                            ? "text-white bg-white/10 shadow-sm border border-white/5"
                                            : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Roles List */}
                <div className="space-y-3">
                    {loading ? (
                        // Skeleton loaders
                        Array.from({ length: 3 }).map((_, i) => (
                            <div
                                key={i}
                                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] animate-pulse"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/10" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-white/10 rounded w-1/3" />
                                        <div className="h-3 bg-white/5 rounded w-1/4" />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : filteredRoles.length > 0 ? (
                        filteredRoles.map((role, index) => {
                            const style = getRoleStyle(index);
                            return (
                                <a
                                    key={role.id}
                                    href="#"
                                    className="group block p-5 rounded-xl border border-white/5 bg-linear-to-r from-white/2 to-transparent hover:border-white/20 hover:from-white/4 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-4 items-center">
                                            <div
                                                className={`w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center transition-colors ${style.iconColor} ${style.borderColor}`}
                                            >
                                                <Icon icon={style.icon} />
                                            </div>
                                            <div>
                                                <h4
                                                    className={`text-white font-medium transition-colors ${style.titleColor}`}
                                                >
                                                    {role.title}
                                                </h4>
                                                <div className="flex items-center gap-3 mt-1.5">
                                                    <span className="text-xs text-slate-500 flex items-center gap-1">
                                                        <Icon
                                                            icon="lucide:map-pin"
                                                            width="12"
                                                        />{" "}
                                                        {role.location}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                                    <span className="text-xs text-slate-500 flex items-center gap-1">
                                                        <Icon
                                                            icon="lucide:clock"
                                                            width="12"
                                                        />{" "}
                                                        {role.type}
                                                    </span>
                                                    {role.salary && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                                                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                                                <Icon
                                                                    icon="lucide:banknote"
                                                                    width="12"
                                                                />{" "}
                                                                {role.salary}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            {isNew(role) && (
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
                            );
                        })
                    ) : (
                        <div className="p-8 rounded-xl border border-dashed border-white/10 bg-white/[0.01] text-center">
                            <p className="text-slate-500 text-sm mb-4">
                                {activeTab === "All"
                                    ? "No open positions at the moment."
                                    : `No open roles in ${activeTab} right now.`}
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
