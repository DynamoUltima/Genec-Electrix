"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import { useState } from "react";

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    return (
        <>
            <Navbar />
            <div className="flex flex-col min-h-screen bg-slate-950">
                <ProjectsHero activeFilter={filter} onFilterChange={setFilter} />
                <ProjectsGrid activeFilter={filter} />
            </div>
            <Footer />
        </>
    );
}
