import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 8%;
  background-color: #f8f7f4;
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

export const Header = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: #1f2937;
  margin: 0 0 24px 0;
  font-weight: 500;
  position: relative;
  display: inline-block;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #1a56db;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 20px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 37px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  background-color: #1f2937;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 14px;
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 10px 0;
  flex-grow: 1;

  @media (max-width: 768px) {
    margin: 0 0 24px 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
`;