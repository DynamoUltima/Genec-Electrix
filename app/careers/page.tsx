import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersHero from "@/components/careers/CareersHero";
import ValuesGrid from "@/components/careers/ValuesGrid";
import OpenRoles from "@/components/careers/OpenRoles";
import CareerCTA from "@/components/careers/CareerCTA";

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <main className="flex-grow bg-slate-950 min-h-screen">
                <CareersHero />
                <ValuesGrid />
                <OpenRoles />
                <CareerCTA />
            </main>
            <Footer />
        </>
    );
}
