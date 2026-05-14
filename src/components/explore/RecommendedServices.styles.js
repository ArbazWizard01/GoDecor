import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 5% 48px 5%;

  @media (max-width: 768px) {
    padding: 24px 5% 32px 5%;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  background-color: transparent;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #223F9A;
    color: #223F9A;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 16px 8px 32px 8px;
  margin: -16px -8px -32px -8px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const Card = styled.div`
  min-width: 260px;
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 480px) {
    min-width: 240px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 20px;
  min-height: 40px;
`;

export const CardPrice = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #223F9A;
`;

export const HighlightsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 24px;
    padding-top: 24px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 16px;
    padding-top: 24px;
  }
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const HighlightIcon = styled.div`
  font-size: 22px;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HighlightText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HighlightTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const HighlightDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 11px;
  color: #6b7280;
  line-height: 1.4;
  margin: 0;
`;