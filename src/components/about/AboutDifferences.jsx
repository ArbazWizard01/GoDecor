import React from 'react';
import { 
  AppstoreOutlined, 
  ToolOutlined, 
  CheckSquareOutlined, 
  LineChartOutlined 
} from '@ant-design/icons';
import {
  SectionWrapper,
  Container,
  LeftColumn,
  Title,
  TitleAccent,
  RightColumn,
  FeatureCard,
  IconWrapper,
  CardTitle,
  CardDesc
} from './AboutDifferences.styles';

const AboutDifferences = () => {
  return (
    <SectionWrapper>
      <Container>
        
        <LeftColumn>
          <Title>What Makes GoDecor Different</Title>
          <TitleAccent />
        </LeftColumn>

        <RightColumn>
          <FeatureCard>
            <IconWrapper><AppstoreOutlined /></IconWrapper>
            <CardTitle>System-Based Packages</CardTitle>
            <CardDesc>Defined inclusions. No vague quotes.</CardDesc>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper><ToolOutlined /></IconWrapper>
            <CardTitle>Engineered Materials</CardTitle>
            <CardDesc>Selected for durability and daily use.</CardDesc>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper><CheckSquareOutlined /></IconWrapper>
            <CardTitle>Supervised Execution</CardTitle>
            <CardDesc>Coordinated teams and defined checkpoints.</CardDesc>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper><LineChartOutlined /></IconWrapper>
            <CardTitle>Scalable Architecture</CardTitle>
            <CardDesc>Designed to expand across modern urban markets.</CardDesc>
          </FeatureCard>
        </RightColumn>

      </Container>
    </SectionWrapper>
  );
};

export default AboutDifferences;