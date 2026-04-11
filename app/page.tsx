"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import IndustrialSupply, { type SupplyProduct } from "@/components/IndustrialSupply";
import StartProjectModal from "@/components/modals/StartProjectModal";
import CaseStudiesModal from "@/components/modals/CaseStudiesModal";
import ProductDetailModal from "@/components/modals/ProductDetailModal";
import CatalogModal from "@/components/modals/CatalogModal";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCaseStudiesModalOpen, setIsCaseStudiesModalOpen] = useState(false);
  
  // Industrial Supply State
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SupplyProduct | null>(null);

  // Helper handling opening a product from anywhere (home page or catalog)
  const handleOpenProduct = (product: SupplyProduct) => {
    setSelectedProduct(product);
  };

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
        
        {/* NEW Industrial Supply Section */}
        <IndustrialSupply 
            onOpenProduct={handleOpenProduct} 
            onOpenCatalog={() => setIsCatalogOpen(true)} 
        />

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
      <CatalogModal 
        isOpen={isCatalogOpen} 
        onClose={() => setIsCatalogOpen(false)} 
        onOpenProduct={handleOpenProduct}
      />
      <ProductDetailModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </>
  );
}
