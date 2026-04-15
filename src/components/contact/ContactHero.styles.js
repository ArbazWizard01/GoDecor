import styled from 'styled-components';

export const FullScreenContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px;
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
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 900px;
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
  display: flex;
  align-items: center;
  pointer-events: none;
  padding: 80px 0;
`;

export const GridBoundingBox = styled.div`
  width: 100%;
  min-height: 600px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "top form"
    "bottom form";
  gap: 40px 60px;
  align-content: center;
  pointer-events: none;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "top"
      "form"
      "bottom";
    gap: 40px;
  }
`;

export const TopTextOverlay = styled.div`
  grid-area: top;
  text-align: left;
  max-width: 600px;
  pointer-events: auto;
  align-self: start;
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
  grid-area: bottom;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 24px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: auto;
  align-self: end;
  margin-top: 40px;

  @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 0;
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

export const FormContainer = styled.div`
  grid-area: form;
  width: 100%;
  max-width: 420px;
  pointer-events: auto;
  align-self: center;
  justify-self: end;

  @media (max-width: 1024px) {
    justify-self: center;
    max-width: 100%;
  }
`;