import React from "react";
import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import StoryVisionSection from "../components/about/StoryVisionSection";
import WhatWeDo from "../components/about/WhatWeDo";
import GoDecorDifference from "../components/about/GoDecorDifference";
import AboutBanner from "../components/about/AboutBanner";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutHero />
      <StoryVisionSection />
      <WhatWeDo />
      <GoDecorDifference />
      <AboutBanner />
    </MainLayout>
  );
};

export default AboutPage;
