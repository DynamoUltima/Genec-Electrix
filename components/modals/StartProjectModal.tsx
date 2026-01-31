import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface StartProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function StartProjectModal({
    isOpen,
    onClose,
}: StartProjectModalProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleNext = () => {
        if (currentStep <= totalSteps) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 active">
            <div
                onClick={handleReset}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />

            <div className="modal-content relative w-full max-w-2xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Progress Header */}
                {currentStep <= totalSteps && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 text-xs font-medium">
                                <span className="w-6 h-6 rounded-full bg-cyan-500 text-black flex items-center justify-center transition-colors">
                                    {currentStep}
                                </span>
                                <span className="text-slate-600">/</span>
                                <span className="text-slate-400">{totalSteps}</span>
                            </div>
                            <span className="text-sm font-medium text-white ml-2">
                                {currentStep === 1
                                    ? "Project Scope"
                                    : currentStep === 2
                                        ? "Details"
                                        : "Contact Info"}
                            </span>
                        </div>
                        <button
                            onClick={handleReset}
                            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-pointer"
                        >
                            <Icon icon="solar:close-circle-linear" width="20" />
                        </button>
                    </div>
                )}

                {/* Wizard Content */}
                <div className="p-6 md:p-8 overflow-y-auto">
                    <form onSubmit={(e) => e.preventDefault()}>
                        {/* Step 1: Scope Selection */}
                        {currentStep === 1 && (
                            <div className="view-section fade-in-view">
                                <h3 className="text-xl font-medium text-white mb-2">
                                    What are you building?
                                </h3>
                                <p className="text-sm text-slate-400 mb-6">
                                    Select the primary category for your infrastructure
                                    requirements.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            id: "grid",
                                            icon: "solar:graph-up-linear",
                                            title: "Grid Analysis",
                                            desc: "Load flow, stability, audits",
                                        },
                                        {
                                            id: "hvdc",
                                            icon: "solar:bolt-circle-linear",
                                            title: "High Voltage",
                                            desc: "Substations, transmission",
                                        },
                                        {
                                            id: "renewable",
                                            icon: "solar:sun-2-linear",
                                            title: "Renewable Integration",
                                            desc: "Solar, Wind, BESS",
                                        },
                                        {
                                            id: "automation",
                                            icon: "solar:server-square-linear",
                                            title: "Automation & SCADA",
                                            desc: "Control systems, monitoring",
                                        },
                                    ].map((option) => (
                                        <label key={option.id} className="cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="project_type"
                                                value={option.id}
                                                className="peer sr-only project-radio"
                                                defaultChecked={option.id === "grid"}
                                            />
                                            <div className="p-4 rounded-xl border border-white/10 bg-white/2 hover:bg-white/4 transition-all group-hover:border-white/20 h-full flex items-start gap-4 peer-checked:border-cyan-400 peer-checked:bg-cyan-500/5">
                                                <Icon
                                                    icon={option.icon}
                                                    width="24"
                                                    className="text-slate-400 mt-1 transition-colors peer-checked:text-cyan-400 group-hover:text-cyan-400"
                                                />
                                                <div>
                                                    <div className="text-sm font-medium text-white">
                                                        {option.title}
                                                    </div>
                                                    <div className="text-xs text-slate-500 mt-1">
                                                        {option.desc}
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Details */}
                        {currentStep === 2 && (
                            <div className="view-section fade-in-view">
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Project Details
                                </h3>
                                <p className="text-sm text-slate-400 mb-6">
                                    Help us understand the scale and timeline.
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Project Location
                                        </label>
                                        <div className="relative">
                                            <Icon
                                                icon="solar:map-point-linear"
                                                className="absolute left-3 top-3 text-slate-500"
                                            />
                                            <input
                                                type="text"
                                                placeholder="e.g. Oslo, Norway"
                                                className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Estimated Budget (USD)
                                        </label>
                                        <div className="relative">
                                            <Icon
                                                icon="solar:dollar-linear"
                                                className="absolute left-3 top-3 text-slate-500"
                                            />
                                            <select className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer">
                                                <option>$50k - $200k</option>
                                                <option>$200k - $1M</option>
                                                <option>$1M - $10M</option>
                                                <option>$10M+</option>
                                            </select>
                                            <Icon
                                                icon="solar:alt-arrow-down-linear"
                                                className="absolute right-3 top-3 text-slate-500 pointer-events-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Brief Description
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Describe the key technical challenges..."
                                            className="w-full bg-slate-950 border border-white/10 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Contact Info */}
                        {currentStep === 3 && (
                            <div className="view-section fade-in-view">
                                <h3 className="text-xl font-medium text-white mb-2">
                                    Final Step
                                </h3>
                                <p className="text-sm text-slate-400 mb-6">
                                    Where should we send the technical proposal?
                                </p>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 px-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Work Email
                                        </label>
                                        <div className="relative">
                                            <Icon
                                                icon="solar:letter-linear"
                                                className="absolute left-3 top-3 text-slate-500"
                                            />
                                            <input
                                                type="email"
                                                placeholder="name@company.com"
                                                className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                                            Company Name
                                        </label>
                                        <div className="relative">
                                            <Icon
                                                icon="solar:buildings-2-linear"
                                                className="absolute left-3 top-3 text-slate-500"
                                            />
                                            <input
                                                type="text"
                                                className="w-full bg-slate-950 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Success */}
                        {currentStep > totalSteps && (
                            <div className="view-section fade-in-view text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-6 text-cyan-400 border border-cyan-500/20">
                                    <Icon icon="solar:check-circle-linear" width="32" />
                                </div>
                                <h3 className="text-2xl font-medium text-white mb-2">
                                    Request Received
                                </h3>
                                <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                                    Our engineering team will review your specifications and contact
                                    you within 24 hours.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                                >
                                    Return to Homepage
                                </button>
                            </div>
                        )}
                    </form>
                </div>

                {/* Footer Actions */}
                {currentStep <= totalSteps && (
                    <div className="p-6 border-t border-white/5 bg-slate-900/50 flex justify-between items-center backdrop-blur-md">
                        <button
                            type="button"
                            onClick={handleBack}
                            className={`text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer ${currentStep === 1 ? "invisible" : ""
                                }`}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
                        >
                            {currentStep === totalSteps ? "Submit Request" : "Next Step"}
                            <Icon
                                icon={
                                    currentStep === totalSteps
                                        ? "solar:plain-linear"
                                        : "solar:arrow-right-linear"
                                }
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
