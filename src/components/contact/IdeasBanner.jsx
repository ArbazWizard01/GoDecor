import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  BannerContainer,
  Overlay,
  ContentWrapper,
  Title,
  CtaButton
} from './IdeasBanner.styles';

const IdeasBanner = () => {
  return (
    <SectionWrapper>
      <BannerContainer>
        <Overlay />
        <ContentWrapper>
          <Title>Let's Bring Your Ideas to Life</Title>
          <CtaButton>
            Connect With Us <ArrowRightOutlined style={{ fontSize: '12px' }} />
          </CtaButton>
        </ContentWrapper>
      </BannerContainer>
    </SectionWrapper>
  );
};

export default IdeasBanner;