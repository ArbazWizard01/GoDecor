import React from 'react';
import {
  SectionWrapper,
  SectionTitle,
  TitleAccent,
  TimelineContainer,
  StepWrapper,
  StepNumber,
  StepTitle,
  StepDesc
} from './ExecutionFramework.styles';

const stepsData = [
  { id: '01', title: 'Requirement Mapping', desc: 'We assess layout, usage patterns, and spatial constraints.' },
  { id: '02', title: 'System Design', desc: 'Layouts, materials, storage engineering, and lighting alignment.' },
  { id: '03', title: 'Scope Definition', desc: 'Clear inclusions before execution begins.' },
  { id: '04', title: 'Supervised Installation', desc: 'Defined checkpoints and onsite coordination.' },
  { id: '05', title: 'Quality Handover', desc: 'Final review and documentation.' }
];

const ExecutionFramework = () => {
  return (
    <SectionWrapper>
      <SectionTitle>A Structured Execution Framework</SectionTitle>
      <TitleAccent />
      
      <TimelineContainer>
        {stepsData.map((step) => (
          <StepWrapper key={step.id}>
            <StepNumber>{step.id}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
          </StepWrapper>
        ))}
      </TimelineContainer>
    </SectionWrapper>
  );
};

export default ExecutionFramework;