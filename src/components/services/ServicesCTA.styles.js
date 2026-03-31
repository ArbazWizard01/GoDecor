import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 20px 5%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1328px;
  min-height: 380px;
  border-radius: 12px;
  overflow: hidden;
  background-image: url('service-cta-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 320px;
    border-radius: 8px;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, .65) 20%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%);
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 80px;
  max-width: 750px;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const CtaTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  color: #ffffff;
  margin: 0 0 32px 0;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 0 0 24px 0;
  }
`;

export const CtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 28px;
  background-color: #ffffff;
  color: #1f2937;
  border: none;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 14px;
  }
`;