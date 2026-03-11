import styled from 'styled-components';

export const HeroWrapper = styled.section`
  background-color: #fdfbf9; /* A very soft, warm off-white */
  min-height: 90vh;
  padding: 140px 5% 80px 5%;
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
    gap: 50px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;

  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const Subtitle = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: #1a56db;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  color: #1f2937;
  line-height: 1.1;
  margin: 0 0 24px 0;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

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

export const ScrollText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #9ca3af; /* Light grey */
  margin: 0;
  font-style: italic;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 650px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);

  @media (max-width: 992px) {
    height: 400px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;