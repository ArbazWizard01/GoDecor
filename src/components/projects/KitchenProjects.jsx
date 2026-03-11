import React from 'react';
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';
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
  ProjectCard,
  ProjectImage,
  CardContent,
  CardTitle,
  CardMeta,
  ViewLink
} from './KitchenProjects.styles';

const KitchenProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Top Philosophy Section */}
        <IntroBlock>
          <IntroTitle>
            We don't design kitchens to impress for a moment.<br/>
            We design them to work every single day.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            From morning routines to late-night conversations, every cabinet, surface, and light source is 
            placed with purpose — so the space feels effortless, even at its busiest.
          </IntroDesc>
        </IntroBlock>

        {/* The New "Elevated" Bullet List Card */}
        <ApproachBlock>
          <ApproachTitle>How We Approach Kitchen Spaces</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Workflow first, aesthetics second
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Storage engineered around real use
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Lighting aligned with movement
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Scope defined before fabrication begins
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        {/* Project Grid with Fixed Pexels Images */}
        <GridTitle>Kitchen Transformations We've Delivered.</GridTitle>
        <ProjectGrid>
          
          <ProjectCard>
            <ProjectImage src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Modern L-Shaped Kitchen" />
            <CardContent>
              <CardTitle>Modern L-Shaped Kitchen</CardTitle>
              <CardMeta>Bangalore<br/>4 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Island Kitchen Setup" />
            <CardContent>
              <CardTitle>Island Kitchen Setup</CardTitle>
              <CardMeta>Mumbai<br/>5 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

          <ProjectCard>
            {/* Kept the 3rd image as it was working, but updated the URL parameters for stability */}
            <ProjectImage src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=600&q=80" alt="Contemporary Kitchen" />
            <CardContent>
              <CardTitle>Contemporary Kitchen</CardTitle>
              <CardMeta>Pune<br/>4 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

        </ProjectGrid>

      </Container>
    </SectionWrapper>
  );
};

export default KitchenProjects;