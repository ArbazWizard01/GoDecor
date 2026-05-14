import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 5%;

  @media (max-width: 768px) {
    padding: 32px 5%;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

export const TitleBlock = styled.div`
  max-width: 640px;
`;

export const SectionTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;

  @media (max-width: 480px) {
    font-size: 20px;
    margin: 0 0 8px 0;
  }
`;

export const SectionDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 16px;
  background-color: transparent;
  color: #223F9A;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    border-color: #223F9A;
    background-color: #f0f4ff;
  }
`;

export const FeaturedCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  margin: 0 auto 32px auto;   
`;

export const FeaturedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 55%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 100%);
  }
`;

export const FeaturedCardInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;

  @media (max-width: 768px) {
    padding: 32px 24px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const FeaturedContent = styled.div`
  max-width: 540px;
`;

export const FeaturedTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 26px; 
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 0 0 12px 0;
  }
`;

export const FeaturedDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #d1d5db;
  line-height: 1.6;
  margin: 0 0 24px 0;

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 0 20px 0;
  }
`;

export const FeaturesList = styled.div`
  p {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #9ca3af;
    margin: 0 0 12px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 400;

  .feature-icon {
    font-size: 16px;
    color: #ffffff;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    gap: 8px;
  }
`;

export const FeaturedBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 24px;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PriceLabel = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FeaturedPrice = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const PackageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  background-color: #ffffff;
  color: #1f2937;
  border: none;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SubCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  }
`;

export const SubCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const SubCardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const SubCardTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const SubCardDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 20px 0;
  min-height: 40px;

  @media (max-width: 480px) {
    margin: 0 0 16px 0;
    min-height: auto;
  }
`;

export const SubFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 8px;
  margin-bottom: 24px;
  flex-grow: 1;

  @media (max-width: 480px) {
    margin-bottom: 20px;
    gap: 8px;
  }
`;

export const SubFeatureItem = styled.div`
  background-color: #F5F1EB;
  border-radius: 4px;
  padding: 8px;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 500;
  color: #4b5563;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:last-child {
    color: #1f2937;
    font-weight: 600;
  }
`;

export const SubCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`;

export const SubCardPrice = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #223F9A;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ExplorePackageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  background-color: transparent;
  color: #223F9A;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #223F9A;
    background-color: #f0f4ff;
  }
`;