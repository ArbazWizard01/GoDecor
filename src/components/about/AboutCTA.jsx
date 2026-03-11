import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  CTAWrapper,
  Overlay,
  CTAContent,
  CTATitle,
  CTADesc,
  ActionGroup,
  PrimaryButton,
  SecondaryLink
} from './AboutCTA.styles';

const AboutCTA = () => {
  return (
    <CTAWrapper>
      <Overlay />
      <CTAContent>
        <CTATitle>Start Planning With Clarity.</CTATitle>
        <CTADesc>
          A structured consultation to understand your space, align your budget, 
          and define the right system for your home.
        </CTADesc>
        <ActionGroup>
          <PrimaryButton type="primary" shape="round">
            Schedule Consultation
          </PrimaryButton>
          <SecondaryLink>
            View Packages <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
          </SecondaryLink>
        </ActionGroup>
      </CTAContent>
    </CTAWrapper>
  );
};

export default AboutCTA;