import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 32px;
  }
`;

export const HeaderText = styled.div`
  text-align: left;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #1f2937;
  margin: 0 0 16px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const TitleAccent = styled.div`
  width: 160px;
  height: 3px;
  background-color: #1a56db;
  margin: 0 0 16px 0;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 100px;
    margin: 0 0 12px 0;
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

export const SliderControls = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ControlButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #d1d5db;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1a56db;
    color: #1a56db;
    background: #f8fafc;
  }
`;

export const CardsSlider = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 16px 0 40px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 314px;
  min-width: 314px;
  flex-shrink: 0;
  scroll-snap-align: start;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
    border-color: #d1d5db;
  }

  @media (max-width: 768px) {
    width: 280px;
    min-width: 280px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #1a56db;
  margin: 0 0 24px 0;
`;

export const ExploreButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  background: #ffffff;
  border: 1px solid #1a56db;
  border-radius: 4px;
  color: #1a56db;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  svg {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  ${Card}:hover & {
    background: #1a56db;
    color: #ffffff;
  }

  ${Card}:hover & svg {
    transform: translateX(6px);
  }
`;