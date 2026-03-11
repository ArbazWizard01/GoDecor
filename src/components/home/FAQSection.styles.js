import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const TitleAccent = styled.div`
  width: 60px;
  height: 3px;
  background-color: #1a56db;
  margin: 0 auto 16px auto;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 800px; /* Keeps the text lines at a comfortable reading length */
  display: flex;
  flex-direction: column;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 24px 0;
  
  &:first-child {
    border-top: 1px solid #eaeaea;
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  /* Slight color shift on hover for better UX */
  &:hover h3 {
    color: #1a56db;
  }
`;

export const QuestionText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #1f2937;
  margin: 0;
  transition: color 0.3s ease;
`;

export const IconWrapper = styled.div`
  color: #1a56db;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  /* Rotates the '+' into an 'x' when open */
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

export const AnswerContainer = styled.div`
  /* CSS trick for smooth height transition without hardcoding pixel heights */
  display: grid;
  grid-template-rows: ${props => props.$isOpen ? '1fr' : '0fr'};
  transition: grid-template-rows 0.3s ease;
`;

export const AnswerTextWrapper = styled.div`
  overflow: hidden;
`;

export const AnswerText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  padding-top: ${props => props.$isOpen ? '16px' : '0'};
  padding-right: 40px; /* Prevents text from sitting right under the icon */
`;