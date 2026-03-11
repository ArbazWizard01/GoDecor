import React from 'react';
import {
  SectionWrapper,
  Container,
  LeftColumn,
  TitleContainer,
  Title,
  TitleAccent,
  ImageWrapper,
  FeaturedImage,
  RightColumn,
  TimelineItem,
  TimelineGraphic,
  TimelineCircle,
  TimelineLine,
  TimelineContent,
  StepTitle,
  StepDesc
} from './WhatMakesUsDifferent.styles';

const timelineData = [
  {
    id: 1,
    title: 'Step 01 — Requirement Mapping',
    desc: 'Understanding layout, usage patterns, and budget alignment.'
  },
  {
    id: 2,
    title: 'Step 02 — Spatial Planning',
    desc: 'Layout engineering and material selection.'
  },
  {
    id: 3,
    title: 'Step 03 — Scope Confirmation',
    desc: 'Transparent inclusions and cost clarity.'
  },
  {
    id: 4,
    title: 'Step 04 — Coordinated Installation',
    desc: 'Supervised execution through defined checkpoints.'
  },
  {
    id: 5,
    title: 'Step 05 — Final Review',
    desc: 'Completion validation and handover alignment.'
  }
];

const WhatMakesUsDifferent = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Left Side: Title & Image */}
        <LeftColumn>
          <TitleContainer>
            <Title>What Makes GoDecor Different</Title>
            <TitleAccent />
          </TitleContainer>
          <ImageWrapper>
            {/* Using a premium blueprint/architectural desk image */}
            <FeaturedImage 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
              alt="Architectural planning and blueprints" 
            />
          </ImageWrapper>
        </LeftColumn>

        {/* Right Side: Timeline */}
        <RightColumn>
          {timelineData.map((step, index) => {
            // Check if this is the very last step in the array
            const isLastItem = index === timelineData.length - 1;

            return (
              <TimelineItem key={step.id}>
                
                {/* The Circle and Line */}
                <TimelineGraphic>
                  <TimelineCircle />
                  <TimelineLine $isLast={isLastItem} />
                </TimelineGraphic>

                {/* The Text Content */}
                <TimelineContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDesc>{step.desc}</StepDesc>
                </TimelineContent>
                
              </TimelineItem>
            );
          })}
        </RightColumn>

      </Container>
    </SectionWrapper>
  );
};

export default WhatMakesUsDifferent;