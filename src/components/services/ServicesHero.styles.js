import styled from 'styled-components';

export const HeroWrapper = styled.section`
  /* Uses the same background color as the Home page hero */
  background-color: #f8f6f3;
  min-height: 100vh;
  padding: 120px 5% 60px 5%; /* Top padding clears the fixed navbar */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    padding-top: 140px;
    min-height: auto;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const Subtitle = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #1a56db;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #1f2937;
  line-height: 1.1;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ExploreLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #1a56db;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 12px; /* Smoothly pushes the arrow to the right on hover */
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 992px) {
    height: 400px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;