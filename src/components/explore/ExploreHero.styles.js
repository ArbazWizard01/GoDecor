import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 5% 80px 5%;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
    padding: 120px 5% 40px 5%;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 580px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

export const Overline = styled.h6`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.15;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 40px;
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
  margin-bottom: 36px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0 16px;
  height: 52px;
  background-color: #ffffff;
  margin-bottom: 48px;
  max-width: 480px;

  .search-icon {
    color: #9ca3af;
    font-size: 20px;
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
  gap: 24px 16px;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover > div {
    background-color: #f0f4ff;
    color: #223F9A;
    border-color: #223F9A;
  }
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: #F5F1EB;
  border: 1px solid #f3f4f6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #4b5563;
  transition: all 0.2s ease;
`;

export const CategoryLabel = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  padding: 0 28px;
  background-color: #223F9A;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
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
  height: 48px;
  padding: 0 28px;
  background-color: transparent;
  color: #223F9A;
  border: 1px solid #223F9A;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f4ff;
  }
`;

export const HeroImages = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  height: 620px;

  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  min-height: 0;
`;

export const ImageTall = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1.8;
  object-fit: cover;
  border-radius: 16px;
`;

export const ImageShort = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1.2;
  object-fit: cover;
  border-radius: 16px;
`;

export const ImageSquare = styled.img`
  width: 100%;
  height: 100%;
  min-height: 0;
  flex: 1;
  object-fit: cover;
  border-radius: 16px;
`;