import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  width: 100%;
  /* Using 8% fluid padding so the edges scale dynamically with the screen */
  padding: 80px 8% 0 8%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 80px 5% 0 5%;
  }
`;

export const HeroInnerContainer = styled.div`
  width: 100%;
  /* The layout is now fully fluid until it hits 1600px, protecting ultrawide users */
  max-width: 1600px; 
  display: flex;
  flex-direction: column;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 95vh;
  min-height: 550px;
  border-radius: 12px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.65)),
    url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  overflow: hidden;
  transition: background-image 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 24px;
    height: 80vh;
    border-radius: 12px;
  }
`;

export const HeroContent = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 72px;
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 40px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: auto;
  }
`;

export const SubtitleBox = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(1px);
  padding: 20px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 24px;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroControls = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ArrowGroup = styled.div`
  display: flex;
  gap: 26px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ArrowBtn = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

export const PrimaryBtn = styled.button`
  background: #ffffff;
  color: #1f2937;
  border: none;
  height: 50px;
  padding: 0 32px;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: auto;
  }
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px 0;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
    padding: 32px 0;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const StatIcon = styled.div`
  font-size: 24px;
  color: #1a56db;
  background: #fdfbf9;
  border: 1px solid #e5e7eb;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  ${StatItem}:hover & {
    background: #f0f4ff;
    border-color: #1a56db;
    transform: translateY(-4px);
  }
`;

export const StatText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #4b5563;
  margin: 0;
`;