import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 5% 48px 5%;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 32px;
    padding: 60px 5% 32px 5%;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 580px;

  @media (max-width: 992px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Overline = styled.h6`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 12px;
  }
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 44px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.15;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`;

export const Highlight = styled.span`
  color: #223F9A;
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 16px;
  height: 48px;
  background-color: #ffffff;
  margin-bottom: 40px;
  max-width: 480px;

  .search-icon {
    color: #9ca3af;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 44px;
    margin-bottom: 24px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #1f2937;
  padding-left: 12px;
  background: transparent;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 12px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 12px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px 8px;
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover > div {
    background-color: #f0f4ff;
    color: #223F9A;
    border-color: #223F9A;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background-color: #ffffff;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #4b5563;
  transition: all 0.2s ease;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 18px;
    border-radius: 10px;
  }
`;

export const CategoryLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  background-color: #223F9A;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a327d;
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 24px;
  background-color: transparent;
  color: #223F9A;
  border: 1px solid #223F9A;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
  }
`;

export const HeroImages = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(12, 1fr);
  gap: 16px;
  height: 520px;
  width: 100%;

  @media (max-width: 992px) {
    height: 440px;
  }

  @media (max-width: 768px) {
    height: 380px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    height: 280px;
    gap: 8px;
  }
`;

export const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: 480px) {
    border-radius: 8px;
  }

  &.img-tall {
    grid-column: 1;
    grid-row: 1 / span 7;
  }
  &.img-short {
    grid-column: 1;
    grid-row: 8 / span 5;
  }
  &.img-sq-1 {
    grid-column: 2;
    grid-row: 1 / span 4;
  }
  &.img-sq-2 {
    grid-column: 2;
    grid-row: 5 / span 4;
  }
  &.img-sq-3 {
    grid-column: 2;
    grid-row: 9 / span 4;
  }
`;