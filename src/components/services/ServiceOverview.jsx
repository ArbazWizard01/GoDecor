import React from 'react';
import {
  SectionWrapper,
  BannerContainer,
  BannerContent,
  MainTitle,
  SubTextBold,
  SubText
} from './ServiceOverview.styles';

const ServiceOverview = () => {
  return (
    <SectionWrapper>
      <BannerContainer>
        <BannerContent>
          <MainTitle>Beautiful Spaces Begin With Clear Systems.</MainTitle>
          <SubTextBold>
            Design is emotional. Execution is operational.<br/>We believe both should work together.
          </SubTextBold>
          <SubText>
            That's why our services combine aesthetic planning with defined scopes, material alignment, and coordinated installation — so the experience feels calm, not chaotic.
          </SubText>
        </BannerContent>
      </BannerContainer>
    </SectionWrapper>
  );
};

export default ServiceOverview;