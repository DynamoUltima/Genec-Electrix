"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import type { SupplyProduct } from "@/components/IndustrialSupply";

interface ProductDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: SupplyProduct | null;
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);

    // Reset state on open
    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
            setShowFeedback(false);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    const basePrice = product.price || 0;
    const totalPrice = (basePrice * quantity).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const adjustQuantity = (delta: number) => {
        setQuantity((prev) => {
            let next = prev + delta;
            if (next < 1) next = 1;
            if (next > 99) next = 99;
            return next;
        });
    };

    const handleAddToQuote = () => {
        setShowFeedback(true);
        // Simulate adding to quote
        setTimeout(() => setShowFeedback(false), 3000);
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer transition-opacity"
            />

            <div className="relative w-full max-w-4xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                {/* Left: Visual */}
                <div className="w-full md:w-2/5 bg-slate-900/50 relative flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50" />
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34,211,238,0.05) 10px, rgba(34,211,238,0.05) 11px)",
                        }}
                    />

                    <div className="relative z-10 w-full aspect-square bg-slate-800/50 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl">
                        <Icon icon={product.icon} width="80" className="text-slate-400" />
                    </div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                        <button className="w-12 h-12 rounded-lg border border-cyan-500/50 bg-slate-800/80 flex items-center justify-center text-cyan-400">
                            <Icon icon="solar:cube-linear" width="20" />
                        </button>
                        <button className="w-12 h-12 rounded-lg border border-white/10 bg-slate-800/80 flex items-center justify-center text-slate-400 hover:border-white/30 transition-colors">
                            <Icon icon="solar:ruler-angular-linear" width="20" />
                        </button>
                        <button className="w-12 h-12 rounded-lg border border-white/10 bg-slate-800/80 flex items-center justify-center text-slate-400 hover:border-white/30 transition-colors">
                            <Icon icon="solar:file-text-linear" width="20" />
                        </button>
                    </div>
                </div>

                {/* Right: Details & Purchase */}
                <div className="w-full md:w-3/5 p-6 md:p-10 bg-[#0e0e11] overflow-y-auto flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-medium text-cyan-400 uppercase tracking-wide">
                                    Industrial Grade
                                </span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400 uppercase tracking-wide">
                                    {product.tagStatus}
                                </span>
                            </div>
                            <h2 className="text-2xl font-medium text-white tracking-tight mb-1">
                                {product.title}
                            </h2>
                            <div className="text-xs text-slate-500 font-mono">SKU: {product.sku}</div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                        >
                            <Icon icon="solar:close-circle-linear" width="24" />
                        </button>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 flex-1">
                        <p className="text-sm text-slate-400 leading-relaxed">
                            High-performance control unit designed for demanding industrial
                            environments. Features redundant power inputs, extended temperature range
                            operation, and seamless integration with major SCADA protocols.
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                                    Input Voltage
                                </div>
                                <div className="text-sm font-medium text-white">24V DC</div>
                            </div>
                            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                                    Protection
                                </div>
                                <div className="text-sm font-medium text-white">IP20 / NEMA 1</div>
                            </div>
                            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                                    Communication
                                </div>
                                <div className="text-sm font-medium text-white">Ethernet / Modbus</div>
                            </div>
                            <div className="p-3 rounded-lg border border-white/5 bg-white/[0.02]">
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-1">
                                    Warranty
                                </div>
                                <div className="text-sm font-medium text-white">3 Years</div>
                            </div>
                        </div>
                    </div>

                    {/* Purchase Footer */}
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex items-end justify-between mb-4">
                            <div>
                                <div className="text-xs text-slate-500 mb-1">Unit Price</div>
                                <div className="text-2xl font-medium text-white">${totalPrice}</div>
                            </div>
                            {/* Quantity */}
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-500">Qty:</span>
                                <div className="flex items-center bg-slate-900 border border-white/10 rounded-lg">
                                    <button
                                        onClick={() => adjustQuantity(-1)}
                                        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-l-lg transition-colors"
                                    >
                                        <Icon icon="solar:minus-linear" />
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        readOnly
                                        className="w-10 bg-transparent text-center text-sm text-white focus:outline-none"
                                        style={{ WebkitAppearance: "none", margin: 0 }}
                                    />
                                    <button
                                        onClick={() => adjustQuantity(1)}
                                        className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-r-lg transition-colors"
                                    >
                                        <Icon icon="solar:add-linear" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={handleAddToQuote}
                                className="flex-1 h-12 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-10">
                                    Add to Quote <Icon icon="solar:cart-plus-linear" width="18" />
                                </span>
                                <span className="absolute z-10 flex items-center gap-2 translate-y-10 transition-transform duration-300 group-hover:translate-y-0">
                                    Add Now <Icon icon="solar:arrow-right-linear" width="18" />
                                </span>
                            </button>
                            <button className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                                <Icon icon="solar:heart-linear" width="20" />
                            </button>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                showFeedback ? "h-8 opacity-100" : "h-0 opacity-0"
                            }`}
                        >
                            <div className="flex items-center gap-2 text-xs text-green-400 mt-3 justify-center">
                                <Icon icon="solar:check-circle-linear" /> Item added to your quote
                                basket.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
