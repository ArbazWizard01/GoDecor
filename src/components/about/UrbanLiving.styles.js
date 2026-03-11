import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #ffffff;
  padding: 100px 5% 120px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* --- TOP HALF: Target Audience --- */
export const AudienceContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 100px;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0 0 60px 0;
  line-height: 1.6;
`;

export const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIcon = styled.div`
  font-size: 2rem;
  color: #1a56db;
  margin-bottom: 16px;
  background-color: rgba(26, 86, 219, 0.05);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
`;

/* --- BOTTOM HALF: Markets --- */
export const MarketsContainer = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
`;

export const MarketsTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1f2937;
  margin: 0 0 20px 0;
  line-height: 1.2;
`;

export const MarketsDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
`;