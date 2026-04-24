import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
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
  ExploreButton,
} from "./AboutHero.styles";

const AboutHero = () => {
  return (
    <FullScreenContainer>
      <MainImage
        src="aboutHero.jpg"
        alt="Designing spaces that feel like you"
      />
      <ContentOverlay>
        <GridBoundingBox>
          <TopTextOverlay>
            <Title>Designing Spaces That Feel Like You</Title>
            <Subtitle>
              Thoughtful interiors crafted with purpose, precision, and
              personality.
            </Subtitle>
          </TopTextOverlay>

          <BottomGlassCard>
            <CardText>
              At GoDecor, we believe every space should reflect the way you live
              and feel. Our approach combines modern design, functionality, and
              attention to detail to create interiors that are both beautiful
              and meaningful.
            </CardText>
          </BottomGlassCard>

          <ExploreButton>
            Start Your Design Journey{" "}
            <ArrowRightOutlined style={{ marginLeft: "8px" }} />
          </ExploreButton>
        </GridBoundingBox>
      </ContentOverlay>
    </FullScreenContainer>
  );
};

export default AboutHero;
