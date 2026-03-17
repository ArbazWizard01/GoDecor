import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #fdfbf9; /* Using the premium cream background for contrast against white cards */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

/* THE NEW PREMIUM CARD STRUCTURE */
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #eaeaea; 
  
  /* NEW BOTTOM SHADOW: 
     The '16px' pushes it straight down. 
     The '-8px' spread prevents it from leaking out the top/sides! */
  box-shadow: 0 16px 24px -8px rgba(0, 0, 0, 0.1); 
  
  overflow: hidden; 
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Smoother, premium animation curve */
  height: 100%;

  &:hover {
    transform: translateY(-8px); 
    
    /* Hover state makes the bottom shadow deeper and slightly darker */
    box-shadow: 0 24px 32px -10px rgba(0, 0, 0, 0.18); 
    border-color: #d1d5db;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  /* Removed border radius and margin because the Card handles it now */
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

/* NEW COMPONENT: Adds padding inside the card below the image */
export const CardContent = styled.div`
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ensures buttons align at the bottom if text heights differ */
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #1f2937;
  margin: 0 0 12px 0;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #1a56db;
  }
`;

export const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 24px 0;
`;

export const LearnMoreLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1a56db;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  transition: gap 0.3s ease;

  ${Card}:hover & {
    gap: 12px;
  }
`;