import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 8%;
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
  margin-bottom: 56px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  color: #1f2937;
  margin: 0 0 16px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1600px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 0 5% 20px 5%;
    gap: 16px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 110%;
    margin-left: -5%;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ServiceCard = styled.div`
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 768px) {
    min-width: 260px;
    scroll-snap-align: center;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1f2937;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  line-height: 1.6;
  color: #3b82f6;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 0 20px 0;
  }
`;

export const CardButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
  background: transparent;
  border: 1px solid #1e3a8a;
  border-radius: 4px;
  color: #1e3a8a;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  svg {
    transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  ${ServiceCard}:hover & {
    background: #1e3a8a;
    color: #ffffff;
  }

  ${ServiceCard}:hover & svg {
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
`;