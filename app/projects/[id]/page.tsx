"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useParams, useRouter } from "next/navigation";
import { getProjectById, type Project } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
    const { id } = useParams() as { id: string };
    const router = useRouter();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProjectById(id)
            .then((data) => setProject(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin" />
                </div>
                <Footer />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center pb-24 text-center">
                    <Icon icon="lucide:file-question" className="text-slate-700 w-16 h-16 mb-6" />
                    <h1 className="text-3xl font-medium text-white mb-2">Project not found</h1>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        The project you are looking for does not exist or may have been unpublished.
                    </p>
                    <button
                        onClick={() => router.push("/projects")}
                        className="px-6 py-3 rounded-full bg-cyan-600 text-white font-medium hover:bg-cyan-500 transition-colors"
                    >
                        Return to Projects
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <Navbar />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end mb-16 md:mb-24 overflow-hidden">
                    {project.coverImageUrl ? (
                        <>
                            <Image
                                src={project.coverImageUrl}
                                alt={project.name}
                                fill
                                priority
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-950/40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                    )}

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
                        <button 
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
                        >
                            <Icon icon="lucide:arrow-left" /> Back to Projects
                        </button>
                        
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300 text-xs font-medium uppercase tracking-wider">
                                {project.category}
                            </span>
                            {project.location && (
                                <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                                    <Icon icon="lucide:map-pin" className="w-4 h-4" />
                                    {project.location}
                                </span>
                            )}
                        </div>
                        
                        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-8 max-w-4xl">
                            {project.name}
                        </h1>

                        {/* Quick Stats Grid Overlay */}
                        {project.stats && project.stats.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl">
                                {project.stats.map((stat, i) => (
                                    <div key={i} className="pt-4 border-t-2 border-cyan-500/30">
                                        <div className="text-3xl md:text-4xl font-light text-white tracking-tight mb-1">
                                            {stat.value}
                                            {stat.unit && <span className="text-slate-400 text-xl md:text-2xl ml-1">{stat.unit}</span>}
                                        </div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-between">
                                            <span>{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left main content */}
                    <div className="lg:col-span-8">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <Icon icon="lucide:file-text" className="text-cyan-500" />
                            Project Overview
                        </h2>
                        <div className="prose prose-invert prose-slate prose-lg max-w-none text-slate-300 leading-relaxed font-light">
                            {project.description.split("\n").map((para, i) => (
                                <p key={i} className={i !== 0 ? "mt-4" : ""}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="lg:col-span-4">
                        <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 sticky top-32">
                            <h3 className="text-xl font-medium text-white mb-6">Technologies & Scope</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags && project.tags.length > 0 ? (
                                    project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-slate-500 text-sm">No specific technologies logged.</span>
                                )}
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                                    <Icon icon="solar:info-circle-linear" className="text-cyan-500" /> 
                                    Details
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                                        <span className="text-slate-500">Industry</span>
                                        <span className="text-slate-200 font-medium">{project.category}</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                                        <span className="text-slate-500">Type</span>
                                        <span className="text-slate-200 font-medium capitalize">{project.size}</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Published</span>
                                        <span className="text-slate-200 font-medium">{project.createdAt.toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
