import styled from 'styled-components';

export const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 5%;
  overflow: hidden;

  /* Premium Parallax Effect using a lush green plant image */
  background-image: url('https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1600');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    min-height: 300px;
    background-attachment: scroll; 
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(17, 24, 39, 0.6); /* Slightly lighter overlay to let the green pop */
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
  font-size: 3.2rem;
  color: #ffffff;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
`;