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
  max-width: 1328px;
  border-radius:12px; 
  height: 260px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  
  /* A uniform dark overlay so the white text pops perfectly */
  background: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0,0,0,0.4)),
              url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left; 
  padding-left: 80px;
  max-width: 600px; 

  @media (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #ffffff;
  margin: 0 0 32px 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  @media (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 24px;
    padding: 0 20px;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #ffffff; 
  color: #1a56db; 
  border: none;
  border-radius: 4px; 
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  svg {
    font-size: 0.9rem;
    display: flex; /* Prevents weird baseline drops */
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smooth easing */
  }

  &:hover {
    background-color: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    
    svg {
      transform: translateX(6px); /* Slides the arrow to the right smoothly */
    }
  }
`;