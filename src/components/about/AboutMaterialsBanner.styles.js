import styled from 'styled-components';

export const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 5%;
  overflow: hidden;

  /* THE FIX: Using a reliable premium Pexels texture image */
  background-image: url('https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1600');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 250px;
    background-attachment: scroll; 
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(17, 24, 39, 0.85); /* Deep dark overlay */
  z-index: 1;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #ffffff;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin: 0;
`;