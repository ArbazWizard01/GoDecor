import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #fdfbf9; 
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const TitleGroup = styled.div``;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
`;

export const OutlineButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #1a56db;
  background: transparent;
  border: 1px solid #1a56db;
  border-radius: 6px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #1a56db;
    color: white;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

/* 1. THE GALLERY CARD */
export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px; 
  border: 1px solid #f0f0f0; 
  
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05); 
  
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); 
  
  padding: 12px; 

  &:hover {
    transform: translateY(-6px); 
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08); 
    border-color: #e5e7eb;
  }
`;

/* 2. THE INSET IMAGE */
export const CardImage = styled.img`
  width: 100%;
  height: 180px; /* Reduced for wide, cinematic proportion */
  object-fit: cover;
  border-radius: 12px; 
`;

/* 3. REBALANCED CONTENT PADDING */
export const CardContent = styled.div`
  padding: 16px 8px 8px 8px; /* Tightened padding to reduce white space */
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif; 
  font-size: 1.2rem; /* Scaled down for neatness */
  color: #1f2937;
  margin: 0 0 8px 0; /* Tighter margin below title */
  letter-spacing: 0.5px; 
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #1a56db;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem; /* Scaled down slightly */
  color: #6b7280;
  line-height: 1.5; /* Slightly tighter line height */
  margin: 0 0 16px 0; /* Reduced margin before the link */
  flex: 1; 
`;

export const CardLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a56db;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;
  margin-top: auto;

  ${Card}:hover & {
    gap: 12px;
  }
`;