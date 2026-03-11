import styled from 'styled-components';
import { Button } from 'antd';

export const CTAWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Dark textured shelf/living room background */
  background-image: url('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1600&auto=format&fit=crop'); 
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(17, 24, 39, 0.75); /* Dark overlay */
  z-index: 1;
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CTADesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const PrimaryButton = styled(Button)`
  height: 50px !important;
  padding: 0 32px !important;
  border-radius: 25px !important;
  background-color: #1a56db !important;
  color: #fff !important;
  font-weight: 500 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 1rem !important;
  border: none !important;

  &:hover {
    background-color: #164bb8 !important;
    transform: translateY(-2px);
  }
`;

export const SecondaryLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: #60a5fa; /* Lighter blue to pop on the dark background */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 10px;
  }
`;