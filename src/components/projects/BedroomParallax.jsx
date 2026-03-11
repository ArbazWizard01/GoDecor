import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './BedroomParallax.styles';

const BedroomParallax = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Where the Day Slows Down.</Title>
        <Subtitle>
          Personal spaces shaped for rest and renewal.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default BedroomParallax;