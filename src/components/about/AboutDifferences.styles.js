import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #f8f6f3; /* Matching the cream background from the Figma file */
  padding: 100px 5%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* Right side gets a bit more space for the grid */
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  line-height: 1.2;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const TitleAccent = styled.div`
  width: 80px;
  height: 3px;
  background-color: #1a56db;
`;

export const RightColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stacks to a single column on tiny screens */
  }
`;

export const FeatureCard = styled.div`
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
`;

export const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #1a56db;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0 0 12px 0;
`;

export const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;