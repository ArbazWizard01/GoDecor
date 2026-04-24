import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #141414;
  padding: 80px 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1248px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 48px;

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
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 20px;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
  line-height: 1;
`;

export const BrandDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.96);
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #141414;
    background-color: #ffffff;
    border-color: #ffffff;
  }
`;