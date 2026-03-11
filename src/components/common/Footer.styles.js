import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #111827; /* Rich dark slate */
  padding: 80px 5% 40px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

/* The 4-Column Link Grid */
export const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #9ca3af; /* Soft grey text */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff; /* Brightens on hover */
  }
`;

/* Subtle divider line */
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #374151; /* Subtle dark border */
  margin-bottom: 30px;
`;

/* Bottom Bar: Logo, Desc, Copyright, Socials */
export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
  font-size: 1.5rem;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
`;

export const BrandDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
`;

export const Copyright = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #4b5563;
  margin: 4px 0 0 0;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialIcon = styled.a`
  color: #9ca3af;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;