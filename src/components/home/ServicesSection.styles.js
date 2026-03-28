import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const TitleGroup = styled.div``;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 34px;
  color: #1f2937;
  margin: 0 0 10px 0;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 28px;
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

export const OutlineButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #1a56db;
  background: transparent;
  border: 1px solid #223F9A;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;

  &:hover {
    border-color: #4b77d6;
    background: #f8fafc;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fcfbfa;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  
  opacity: 0;
  animation: ${props => props.$isVisible ? fadeInUp : 'none'} 0.6s ease forwards;
  animation-delay: ${props => props.$delay || '0s'};
  
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #eaeaea;
`;

export const CardContent = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const CardTags = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
`;

export const CardLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a56db;
  margin-top: auto;
  transition: color 0.3s ease;
  display: inline-block;

  ${Card}:hover & {
    color: #1e3a8a;
  }
`;