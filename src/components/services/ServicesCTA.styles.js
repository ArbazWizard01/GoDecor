import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/* --- TOP HALF: Target Audience --- */
export const TargetContainer = styled.div`
  padding: 80px 5%;
  background-color: #ffffff;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const TargetTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1f2937;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const TargetDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0 0 16px 0;
`;

export const TargetHighlight = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #1a56db;
  margin: 0;
`;

/* --- BOTTOM HALF: The CTA Banner --- */
export const CTAWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 120px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Premium light living room background */
  background-image: url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1600&auto=format&fit=crop'); 
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  /* A strong white overlay so the text pops, exactly like the Figma design */
  background-color: rgba(255, 255, 255, 0.85); 
  z-index: 1;
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CTATitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #1f2937;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const CTADesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #4b5563;
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
  box-shadow: 0 4px 14px rgba(26, 86, 219, 0.2) !important;

  &:hover {
    background-color: #164bb8 !important;
    transform: translateY(-2px);
  }
`;

export const SecondaryLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: #1a56db;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: gap 0.3s ease;

  &:hover {
    gap: 10px; /* Arrow slides right on hover */
  }
`;