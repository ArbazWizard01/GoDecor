import React from 'react';
import {
  SectionWrapper,
  InnerContainer,
  HeaderContainer,
  SectionTitle,
  TitleAccentLine,
  SectionSubtitle,
  CardsContainer,
  StepCard,
  StepNumberLabel,
  LargeBackgroundNumber,
  CardTitle,
  CardDescription
} from './ImaginationToCompletion.styles';

const ImaginationToCompletion = () => {
  const stepsData = [
    {
      step: 1,
      title: 'Consultation And Requirement Mapping',
      description: 'We assess your space, understand functional needs, and align on budget expectations.'
    },
    {
      step: 2,
      title: 'Design Planning And Material Selection',
      description: 'Layout planning, surface selection, storage optimization, and visual previews.'
    },
    {
      step: 3,
      title: 'Scope And Cost Finalization',
      description: 'Transparent breakdown of inclusions, timeline planning, and execution scheduling.'
    },
    {
      step: 4,
      title: 'Execution And Quality Handover',
      description: 'Supervised installation, structured quality checks, and final walkthrough.'
    }
  ];

  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderContainer>
          <SectionTitle>Imagination to Completion</SectionTitle>
          <TitleAccentLine />
          <SectionSubtitle>
            A streamlined execution framework designed to ensure clarity, precision, and on-time delivery.
          </SectionSubtitle>
        </HeaderContainer>

        <CardsContainer>
          {stepsData.map((stepItem) => (
            <StepCard key={stepItem.step}>
              <StepNumberLabel>STEP {stepItem.step}</StepNumberLabel>
              <LargeBackgroundNumber>
                {stepItem.step < 10 ? `0${stepItem.step}` : stepItem.step}
              </LargeBackgroundNumber>
              <CardTitle>{stepItem.title}</CardTitle>
              <CardDescription>{stepItem.description}</CardDescription>
            </StepCard>
          ))}
        </CardsContainer>
      </InnerContainer>
    </SectionWrapper>
  );
};

export default ImaginationToCompletion;