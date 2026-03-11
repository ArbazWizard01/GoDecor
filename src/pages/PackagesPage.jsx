import React from 'react';
import MainLayout from '../layouts/MainLayout';

// Packages-specific components
import PackagesHero from '../components/packages/PackagesHero';
import PackagesCTA from '../components/packages/PackagesCTA'; // Added!

// Reused Homepage Sections
import SignatureConcepts from '../components/home/SignatureConcepts';
import ModernKitchens from '../components/home/ModernKitchens';
import LivingSpaces from '../components/home/LivingSpaces';
import BedroomConcepts from '../components/home/BedroomConcepts';
import IntegratedSystems from '../components/home/IntegratedSystems';

const PackagesPage = () => {
  return (
    <MainLayout>
      <PackagesHero />
      
      <SignatureConcepts />
      <ModernKitchens />
      <LivingSpaces />
      <BedroomConcepts />
      <IntegratedSystems />

      {/* The new final CTA banner! */}
      <PackagesCTA />
      
    </MainLayout>
  );
};

export default PackagesPage;