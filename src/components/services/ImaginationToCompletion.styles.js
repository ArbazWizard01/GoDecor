import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #fdfbf7;
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 80px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
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

export const TitleAccentLine = styled.div`
  width: 180px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 20px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 60px;
    margin: 0 auto 16px auto;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const StepCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    padding: 32px;
  }
`;

export const StepNumberLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1a56db;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const LargeBackgroundNumber = styled.span`
  position: absolute;
  top: 2%;
  right: 20px;
  font-family: 'Playfair Display', serif;
  font-size: 90px;
  font-weight: 700;
  color: #d1d5db;
  text-shadow: 
    -1px -1px 0 #eaeaea,
     1px -1px 0 #eaeaea,
    -1px  1px 0 #eaeaea,
     1px  1px 0 #eaeaea;
  opacity: 0.3;
  z-index: 0;
  user-select: none;

  @media (max-width: 1024px) {
    font-size: 160px;
  }

  @media (max-width: 768px) {
    font-size: 120px;
    right: -10px;
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: #1f2937;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.3;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 0 12px 0;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;