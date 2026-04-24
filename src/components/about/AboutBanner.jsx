import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  BannerBox,
  ContentContainer,
  Title,
  ExploreButton
} from './AboutBanner.styles';

const AboutBanner = () => {
  return (
    <SectionWrapper>
      <BannerBox>
        <ContentContainer>
          <Title>Let's Bring Your Space to Life</Title>
          <ExploreButton>
            Explore Our Work <ArrowRightOutlined style={{ marginLeft: '8px' }} />
          </ExploreButton>
        </ContentContainer>
      </BannerBox>
    </SectionWrapper>
  );
};

export default AboutBanner;