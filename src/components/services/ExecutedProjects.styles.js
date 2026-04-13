import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #1f2937;
  margin: 0 0 16px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const TitleAccentLine = styled.div`
  width: 160px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 20px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 40px;
    margin: 0 auto 16px auto;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    gap: 8px;
  }
`;

export const FilterButton = styled.button`
  padding: 10px 24px;
  border-radius: 30px;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ $isActive }) => ($isActive ? '#1a56db' : '#f4f4f2')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#4b5563')};

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#1a56db' : '#e5e5e5')};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ProjectCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background: #fdfdfd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

export const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;

  ${ProjectCard}:hover & {
    transform: scale(1.04);
  }
`;