import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="#" className="mb-6 inline-block">
                            <Image
                                src="/genec-logo.jpg"
                                alt="GENEC Electrix"
                                width={640}
                                height={360}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-slate-500 max-w-xs mb-6">
                            A Ghanaian-owned multidisciplinary engineering and consultancy
                            firm delivering power, MEP, and renewable energy solutions from
                            Accra.
                        </p>
                        <div className="flex gap-4 text-slate-400">
                            <Link href="#" className="hover:text-white transition-colors">
                                <Icon
                                    icon="logos:twitter"
                                    width="18"
                                    style={{ filter: "grayscale(100%)" }}
                                />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Icon
                                    icon="logos:linkedin-icon"
                                    width="18"
                                    style={{ filter: "grayscale(100%)" }}
                                />
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                <Icon
                                    icon="logos:github-icon"
                                    width="18"
                                    style={{ filter: "grayscale(100%)" }}
                                />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-medium mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                                    Power Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                                    Mechanical &amp; MEP
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                                    Renewable Energy
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                                    Construction Supervision
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-medium mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="/company" className="hover:text-cyan-400 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className="text-cyan-400 transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-medium mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cyan-400 transition-colors">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-600">
                        © 2026 GENEC Electrix Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        System Operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
