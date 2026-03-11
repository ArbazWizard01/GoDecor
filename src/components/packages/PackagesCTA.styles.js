import styled from 'styled-components';
import { Button } from 'antd';

export const CTAWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Dark, moody interior lighting background */
  background-image: url('https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop'); 
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* A dark overlay so the white text pops perfectly */
  background-color: rgba(0, 0, 0, 0.65); 
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CTADesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

export const StyledButton = styled(Button)`
  height: 50px !important;
  padding: 0 32px !important;
  border-radius: 25px !important;
  background-color: #ffffff !important;
  color: #1f2937 !important; /* Dark text on white button for contrast */
  font-weight: 600 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 1rem !important;
  border: none !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #f3f4f6 !important;
    color: #1a56db !important; /* Text turns blue on hover */
    transform: translateY(-2px);
  }
`;