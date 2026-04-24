import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #1f2937;
  margin: 0;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const IntroColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const IntroText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  margin-top: -30px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 1024px) {
    margin-top: 40px;
    height: 320px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const CutoutTopRight = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  width: calc(50% + 1px);
  height: 51px;
  background-color: #ffffff;
  border-bottom-left-radius: 16px;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 50px;
    right: 0;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 0 100%, transparent 16px, #ffffff 16.5px);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CutoutBottomLeft = styled.div`
  position: absolute;
  bottom: -1px;
  left: -1px;
  width: calc(50% + 1px);
  height: 51px;
  background-color: #ffffff;
  border-top-right-radius: 16px;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 16px;
    height: 16px;
    background: radial-gradient(circle at 100% 0, transparent 16px, #ffffff 16.5px);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: -10px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-top: 0;
  }
`;

export const VisionColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuoteIcon = styled.div`
  font-family: 'Georgia', serif;
  font-size: 72px;
  color: #cbd5e1;
  line-height: 0.5;
`;

export const VisionText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 10px 0;
`;

export const TextureImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 1px;
`;

export const AboutCardWrapper = styled.div`
  margin-top: 50px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const AboutCard = styled.div`
  background-color: #F5F1EB;
  padding: 40px 48px;
  border-radius: 12px;
  border: 1px solid #f3f4f6;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const AboutCardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1a56db;
  text-align: right;
  margin: 0 0 24px 0;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const AboutCardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 16px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;