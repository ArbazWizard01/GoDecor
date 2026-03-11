import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* --- TOP HALF: Intro Text --- */
export const TopContent = styled.div`
  max-width: 800px;
  margin-bottom: 80px;
`;

export const MainTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SubTextBold = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  color: #4b5563;
  margin: 0 0 16px 0;
`;

export const SubText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
`;

/* --- BOTTOM HALF: The Model --- */
export const ModelSection = styled.div`
  width: 100%;
  max-width: 1100px;
  border: 1px solid #eaeaea; /* Light border around the whole model section like Figma */
  border-radius: 12px;
  padding: 60px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const ModelTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const TitleAccent = styled.div`
  width: 60px;
  height: 2px;
  background-color: #1a56db;
  margin: 0 auto 50px auto;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stacks to 1 column on phones */
    gap: 30px;
  }
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Creates that cool dashed circle around the numbers */
export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed #d1d5db; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  color: #1a56db;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 24px;
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