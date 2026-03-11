import React from "react";
import {
  HomeOutlined,
  StarOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import {
  SectionContainer,
  FeaturesBanner,
  FeatureItem,
  IconCircle,
  FeatureText,
  AboutBlock,
  ImageGrid,
  StyledImage,
  GreyBox,
  TextContent,
  Heading,
  Paragraph,
  HighlightText,
} from "./AboutSection.styles";

const AboutSection = () => {
  return (
    <SectionContainer>
      {/* Top Banner */}
      <FeaturesBanner>
        <FeatureItem>
          <IconCircle>
            <HomeOutlined />
          </IconCircle>
          <FeatureText>800+ Homes Transformed</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <IconCircle>
            <StarOutlined />
          </IconCircle>
          <FeatureText>4.8★ Client Satisfaction</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <IconCircle>
            <SafetyCertificateOutlined />
          </IconCircle>
          <FeatureText>Verified Decor Experts</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <IconCircle>
            <ClockCircleOutlined />
          </IconCircle>
          <FeatureText>On-Time Project Delivery</FeatureText>
        </FeatureItem>
      </FeaturesBanner>

      {/* Main About Block */}
      <AboutBlock>
        <ImageGrid>
          {/* Top Left Image */}
          <StyledImage
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop"
            alt="Organized Wardrobe"
            style={{ gridColumn: "1", gridRow: "1", height: "220px" }}
          />
          
          <StyledImage
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop"
            alt="Home Decor Details"
            style={{ gridColumn: "1", gridRow: "2", height: "180px" }}
          />

          {/* Tall Right Image */}
          <StyledImage
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
            alt="Woman looking at cabinet"
            style={{ gridColumn: "2", gridRow: "1 / span 2", height: "100%" }}
          />
        </ImageGrid>

        <TextContent>
          <Heading>
            Decorating Should Feel Exciting
            <br />— Not Overwhelming
          </Heading>
          <Paragraph>
            Managing multiple vendors, unclear budgets, delayed timelines, and
            design confusion can turn your dream home into a stressful
            experience.
          </Paragraph>
          <HighlightText>
            That's where goDecor simplifies everything.
          </HighlightText>
        </TextContent>
      </AboutBlock>
    </SectionContainer>
  );
};

export default AboutSection;
