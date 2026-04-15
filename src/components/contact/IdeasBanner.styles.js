import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
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
  max-width: 1600px;
  min-height: 240px;
  border-radius: 12px;
  overflow: hidden;
  background-image: url('Contact_Parallax.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 200px;
    background-attachment: scroll;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: #ffffff;
  margin: 0 0 20px 0;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 16px 0;
  }
`;

export const CtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background-color: #ffffff;
  color: #1f2937;
  border: none;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f3f4f6;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;