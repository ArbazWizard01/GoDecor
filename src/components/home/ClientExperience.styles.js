import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  color: #1f2937;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const TitleAccent = styled.div`
  width: 160px;
  height: 4px;
  background-color: #1a56db;
  margin: 0 auto 16px auto;

  @media (max-width: 768px) {
    width: 100px;
    margin: 0 auto 12px auto;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #6b7280;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 50px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  border: 1px solid #eaeaea;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const QuoteIcon = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 64px;
  color: #dbeafe;
  line-height: 0.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;

export const QuoteText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 30px;
  min-height: 80px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

export const AuthorName = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 4px 0;
`;

export const AuthorLocation = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #9ca3af;
  margin: 0 0 40px 0;

  @media (max-width: 768px) {
    margin: 0 0 32px 0;
  }
`;

export const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 0;
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1a56db;
    color: #1a56db;
  }
`;

export const PaginationIndicator = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
    flex: 1;
    justify-content: center;
  }
`;

export const Dot = styled.div`
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.$active ? '#1a56db' : '#d1d5db'};
  width: ${props => props.$active ? '24px' : '8px'};
  transition: all 0.3s ease;
`;