import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #fdfbf9; /* Matched the premium cream background */
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

/* Using a 4-column grid to match your 4 kitchen packages */
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

/* THE SQUASHED GALLERY CARD */
export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05); /* Ghost shadow */
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  padding: 12px; /* The inner museum frame */

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08);
    border-color: #e5e7eb;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px; /* Cinematic, ultra-short proportion */
  object-fit: cover;
  border-radius: 12px;
`;

export const CardContent = styled.div`
  padding: 16px 8px 8px 8px; /* Tightened padding */
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif; /* Luxury Serif */
  font-size: 1.15rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px 0;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #1a56db;
  }
`;

/* STYLING THE BULLET POINTS TO BE COMPACT AND PREMIUM */
export const FeatureList = styled.ul`
  list-style: none; /* Removes default ugly browser bullets */
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Tight spacing between list items */
`;

export const FeatureItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem; /* Shrunk down so it doesn't take up too much vertical space */
  color: #6b7280;
  display: flex;
  align-items: center;

  /* Custom blue bullet points */
  &::before {
    content: "•";
    color: #1a56db;
    font-size: 1.2rem;
    margin-right: 8px;
    line-height: 0.5;
  }
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1a56db;
  margin: 0 0 6px 0;
`;

export const CardLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease;

  ${Card}:hover & {
    gap: 12px; /* Smooth arrow slide */
  }
`;