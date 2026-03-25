import styled from 'styled-components';

export const FullScreenContainer = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 700px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TopTextOverlay = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  text-align: left;
  z-index: 2;
  width: 90%;
  max-width: 800px;

  @media (max-width: 768px) {
    top: 10%;
    left: 5%;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  color: #ffffff;
  margin: 0 0 10px 0;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 10%;
  left: 8%;
  z-index: 2;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  padding: 24px 32px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    left: 5%;
    bottom: 20%;
    padding: 20px;
    max-width: 90%;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.2);
`;

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 10%;
  right: 8%;
  z-index: 2;
  background: #ffffff;
  color: #1a56db;
  border: none;
  height: 44px;
  padding: 0 28px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 5%;
    left: 5%;
    right: 5%;
    width: 90%;
  }
`;