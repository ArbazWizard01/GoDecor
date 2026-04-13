import styled from 'styled-components';

export const FullScreenContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 0 8%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 800px;
    padding: 0 5%;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  pointer-events: none;
`;

export const GridBoundingBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: auto;
`;

export const TopTextOverlay = styled.div`
  position: absolute;
  top: 18%;
  left: 0;
  text-align: left;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    top: 12%;
  }
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 54px;
  color: #ffffff;
  margin: 0 0 16px 0;
  font-weight: 500;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 8%;
  left: 0;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    bottom: 15%;
    max-width: 100%;
    padding: 20px;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const ConsultationButton = styled.button`
  position: absolute;
  bottom: 8%;
  right: 0;
  background: #ffffff;
  color: #1f2937;
  border: none;
  height: 48px;
  padding: 0 32px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    bottom: 4%;
    left: 0;
    right: 0;
    width: 100%;
  }
`;