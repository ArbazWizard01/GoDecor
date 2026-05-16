import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
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

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #1f2937;
  margin: 0 0 48px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 32px 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 240px);
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-auto-rows: 240px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 0 0 20px 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  &:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  &:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }
  &:nth-child(5) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
  &:nth-child(6) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (max-width: 1024px) {
    &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(5), &:nth-child(6) {
      grid-column: span 1;
      grid-row: span 1;
    }
    &:nth-child(4) {
      grid-column: span 2;
      grid-row: span 1;
    }
  }

  @media (max-width: 768px) {
    width: 240px;
    min-width: 240px;
    height: 300px;
    scroll-snap-align: start;
    
    &:nth-child(n) {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
  pointer-events: none;
`;

export const CardTitle = styled.h4`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
    bottom: 16px;
    left: 16px;
    right: 16px;
  }
`;