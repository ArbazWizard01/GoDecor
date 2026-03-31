import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServicesHero from '../components/services/ServicesHero';
import ServiceOverview from '../components/services/ServiceOverview';
import ServiceCollections from '../components/services/ServiceCollections';
import ParallaxBanner from '../components/services/ParallaxBanner';
import ImaginationToCompletion from '../components/services/ImaginationToCompletion';
import ServicesCTA from '../components/services/ServicesCTA';
import AddCharmSection from '../components/services/AddCharmSection';
import OurServices from '../components/services/OurServices';
import ExecutedProjects from '../components/services/ExecutedProjects';

const ServicesPage = () => {
  return (
    <MainLayout>
      <ServicesHero />
      <ServiceOverview />
      <ServiceCollections />
      <AddCharmSection />
      <OurServices />
      <ParallaxBanner />
      <ImaginationToCompletion/>
      <ExecutedProjects />
      <ServicesCTA />
    </MainLayout>
  );
};

export default ServicesPage;