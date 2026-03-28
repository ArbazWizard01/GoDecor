import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 0;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 0 5%;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
`;

export const TitleContent = styled.div`
  flex: 1;
`;

export const DescContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: #1f2937;
  margin: 0;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SectionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #4b5563;
  margin: 0;
  line-height: 1.6;
  max-width: 480px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px;
  margin-bottom: 30px; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    
    & > div:last-child {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CityImageWrapper = styled.div`
  width: 100%;
  height: 380px; 
  border-radius: 12px;
  overflow: hidden;
  background-color: #f3f4f6; 
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
  
  @media (max-width: 600px) {
    height: 280px; 
  }
`;

export const CityImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CityTag = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 0;
  border-radius: 6px;
  border: 1px solid #223F9A;
  color: #223F9A;
  background-color: #ffffff;
  text-align: center;
  flex: 1 1 auto;
  min-width: 90px;
  cursor: default; 

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 0;
    min-width: 70px;
  }
`;

