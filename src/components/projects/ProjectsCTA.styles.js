import styled from 'styled-components';
import { Button } from 'antd';

export const CTAWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Dark textured living room background */
  background-image: url('https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1600'); 
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  max-width: 700px;
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
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

export const PrimaryButton = styled(Button)`
  height: 50px !important;
  padding: 0 32px !important;
  border-radius: 25px !important;
  background-color: #ffffff !important;
  color: #1a56db !important;
  font-weight: 600 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 1rem !important;
  border: none !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #f3f4f6 !important;
    transform: translateY(-2px);
  }
`;