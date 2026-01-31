import React from "react";

interface ProjectsHeroProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export default function ProjectsHero({
    activeFilter,
    onFilterChange,
}: ProjectsHeroProps) {
    const filters = ["All", "Renewables", "Industrial", "Grid Scale"];

    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                            Selected Works
                        </h1>
                        <p className="text-lg text-slate-400 max-w-xl font-light">
                            Explore how we've powered infrastructure across the globe, from
                            renewable energy integration to industrial automation.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => onFilterChange(filter)}
                                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors cursor-pointer ${activeFilter === filter
                                        ? "bg-white text-black border-transparent hover:bg-slate-200"
                                        : "bg-transparent text-slate-400 border-white/10 hover:text-white hover:border-white/20"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
