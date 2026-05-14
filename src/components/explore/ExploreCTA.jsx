import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  CTAContainer,
  CTABanner,
  CTAOverlay,
  CTAContent,
  CTATitle,
  CTAButton
} from "./ExploreCTA.styles";

const ExploreCTA = () => {
  return (
    <CTAContainer>
      <CTABanner $bgImage="explore-cta.jpg">
        <CTAOverlay />
        <CTAContent>
          <CTATitle>Interior Experiences Crafted Around You</CTATitle>
          <CTAButton>
            Book Free Consultation <FiArrowRight className="arrow-icon" />
          </CTAButton>
        </CTAContent>
      </CTABanner>
    </CTAContainer>
  );
};

export default ExploreCTA;