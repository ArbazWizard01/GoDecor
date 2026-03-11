import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 16px 0;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.6;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 column on phones */
    gap: 32px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  group: hover; /* Allows us to trigger child animations on parent hover */
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05); /* Smooth zoom effect on hover */
  }
`;

export const CardTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1f2937;
  margin: 0 0 8px 0;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #1a56db; /* Title turns blue on hover */
  }
`;

export const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 16px 0;
`;

export const LearnMoreLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #1a56db;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto; /* Pushes the link to the bottom if text heights vary */
  transition: gap 0.3s ease;

  ${Card}:hover & {
    gap: 10px; /* Pushes the arrow slightly right on hover */
  }
`;