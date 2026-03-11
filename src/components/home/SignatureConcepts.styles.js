import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
  background-color: #f9f8f6;
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

// --- SLIDER STYLES ---
export const CardsSlider = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto; /* Enables horizontal scrolling */
  scroll-snap-type: x mandatory; /* Snaps cards into place */
  padding-bottom: 30px; /* Room for drop shadows */
  margin-right: -8%; /* Lets the slider bleed off the right edge cleanly */
  padding-right: 8%;

  /* Hides the scrollbar for a clean UI */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderCard = styled.div`
  /* Forces the card to take up 1/3 of the space (showing 3 cards) */
  flex: 0 0 calc(33.333% - 16px); 
  min-width: 320px; /* Prevents squishing on small screens */
  scroll-snap-align: start; /* Where the card snaps when scrolling stops */
  
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  /* Responsiveness */
  @media (max-width: 1024px) { flex: 0 0 calc(50% - 12px); }
  @media (max-width: 768px) { flex: 0 0 100%; }
`;

// Reuse the inner parts
export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
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
  margin: 0 0 8px 0;
`;

export const CardLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a56db;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover { text-decoration: underline; }
`;