import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TextSection = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 36px;
  padding-right: 40px;

  @media (max-width: 1024px) {
    grid-column: 1 / 3;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  color: #1f2937;
  margin: 0 0 24px 0;
  line-height: 1.1;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 0 0 16px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #4b5563;
  line-height: 1.6;
  margin: 0;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BaseCard = styled.div`
  border-radius: 12px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  min-height: 380px;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 24px;
  }
`;

export const BeigeCard = styled(BaseCard)`
  background-color: #fdfbf7;
  grid-column: 3 / 4;
  border: 1px solid #f3f4f6;

  @media (max-width: 1024px) {
    grid-column: 1 / 2;
  }
  
  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const BlueCard = styled(BaseCard)`
  background-color: #1a56db;
  grid-column: 4 / 5;

  @media (max-width: 1024px) {
    grid-column: 2 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const WideImageCard = styled(BaseCard)`
  grid-column: 1 / 4;

  @media (max-width: 1024px) {
    grid-column: 1 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const SquareImageCard = styled(BaseCard)`
  grid-column: 4 / 5;

  @media (max-width: 1024px) {
    grid-column: 1 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: ${props => props.$light ? '#ffffff' : '#1f2937'};
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  color: ${props => props.$light ? 'rgba(255, 255, 255, 0.9)' : '#4b5563'};
  z-index: 2;
`;

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
`;