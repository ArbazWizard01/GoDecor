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
} from './AboutHero.styles';

const AboutHero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <TextContent>
          <Subtitle>About GoDecor</Subtitle>
          <Title>Designed With Structure.<br/>Delivered With Precision.</Title>
          <Description>
            GoDecore wa buit to simplify residential design execution through 
            structured planning and coordinated implementation.
          </Description>
          <ExploreLink>
            View Our Proccess <ArrowRightOutlined />
          </ExploreLink>
        </TextContent>

        <ImageWrapper>
          <HeroImage 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" 
            alt="Modern interior design studio" 
          />
        </ImageWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default AboutHero;