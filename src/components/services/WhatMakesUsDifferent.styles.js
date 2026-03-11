import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

/* --- LEFT COLUMN --- */
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  line-height: 1.2;
  margin: 0 0 16px 0;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const TitleAccent = styled.div`
  width: 80px;
  height: 3px;
  background-color: #1a56db;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

/* --- RIGHT COLUMN (TIMELINE) --- */
export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px; /* Aligns visually with the text on the left */
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
  padding-bottom: 40px; /* Space between steps */

  /* Removes padding on the very last item so it doesn't leave empty space */
  &:last-child {
    padding-bottom: 0;
  }
`;

export const TimelineGraphic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 20px; /* Locks the width so the line stays centered */
`;

export const TimelineCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #1a56db;
  background-color: #ffffff;
  z-index: 2;
  margin-top: 4px; /* Aligns circle with the first line of text */
`;

/* This line drops down from the circle to the next item */
export const TimelineLine = styled.div`
  position: absolute;
  top: 22px; 
  bottom: 0;
  width: 2px;
  background-color: #1a56db;
  z-index: 1;
  /* If we pass the $isLast prop, we hide the line! */
  display: ${props => props.$isLast ? 'none' : 'block'};
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StepTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const StepDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;