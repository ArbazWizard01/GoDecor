import React from 'react';
import {
  HeroWrapper,
  HeroContainer,
  TextContent,
  Subtitle,
  Title,
  Description,
  ScrollText,
  ImageWrapper,
  HeroImage
} from './ProjectsHero.styles';

const ProjectsHero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <TextContent>
          <Subtitle>Our Projects</Subtitle>
          <Title>Real Homes.<br/>Real Transformations.</Title>
          <Description>
            Behind every finished space is a story of planning, precision, 
            and quiet execution.
          </Description>
          <ScrollText>
            Scroll to explore how each space comes to life.
          </ScrollText>
        </TextContent>

        <ImageWrapper>
          <HeroImage 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" 
            alt="Beautiful modern living room transformation" 
          />
        </ImageWrapper>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default ProjectsHero;