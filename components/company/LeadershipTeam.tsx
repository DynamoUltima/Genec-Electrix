import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type Member = {
    name: string;
    role: string;
    initials: string;
    credentials: string;
    bio: string;
    tags: string[];
    featured?: boolean;
};

const LEADERSHIP: Member[] = [
    {
        name: "Ing. Isaac Ofosu Appiah",
        role: "Chief Executive Officer & Principal Consultant",
        initials: "IA",
        credentials: "Professional Engineer · GhIE",
        bio: "Founder and CEO of GENEC Electrix Ltd, providing strategic leadership and technical oversight across all engineering and consultancy operations. Demonstrated expertise in electrical power systems, renewable energy, MEP integration, and infrastructure project management, leading business development and the mobilisation of specialist teams for major public and private sector projects.",
        tags: [
            "Electrical Engineering",
            "Renewable Energy",
            "MEP Systems",
            "Project Leadership",
        ],
        featured: true,
    },
    {
        name: "Rev. Allan Okomeng-Mensah",
        role: "Project Director & Cost Engineering Specialist",
        initials: "AO",
        credentials: "FGhIS · FAAPM · CIPM · MICEC · 38+ Years",
        bio: "A Fellow of the Ghana Institution of Surveyors and the American Academy of Project Management, with over 38 years in Project Management, Quantity Surveying/Cost Engineering, and FIDIC Contract Administration across airports, courts, roads and water treatment facilities.",
        tags: ["FIDIC Contracts", "Cost Engineering", "Risk Management"],
    },
    {
        name: "Ing. David Sarpong",
        role: "MEP Project Manager / HVAC Lead Engineer",
        initials: "DS",
        credentials: "MBA · PMP (PMI) · PE-GhIE · ASHRAE · ~20 Years",
        bio: "A PMP-certified Mechanical Engineer with close to two decades of expertise in HVAC design, installation, and MEP project management, leading mechanical services review and end-to-end commissioning for large commercial buildings.",
        tags: ["HVAC Design", "MEP Engineering", "Commissioning"],
    },
    {
        name: "Ing. Dr. Joseph Atuahene Omani",
        role: "Senior Mechanical Services Consultant",
        initials: "JO",
        credentials: "Senior PE-GhIE · ASHRAE · MSc (UK) · 28+ Years",
        bio: "Over 28 years of experience specialising in mechanical building services — HVAC (incl. VRF), plumbing and fire-fighting, petroleum storage, and Sewage Treatment Plants. Portfolio spans 5-star hotels, hospitals, data centres, and stadiums.",
        tags: ["HVAC / VRF", "Fire-Fighting", "STP Design"],
    },
    {
        name: "Ing. Abraham Kokuro",
        role: "Electrical Engineer & Solar PV Specialist",
        initials: "AK",
        credentials: "PE-GhIE · BSc Electrical Eng. (KNUST) · 8+ Years",
        bio: "Specialises in MEP coordination, electrical system design (HV/LV), and large-scale solar PV. Served as Solar Design Manager for a 50.22 MWp Solar PV System for the Bui Power Authority.",
        tags: ["Electrical Design", "Solar PV", "LV/MV Systems"],
    },
    {
        name: "Ing. Reuben Ando-Brew",
        role: "Electrical Project Engineer & Systems Inspector",
        initials: "RA",
        credentials: "PE-GhIE · CEW-I (Energy Commission) · 10+ Years",
        bio: "Holds dual qualifications as a Professional Engineer and Certified Electrical Wiring Inspector — a combination suited to inspection and supervision on major public infrastructure, with hospital and VRA/NEDCO power experience.",
        tags: ["Wiring Inspection", "Site Supervision", "Commissioning"],
    },
    {
        name: "Prince Hackman Aggrey",
        role: "Solar PV Design Engineer & PM Specialist",
        initials: "PH",
        credentials: "TPE-GhIE · CEWP · BTech (ATU) · MSc PM (KNUST) · 7+ Years",
        bio: "Seven years across design, EPC coordination, and O&M of solar PV and electrical systems. Former Energy Efficiency Regulatory Inspector with the Energy Commission of Ghana, providing regulatory insight for energy system compliance.",
        tags: ["Solar PV Design", "EPC Coordination", "O&M"],
    },
];

export default function LeadershipTeam() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-2xl font-medium text-white tracking-tight">
                            Key Personnel
                        </h2>
                        <p className="text-slate-400 mt-2">
                            Ghanaian licensed professionals guiding our technical direction.
                        </p>
                    </div>
                    <Link
                        href="/careers"
                        className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                        Join the team <Icon icon="solar:arrow-right-linear" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LEADERSHIP.map((member) => (
                        <TeamMember key={member.name} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TeamMember({
    name,
    role,
    initials,
    credentials,
    bio,
    tags,
    featured,
}: Member) {
    return (
        <div
            className={`group rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden hover:border-white/20 transition-all ${
                featured ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
        >
            <div
                className={`flex items-center gap-4 p-6 bg-linear-to-br from-slate-800/60 to-slate-900/60 border-b border-white/5 ${
                    featured ? "p-8" : ""
                }`}
            >
                <div
                    className={`shrink-0 rounded-full bg-linear-to-br from-cyan-400 to-indigo-500 text-slate-950 font-bold flex items-center justify-center ${
                        featured ? "w-16 h-16 text-xl" : "w-14 h-14 text-lg"
                    }`}
                >
                    {initials}
                </div>
                <div>
                    <h3
                        className={`font-medium text-white leading-tight ${
                            featured ? "text-xl" : "text-base"
                        }`}
                    >
                        {name}
                    </h3>
                    <p className="text-sm text-cyan-400/90 mt-1">{role}</p>
                </div>
            </div>
            <div className={`p-6 ${featured ? "p-8" : ""}`}>
                <p className="text-xs text-slate-500 font-medium mb-3 tracking-wide">
                    {credentials}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{bio}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-md px-2 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
