import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const TitleAccent = styled.div`
  width: 60px;
  height: 3px;
  background-color: #1a56db;
  margin: 0 auto 16px auto;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
`;

/* FILTER BUTTONS CONTAINER */
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

/* FILTER BUTTON STYLE (with Active state prop handling) */
export const FilterButton = styled(Button)`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 50px;
  height: 40px;
  padding: 0 24px;
  border: 1px solid #1a56db;
  transition: all 0.3s ease;

  /* Use prop to determine style (Active vs. Inactive) */
  background-color: ${props => props.$isActive ? '#1a56db' : 'transparent'} !important;
  color: ${props => props.$isActive ? '#ffffff' : '#1a56db'} !important;

  &:hover {
    background-color: #1a56db !important;
    color: #ffffff !important;
  }
`;

/* GALLERY GRID */
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 60px;

  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

/* GALLERY ITEM (The photo card) */
export const GalleryItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Creates perfect square containers for the photos */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  cursor: pointer;
  
  /* The Hover Overlay */
  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%);
    opacity: 0; /* Hidden by default */
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    
    &::after {
      opacity: 1; /* Shows overlay on hover */
    }
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryItem}:hover & {
    transform: scale(1.05); /* Subtle zoom on hover */
  }
`;

/* Text content inside the hover overlay */
export const ItemContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  color: #ffffff;
  z-index: 2;
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease;
  transform: translateY(20px);
  
  ${GalleryItem}:hover & {
    opacity: 1; /* Shows text on hover */
    transform: translateY(0);
  }
`;

export const ItemTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  color: #ffffff;
  margin: 0 0 8px 0;
`;

export const ItemCategory = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

/* "SEE ALL PROJECTS" BUTTON */
export const SeeAllButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #1a56db;
  background: transparent;
  border: 1px solid #1a56db;
  border-radius: 6px;
  padding: 12px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #1a56db;
    color: white;
  }
`;