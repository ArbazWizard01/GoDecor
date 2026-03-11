import styled from 'styled-components';

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 160px 5% 120px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* A beautiful architectural planning or living room image */
  background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Keep our premium parallax effect! */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(17, 24, 39, 0.75); /* Dark elegant overlay */
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;
`;