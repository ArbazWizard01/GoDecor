import React from 'react';
import {
  CTAWrapper,
  Overlay,
  ContentContainer,
  CTATitle,
  CTADesc,
  StyledButton
} from './PackagesCTA.styles';

const PackagesCTA = () => {
  return (
    <CTAWrapper>
      <Overlay />
      <ContentContainer>
        <CTATitle>Ready to Bring It Together?</CTATitle>
        <CTADesc>
          Let's finalize the package that feels right for your home.
        </CTADesc>
        <StyledButton shape="round">
          Schedule Consultation
        </StyledButton>
      </ContentContainer>
    </CTAWrapper>
  );
};

export default PackagesCTA;