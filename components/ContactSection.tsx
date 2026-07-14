"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "sending") return;

        setStatus("sending");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type: "contact", email }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setEmail("");
        } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Ready to energize your project?
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                    Partner with GENEC for world-class electrical engineering solutions that
                    scale with your ambitions.
                </p>

                {status === "success" ? (
                    <div className="max-w-md mx-auto flex flex-col items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-6 py-8">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                            <Icon icon="solar:check-circle-linear" width="26" />
                        </div>
                        <p className="text-white font-medium">Thanks — we&apos;ll be in touch.</p>
                        <p className="text-sm text-slate-400">
                            Your message has reached our team at info@genecelectrix.com.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto space-y-4 text-left"
                    >
                        <div className="relative group">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=" "
                                className="peer w-full bg-[#0e121b] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-transparent focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-sm"
                            />
                            <label className="absolute left-4 top-3.5 text-slate-500 text-sm transition-all peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#02040a] peer-focus:px-1 pointer-events-none">
                                Email Address
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-[#06b6d4] hover:bg-[#0891b2] disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            {status === "sending" ? "Sending…" : "Get in Touch"}
                            <Icon
                                icon={
                                    status === "sending"
                                        ? "svg-spinners:180-ring"
                                        : "solar:plain-linear"
                                }
                            />
                        </button>
                        {status === "error" && (
                            <p className="text-center text-xs text-rose-400 mt-2">{error}</p>
                        )}
                        <p className="text-center text-xs text-slate-600 mt-4">
                            We respect your inbox. No spam, ever.
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
}
