import React from 'react';
import {
  SectionWrapper,
  TopContent,
  MainTitle,
  SubTextBold,
  SubText,
  ModelSection,
  ModelTitle,
  TitleAccent,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepDesc
} from './ServiceOverview.styles';

const ServiceOverview = () => {
  return (
    <SectionWrapper>
      {/* Top Text Section */}
      <TopContent>
        <MainTitle>Beautiful Spaces Begin With Clear Systems.</MainTitle>
        <SubTextBold>
          Design is emotional. Execution is operational. We believe both should work together.
        </SubTextBold>
        <SubText>
          That's why our services combine aesthetic planning with defined scopes, material 
          alignment, and coordinated installation — so the experience feels calm, not chaotic.
        </SubText>
      </TopContent>

      {/* The GoDecor Model Section */}
      <ModelSection>
        <ModelTitle>The GoDecor Model.</ModelTitle>
        <TitleAccent />
        
        <StepsGrid>
          <StepCard>
            <StepNumber>01</StepNumber>
            <StepTitle>Design Intelligence</StepTitle>
            <StepDesc>
              Layout engineering, storage optimization, and lifestyle alignment.
            </StepDesc>
          </StepCard>

          <StepCard>
            <StepNumber>02</StepNumber>
            <StepTitle>Systemized Execution</StepTitle>
            <StepDesc>
              Modular solutions delivered through standardized workflows.
            </StepDesc>
          </StepCard>

          <StepCard>
            <StepNumber>03</StepNumber>
            <StepTitle>Quality Governance</StepTitle>
            <StepDesc>
              Defined checkpoints, partner vetting, and supervised installation.
            </StepDesc>
          </StepCard>
        </StepsGrid>
      </ModelSection>
    </SectionWrapper>
  );
};

export default ServiceOverview;