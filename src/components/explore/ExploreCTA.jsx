import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <CTAContainer>
      <CTABanner $bgImage="explore-cta.jpg">
        <CTAOverlay />
        <CTAContent>
          <CTATitle>Interior Experiences Crafted Around You</CTATitle>
          <CTAButton onClick={() => navigate("/contact")}>
            Book Free Consultation <FiArrowRight className="arrow-icon" />
          </CTAButton>
        </CTAContent>
      </CTABanner>
    </CTAContainer>
  );
};

export default ExploreCTA;