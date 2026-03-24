import styled from 'styled-components';
import { Carousel } from 'antd'; // Required for targeting ant-carousel styles

export const SectionWrapper = styled.section`
  padding: 80px 0 120px 0;
  background-color: #ffffff;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  margin: 0;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SectionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
  max-width: 600px;
`;

/* --- CAROUSEL STYLING --- */
export const CarouselWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
  width: 100%;
`;

export const StyledCarousel = styled(Carousel)`
  /* Matches Figma: Spaces the images cleanly apart */
  .slick-slide > div {
    padding: 0 12px;
    box-sizing: border-box;
  }

  .slick-list {
    margin: 0 -12px; /* Pulls the edges flush with the container */
  }
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  color: #1a56db;
  border: 1px solid #e5e7eb;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 8px 16px rgba(0,0,0,0.08);
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
    border-color: #1a56db;
    box-shadow: 0 12px 20px rgba(0,0,0,0.12);
  }

  @media (max-width: 900px) { display: none; }
`;

/* --- CLEAN, MODERN DESIGN CARDS --- */
export const CityImageWrapper = styled.div`
  width: 100%;
  height: 350px; /* Tall portrait aspect ratio */
  border-radius: 12px; /* Standard, clean border radius matching Figma */
  overflow: hidden;
  background-color: #f3f4f6; /* Placeholder color while loading */
  cursor: pointer;
  
  /* Very subtle standard shadow, not glowing */
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
  
  @media (max-width: 1024px) {
    height: 380px;
  }
`;

export const CityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Removed the hover zoom completely to keep it clean and grounded */
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

export const CityTag = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Matches standard pill-tag aesthetic */
  background: ${props => props.$isActive ? '#1a56db' : '#ffffff'};
  color: ${props => props.$isActive ? '#ffffff' : '#4b5563'};
  border: 1px solid ${props => props.$isActive ? '#1a56db' : '#d1d5db'};

  &:hover {
    border-color: #1a56db;
    color: ${props => props.$isActive ? '#ffffff' : '#1a56db'};
  }
`;