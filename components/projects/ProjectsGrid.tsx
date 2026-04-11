"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getPublishedProjects, type Project } from "@/lib/projects";

interface ProjectsGridProps {
    activeFilter: string;
}

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPublishedProjects()
            .then(setProjects)
            .finally(() => setLoading(false));
    }, []);

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    if (loading) {
        return (
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className={`rounded-3xl bg-slate-900 border border-white/10 animate-pulse ${i === 0 ? "lg:col-span-2 h-[400px]" : "h-[400px]"}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    if (filteredProjects.length === 0) {
        return (
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col items-center justify-center min-h-[400px] text-center">
                    <Icon icon="solar:gallery-wide-linear" width="48" className="text-slate-700 mb-4" />
                    <p className="text-slate-500 text-sm">No projects found in this category.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={project.id}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer block ${
                                project.size === "featured"
                                    ? "lg:col-span-2 h-[400px] md:h-[500px]"
                                    : "h-[400px] md:h-[500px] lg:h-[400px]"
                            }`}
                        >
                            {/* Background */}
                            {project.coverImageUrl ? (
                                <>
                                    <Image
                                        src={project.coverImageUrl}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/40" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-bl from-slate-800 to-slate-950 transition-transform duration-700 group-hover:scale-105" />
                                    <div
                                        className="absolute inset-0 opacity-20"
                                        style={{
                                            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                                            backgroundSize: "20px 20px",
                                        }}
                                    />
                                </>
                            )}

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent">
                                {/* Tags row — visible on hover for featured */}
                                <div
                                    className={`flex items-center gap-2 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${
                                        project.size === "featured" ? "" : "hidden"
                                    }`}
                                >
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] uppercase font-semibold tracking-wider border border-cyan-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.location && (
                                        <span className="text-xs text-slate-300">{project.location}</span>
                                    )}
                                </div>

                                {project.size !== "featured" && (
                                    <div className="mb-auto text-right">
                                        <span className="w-8 h-8 inline-flex rounded-full bg-black/50 backdrop-blur border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Icon icon="lucide:plus" width="16" />
                                        </span>
                                    </div>
                                )}

                                <h2
                                    className={`${
                                        project.size === "featured" ? "text-3xl md:text-4xl" : "text-xl"
                                    } font-medium text-white tracking-tight mb-2`}
                                >
                                    {project.name}
                                </h2>
                                <p
                                    className={`${
                                        project.size === "featured"
                                            ? "text-slate-400 max-w-lg mb-6 line-clamp-2"
                                            : "text-sm text-slate-400 mb-4"
                                    }`}
                                >
                                    {project.description}
                                </p>

                                <div
                                    className={`flex ${
                                        project.size === "featured"
                                            ? "items-center gap-6"
                                            : "grid grid-cols-2 gap-4"
                                    } border-t border-white/10 pt-4 ${project.size === "featured" ? "mt-2" : ""}`}
                                >
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <span
                                                className={`block ${
                                                    project.size === "featured" ? "text-2xl" : "text-lg"
                                                } font-medium text-white tracking-tight`}
                                            >
                                                {stat.value}
                                                <span
                                                    className={`${
                                                        project.size === "featured"
                                                            ? "text-slate-500 text-lg"
                                                            : "text-slate-500 text-sm"
                                                    }`}
                                                >
                                                    {stat.unit}
                                                </span>
                                            </span>
                                            <span
                                                className={`${
                                                    project.size === "featured"
                                                        ? "text-xs text-slate-500 uppercase tracking-wide"
                                                        : "text-[10px] text-slate-500 uppercase"
                                                }`}
                                            >
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                    {project.size === "featured" && (
                                        <div className="ml-auto">
                                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Icon icon="lucide:arrow-up-right" />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-16 flex justify-center">
                    <button className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer">
                        Load More Projects
                        <Icon icon="lucide:arrow-down" className="text-slate-400" />
                    </button>
                </div>
            </div>
        </main>
    );
}
