import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  return (
    <SectionWrapper>
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
      <CTAWrapper>
        <Overlay />
        <CTAContent>
          <CTATitle>Start With Structure. End With Comfort.</CTATitle>
          <CTADesc>
            Schedule a structured consultation and bring clarity to your home transformation.
          </CTADesc>
          <ActionGroup>
            <PrimaryButton type="primary" shape="round" onClick={() => navigate('/contact')}>
              Schedule Consultation
            </PrimaryButton>
            <SecondaryLink onClick={( () => navigate('/packages'))}> 
              View Packages <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
            </SecondaryLink>
          </ActionGroup>
        </CTAContent>
      </CTAWrapper>

    </SectionWrapper>
  );
};

export default ServicesCTA;