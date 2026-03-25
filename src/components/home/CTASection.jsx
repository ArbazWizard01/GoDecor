import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  BannerContainer,
  BackgroundImage,
  ContentWrapper,
  Title,
  PrimaryButton
} from './CTASection.styles';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <BannerContainer>
        <BackgroundImage />
        <ContentWrapper>
          <Title>Ready to Transform Your Space?</Title>
          <PrimaryButton onClick={() => navigate('/contact')}>
            Start Your Design Journey <ArrowRightOutlined />
          </PrimaryButton>
        </ContentWrapper>
      </BannerContainer>
    </SectionWrapper>
  );
};

export default CTASection;