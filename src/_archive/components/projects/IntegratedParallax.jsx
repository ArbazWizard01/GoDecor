import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './IntegratedParallax.styles';

const IntegratedParallax = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>A Home That Flows, Room by Room.</Title>
        <Subtitle>
          When every space aligns, the entire home feels connected.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default IntegratedParallax;