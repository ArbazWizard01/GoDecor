import React from 'react';
import {
  SectionWrapper,
  Container,
  TopGrid,
  TitleWrapper,
  Title,
  IntroColumn,
  IntroText,
  ImageWrapper,
  CutoutTopRight,
  CutoutBottomLeft,
  MainImage,
  BottomGrid,
  VisionColumn,
  QuoteIcon,
  VisionText,
  TextureImage,
  AboutCardWrapper,
  AboutCard,
  AboutCardTitle,
  AboutCardText
} from './StoryVisionSection.styles';

const StoryVisionSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <TopGrid>
          <TitleWrapper>
            <Title>Our Story, Vision & Values</Title>
          </TitleWrapper>
          <IntroColumn>
            <IntroText>
              At GoDecor, our journey began with a simple belief—that great design should be both meaningful and functional. What started as an idea to transform everyday spaces has evolved into a design-driven approach focused on creating interiors that truly reflect how people live and work.
            </IntroText>
            <IntroText>
              Every project we take on is guided by a clear vision and a set of values that shape the way we design, collaborate, and deliver.
            </IntroText>
          </IntroColumn>
        </TopGrid>

        <ImageWrapper>
          <CutoutTopRight />
          <CutoutBottomLeft />
          <MainImage 
            src="storymain.jpg" 
            alt="Modern living room interior" 
          />
        </ImageWrapper>

        <BottomGrid>
          <VisionColumn>
            <QuoteIcon>“</QuoteIcon>
            <VisionText>
              Our vision is to create thoughtfully designed spaces that bring together modern aesthetics, practical functionality, and lasting quality. We aim to make well-designed interiors more accessible while maintaining a strong focus on craftsmanship and detail.
            </VisionText>
            <VisionText>
              We value a design approach that is both creative and structured—where every decision is guided by purpose and clarity. Transparency, collaboration, and consistency form the foundation of how we work with our clients, ensuring a smooth and reliable experience from start to finish.
            </VisionText>
            <VisionText>
              At the core of our values is the belief that every space should feel personal. By combining design expertise with a deep understanding of lifestyle needs, we create interiors that are not only beautiful but also meaningful and enduring.
            </VisionText>
            <TextureImage 
              src="storybottom.jpg" 
              alt="Abstract design texture" 
            />
          </VisionColumn>

          <AboutCardWrapper>
            <AboutCard>
              <AboutCardTitle>About Us</AboutCardTitle>
              <AboutCardText>
                GoDecor is a modern interior design brand focused on creating spaces that seamlessly balance aesthetics, functionality, and everyday comfort. We specialize in designing interiors that are not only visually refined but also thoughtfully planned to suit the way people live and work.
              </AboutCardText>
              <AboutCardText>
                From modular kitchens and living spaces to complete home interiors and workspaces, our approach is rooted in understanding individual needs and translating them into meaningful design solutions. Every project is handled with attention to detail, careful material selection, and a commitment to delivering quality that lasts.
              </AboutCardText>
              <AboutCardText>
                At GoDecor, we believe that good design goes beyond appearance—it should enhance usability, improve flow, and create an environment that feels natural and effortless to experience.
              </AboutCardText>
            </AboutCard>
          </AboutCardWrapper>
        </BottomGrid>

      </Container>
    </SectionWrapper>
  );
};

export default StoryVisionSection;