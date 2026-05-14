import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 5% 80px 5%;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
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
`;

export const SectionDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
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
  margin: 0 auto 48px auto;   
`;

export const FeaturedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.2) 55%, rgba(0, 0, 0, 0) 100%);
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 100%);
  }
`;

export const FeaturedCardInner = styled.div`
  position: relative;
  z-index: 2;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const FeaturedContent = styled.div`
  max-width: 540px;
`;

export const FeaturedTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 28px; 
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
`;

export const FeaturedDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #d1d5db;
  line-height: 1.6;
  margin: 0 0 32px 0;
`;

export const FeaturesList = styled.div`
  p {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #9ca3af;
    margin: 0 0 16px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 400;

  .feature-icon {
    font-size: 18px;
    color: #ffffff;
  }
`;

export const FeaturedBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PriceLabel = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.1;
`;

export const FeaturedPrice = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 38px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
`;

export const PackageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
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
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

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
  height: 240px;
  object-fit: cover;
`;

export const SubCardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 240px);
`;

export const SubCardTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const SubCardDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 24px 0;
  min-height: 42px;
`;

export const SubFeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 8px;
  margin-bottom: 32px;
  flex-grow: 1;
`;

export const SubFeatureItem = styled.div`
  background-color: #F5F1EB;
  border-radius: 4px;
  padding: 8px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
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
  gap: 16px;
  margin-top: auto;
`;

export const SubCardPrice = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #223F9A;
`;

export const ExplorePackageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 44px;
  background-color: transparent;
  color: #223F9A;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #223F9A;
    background-color: #f0f4ff;
  }
`;