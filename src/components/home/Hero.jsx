import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  StarOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  HeroSectionWrapper,
  ImageCard,
  HeroContent,
  HeroTitle,
  SubtitleBox,
  HeroSubtitle,
  HeroControls,
  ArrowGroup,
  ArrowBtn,
  PrimaryBtn,
  StatsRow,
  StatItem,
  StatIcon,
  StatText,
} from "./Hero.styles";

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: (
      <>
        Belong
        <br />
        Beautifully
      </>
    ),
    subtitle:
      "Your home should feel like a place you truly belong. At GoDecor, we design spaces that bring comfort, elegance, and personality together—crafted thoughtfully for the way you live every day.",
  },
  {
    image:
      "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920", // Kitchen image
    title: (
      <>
        Crafted
        <br />
        Comfort
      </>
    ),
    subtitle:
      "From morning coffees to late-night chats, every detail is designed for connection and ease. At GoDecor, we build functional kitchens where efficiency meets impeccable, personalized style.",
  },
  {
    image:
      "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1920", // Bedroom image
    title: (
      <>
        Quiet
        <br />
        Elegance
      </>
    ),
    subtitle:
      "Find your retreat in a space tailored for rest. At GoDecor, we balance soft textures, intentional lighting, and seamless storage to create bedrooms that redefine relaxation and personal sanctuary.",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <HeroSectionWrapper>
      <ImageCard $bgImage={heroSlides[currentIndex].image}>
        <HeroContent>
          <HeroTitle>{heroSlides[currentIndex].title}</HeroTitle>

          <SubtitleBox>
            <HeroSubtitle>{heroSlides[currentIndex].subtitle}</HeroSubtitle>
          </SubtitleBox>
        </HeroContent>

        <HeroControls>
          <ArrowGroup>
            <ArrowBtn onClick={prevSlide}>
              <ArrowLeftOutlined />
            </ArrowBtn>
            <ArrowBtn onClick={nextSlide}>
              <ArrowRightOutlined />
            </ArrowBtn>
          </ArrowGroup>
          <PrimaryBtn onClick={() => navigate("/projects")}>
            Start Your Design Journey
          </PrimaryBtn>
        </HeroControls>
      </ImageCard>

      <StatsRow>
        <StatItem>
          <StatIcon>
            <HomeOutlined />
          </StatIcon>
          <StatText>50+ Homes Transformed</StatText>
        </StatItem>
        <StatItem>
          <StatIcon>
            <StarOutlined />
          </StatIcon>
          <StatText>4.8★ Client Satisfaction</StatText>
        </StatItem>
        <StatItem>
          <StatIcon>
            <SafetyCertificateOutlined />
          </StatIcon>
          <StatText>Verified Decor Experts</StatText>
        </StatItem>
        <StatItem>
          <StatIcon>
            <ClockCircleOutlined />
          </StatIcon>
          <StatText>On-Time Project Delivery</StatText>
        </StatItem>
      </StatsRow>
    </HeroSectionWrapper>
  );
};

export default Hero;
