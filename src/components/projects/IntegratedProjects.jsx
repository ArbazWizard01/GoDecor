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
} from './IntegratedProjects.styles'; // Reusing identical styles!

const IntegratedProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Top Philosophy Section */}
        <IntroBlock>
          <IntroTitle>
            True transformation isn't about one room.<br/>
            It's about cohesion.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            Our integrated projects coordinate kitchens, living areas, and bedrooms under one structured framework — unified materials, aligned timelines, and supervised execution.
          </IntroDesc>
        </IntroBlock>

        {/* Elevated Bullet List Card */}
        <ApproachBlock>
          <ApproachTitle>Our Integrated Philosophy.</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Centralized planning
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Unified material direction
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Coordinated timelines
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Structured supervision
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        {/* Project Grid */}
        <GridTitle>Full Home Projects Delivered.</GridTitle>
        <ProjectGrid>
          
          <ProjectCard>
            <ProjectImage src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Complete Home Transformation" />
            <CardContent>
              <CardTitle>Complete Home Transformation</CardTitle>
              <CardMeta>Bangalore<br/>10 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Full Apartment Design" />
            <CardContent>
              <CardTitle>Full Apartment Design</CardTitle>
              <CardMeta>Mumbai<br/>12 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

          <ProjectCard>
            <ProjectImage src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Integrated Home Design" />
            <CardContent>
              <CardTitle>Integrated Home Design</CardTitle>
              <CardMeta>Pune<br/>10 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </CardContent>
          </ProjectCard>

        </ProjectGrid>

      </Container>
    </SectionWrapper>
  );
};

export default IntegratedProjects;