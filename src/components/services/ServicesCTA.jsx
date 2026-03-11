import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  TargetContainer,
  TargetTitle,
  TargetDesc,
  TargetHighlight,
  CTAWrapper,
  Overlay,
  CTAContent,
  CTATitle,
  CTADesc,
  ActionGroup,
  PrimaryButton,
  SecondaryLink
} from './ServicesCTA.styles';

const ServicesCTA = () => {
  return (
    <SectionWrapper>
      
      {/* Target Audience Section */}
      <TargetContainer>
        <TargetTitle>Designed for Modern Residential Living.</TargetTitle>
        <TargetDesc>
          We work with apartment homeowners, growing urban families, first-time buyers, and structured 
          renovation planners seeking clarity over chaos.
        </TargetDesc>
        <TargetHighlight>
          If you value transparency and long-term durability, this framework is built for you.
        </TargetHighlight>
      </TargetContainer>

      {/* Bottom Image CTA */}
      <CTAWrapper>
        <Overlay />
        <CTAContent>
          <CTATitle>Start With Structure. End With Comfort.</CTATitle>
          <CTADesc>
            Schedule a structured consultation and bring clarity to your home transformation.
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

    </SectionWrapper>
  );
};

export default ServicesCTA;