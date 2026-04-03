import styled from 'styled-components';

export const FullScreenContainer = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 100vh;
  min-height: 800px;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 650px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  pointer-events: none;
`;

export const GridBoundingBox = styled.div`
  width: 100%;
  max-width: 1328px;
  position: relative;
  height: 100%;
  pointer-events: auto;
`;

export const TopTextOverlay = styled.div`
  position: absolute;
  top: 15%;
  left: 0;
  text-align: left;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    top: 10%;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  color: #ffffff;
  margin: 0 0 16px 0;
  font-weight: 600;
  line-height: 1.15;
  text-shadow: 0 4px 12px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 8px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 8%;
  left: 0;
  width: 100%;
  max-width: 650px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 30px 40px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    bottom: 16%;
    padding: 16px;
    max-width: 100%;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 8%;
  right: 0;
  background: #ffffff;
  color: #1a56db;
  border: none;
  height: 50px;
  padding: 0 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    bottom: 4%;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: center;
  }
`;