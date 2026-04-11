import { useEffect, useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import { getAllProducts } from "@/lib/inventory";
import type { SupplyProduct } from "@/components/IndustrialSupply";
import Image from "next/image";

interface CatalogModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenProduct: (product: SupplyProduct) => void;
}

export default function CatalogModal({ isOpen, onClose, onOpenProduct }: CatalogModalProps) {
    const [products, setProducts] = useState<SupplyProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (isOpen) {
            async function load() {
                setLoading(true);
                const data = await getAllProducts();
                setProducts(data);
                setLoading(false);
            }
            load();
        }
    }, [isOpen]);

    const filteredProducts = useMemo(() => {
        return products.filter(p => 
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [products, searchQuery]);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            // Check if another modal is open, to not overlay the overflow
            const hasOtherModals = document.querySelectorAll(".fixed.inset-0.z-\\[60\\]").length > 0;
            if (!hasOtherModals) {
                document.body.style.overflow = "auto";
            }
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer transition-opacity"
            />
            <div className="relative w-full max-w-7xl h-[90vh] bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/50 backdrop-blur-md">
                    <div className="flex items-center gap-4 w-full max-w-lg">
                        <span className="text-sm font-semibold text-white whitespace-nowrap hidden sm:block">
                            Catalog
                        </span>
                        {/* Search */}
                        <div className="relative w-full">
                            <Icon
                                icon="solar:magnifer-linear"
                                className="absolute left-3 top-2.5 text-slate-500"
                            />
                            <input
                                type="text"
                                placeholder="Search components..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-black/20 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-600"
                            />
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-500 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                    >
                        <Icon icon="solar:close-circle-linear" width="20" />
                    </button>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Product Grid */}
                    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto">
                        {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <div key={n} className="h-64 bg-white/[0.02] border border-white/5 rounded-xl animate-pulse" />
                                ))}
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <Icon icon="solar:magnifer-zoom-out-linear" width="48" className="text-slate-700 mb-4" />
                                <p className="text-slate-400">No products match your search.</p>
                                <button 
                                    onClick={() => setSearchQuery("")}
                                    className="mt-4 text-cyan-400 text-sm hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                                {filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        onClick={() => onOpenProduct(product)}
                                        className="cursor-pointer group bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
                                    >
                                        <div className="h-40 bg-slate-900 relative flex items-center justify-center overflow-hidden p-4">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 transition-transform duration-500 group-hover:scale-105" />
                                            {product.imageUrl ? (
                                                <div className="relative w-full h-full">
                                                    <Image 
                                                        src={product.imageUrl} 
                                                        fill 
                                                        className="object-contain transition-transform duration-500 group-hover:scale-110" 
                                                        alt={product.title} 
                                                    />
                                                </div>
                                            ) : (
                                                <Icon
                                                    icon={product.icon}
                                                    width="48"
                                                    className="relative z-10 text-slate-500 group-hover:text-cyan-400 transition-colors"
                                                />
                                            )}
                                            <span className={`absolute top-2 right-2 px-1.5 py-0.5 rounded border text-[9px] font-medium uppercase tracking-wide ${
                                                product.stock > 0 
                                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                                                : 'bg-red-500/10 border-red-500/20 text-red-400'
                                            }`}>
                                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h4 className="text-sm font-medium text-white line-clamp-1">
                                                {product.title}
                                            </h4>
                                            <div className="text-[10px] text-slate-500 font-mono mb-3">
                                                SKU: {product.sku}
                                            </div>
                                            <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                                                <span className="text-sm font-medium text-white">
                                                    ${product.price.toLocaleString()}
                                                </span>
                                                <span className="text-xs text-cyan-400 group-hover:underline">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t border-white/5 bg-slate-900/50 backdrop-blur-md p-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-400">Total Products:</span>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{filteredProducts.length} items</span>
                        </div>
                    </div>
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                        Request Quote <Icon icon="solar:arrow-right-linear" />
                    </button>
                </div>
            </div>
        </div>
    );
}
