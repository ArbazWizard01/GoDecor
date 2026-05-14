import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 5% 80px 5%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
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
  gap: 24px;
  overflow-x: auto;
  padding-top: 16px;
  padding-bottom: 24px;
  padding-left: 4px;
  padding-right: 4px;
  margin-top: -16px;
  margin-left: -4px;
  margin-right: -4px;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  min-width: 280px;
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 24px;
  min-height: 40px;
`;

export const CardPrice = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #223F9A;
`;

export const HighlightsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top:24px;
  padding: 32px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 250px;
  padding: 16px 20px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
`;

export const HighlightIcon = styled.div`
  font-size: 24px;
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