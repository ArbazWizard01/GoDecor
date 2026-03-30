import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #111827;
  padding: 80px 5% 40px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 50px 5% 30px 5%;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
    margin-bottom: 40px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const FooterLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #9ca3af;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #374151;
  margin-bottom: 30px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 500px;
`;

export const FooterLogo = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const BrandDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #4b5563;
  margin: 4px 0 0 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  color: #9ca3af;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;