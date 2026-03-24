import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CTAWrapper,
  Overlay,
  ContentContainer,
  CTATitle,
  CTADesc,
  StyledButton
} from './PackagesCTA.styles';

const PackagesCTA = () => {
  const navigate = useNavigate()
  return (
    <CTAWrapper>
      <Overlay />
      <ContentContainer>
        <CTATitle>Ready to Bring It Together?</CTATitle>
        <CTADesc>
          Let's finalize the package that feels right for your home.
        </CTADesc>
        <StyledButton shape="round" onClick={() => navigate('/contact')}>
          Schedule Consultation
        </StyledButton>
      </ContentContainer>
    </CTAWrapper>
  );
};

export default PackagesCTA;