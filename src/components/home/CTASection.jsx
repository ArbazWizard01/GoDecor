import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  BannerContainer,
  BackgroundImage,
  ContentWrapper,
  Title,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryLink
} from './CTASection.styles';

const CTASection = () => {
  return (
    <SectionWrapper>
      <BannerContainer>
        <BackgroundImage />
        <ContentWrapper>
          <Title>Start Planning With Clarity.</Title>
          <Subtitle>
            A structured consultation to understand your space, align your budget, and define the right system for your home.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton>Schedule Consultation</PrimaryButton>
            <SecondaryLink>
              View Packages <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
            </SecondaryLink>
          </ButtonGroup>
        </ContentWrapper>
      </BannerContainer>
    </SectionWrapper>
  );
};

export default CTASection;