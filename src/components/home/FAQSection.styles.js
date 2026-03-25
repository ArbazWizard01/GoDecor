import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%; 
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
  font-size: 2.8rem;
  color: #1f2937;
  margin: 0 0 16px 0; /* Tweaked to make room for the accent line */
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const TitleAccent = styled.div`
  width: 170px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 20px auto;
  border-radius: 2px;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 750px; 
  display: flex;
  flex-direction: column;
  gap: 16px; /* THIS creates the distinct separation between cards seen in Figma */
`;

export const FAQItem = styled.div`
  background-color: #ffffff;
  padding: 18px 30px;
  transition: all 0.3s ease;
  border-radius: ${props => props.$isOpen ? '24px' : '50px'};
  
  /* THE FIX: Removed the harsh border and added the soft Figma drop shadow */
  border: none; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); 

  &:hover {
    /* Slightly lifts the card and darkens the shadow on hover for a premium feel */
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
  align-items: center; /* This centers them vertically */
  cursor: pointer;
  gap: 16px; /* Ensures the text never collides with the plus sign */
  
  &:hover h3 {
    color: #1a56db;
  }
`;

export const QuestionText = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem; /* BUMPED UP from 0.95rem */
  font-weight: 500;
  color: #374151; 
  margin: 0;
  line-height: 1.4; /* Helps optical alignment with the icon */
  transition: color 0.3s ease;
`;

export const IconWrapper = styled.div`
  color: #1a56db;
  font-size: 1.25rem; /* Scaled up to match the new text size */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0; /* THE FIX: Stops the icon from squishing/misaligning if the text gets too long */
  
  transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
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
  font-size: 0.95rem; /* Bumped up slightly to match the larger question text */
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  padding-top: ${props => props.$isOpen ? '16px' : '0'};
  padding-left: 18px; 
  padding-right: 20px; 
`;