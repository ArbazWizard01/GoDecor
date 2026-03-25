import styled from 'styled-components';

/* FORCING FULL SCREEN WIDTH */
export const FullScreenContainer = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  
  /* THE BIG FIX: Massive increase in height for negative space */
  height: 100vh; 
  min-height: 800px; 

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%);
    z-index: 1;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TopTextOverlay = styled.div`
  position: absolute;
  top: 15%; 
  left: 8%; 
  text-align: left;
  z-index: 2;
  width: 90%;
  max-width: 600px;

  @media (max-width: 768px) {
    top: 12%;
    left: 5%;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem; /* Dropped from 3.8rem/3.2rem */
  color: #ffffff;
  margin: 0 0 16px 0;
  font-weight: 600;
  line-height: 1.15;
  text-shadow: 0 4px 12px rgba(0,0,0,0.4);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem; /* Dropped for cleaner look */
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
`;

export const BottomGlassCard = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  z-index: 2;
  width: 100%;
  max-width: 650px; /* Increased from 500px to give text room */
  background: rgba(0, 0, 0, 0.35); 
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 30px 40px; /* Slightly wider padding inside */
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    bottom: 5%;
    max-width: 90%;
    padding: 20px;
  }
`;

export const CardText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem; /* Down from 0.95/1.05rem for an editorial feel */
  line-height: 1.7; /* Slightly taller line height for readability */
  color: #ffffff;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ExploreButton = styled.button`
  position: absolute;
  bottom: 12%; /* Must match the BottomGlassCard so they align perfectly */
  right: 8%;
  z-index: 2;
  background: #ffffff;
  color: #1a56db;
  border: none;
  height: 50px;
  padding: 0 32px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem; 
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;