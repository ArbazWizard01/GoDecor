import React from 'react';
import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

// 1. Local layout imports (Notice we removed ProjectCard, CardContent, etc.)
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
} from './BedroomProjects.styles'; 

// 2. Import the GLOBAL premium card!
import { 
  GlobalCard, GlobalCardImage, GlobalCardContent, GlobalCardTitle 
} from '../common/PremiumCard.styles';

const BedroomProjects = () => {
  return (
    <SectionWrapper>
      <Container>
        
        {/* Top Philosophy Section */}
        <IntroBlock>
          <IntroTitle>
            Bedrooms are more than rooms.<br/>
            They are retreats.
          </IntroTitle>
          <TitleAccent />
          <IntroDesc>
            We design wardrobe systems and panel finishes that feel seamless — blending precision storage with quiet detailing.<br/><br/>
            Every line is intentional. Every element aligned.
          </IntroDesc>
        </IntroBlock>

        {/* Elevated Bullet List Card */}
        <ApproachBlock>
          <ApproachTitle>Our Bedroom Philosophy.</ApproachTitle>
          <ListGrid>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Optimized wardrobe architecture
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Clean panel integration
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Soft, layered lighting
            </ListItem>
            <ListItem>
              <IconWrapper><CheckCircleFilled /></IconWrapper>
              Defined execution schedules
            </ListItem>
          </ListGrid>
        </ApproachBlock>

        {/* Project Grid */}
        <GridTitle>Bedroom Projects Delivered.</GridTitle>
        <ProjectGrid>
          
          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/6489107/pexels-photo-6489107.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Peaceful Bedroom Retreat" />
            <GlobalCardContent>
              <GlobalCardTitle>Peaceful Bedroom Retreat</GlobalCardTitle>
              {/* Premium inline metadata */}
              <CardMeta>Bangalore <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 3 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Master Bedroom Suite" />
            <GlobalCardContent>
              <GlobalCardTitle>Master Bedroom Suite</GlobalCardTitle>
              <CardMeta>Mumbai <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 4 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

          <GlobalCard>
            <GlobalCardImage src="https://images.pexels.com/photos/7061405/pexels-photo-7061405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Elegant Bedroom Design" />
            <GlobalCardContent>
              <GlobalCardTitle>Elegant Bedroom Design</GlobalCardTitle>
              <CardMeta>Pune <span style={{ margin: '0 6px', color: '#d1d5db' }}>•</span> 3 Weeks</CardMeta>
              <ViewLink>View Project <ArrowRightOutlined style={{ fontSize: '0.75rem' }}/></ViewLink>
            </GlobalCardContent>
          </GlobalCard>

        </ProjectGrid>

      </Container>
    </SectionWrapper>
  );
};

export default BedroomProjects;