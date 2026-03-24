import styled from 'styled-components';

export const HeroSectionWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 120px 5% 0 5%; 
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const ImageCard = styled.div`
  width: 100%;
  height: 75vh;
  min-height: 550px;
  border-radius: 24px;
  
  /* THE BIG CHNAGE: Pulling dynamic background image from props! */
  background-image: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url(${props => props.$bgImage});
  
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  overflow: hidden;
  
  /* Adds a smooth fade transition when the image changes */
  transition: background-image 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 30px;
    height: 65vh;
    border-radius: 16px;
  }
`;

export const HeroContent = styled.div`
  max-width: 500px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  line-height: 1.1;
  color: #ffffff;
  margin: 0 0 40px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 24px;
  }
`;

export const SubtitleBox = styled.div`
  background: rgba(0, 0, 0, 0.25);
  
  backdrop-filter: blur(2px); 
  
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle premium edge */
`;

export const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  
  font-size: 0.95rem; 
  
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem; /* Scales smaller too */
  }
`;

export const HeroControls = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const ArrowGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const ArrowBtn = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.2rem;
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
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
    grid-template-columns: 1fr;
    gap: 30px;
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
  font-size: 1.5rem;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4b5563;
  margin: 0;
`;