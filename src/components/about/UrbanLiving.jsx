import React from 'react';
import { 
  HomeOutlined, 
  TeamOutlined, 
  KeyOutlined, 
  ToolOutlined 
} from '@ant-design/icons';
import {
  SectionWrapper,
  AudienceContainer,
  Title,
  Subtitle,
  IconGrid,
  IconCard,
  StyledIcon,
  IconText,
  MarketsContainer,
  MarketsTitle,
  MarketsDesc
} from './UrbanLiving.styles';

const UrbanLiving = () => {
  return (
    <SectionWrapper>
      
      <AudienceContainer>
        <Title>Designed for Modern Urban Living</Title>
        <Subtitle>
          We primarily work with apartment homeowners, 2BHK and 3BHK families, first-time buyers, 
          and renovation upgrades seeking clarity and coordinated execution.
        </Subtitle>
        
        <IconGrid>
          <IconCard>
            <StyledIcon><HomeOutlined /></StyledIcon>
            <IconText>Apartment Homeowners</IconText>
          </IconCard>
          <IconCard>
            <StyledIcon><TeamOutlined /></StyledIcon>
            <IconText>2BHK & 3BHK Families</IconText>
          </IconCard>
          <IconCard>
            <StyledIcon><KeyOutlined /></StyledIcon>
            <IconText>First-Time Buyers</IconText>
          </IconCard>
          <IconCard>
            <StyledIcon><ToolOutlined /></StyledIcon>
            <IconText>Renovation Upgrades</IconText>
          </IconCard>
        </IconGrid>
      </AudienceContainer>

      <MarketsContainer>
        <MarketsTitle>Expanding Across Urban<br/>Residential Markets</MarketsTitle>
        <MarketsDesc>
          Our structured modular systems are designed for scale — enabling consistent 
          delivery standards as we grow across new cities.
        </MarketsDesc>
      </MarketsContainer>

    </SectionWrapper>
  );
};

export default UrbanLiving;