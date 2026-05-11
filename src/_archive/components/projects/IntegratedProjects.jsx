import React from "react";
import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";

// 1. Local layout imports (Cleaned up!)
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
} from "./IntegratedProjects.styles";

// 2. Import the GLOBAL premium card
import {
  GlobalCard,
  GlobalCardImage,
  GlobalCardContent,
  GlobalCardTitle,
} from "../../../components/common/PremiumCard.styles";

const IntegratedProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        {/* Top Philosophy Section */}
        <IntroBlock>
          <IntroTitle>
            True transformation isn't about one room.
            <br />
            It's about cohesion.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            Our integrated projects coordinate kitchens, living areas, and
            bedrooms under one structured framework — unified materials, aligned
            timelines, and supervised execution.
          </IntroDesc>
        </IntroBlock>

        {/* Elevated Bullet List Card */}
        <ApproachBlock>
          <ApproachTitle>Our Integrated Philosophy.</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Centralized planning
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Unified material direction
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Coordinated timelines
            </ListItem>
            <ListItem>
              <IconWrapper>
                <CheckCircleFilled />
              </IconWrapper>
              Structured supervision
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        {/* Project Grid */}
        <GridTitle>Full Home Projects Delivered.</GridTitle>
        <ProjectGrid>
          <GlobalCard>
            <GlobalCardImage
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Complete Home Transformation"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Complete Home Transformation</GlobalCardTitle>
              {/* Premium inline metadata */}
              <CardMeta>
                Bangalore{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 10
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
              src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Full Apartment Design"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Full Apartment Design</GlobalCardTitle>
              <CardMeta>
                Mumbai{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 12
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
              src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Integrated Home Design"
            />
            <GlobalCardContent>
              <GlobalCardTitle>Integrated Home Design</GlobalCardTitle>
              <CardMeta>
                Pune{" "}
                <span style={{ margin: "0 6px", color: "#d1d5db" }}>•</span> 10
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

export default IntegratedProjects;
