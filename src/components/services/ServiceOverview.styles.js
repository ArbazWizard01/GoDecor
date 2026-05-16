import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fdfbf7;
  display: flex;
  justify-content: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("banner-bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.1;
    z-index: 1;
    pointer-events: none;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 80px 5%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 48px 5%;
  }
`;

export const BannerContent = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 56px 64px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 12px;
  }
`;

export const MainTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 38px;
  color: #1f2937;
  margin: 0 0 20px 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 16px 0;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin: 0 0 12px 0;
  }
`;

export const SubTextBold = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #374151;
  margin: 0 0 16px 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
  max-width: 950px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;