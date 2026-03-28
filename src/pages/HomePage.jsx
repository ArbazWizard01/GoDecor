import React from "react";
import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import SignatureConcepts from "../components/home/SignatureConcepts";
import VideoSection from "../components/home/VideoSection";
import ModernKitchens from "../components/home/ModernKitchens";
import LivingSpaces from "../components/home/LivingSpaces";
import BedroomConcepts from "../components/home/BedroomConcepts";
import IntegratedSystems from "../components/home/IntegratedSystems";
import ClientExperience from "../components/home/ClientExperience";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import BannerSection from "../components/home/BannerSection";
import CitiesSection from "../components/home/CitiesSection";
import PoojaSection from "../components/home/PoojaSection";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BannerSection />
      <CitiesSection />
      <SignatureConcepts />
      <VideoSection />
      <ModernKitchens />
      <LivingSpaces />
      <BedroomConcepts />
      <IntegratedSystems />
      <ClientExperience />
      <PoojaSection />
      <FAQSection />
      <CTASection />
    </MainLayout>
  );
};

export default HomePage;
