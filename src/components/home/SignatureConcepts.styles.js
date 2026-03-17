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

/* THE UPGRADED PREMIUM CARD */
export const SliderCard = styled.div`
  background: #ffffff;
  border-radius: 16px; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  
  box-shadow: 0 16px 24px -8px rgba(0, 0, 0, 0.1); 
  
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 32px -10px rgba(0, 0, 0, 0.18); 
    border-color: #d1d5db;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.6s ease;

  /* Re-enabled the smooth zoom effect! */
  // ${SliderCard}:hover & {
  //   transform: scale(1.05);
  // }
`;

export const CardContent = styled.div`
  padding: 28px 24px; 
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;
  transition: color 0.3s ease;

  ${SliderCard}:hover & {
    color: #1a56db;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 24px 0;
  flex: 1;
`;

export const CardPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
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

  ${SliderCard}:hover & {
    gap: 12px; 
  }
`;