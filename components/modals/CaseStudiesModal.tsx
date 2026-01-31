import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface CaseStudiesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ViewType = "list" | "detail";

export default function CaseStudiesModal({
    isOpen,
    onClose,
}: CaseStudiesModalProps) {
    const [currentView, setCurrentView] = useState<ViewType>("list");

    // Reset view when closing
    const handleClose = () => {
        setCurrentView("list");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 active">
                {/* Backdrop Blur */}
                <div
                    onClick={handleClose}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Content Container */}
                <div className="modal-content relative w-full max-w-4xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                    {/* VIEW 1: GRID LIST (Default) */}
                    {currentView === "list" && (
                        <div className="view-section flex flex-col h-full fade-in-view">
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                        <Icon icon="solar:folder-with-files-linear" width="18" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            Case Studies
                                        </h3>
                                        <p className="text-xs text-slate-500">
                                            Recent infrastructure deployments
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-pointer"
                                >
                                    <Icon icon="solar:close-circle-linear" width="20" />
                                </button>
                            </div>

                            {/* Body Scrollable */}
                            <div className="overflow-y-auto p-6 bg-slate-950 flex-1">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Case Study 1 (Interactive) */}
                                    <div className="group relative rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 overflow-hidden transition-all duration-300">
                                        <div className="h-40 w-full bg-gradient-to-br from-slate-800 to-slate-900 relative">
                                            <div
                                                className="absolute inset-0 opacity-30"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(#22d3ee 1px, transparent 1px)",
                                                    backgroundSize: "20px 20px",
                                                }}
                                            />
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-medium text-cyan-400 uppercase tracking-wide backdrop-blur-md">
                                                    Offshore Wind
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h4 className="text-lg font-medium text-white mb-2">
                                                Nordic Link HVDC
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                                Engineering converter stations for a 1.2GW offshore wind
                                                farm, ensuring stable power delivery.
                                            </p>
                                            <button
                                                onClick={() => setCurrentView("detail")}
                                                className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-cyan-400 transition-colors cursor-pointer"
                                            >
                                                View Analysis <Icon icon="solar:arrow-right-linear" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Case Study 2 */}
                                    <div className="group relative rounded-xl bg-white/2 border border-white/5 hover:border-cyan-500/30 overflow-hidden transition-all duration-300">
                                        <div className="h-40 w-full bg-linear-to-br from-slate-800 to-slate-900 relative">
                                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/40 via-transparent to-transparent" />
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-medium text-amber-400 uppercase tracking-wide backdrop-blur-md">
                                                    Solar Utility
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h4 className="text-lg font-medium text-white mb-2">
                                                Sahara Solar Array
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                                Implementing SCADA systems for a 500MW photovoltaic
                                                plant operating in extreme thermal conditions.
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-amber-400 transition-colors"
                                            >
                                                View Analysis <Icon icon="solar:arrow-right-linear" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Case Study 3 */}
                                    <div className="group relative rounded-xl bg-white/2 border border-white/5 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 md:col-span-2 flex flex-col md:flex-row">
                                        <div className="h-40 md:h-auto md:w-1/3 bg-linear-to-br from-slate-800 to-slate-900 relative">
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-size-[10px_10px]" />
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-2 py-1 rounded bg-black/50 border border-white/10 text-[10px] font-medium text-emerald-400 uppercase tracking-wide backdrop-blur-md">
                                                    Urban Grid
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 md:w-2/3">
                                            <h4 className="text-lg font-medium text-white mb-2">
                                                Metro Resiliency Upgrade
                                            </h4>
                                            <p className="text-sm text-slate-400 mb-4">
                                                Modernizing 40-year-old substation infrastructure within
                                                a dense urban environment with zero operational downtime.
                                                Included seismic retrofitting and automated fault
                                                detection.
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center gap-2 text-xs font-medium text-white group-hover:text-emerald-400 transition-colors"
                                            >
                                                View Analysis <Icon icon="solar:arrow-right-linear" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="p-4 border-t border-white/5 bg-white/2 flex justify-between items-center">
                                <span className="text-xs text-slate-500">
                                    Press 'ESC' to close
                                </span>
                                <button
                                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                                    onClick={handleClose}
                                >
                                    Close View
                                </button>
                            </div>
                        </div>
                    )}

                    {/* VIEW 2: DETAIL ANALYSIS */}
                    {currentView === "detail" && (
                        <div className="view-section flex flex-col h-full bg-slate-950 fade-in-view">
                            {/* Navigation Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setCurrentView("list")}
                                        className="group p-2 -ml-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
                                    >
                                        <Icon
                                            icon="solar:arrow-left-linear"
                                            width="20"
                                            className="group-hover:-translate-x-0.5 transition-transform"
                                        />
                                    </button>
                                    <div className="h-6 w-px bg-white/10" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">
                                            Nordic Link HVDC
                                        </h3>
                                        <p className="text-xs text-cyan-400">
                                            Analysis & Performance Data
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors cursor-pointer">
                                        <Icon icon="solar:file-download-linear" /> Report
                                    </button>
                                    <button
                                        onClick={handleClose}
                                        className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-pointer"
                                    >
                                        <Icon icon="solar:close-circle-linear" width="20" />
                                    </button>
                                </div>
                            </div>

                            {/* Detail Content */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                                    {/* Left Main Column */}
                                    <div className="lg:col-span-2 p-6 md:p-8 space-y-8">
                                        {/* Top Stats */}
                                        <div className="grid grid-cols-3 gap-4 pb-8 border-b border-white/5">
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                                                    Capacity
                                                </div>
                                                <div className="text-xl font-medium text-white">
                                                    1.2 <span className="text-sm text-slate-500">GW</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                                                    Voltage
                                                </div>
                                                <div className="text-xl font-medium text-white">
                                                    400 <span className="text-sm text-slate-500">kV</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                                                    Efficiency
                                                </div>
                                                <div className="text-xl font-medium text-emerald-400">
                                                    98.5 <span className="text-sm text-slate-500">%</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visualization */}
                                        <div className="bg-white/2 border border-white/5 rounded-xl p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h4 className="text-sm font-medium text-slate-200 flex items-center gap-2">
                                                    <Icon
                                                        icon="solar:chart-square-linear"
                                                        className="text-cyan-400"
                                                    />
                                                    Load Stability Analysis
                                                </h4>
                                                <div className="flex gap-2 text-[10px] font-medium text-slate-500">
                                                    <span className="px-2 py-0.5 rounded bg-white/5 text-white">
                                                        24H
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded hover:bg-white/5 cursor-pointer">
                                                        7D
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded hover:bg-white/5 cursor-pointer">
                                                        30D
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Simulated CSS Bar Chart */}
                                            <div className="h-48 flex items-end justify-between gap-1 sm:gap-2 px-2">
                                                {[
                                                    "40%",
                                                    "65%",
                                                    "55%",
                                                    "80%",
                                                    "60%",
                                                    "75%",
                                                    "90%",
                                                    "50%",
                                                ].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-full bg-cyan-500/20 rounded-t-sm relative group graph-bar"
                                                        style={{ "--h": h } as React.CSSProperties}
                                                    >
                                                        <div className="absolute inset-x-0 bottom-0 bg-cyan-500/40 h-[60%] group-hover:bg-cyan-400 transition-colors" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-3 text-[10px] text-slate-500 font-mono">
                                                <span>00:00</span>
                                                <span>06:00</span>
                                                <span>12:00</span>
                                                <span>18:00</span>
                                                <span>24:00</span>
                                            </div>
                                        </div>

                                        {/* Narrative */}
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-medium text-white">
                                                Engineering Challenge
                                            </h4>
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                The primary challenge was to minimize transmission losses
                                                over the 180km subsea cable while maintaining grid
                                                stability on the receiving end. The coastal interconnect
                                                point required specific harmonic filtering to prevent
                                                resonance with existing legacy infrastructure.
                                            </p>
                                            <h4 className="text-sm font-medium text-white pt-2">
                                                Our Solution
                                            </h4>
                                            <p className="text-sm text-slate-400 leading-relaxed">
                                                GENEC deployed a VSC-HVDC (Voltage Source Converter)
                                                topology. We integrated active filtering algorithms
                                                directly into the control layer, reducing harmonic
                                                distortion by 94% compared to standard thyristor-based
                                                systems.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Sidebar Column */}
                                    <div className="p-6 bg-slate-900/20 space-y-8">
                                        <div>
                                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                                                Technical Specs
                                            </h4>
                                            <ul className="space-y-3">
                                                <li className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-500 flex items-center gap-2">
                                                        <Icon
                                                            icon="solar:bolt-linear"
                                                            className="text-slate-600"
                                                        />{" "}
                                                        Current Type
                                                    </span>
                                                    <span className="text-slate-200 font-mono">
                                                        DC ±320kV
                                                    </span>
                                                </li>
                                                <li className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-500 flex items-center gap-2">
                                                        <Icon
                                                            icon="solar:link-linear"
                                                            className="text-slate-600"
                                                        />{" "}
                                                        Cable Length
                                                    </span>
                                                    <span className="text-slate-200 font-mono">
                                                        180 km
                                                    </span>
                                                </li>
                                                <li className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-500 flex items-center gap-2">
                                                        <Icon
                                                            icon="solar:server-square-linear"
                                                            className="text-slate-600"
                                                        />{" "}
                                                        Converter
                                                    </span>
                                                    <span className="text-slate-200 font-mono">
                                                        MMC VSC
                                                    </span>
                                                </li>
                                                <li className="flex items-center justify-between text-sm">
                                                    <span className="text-slate-500 flex items-center gap-2">
                                                        <Icon
                                                            icon="solar:shield-warning-linear"
                                                            className="text-slate-600"
                                                        />{" "}
                                                        Redundancy
                                                    </span>
                                                    <span className="text-slate-200 font-mono">N+1</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                                                Project Timeline
                                            </h4>
                                            <div className="space-y-4 relative pl-2">
                                                {/* Vertical Line */}
                                                <div className="absolute left-[5px] top-1 bottom-1 w-px bg-white/10" />

                                                <div className="relative pl-5">
                                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 border-2 border-[#0e0e11]" />
                                                    <p className="text-xs text-slate-300">Commissioning</p>
                                                    <p className="text-[10px] text-slate-500">Aug 2026</p>
                                                </div>
                                                <div className="relative pl-5">
                                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-[#0e0e11]" />
                                                    <p className="text-xs text-slate-300">Installation</p>
                                                    <p className="text-[10px] text-slate-500">
                                                        Jan 2025 - Jul 2026
                                                    </p>
                                                </div>
                                                <div className="relative pl-5">
                                                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-[#0e0e11]" />
                                                    <p className="text-xs text-slate-300">Design Phase</p>
                                                    <p className="text-[10px] text-slate-500">2024</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-white/5">
                                            <a
                                                href="#"
                                                className="block w-full py-2 text-center text-xs text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-lg transition-colors"
                                            >
                                                View Full Schematics
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
