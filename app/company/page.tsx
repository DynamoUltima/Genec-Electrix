"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyStats from "@/components/company/CompanyStats";
import ManifestoSection from "@/components/company/ManifestoSection";
import ValuesSection from "@/components/company/ValuesSection";
import LeadershipTeam from "@/components/company/LeadershipTeam";
import LocationsCTA from "@/components/company/LocationsCTA";

export default function CompanyPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow bg-slate-950">
                <CompanyHero />
                <CompanyStats />
                <ManifestoSection />
                <ValuesSection />
                <LeadershipTeam />
                <LocationsCTA />
            </main>
            <Footer />
        </>
    );
}
