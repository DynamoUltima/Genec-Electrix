import { Icon } from "@iconify/react";
import React from "react";

export default function ValuesGrid() {
    return (
        <section className="py-24 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-2xl font-medium text-white tracking-tight mb-2">
                        Why GENEC?
                    </h2>
                    <p className="text-slate-400 max-w-xl">
                        We believe in providing an environment where your best work can happen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Value 1 */}
                    <div className="p-6 rounded-xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
                        <Icon
                            icon="lucide:monitor-smartphone"
                            className="text-cyan-400 mb-4"
                            width="24"
                        />
                        <h3 className="text-white font-medium mb-2">Remote-First Hybrid</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Work from home or our hubs. We value output over hours in a chair.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="p-6 rounded-xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
                        <Icon
                            icon="lucide:zap"
                            className="text-yellow-400 mb-4"
                            width="24"
                        />
                        <h3 className="text-white font-medium mb-2">High Impact</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Your code and designs directly affect critical infrastructure
                            stability.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="p-6 rounded-xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
                        <Icon
                            icon="lucide:heart-handshake"
                            className="text-rose-400 mb-4"
                            width="24"
                        />
                        <h3 className="text-white font-medium mb-2">
                            Comprehensive Health
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Top-tier medical, dental, and vision coverage for you and
                            dependents.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div className="p-6 rounded-xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
                        <Icon
                            icon="lucide:trending-up"
                            className="text-emerald-400 mb-4"
                            width="24"
                        />
                        <h3 className="text-white font-medium mb-2">Equity & Growth</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Competitive salary, meaningful equity, and a learning stipend.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
