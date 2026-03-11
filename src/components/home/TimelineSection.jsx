import React from 'react';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  TimelineContainer,
  DashedLine,
  StepsGrid,
  StepCard,
  BackgroundNumber,
  ContentWrapper,
  StepLabel,
  StepTitle,
  StepDescription
} from './TimelineSection.styles';

const stepsData = [
  {
    id: 1,
    number: '01',
    label: 'Step 1',
    title: 'Consultation & Requirement Mapping',
    description: 'We assess your space, understand functional needs, and align on budget expectations.'
  },
  {
    id: 2,
    number: '02',
    label: 'Step 2',
    title: 'Design Planning & Material Selection',
    description: 'Layout planning, surface selection, storage optimization, and visual previews.'
  },
  {
    id: 3,
    number: '03',
    label: 'Step 3',
    title: 'Scope & Cost Finalization',
    description: 'Transparent breakdown of inclusions, timeline planning, and execution scheduling.'
  },
  {
    id: 4,
    number: '04',
    label: 'Step 4',
    title: 'Execution & Quality Handover',
    description: 'Supervised installation, structured quality checks, and final walkthrough.'
  }
];

const TimelineSection = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Imagination to Completion</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          A streamlined execution framework designed to ensure clarity, precision, and on-time delivery.
        </SectionSubtitle>
      </HeaderContainer>

      <TimelineContainer>
        {/* The horizontal dashed line */}
        <DashedLine />

        <StepsGrid>
          {stepsData.map((step) => (
            <StepCard key={step.id}>
              {/* Giant faint number in the background */}
              <BackgroundNumber>{step.number}</BackgroundNumber>
              
              <ContentWrapper>
                <StepLabel>{step.label}</StepLabel>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ContentWrapper>
            </StepCard>
          ))}
        </StepsGrid>
      </TimelineContainer>
    </SectionWrapper>
  );
};

export default TimelineSection;