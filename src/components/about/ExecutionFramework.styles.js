import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #ffffff;
  padding: 100px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const TitleAccent = styled.div`
  width: 60px;
  height: 2px;
  background-color: #1a56db;
  margin: 0 auto 60px auto;
`;

export const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  position: relative;

  /* The horizontal line that connects everything on desktop */
  &::before {
    content: '';
    position: absolute;
    top: 24px; /* Centers line behind the circles */
    left: 5%;
    right: 5%;
    height: 1px;
    background-color: #d1d5db;
    z-index: 1;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
    
    /* Hides the horizontal line on mobile */
    &::before {
      display: none; 
    }
  }
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 0 15px;
  position: relative;
  z-index: 2; /* Keeps circles above the horizontal line */
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #1a56db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #1a56db;
  margin-bottom: 20px;
  box-shadow: 0 0 0 8px #ffffff; /* Creates a clean break in the timeline line */
`;

export const StepTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: #1f2937;
  margin: 0 0 12px 0;
`;

export const StepDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
`;