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
} from './PackagesHero.styles';

const PackagesHero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <TextContent>
          <Subtitle>Packages</Subtitle>
          <Title>Find the One<br/>That Feels Right.</Title>
          <Description>
            Every home is different. Our packages are structured to match your space, 
            your lifestyle, and your pace — without confusion.
          </Description>
          <ExploreLink>
            Explore Packages <ArrowRightOutlined />
          </ExploreLink>
        </TextContent>

        <ImageWrapper>
          <HeroImage 
            src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1000&auto=format&fit=crop" 
            alt="Modern living room with blue sofa" 
          />
        </ImageWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default PackagesHero;