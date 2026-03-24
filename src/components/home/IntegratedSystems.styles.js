import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #f9f8f6; /* Handled here! No inline CSS. */
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

/* 3-Column Grid for this specific section */
export const CardsGridThreeCol = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
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
  height: 180px;
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
  margin: 0 0 12px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
`;

/* Container to push price and button to the bottom */
export const CardFooter = styled.div`
  margin-top: auto; /* Pushes to bottom! No inline CSS. */
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 24px;
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  margin: 0;
`;

export const FullWidthButton = styled.button`
  width: 100%;
  background-color: #1a56db;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #164bb8;
  }
`;