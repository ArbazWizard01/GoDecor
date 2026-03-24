import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FullScreenContainer,
  ImageWrapper,
  MainImage,
  TopTextOverlay,
  Title,
  Subtitle,
  BottomGlassCard,
  CardText,
  ExploreButton
} from "./AboutSection.styles";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      <ImageWrapper>
        <MainImage 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Modern luxury living space" 
        />
        
        <TopTextOverlay>
          <Title>Spaces That Feel Like Home</Title>
          <Subtitle>
            A home is more than walls and furniture. It's where mornings begin slowly, conversations linger longer, and every corner reflects the life you love to live.
          </Subtitle>
        </TopTextOverlay>

        <BottomGlassCard>
          <CardText>
            At GoDecor, we design interiors that blend beauty, comfort, and functionality—creating spaces that welcome you every day with warmth and ease.
          </CardText>
        </BottomGlassCard>

        <ExploreButton onClick={() => navigate("/projects")}>
          Explore Our Designs
        </ExploreButton>
      </ImageWrapper>
    </FullScreenContainer>
  );
};

export default AboutSection;