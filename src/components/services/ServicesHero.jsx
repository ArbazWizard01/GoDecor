import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  HeroWrapper,
  HeroContainer,
  TextContent,
  Subtitle,
  Title,
  Description,
  ExploreLink,
  ImageWrapper,
  HeroImage
} from './ServicesHero.styles';

const ServicesHero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <TextContent>
          <Subtitle>Our Services</Subtitle>
          <Title>Where Design Meets Structure.</Title>
          <Description>
            GoDecor brings together thoughtful interior design, defined execution systems, 
            and scalable residential frameworks, built for modern urban living.
          </Description>
          <ExploreLink>
            Explore Packages <ArrowRightOutlined />
          </ExploreLink>
        </TextContent>

        <ImageWrapper>
          <HeroImage 
            src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1000&auto=format&fit=crop" 
            alt="Modern interior design meeting structure" 
          />
        </ImageWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default ServicesHero;