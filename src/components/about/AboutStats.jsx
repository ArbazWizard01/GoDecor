import React from 'react';
import { 
  HomeOutlined, 
  StarOutlined, 
  SafetyCertificateOutlined, 
  FieldTimeOutlined 
} from '@ant-design/icons';
import {
  StatsWrapper,
  StatsContainer,
  StatItem,
  IconWrapper,
  StatText
} from './AboutStats.styles';

const AboutStats = () => {
  return (
    <StatsWrapper>
      <StatsContainer>
        <StatItem>
          <IconWrapper><HomeOutlined /></IconWrapper>
          <StatText>100+ Homes Transformed</StatText>
        </StatItem>
        <StatItem>
          <IconWrapper><StarOutlined /></IconWrapper>
          <StatText>4.8★ Client Satisfaction</StatText>
        </StatItem>
        <StatItem>
          <IconWrapper><SafetyCertificateOutlined /></IconWrapper>
          <StatText>Verified Decor Experts</StatText>
        </StatItem>
        <StatItem>
          <IconWrapper><FieldTimeOutlined /></IconWrapper>
          <StatText>On-Time Project Delivery</StatText>
        </StatItem>
      </StatsContainer>
    </StatsWrapper>
  );
};

export default AboutStats;