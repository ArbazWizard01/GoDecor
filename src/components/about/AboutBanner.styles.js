import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;

export const BannerBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 1600px;
  min-height: 280px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.3) 100%), 
    url('AboutBanner.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 40px 30px;
    min-height: 260px;
    background-image: 
      linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%), 
      url('AboutBanner.jpg');
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: #ffffff;
  margin: 0 0 24px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 0 0 20px 0;
    line-height: 1.2;
  }
`;

export const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #1f2937;
  border: none;
  height: 48px;
  padding: 0 28px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;