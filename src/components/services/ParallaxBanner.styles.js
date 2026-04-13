import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 80px 8%;
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
  min-height: 360px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 60px 80px;
  overflow: hidden;
  background-image: url('parallax-bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 300px;
    background-attachment: scroll;
    padding: 40px 30px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: #ffffff;
  margin: 0 0 16px 0;
  font-weight: 500;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 12px 0;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;