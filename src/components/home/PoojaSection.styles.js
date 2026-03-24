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
  height: 85vh;
  min-height: 650px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
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
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 2;
  width: 90%;
  max-width: 850px;

  @media (max-width: 768px) {
    top: 50px;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.8rem;
  color: #ffffff;
  margin: 0 0 20px 0;
  font-weight: 600;
  line-height: 1.2;
  text-shadow: 0 4px 12px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 auto;
  max-width: 700px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 60px;
  left: 8%;
  z-index: 2;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 35px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    bottom: 20px;
    max-width: none;
    padding: 25px;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 60px;
  right: 8%;
  z-index: 2;
  background: #ffffff;
  color: #1a56db;
  border: none;
  height: 54px;
  padding: 0 36px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;