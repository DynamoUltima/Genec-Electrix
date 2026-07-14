import Image from "next/image";
import React from "react";

/**
 * Full-bleed banner background for page heroes: the solar photo plus
 * readability overlays. Render as the first child of a `relative` hero
 * section; keep the hero content at z-10 so it sits above this layer.
 *
 * Swap the image by overwriting /public/hero/solar-panels-sunset.jpg.
 */
export default function HeroBanner() {
    return (
        <div className="absolute inset-0 z-0">
            {/* Fallback + shows before the photo loads */}
            <div className="absolute inset-0 bg-slate-950" />

            <Image
                src="/hero/solar-panels-sunset.jpg"
                alt="Solar PV panel installation"
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            {/* Readability overlays: darken + fade into the page */}
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/30 to-slate-950" />
        </div>
    );
}
