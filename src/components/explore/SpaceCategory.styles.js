import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 5%;
  border-bottom: 1px solid #f3f4f6;

  &:last-of-type {
    border-bottom: none;
  }
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

  .arrow-icon {
    transition: transform 0.2s ease;
  }

  &:hover {
    border-color: #223F9A;
    color: #223F9A;

    .arrow-icon {
      transform: translateX(4px);
    }
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SliderContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 16px 8px 32px 8px;
  margin: -16px -8px -32px -8px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === "left" ? "left: -20px;" : "right: -20px;")}
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  font-size: 22px;
  transition: all 0.2s ease;

  &:hover {
    color: #223F9A;
    border-color: #223F9A;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 320px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 600px) {
    flex: 0 0 280px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const CardDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 24px 0;
  flex-grow: 1;
`;

export const CardPrice = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #223F9A;
  margin-top: auto;
`;