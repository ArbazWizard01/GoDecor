import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
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

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
`;

/* The connecting dashed line that sits behind the cards */
export const DashedLine = styled.div`
  position: absolute;
  top: 45px; /* Aligns with the 'STEP X' text */
  left: 5%;
  right: 5%;
  height: 2px;
  border-top: 2px dashed #60a5fa; /* Soft blue dashed line */
  z-index: 1;

  @media (max-width: 992px) {
    display: none; /* Hides the line when cards stack vertically on mobile */
  }
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
  z-index: 2; /* Keeps the cards ON TOP of the dashed line */

  @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const StepCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  border: 1px solid #f3f4f6;
  position: relative;
  overflow: hidden; /* Keeps the giant number from spilling out */
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

/* The giant, faint background number */
export const BackgroundNumber = styled.span`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Playfair Display', serif;
  font-size: 7rem;
  color: #f9fafb; /* Extremely light grey */
  z-index: 0;
  pointer-events: none; /* Stops the number from interfering with clicking/selecting text */
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; /* Keeps the text ON TOP of the giant background number */
`;

export const StepLabel = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b82f6; /* Blue accent */
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 12px;
`;

export const StepTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;
  line-height: 1.3;
`;

export const StepDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;