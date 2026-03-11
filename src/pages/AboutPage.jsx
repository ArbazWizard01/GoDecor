import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import ModernHomes from '../components/about/ModernHomes';
import ExecutionFramework from '../components/about/ExecutionFramework';
import AboutDifferences from '../components/about/AboutDifferences';
import AboutMaterialsBanner from '../components/about/AboutMaterialsBanner'; // Added
import UrbanLiving from '../components/about/UrbanLiving';                   // Added
import AboutCTA from '../components/about/AboutCTA';                         // Added

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHero />
      <AboutStats />
      <ModernHomes />
      <ExecutionFramework />
      <AboutDifferences />
      
      {/* The Final 3 Sections */}
      <AboutMaterialsBanner />
      <UrbanLiving />
      <AboutCTA />
      
    </MainLayout>
  );
};

export default AboutPage;