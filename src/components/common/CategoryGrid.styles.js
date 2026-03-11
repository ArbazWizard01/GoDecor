import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%; /* Matches our new global centering */
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

/* The little blue accent line under the title from your design */
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1300px; /* Aligns perfectly with your navbar */
  
  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.06);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

/* Styles for the bullet points */
export const FeatureList = styled.ul`
  margin: 0 0 24px 0;
  padding-left: 20px;
  flex: 1; /* Pushes the price and link to the bottom */
`;

export const FeatureItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 6px;
  line-height: 1.4;
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  margin: 0 0 8px 0;
`;

export const CardLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover { text-decoration: underline; }
`;