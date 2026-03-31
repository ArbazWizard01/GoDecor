import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './ParallaxBanner.styles';

const ParallaxBanner = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Premium Materials. Verified Partners.</Title>
        <Subtitle>
          Every surface finish, hardware element, and lighting fixture is selected through our quality-verified supplier network for durability and aesthetic consistency.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default ParallaxBanner;