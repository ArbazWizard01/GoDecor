import React from "react";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import {
  SectionWrapper,
  Container,
  IntroBlock,
  IntroTitle,
  TitleAccent,
  IntroDesc,
  ApproachBlock,
  ApproachTitle,
  ListGrid,
  ListItem,
  IconWrapper,
  GridTitle,
  ProjectGrid,
  CardMeta,
  ViewLink,
} from "./KitchenProjects.styles";

// IMPORTING THE GLOBAL PREMIUM CARD
import {
  GlobalCard,
  GlobalCardImage,
  GlobalCardContent,
  GlobalCardTitle,
} from "../../../components/common/PremiumCard.styles";

const KitchenProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        <IntroBlock>
          <IntroTitle>
            We don't design kitchens to impress for a moment.
            <br />
            We design them to work every single day.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            From morning routines to late-night conversations, every cabinet,
            surface, and light source is placed with purpose — so the space
            feels effortless, even at its busiest.
          </IntroDesc>
        </IntroBlock>

        <ApproachBlock>
          <ApproachTitle>How We Approach Kitchen Spaces</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Workflow first, aesthetics second
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Storage engineered around real use
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Lighting aligned with movement
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Scope defined before fabrication begins
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        <GridTitle>Kitchen Transformations We've Delivered.</GridTitle>
        <ProjectGrid>
          <GlobalCard>
            <GlobalCardImage
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Modern L-Shaped Kitchen"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Modern L-Shaped Kitchen</GlobalCardTitle>
              <CardMeta>
                Bangalore{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 4
                Weeks
              </CardMeta>
              <ViewLink>
                View Project{" "}
                <ArrowRightOutlined style={{ fontSize: "0.75rem" }} />
              </ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage
              src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Island Kitchen Setup"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Island Kitchen Setup</GlobalCardTitle>
              <CardMeta>
                Mumbai{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 5
                Weeks
              </CardMeta>
              <ViewLink>
                View Project{" "}
                <ArrowRightOutlined style={{ fontSize: "0.75rem" }} />
              </ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage
              src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80"
              alt="Contemporary Kitchen"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Contemporary Kitchen</GlobalCardTitle>
              <CardMeta>
                Pune{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 4
                Weeks
              </CardMeta>
              <ViewLink>
                View Project{" "}
                <ArrowRightOutlined style={{ fontSize: "0.75rem" }} />
              </ViewLink>
            </GlobalCardContent>
          </GlobalCard>
        </ProjectGrid>
      </Container>
    </SectionWrapper>
  );
};

export default KitchenProjects;
