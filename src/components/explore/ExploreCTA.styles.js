import styled from "styled-components";

export const CTAContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 5% 80px 5%;
`;

export const CTABanner = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
`;

export const CTAOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%);
  }
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 80px;
  max-width: 700px;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const CTATitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  margin: 0 0 32px 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const CTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  background-color: #ffffff;
  color: #1f2937;
  border: none;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  .arrow-icon {
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #f3f4f6;

    color: #223F9A;

    .arrow-icon {
      transform: translateX(4px);
    }
  }
`;