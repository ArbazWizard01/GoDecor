import React from 'react';
import {
  BannerWrapper,
  Overlay,
  ContentContainer,
  Title,
  Subtitle
} from './AboutMaterialsBanner.styles';

const AboutMaterialsBanner = () => {
  return (
    <BannerWrapper>
      <Overlay />
      <ContentContainer>
        <Title>Materials. Finishes. Precision.</Title>
        <Subtitle>
          Every surface, hinge, and lighting element is selected for durability, 
          function, and aesthetic clarity.
        </Subtitle>
      </ContentContainer>
    </BannerWrapper>
  );
};

export default AboutMaterialsBanner;