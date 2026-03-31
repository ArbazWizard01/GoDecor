import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 5%;
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
  width: 140px;
  height: 4px;
  background-color: #1e3a8a;
  margin: 0 auto 16px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 40px;
    margin: 0 auto 12px auto;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1120px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 0 5% 20px 5%;
    gap: 16px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    min-width: 240px;
    scroll-snap-align: start;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1f2937;
  margin: 0 0 6px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 1.5;
  color: #3b82f6;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 0 16px 0;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 0;
  background: transparent;
  border: 1px solid #1e3a8a;
  border-radius: 4px;
  color: #1e3a8a;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  svg {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  ${Card}:hover & {
    background: #1e3a8a;
    color: #ffffff;
  }

  ${Card}:hover & svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
`;