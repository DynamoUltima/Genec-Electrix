"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import StartProjectModal from "@/components/modals/StartProjectModal";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CaseStudiesModal from "@/components/modals/CaseStudiesModal";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCaseStudiesModalOpen, setIsCaseStudiesModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero
          onStartProject={() => setIsProjectModalOpen(true)}
          onViewCaseStudies={() => setIsCaseStudiesModalOpen(true)}
        />

        <StatsSection />

        <ServicesSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Modals */}
      <StartProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
      <CaseStudiesModal
        isOpen={isCaseStudiesModalOpen}
        onClose={() => setIsCaseStudiesModalOpen(false)}
      />
    </>
  );
}
