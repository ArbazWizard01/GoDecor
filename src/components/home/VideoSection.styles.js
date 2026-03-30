import styled from 'styled-components';
import { Button } from "antd";

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const TitleGroup = styled.div`
  max-width: 75%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #1f2937;
  margin: 0 0 12px 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;
  max-width: 700px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled(Button)`
  color: #1a56db !important;
  border-color: #1a56db !important;
  border-radius: 6px !important;
  font-weight: 500 !important;
  padding: 8px 24px !important;
  height: auto !important;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 8.5; 
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06); 
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;
    border-radius: 12px;
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;