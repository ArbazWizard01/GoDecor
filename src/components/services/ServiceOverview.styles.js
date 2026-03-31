import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: none;
  background-color: #FDFBF7;
  padding: 60px 5%;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 5%;
  }
`;

export const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('banner-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.10;
  z-index: 1;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  width: 100%;
  background: #FFFFFF29;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(8px);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 12px;
  }
`;

export const MainTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  color: #1f2937;
  margin: 0 0 24px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 16px 0;
  }
`;

export const SubTextBold = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #374151;
  margin: 0 0 16px 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
  max-width: 750px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;