import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent, // <-- Brought this back!
  SectionSubtitle,
  FAQContainer,
  FAQItem,
  QuestionHeader,
  QuestionText,
  IconWrapper,
  AnswerContainer,
  AnswerTextWrapper,
  AnswerText
} from './FAQSection.styles';

const faqData = [
  {
    id: 1,
    question: "Is consultation really included in all packages?",
    answer: "Yes, our initial spatial consultation and requirement mapping are completely free. We want to ensure we fully understand your vision and space before you commit to any package."
  },
  {
    id: 2,
    question: "Are prices fixed or customizable?",
    answer: "Our package prices act as a baseline for standard dimensions and finishes. They are fully customizable based on your specific material choices, hardware upgrades, and spatial variations."
  },
  {
    id: 3,
    question: "Can I customize a package?",
    answer: "Absolutely. Our packages are flexible frameworks. You can mix and match finishes, add specific modules, or remove elements you don't need to fit your exact lifestyle."
  },
  {
    id: 4,
    question: "What is the average execution timeline?",
    answer: "For a standard modular kitchen, execution takes 3-4 weeks. A full 2BHK or 3BHK integrated setup typically ranges from 45 to 60 days from the date of design sign-off."
  },
  {
    id: 5,
    question: "Do you provide material warranties?",
    answer: "Yes, we provide up to 10-year structural warranties on our core modular woodwork and standard manufacturer warranties on all branded hardware and accessories."
  },
  {
    id: 6,
    question: "How do I know what package is right for me?",
    answer: "Our design experts will guide you! During your consultation, we assess your floor plan, family size, storage needs, and aesthetic preferences to recommend the perfect fit."
  },
  {
    id: 7,
    question: "Do you operate in multiple cities?",
    answer: "Currently, we have active execution teams in Mumbai, Bangalore, Delhi NCR, and Pune. We are rapidly expanding, so please check our footer for the latest updates."
  },
  {
    id: 8,
    question: "Is EMI or phased payment available?",
    answer: "Yes, we structure our payments in transparent milestones tied to project progress. We also partner with leading financial institutions to offer easy EMI options."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <TitleAccent /> {/* <-- Rendered here! */}
        <SectionSubtitle>
          Clear answers to help you plan your space with confidence.
        </SectionSubtitle>
      </HeaderContainer>

      <FAQContainer>
        {faqData.map((faq, index) => {
          const isOpen = openId === faq.id;
          
          return (
            <FAQItem key={faq.id} $isOpen={isOpen}>
              <QuestionHeader onClick={() => toggleFAQ(faq.id)}>
                <QuestionText>{index + 1}. {faq.question}</QuestionText>
                <IconWrapper $isOpen={isOpen}>
                  <PlusOutlined />
                </IconWrapper>
              </QuestionHeader>
              
              <AnswerContainer $isOpen={isOpen}>
                <AnswerTextWrapper>
                  <AnswerText $isOpen={isOpen}>{faq.answer}</AnswerText>
                </AnswerTextWrapper>
              </AnswerContainer>
            </FAQItem>
          );
        })}
      </FAQContainer>
    </SectionWrapper>
  );
};

export default FAQSection;