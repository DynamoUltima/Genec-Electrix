"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeroProps {
    onStartProject: () => void;
    onViewCaseStudies: () => void;
}

// Drop banner photos into /public/hero/ and add them here.
// One slide renders as a static banner; two or more turns it into an
// auto-rotating carousel (dots + crossfade) with no other changes.
const SLIDES: { src: string; alt: string }[] = [
    {
        src: "/hero/solar-panels-sunset.jpg",
        alt: "Solar PV panel installation",
    },
];

const ROTATE_MS = 6000;

export default function Hero({ onStartProject, onViewCaseStudies }: HeroProps) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (SLIDES.length <= 1) return;
        const id = setInterval(
            () => setActive((i) => (i + 1) % SLIDES.length),
            ROTATE_MS
        );
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* ── Banner carousel background ── */}
            <div className="absolute inset-0 z-0">
                {/* Gradient fallback (also shows before images load) */}
                <div className="absolute inset-0 bg-slate-950" />

                {SLIDES.map((slide, i) => (
                    <Image
                        key={slide.src}
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className={`object-cover transition-opacity duration-1000 ease-in-out ${
                            i === active ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}

                {/* Readability overlays: darken + fade the top/bottom into the page */}
                <div className="absolute inset-0 bg-slate-950/45" />
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/20 to-slate-950" />
            </div>

            {/* Subtle grid texture on top of the photo */}
            <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    Powering the Next Generation Grid
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-500 max-w-4xl mx-auto mb-6">
                    Engineering the flow of energy.
                </h1>

                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    GENEC designs, builds, and maintains critical electrical infrastructure.
                    From renewable integration to high-voltage transmission, we power the
                    future.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button
                        onClick={onStartProject}
                        className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Start a Project
                        <Icon icon="lucide:zap" className="text-black" />
                    </button>

                    {/* CTA Button triggering the Modal */}
                    <button
                        onClick={onViewCaseStudies}
                        className="group w-full sm:w-auto h-12 px-8 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
                    >
                        View Case Studies
                        <span className="bg-white/10 rounded-md px-1.5 py-0.5 text-[10px] text-slate-400 group-hover:text-white transition-colors">
                            3
                        </span>
                    </button>
                </div>

                {/* Carousel indicators — only render with more than one slide */}
                {SLIDES.length > 1 && (
                    <div className="flex items-center gap-2 mt-12">
                        {SLIDES.map((slide, i) => (
                            <button
                                key={slide.src}
                                onClick={() => setActive(i)}
                                aria-label={`Show slide ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all ${
                                    i === active
                                        ? "w-8 bg-white"
                                        : "w-4 bg-white/30 hover:bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
