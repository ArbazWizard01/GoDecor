import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #F5F1EB;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #1f2937;
  margin: 0 0 16px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const TitleAccent = styled.div`
  width: 160px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 16px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100px;
    margin: 0 auto 12px auto;
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

export const CardsGridThreeCol = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: #d1d5db;
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

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0 0 24px 0;
  flex: 1;
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1a56db;
  margin: 0 0 16px 0;
`;

export const FullWidthButton = styled.button`
  width: 100%;
  background-color: #1a56db;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #164bb8;
  }
`;