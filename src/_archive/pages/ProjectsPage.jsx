import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ProjectsHero from '../components/projects/ProjectsHero';
import MorningParallax from '../components/projects/MorningParallax';
import KitchenProjects from '../components/projects/KitchenProjects';
import LivingParallax from '../components/projects/LivingParallax'; 
import LivingProjects from '../components/projects/LivingProjects'; 
import BedroomParallax from '../components/projects/BedroomParallax'; 
import BedroomProjects from '../components/projects/BedroomProjects'; 
import IntegratedParallax from '../components/projects/IntegratedParallax';
import IntegratedProjects from '../components/projects/IntegratedProjects';
import ProjectsCTA from '../components/projects/ProjectsCTA';             

const ProjectsPage = () => {
  return (
    <MainLayout>
      <ProjectsHero />
      <MorningParallax />
      <KitchenProjects />
      <LivingParallax /> 
      <LivingProjects /> 
      <BedroomParallax /> 
      <BedroomProjects /> 
      <IntegratedParallax />
      <IntegratedProjects />
      <ProjectsCTA />
    </MainLayout>
  );
};

export default ProjectsPage;