import React from 'react';
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
  FormContainer
} from './ContactHero.styles';
import ContactForm from './ContactForm';

const ContactHero = () => {
  return (
    <FullScreenContainer>
      <MainImage 
        src="Contact_Hero.jpg" 
        alt="Architectural interior planning" 
      />
      <ContentOverlay>
        <GridBoundingBox>
          <TopTextOverlay>
            <Title>Let's Connect</Title>
            <Subtitle>
              From concept to completion, explore thoughtfully crafted interiors for every space.
            </Subtitle>
          </TopTextOverlay>

          <BottomGlassCard>
            <CardText>
              Whether you're planning a new interior or upgrading an existing space, our team is ready to guide you. Share your requirements and we'll take it forward from there.
            </CardText>
          </BottomGlassCard>

          <FormContainer>
            <ContactForm />
          </FormContainer>

        </GridBoundingBox>
      </ContentOverlay>
    </FullScreenContainer>
  );
};

export default ContactHero;