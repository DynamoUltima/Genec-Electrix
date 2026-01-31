import { Icon } from "@iconify/react";
import React from "react";

interface ProjectsGridProps {
    activeFilter: string;
}

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
    const projects = [
        {
            id: 1,
            name: "Dogger Bank Offshore Link",
            description: "Engineering the HVDC converter stations for the world's largest offshore wind farm, capable of powering 6 million homes.",
            location: "North Sea, UK",
            category: "Renewables",
            tags: ["Wind Energy"],
            size: "featured", // spans 2 cols
            stats: [
                { label: "Capacity", value: "3.6", unit: "GW" },
                { label: "Technology", value: "HVDC" },
            ],
            bgContent: (
                <>
                    <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-950 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent" />
                </>
            )
        },
        {
            id: 2,
            name: "Nevada Solar Storage",
            description: "Grid-scale battery integration.",
            location: null,
            category: "Renewables",
            tags: [],
            size: "standard",
            stats: [
                { label: "Storage", value: "400", unit: "MW" },
                { label: "Year", value: "2023" },
            ],
            icon: "plus",
            bgContent: (
                <>
                    <div className="absolute inset-0 bg-linear-to-bl from-slate-800 to-slate-950 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                </>
            )
        },
        {
            id: 3,
            name: "Tokyo Metro Grid",
            description: "Urban substations modernization.",
            location: null,
            category: "Grid Scale",
            tags: [],
            size: "standard",
            stats: [
                { label: "Voltage", value: "66", unit: "kV" },
                { label: "Footprint", value: "-40%" },
            ],
            icon: "plus",
            bgContent: (
                <>
                    <div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 19px, #fff 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #fff 20px)" }} />
                </>
            )
        },
        {
            id: 4,
            name: "Hyperscale Data Center",
            description: "Critical power redundancy systems.",
            location: null,
            category: "Industrial",
            tags: [],
            size: "standard",
            stats: [
                { label: "Uptime", value: "99.999%" },
                { label: "Standard", value: "Tier IV" },
            ],
            icon: "plus",
            bgContent: (
                <>
                    <div className="absolute inset-0 bg-linear-to-tr from-slate-900 to-slate-800 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Icon icon="lucide:cpu" width="200" className="text-white" />
                    </div>
                </>
            )
        },
        {
            id: 5,
            name: "Automotive Assembly",
            description: "Robotic cell power distribution.",
            location: null,
            category: "Industrial",
            tags: [],
            size: "standard",
            stats: [
                { label: "Cabling", value: "12", unit: "km" },
                { label: "Location", value: "Germany" },
            ],
            icon: "plus",
            bgContent: (
                <>
                    <div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </>
            )
        },
    ];

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer ${project.size === "featured"
                                    ? "lg:col-span-2 h-[400px] md:h-[500px]"
                                    : "h-[400px] md:h-[500px] lg:h-[400px]"
                                }`}
                        >
                            {/* Background */}
                            {project.bgContent}

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent">
                                <div className={`flex items-center gap-2 mb-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${project.size === 'featured' ? '' : 'hidden'}`}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-[10px] uppercase font-semibold tracking-wider border border-cyan-500/20">{tag}</span>
                                    ))}
                                    {project.location && <span className="text-xs text-slate-300">{project.location}</span>}
                                </div>

                                {project.icon && (
                                    <div className="mb-auto text-right">
                                        <span className="w-8 h-8 inline-flex rounded-full bg-black/50 backdrop-blur border border-white/10 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Icon icon={`lucide:${project.icon}`} width="16" />
                                        </span>
                                    </div>
                                )}

                                <h2 className={`${project.size === 'featured' ? 'text-3xl md:text-4xl' : 'text-xl'} font-medium text-white tracking-tight mb-2`}>
                                    {project.name}
                                </h2>
                                <p className={`${project.size === 'featured' ? 'text-slate-400 max-w-lg mb-6 line-clamp-2' : 'text-sm text-slate-400 mb-4'}`}>
                                    {project.description}
                                </p>

                                <div className={`flex ${project.size === 'featured' ? 'items-center gap-6' : 'grid grid-cols-2 gap-4'} border-t border-white/10 pt-4 ${project.size === 'featured' ? 'mt-2' : ''}`}>
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <span className={`block ${project.size === 'featured' ? 'text-2xl' : 'text-lg'} font-medium text-white tracking-tight`}>
                                                {stat.value}<span className={`${project.size === 'featured' ? 'text-slate-500 text-lg' : 'text-slate-500 text-sm'}`}>{stat.unit}</span>
                                            </span>
                                            <span className={`${project.size === 'featured' ? 'text-xs text-slate-500 uppercase tracking-wide' : 'text-[10px] text-slate-500 uppercase'}`}>{stat.label}</span>
                                        </div>
                                    ))}
                                    {project.size === 'featured' && (
                                        <div className="ml-auto">
                                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                                                <Icon icon="lucide:arrow-up-right" />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination / Load More */}
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
