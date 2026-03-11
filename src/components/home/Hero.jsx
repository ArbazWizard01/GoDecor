import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeroWrapper,
  GradientMask,
  ContentContainer,
  TopTagline,
  HeroTitle,
  HeroSubtitle,
  ButtonsWrapper,
  PrimaryButton,
  SecondaryButton,
  StatsContainer,
  StatBox,
} from "./Hero.styles";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <GradientMask />

      <ContentContainer>
        <TopTagline>India's Trusted Home Decor Platform</TopTagline>

        <HeroTitle>
          Transform Your
          <br /> Space. <br />
          <span>Elevate</span> Your <br />
          Everyday Living.
        </HeroTitle>

        <HeroSubtitle>
          Premium, end-to-end home decor solutions — thoughtfully designed and
          flawlessly executed for every style and every budget.
        </HeroSubtitle>

        <ButtonsWrapper>
          <PrimaryButton onClick={() => navigate("/packages")}>
            Explore Packages
          </PrimaryButton>

          <SecondaryButton onClick={() => navigate("/about")}>
            Learn More
          </SecondaryButton>
        </ButtonsWrapper>
      </ContentContainer>

      <StatsContainer>
        <StatBox>
          <h2>1000+</h2>
          <p>Homes Transformed</p>
        </StatBox>
        <StatBox>
          <h2>150+</h2>
          <p>Verified Experts</p>
        </StatBox>
        <StatBox>
          <h2>4.8★</h2>
          <p>Client Satisfaction</p>
        </StatBox>
      </StatsContainer>
    </HeroWrapper>
  );
};

export default Hero;
