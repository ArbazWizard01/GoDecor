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

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    min-height: 800px;
  }
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
  top: 18%;
  left: 8%;
  text-align: left;
  z-index: 2;
  width: 90%;
  max-width: 800px;

  @media (max-width: 768px) {
    top: 12%;
    left: 5%;
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
  left: 8%;
  z-index: 2;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  padding: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    bottom: 15%;
    max-width: 90%;
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
  right: 8%;
  z-index: 2;
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
    left: 5%;
    right: 5%;
    width: 90%;
  }
`;