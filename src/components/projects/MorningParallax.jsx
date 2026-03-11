import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './MorningParallax.styles';

const MorningParallax = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Where Every Morning Begins.</Title>
        <Subtitle>
          The heart of the home, designed with intention.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default MorningParallax;