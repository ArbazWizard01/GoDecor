import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ServicesHero from '../components/services/ServicesHero';
import ServiceOverview from '../components/services/ServiceOverview';
import ServiceCollections from '../components/services/ServiceCollections';
import ParallaxBanner from '../components/services/ParallaxBanner';
import WhatMakesUsDifferent from '../components/services/WhatMakesUsDifferent';
import ServiceQuality from '../components/services/ServiceQuality';
import ServicesCTA from '../components/services/ServicesCTA';

const ServicesPage = () => {
  return (
    <MainLayout>
      <ServicesHero />
      <ServiceOverview />
      <ServiceCollections />
      <ParallaxBanner />
      <WhatMakesUsDifferent />
      <ServiceQuality />
      <ServicesCTA />
    </MainLayout>
  );
};

export default ServicesPage;