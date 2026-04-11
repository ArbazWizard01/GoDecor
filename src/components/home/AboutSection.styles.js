import styled from 'styled-components';

export const FullScreenContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const MainImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const ContentOverlay = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  padding: 0 8%;
  box-sizing: border-box;
  pointer-events: none;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;

export const GridBoundingBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: auto;
`;

export const TopTextOverlay = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  text-align: left;
  max-width: 800px;

  @media (max-width: 768px) {
    top: 8%;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 51px;
  color: #ffffff;
  margin: 0 0 16px 0;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 12px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 24px 18px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    bottom: 18%;
    padding: 20px;
    max-width: 100%;
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

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 10%;
  right: 0;
  background: #ffffff;
  color: #1a56db;
  border: none;
  height: 44px;
  padding: 0 28px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    bottom: 5%;
    left: 0;
    right: 0;
    width: 100%;
  }
`;