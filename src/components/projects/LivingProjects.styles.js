import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #fdfbf9; 
  padding: 100px 5% 120px 5%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* --- TOP INTRO BLOCK --- */
export const IntroBlock = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 60px;
`;

export const IntroTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.4rem;
  color: #1f2937;
  margin: 0 0 24px 0;
  line-height: 1.3;

  @media (max-width: 768px) { font-size: 1.8rem; }
`;

export const TitleAccent = styled.div`
  width: 60px;
  height: 3px;
  background-color: #1a56db;
  margin: 0 auto 24px auto;
`;

export const IntroDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
`;

/* --- UPGRADED APPROACH BLOCK --- */
export const ApproachBlock = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 100px;
  padding: 50px;
  background-color: #ffffff; 
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04); 
  border: 1px solid rgba(0, 0, 0, 0.02);
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background-color: #1a56db;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: 768px) { padding: 30px 20px; }
`;

export const ApproachTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #1f2937;
  margin: 0 0 32px 0;
`;

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  text-align: left;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4b5563;
  background-color: #fdfbf9;
  padding: 16px 20px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  transition: border-color 0.3s ease;

  &:hover { border-color: #1a56db; }
`;

export const IconWrapper = styled.div`
  color: #1a56db;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

/* --- PROJECT GRID --- */
export const GridTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1f2937;
  margin: 0 0 40px 0;
  text-align: center;
`;

export const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; /* Matched to Kitchen projects for strict consistency */

  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

/* Specific local typography for this section */
export const CardMeta = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0 0 20px 0;
  text-transform: uppercase; 
  letter-spacing: 0.5px;
  font-weight: 600;
  flex: 1; 
`;

export const ViewLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #1a56db;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: gap 0.3s ease;
  margin-top: auto;
  
  &:hover { gap: 12px; }
`;