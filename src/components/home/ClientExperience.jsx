import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  CardContainer,
  QuoteIcon,
  QuoteText,
  AuthorName,
  AuthorLocation,
  ControlsWrapper,
  ArrowButton,
  PaginationIndicator,
  Dot
} from './ClientExperience.styles';

const testimonialsData = [
  {
    id: 1,
    text: "The execution was structured and transparent. Every step was communicated clearly, timelines were met, and the final result exceeded our expectations. The team coordinated everything seamlessly.",
    author: "Priya Sharma",
    location: "Bangalore"
  },
  {
    id: 2,
    text: "GoDecor completely transformed our outdated kitchen into a modern masterpiece. The material quality is top-notch, and their modular hardware systems make everyday use an absolute breeze.",
    author: "Rahul Desai",
    location: "Mumbai"
  },
  {
    id: 3,
    text: "From the initial 3D planning to the final handover, the process was incredibly smooth. We appreciated the transparent pricing with no hidden costs. Highly recommend their 3BHK suite!",
    author: "Ananya Iyer",
    location: "Pune"
  }
];

const ClientExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Client Experience</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          Homeowners who chose structured design and seamless execution.
        </SectionSubtitle>
      </HeaderContainer>

      <CardContainer>
        <QuoteIcon>“</QuoteIcon>
        
        <QuoteText>{currentTestimonial.text}</QuoteText>
        <AuthorName>{currentTestimonial.author}</AuthorName>
        <AuthorLocation>{currentTestimonial.location}</AuthorLocation>

        <ControlsWrapper>
          <ArrowButton onClick={handlePrev}>
            <LeftOutlined style={{ fontSize: '14px' }} />
          </ArrowButton>
          <ArrowButton onClick={handleNext}>
            <RightOutlined style={{ fontSize: '14px' }} />
          </ArrowButton>

          <PaginationIndicator>
            {testimonialsData.map((_, index) => (
              <Dot key={index} $active={index === currentIndex} />
            ))}
          </PaginationIndicator>
        </ControlsWrapper>
      </CardContainer>
    </SectionWrapper>
  );
};

export default ClientExperience;