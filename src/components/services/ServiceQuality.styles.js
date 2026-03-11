import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* --- TOP HALF: Built for Growth --- */
export const TopContainer = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 80px;
`;

export const MainTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const MainDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 24px 0;
`;

export const HighlightText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #1a56db;
  margin: 0;
`;

/* --- BOTTOM HALF: Quality That's Documented --- */
export const BottomContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SideTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1f2937;
  margin: 0 0 16px 0;
  line-height: 1.2;
`;

export const SideDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  color: #1a56db;
  font-size: 1.2rem;
  margin-top: 2px; /* Perfectly aligns the icon with the first line of text */
`;

export const ItemText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #4b5563;
  margin: 0;
`;