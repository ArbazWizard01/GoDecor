import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background-color: #f8f6f3;
  padding: 100px 5%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

export const ImageCollage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  height: 500px; /* Forces the images to stretch tall */
  @media (max-width: 600px) {
    height: 350px;
    gap: 8px;
  }
`;

export const CollageSlice = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  /* Making the middle image slightly offset vertically for that designer look */
  &:nth-child(2) {
    transform: translateY(-20px);
  }
  
  &:nth-child(3) {
    transform: translateY(20px);
  }

  @media (max-width: 992px) {
    &:nth-child(2), &:nth-child(3) {
      transform: none;
    }
  }
`;

export const SliceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #1f2937;
  line-height: 1.2;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 24px 0;
`;

export const HighlightText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: #1a56db;
  margin: 0;
  line-height: 1.6;
`;