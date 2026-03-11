import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  border-radius: 20px; /* Gives it a premium card feel */
  overflow: hidden;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;

  @media (max-width: 768px) {
    padding: 60px 30px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  
  /* The magic gradient: Fades from solid white on the left to transparent on the right */
  background: linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.1) 100%),
              /* Swapped to a premium, modern living room interior with shelving! */
              url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 500px; /* Keeps the text stacked neatly on the left side */
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #1f2937;
  margin: 0 0 16px 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #4b5563;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background-color: #1a56db;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #164bb8;
    transform: translateY(-2px); /* Slight lift on hover */
  }
`;

export const SecondaryLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #1a56db;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #164bb8;
    text-decoration: underline;
  }
`;