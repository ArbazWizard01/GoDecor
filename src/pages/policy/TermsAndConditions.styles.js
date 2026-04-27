import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 304px;
  background: linear-gradient(90deg, #e9ecf8 0%, #f5f1eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px;
    padding: 0 5%;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const PageTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  color: #1f2937;
  margin: 0;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 80px 5%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 48px 5%;
  }

  @media (max-width: 480px) {
    padding: 32px 5%;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  color: #1f2937;
  font-weight: 600;
  margin: 0 0 16px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin: 0 0 12px 0;
  }
`;

export const IntroText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 56px 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0 0 40px 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 0 0 32px 0;
  }
`;

export const Section = styled.div`
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #1f2937;
  font-weight: 600;
  margin: 0 0 20px 0;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 48px;
    height: 3px;
    background-color: #1a56db;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0 0 16px 0;
    padding-bottom: 10px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #4b5563;
  line-height: 1.8;
  margin: 0 0 16px 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const ContactInfo = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #4b5563;
  line-height: 1.8;
  background-color: #f9fafb;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  margin-bottom: 16px;

  strong {
    color: #1f2937;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
  }
`;