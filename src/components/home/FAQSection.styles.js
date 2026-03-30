import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%; 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 50px; 
  max-width: 800px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #1f2937;
  margin: 0 0 16px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const TitleAccent = styled.div`
  width: 170px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 20px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100px;
    margin: 0 auto 16px auto;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #6b7280;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 750px; 
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQItem = styled.div`
  background-color: #ffffff;
  padding: 18px 30px;
  transition: all 0.3s ease;
  border-radius: ${props => props.$isOpen ? '24px' : '50px'};
  border: none; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); 

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.07);
  }
  
  @media (max-width: 768px) {
    padding: 16px 20px;
    border-radius: ${props => props.$isOpen ? '20px' : '30px'};
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 16px;
  
  &:hover h3 {
    color: #1a56db;
  }
`;

export const QuestionText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #374151; 
  margin: 0;
  line-height: 1.4;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  color: #1a56db;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AnswerContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.$isOpen ? '1fr' : '0fr'};
  transition: grid-template-rows 0.3s ease;
`;

export const AnswerTextWrapper = styled.div`
  overflow: hidden;
`;

export const AnswerText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  padding-top: ${props => props.$isOpen ? '16px' : '0'};
  padding-left: 18px; 
  padding-right: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 0;
    padding-right: 0;
  }
`;