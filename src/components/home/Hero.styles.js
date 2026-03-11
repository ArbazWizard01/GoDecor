import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%; 
  height: 100vh; 
  min-height: 800px;
  display: flex;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  background-color: #f8f6f3;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-position: 70% center; /* Shifts the image nicely on phones */
  }
`;

export const GradientMask = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* Solid cream on the left, fading to transparent on the right */
  background: linear-gradient(to right, rgba(248, 246, 243, 1) 0%, rgba(248, 246, 243, 0.95) 45%, rgba(248, 246, 243, 0) 80%);
  z-index: 1;

  @media (max-width: 768px) {
    /* On mobile, gradient goes top-to-bottom so the text is fully readable */
    background: linear-gradient(to bottom, rgba(248, 246, 243, 0.95) 0%, rgba(248, 246, 243, 0.85) 60%, rgba(248, 246, 243, 0.3) 100%);
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 650px;
  margin-left: 8%;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0;
    padding-top: 100px; /* Pushes text below the navbar */
  }
`;

export const TopTagline = styled.p`
  color: #1a56db;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 4.5rem;
  color: #1f2937;
  margin-top: 0;
  margin-bottom: 24px;
  line-height: 1.15;

  span {
    color: #1a56db;
  }

  /* MAGIC FIX FOR MOBILE TEXT SIZE */
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  font-family: 'Inter', sans-serif;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap; /* Allows buttons to stack on super small screens */
`;

export const PrimaryButton = styled.button`
  height: 50px;
  padding: 0 32px;
  border-radius: 25px;
  background-color: #1a56db;
  color: #fff;
  border: none;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover { background-color: #164bb8; }
`;

export const SecondaryButton = styled.button`
  height: 50px;
  padding: 0 32px;
  border-radius: 25px;
  background-color: transparent;
  color: #1a56db;
  border: 1px solid #1a56db;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover { background-color: rgba(26, 86, 219, 0.05); }
`;

export const StatsContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: 8%;
  z-index: 2;
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    /* Move stats to bottom-left on mobile so they don't get lost */
    right: auto;
    left: 5%;
    bottom: 30px;
    gap: 20px;
  }
`;

export const StatBox = styled.div`
  text-align: center;

  h2 {
    margin: 0;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      color: #1f2937; /* Change to dark grey since mobile background is cream */
    }
  }

  p {
    margin: 0;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      color: #4b5563; /* Change to dark grey for readability */
      font-size: 0.8rem;
    }
  }
`;