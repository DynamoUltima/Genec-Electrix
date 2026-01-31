"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import DetailedServicesGrid from "@/components/services/DetailedServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow bg-slate-950">
                <ServicesHero />
                <DetailedServicesGrid />
                <ProcessSection />
                <ServicesCTA />
            </main>
            <Footer />
        </>
    );
}
