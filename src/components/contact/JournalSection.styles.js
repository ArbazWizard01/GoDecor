import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #1f2937;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  color: #374151;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1a56db;
    color: #1a56db;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 20px;
    gap: 16px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ArticleCard = styled.div`
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 768px) {
    min-width: 280px;
    scroll-snap-align: center;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1f2937;
  margin: 0 0 8px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 8px 0;
  }
`;

export const CardExcerpt = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 1.6;
  color: #6b7280;
  margin: 0 0 16px 0;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 13px;
    margin: 0 0 20px 0;
  }
`;

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #1a56db;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-top: auto;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1e3a8a;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;