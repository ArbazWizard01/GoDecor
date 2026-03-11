import React from "react";
import MainLayout from "../layouts/MainLayout";

// Home-specific components
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import SignatureConcepts from "../components/home/SignatureConcepts";
import VideoSection from "../components/home/VideoSection";
import ModernKitchens from "../components/home/ModernKitchens";
import LivingSpaces from "../components/home/LivingSpaces";
import BedroomConcepts from "../components/home/BedroomConcepts";
import IntegratedSystems from "../components/home/IntegratedSystems";
import TimelineSection from "../components/home/TimelineSection";
import MaterialsSection from "../components/home/MaterialsSection";
import ProjectsGallery from "../components/home/ProjectsGallery";
import ClientExperience from "../components/home/ClientExperience";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

// Common components used across multiple pages
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SignatureConcepts />
      <VideoSection />
      <ModernKitchens />
      <LivingSpaces />
      <BedroomConcepts />
      <IntegratedSystems />
      <TimelineSection />
      <MaterialsSection />
      <ProjectsGallery />
      <ClientExperience />
      <FAQSection />
      <CTASection />
      <Footer />
    </MainLayout>
  );
};

export default HomePage;