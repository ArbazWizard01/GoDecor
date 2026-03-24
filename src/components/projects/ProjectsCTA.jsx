import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CTAWrapper,
  Overlay,
  CTAContent,
  CTATitle,
  CTADesc,
  PrimaryButton
} from './ProjectsCTA.styles';

const ProjectsCTA = () => { 
  const navigate = useNavigate();
  return (
    <CTAWrapper>
      <Overlay />
      <CTAContent>
        <CTATitle>Ready to Create Your Own Story?</CTATitle>
        <CTADesc>
          Different Spaces. One Structured Philosophy. Let's begin with a structured consultation.
        </CTADesc>
        <PrimaryButton shape="round" onClick={() => navigate('/contact')}>
          Schedule Consultation
        </PrimaryButton>
      </CTAContent>
    </CTAWrapper>
  );
};

export default ProjectsCTA;