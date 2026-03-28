import styled from 'styled-components';

export const BannerWrapper = styled.section`
  padding: 60px 0;
  background-color: #ffffff;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
`;

export const BannerCard = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 12px;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1920');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0 80px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 40px 30px;
    height: 260px; 
    align-items: stretch; 
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    justify-content: space-between; 
    gap: 0;
  }
`;

export const BannerTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  color: #ffffff;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px; 
  }
`;

export const BannerButton = styled.button`
  background: #ffffff;
  color: #1a56db;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  svg {
    font-size: 14px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`;