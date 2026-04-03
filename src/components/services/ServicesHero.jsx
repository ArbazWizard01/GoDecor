import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FullScreenContainer,
  MainImage,
  ContentOverlay,
  GridBoundingBox,
  TopTextOverlay,
  Title,
  Subtitle,
  BottomGlassCard,
  CardText,
  ConsultationButton
} from './ServicesHero.styles';

const ServicesHero = () => {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      <MainImage 
        src="GoDecor_Service_Hero.jpg" 
        alt="Modern interior solutions" 
      />
      
      <ContentOverlay>
        <GridBoundingBox>
          <TopTextOverlay>
            <Title>Interior Solutions, Designed Around You</Title>
            <Subtitle>
              From concept to completion, explore thoughtfully crafted interiors for every space.
            </Subtitle>
          </TopTextOverlay>

          <BottomGlassCard>
            <CardText>
              At GoDecor, we offer a complete range of interior design solutions tailored to modern homes and workspaces. Whether it's a modular kitchen, a comfortable living area, or a fully integrated interior, our approach combines functionality, aesthetics, and precision execution to bring your vision to life.
            </CardText>
          </BottomGlassCard>

          <ConsultationButton onClick={() => navigate('/contact')}>
            Book a Free Consultation
          </ConsultationButton>
        </GridBoundingBox>
      </ContentOverlay>
    </FullScreenContainer>
  );
};

export default ServicesHero;