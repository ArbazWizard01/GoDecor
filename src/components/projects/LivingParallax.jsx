import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './LivingParallax.styles';

const LivingParallax = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Where Comfort Comes Together.</Title>
        <Subtitle>
          Spaces designed for conversations, celebrations, and everyday pauses.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default LivingParallax;