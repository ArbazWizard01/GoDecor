import React from 'react';
import {
  HeroWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './ContactHero.styles';

const ContactHero = () => {
  return (
    <HeroWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Schedule Your Consultation</Title>
        <Subtitle>
          Tell us about your space. We'll help you plan the right system, 
          align your budget, and execute with precision.
        </Subtitle>
      </ContentContainer>
    </HeroWrapper>
  );
};

export default ContactHero;