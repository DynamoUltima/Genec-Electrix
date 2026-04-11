import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getFeaturedProducts } from "@/lib/inventory";
import Image from "next/image";

export interface SupplyProduct {
    id: string;
    title: string;
    sku: string;
    price: number;
    icon: string;
    description: string;
    tagStatus: string;
    stock: number;
    imageUrl: string | null;
}

interface IndustrialSupplyProps {
    onOpenProduct: (product: SupplyProduct) => void;
    onOpenCatalog: () => void;
}

export default function IndustrialSupply({ onOpenProduct, onOpenCatalog }: IndustrialSupplyProps) {
    const [products, setProducts] = useState<SupplyProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getFeaturedProducts(4);
            setProducts(data);
            setLoading(false);
        }
        load();
    }, []);
    return (
        <section id="products" className="py-24 border-t border-white/5 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Industrial Supply</h2>
                        <p className="text-slate-400 max-w-lg">
                            Certified electrical components directly from our manufacturing partners.
                        </p>
                    </div>
                </div>

                                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="h-[320px] bg-white/[0.02] border border-white/5 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center py-12 p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                        <p className="text-slate-500">No products available in the catalog yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => onOpenProduct(product)}
                                className="product-card cursor-pointer group relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
                            >
                                <div className="h-48 bg-slate-900/50 flex flex-col items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 transition-transform duration-500 group-hover:scale-105" />
                                    {product.imageUrl ? (
                                        <div className="relative z-10 w-full h-full p-4">
                                            <div className="relative w-full h-full">
                                              <Image 
                                                  src={product.imageUrl} 
                                                  fill 
                                                  className="object-contain transition-transform duration-500 group-hover:scale-110" 
                                                  alt={product.title} 
                                              />
                                            </div>
                                        </div>
                                    ) : (
                                        <Icon
                                            icon={product.icon}
                                            width="64"
                                            className="relative z-10 text-slate-600 group-hover:text-cyan-400 transition-colors duration-300"
                                        />
                                    )}
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="mb-auto">
                                        <h3 className="text-sm font-medium text-white mb-1">{product.title}</h3>
                                        <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="text-sm font-medium text-white">${product.price.toLocaleString()}</span>
                                        <span className="text-xs font-medium text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            View <Icon icon="solar:arrow-right-linear" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <button
                        onClick={onOpenCatalog}
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                        Browse Full Catalog <Icon icon="solar:arrow-right-linear" />
                    </button>
                </div>
            </div>
        </section>
    );
}
