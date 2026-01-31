import { Icon } from "@iconify/react";
import React from "react";

export default function LeadershipTeam() {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-2xl font-medium text-white tracking-tight">
                            Leadership
                        </h2>
                        <p className="text-slate-400 mt-2">
                            The minds guiding our technical direction.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                        Join the team <Icon icon="solar:arrow-right-linear" />
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <TeamMember
                        name="David Chen"
                        role="Chief Executive Officer"
                        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    />
                    <TeamMember
                        name="Sarah Al-Fayed"
                        role="VP of Engineering"
                        image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
                    />
                    <TeamMember
                        name="Marcus Thorne"
                        role="Director of Innovation"
                        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                    />
                    <TeamMember
                        name="Elena Rodriguez"
                        role="Head of Operations"
                        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                    />
                </div>
            </div>
        </section>
    );
}

function TeamMember({
    name,
    role,
    image,
}: {
    name: string;
    role: string;
    image: string;
}) {
    return (
        <div className="group">
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 border border-white/10 mb-4 relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale transition-filter duration-300 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-2">
                        <a
                            href="#"
                            className="p-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors"
                        >
                            <Icon icon="solar:brand-linkedin-linear" width="16" />
                        </a>
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-medium text-white">{name}</h3>
            <p className="text-sm text-slate-500">{role}</p>
        </div>
    );
}
