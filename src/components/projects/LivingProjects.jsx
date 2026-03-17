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
  CardMeta,
  ViewLink
} from './LivingProjects.styles'; 

import { 
  GlobalCard, GlobalCardImage, GlobalCardContent, GlobalCardTitle 
} from '../common/PremiumCard.styles';

const LivingProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Top Philosophy Section */}
        <IntroBlock>
          <IntroTitle>
            Living spaces carry emotion.<br/>
            They hold celebrations, quiet evenings, and everything in between.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            We design layouts that feel open but grounded — balancing media systems, storage clarity, 
            and layered lighting that shifts with the day.
          </IntroDesc>
        </IntroBlock>

        {/* Elevated Bullet List Card */}
        <ApproachBlock>
          <ApproachTitle>Our Living Space Philosophy.</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Defined layout proportions
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Integrated media systems
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Balanced material palettes
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Coordinated installation timelines
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        {/* Project Grid */}
        <GridTitle>Living Projects Delivered.</GridTitle>
        <ProjectGrid>
          
          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Contemporary Living Space" />
            <GlobalCardContent>
              <GlobalCardTitle>Contemporary Living Space</GlobalCardTitle>
              {/* Premium inline metadata */}
              <CardMeta>Bangalore <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 4 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Elegant Living Layout" />
            <GlobalCardContent>
              <GlobalCardTitle>Elegant Living Layout</GlobalCardTitle>
              <CardMeta>Mumbai <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 3 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Modern Living Room" />
            <GlobalCardContent>
              <GlobalCardTitle>Modern Living Room</GlobalCardTitle>
              <CardMeta>Pune <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 4 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

        </ProjectGrid>

      </Container>
    </SectionWrapper>
  );
};

export default LivingProjects;