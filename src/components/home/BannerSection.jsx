import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  BannerWrapper,
  Container,
  BannerCard,
  BannerContent,
  BannerTitle,
  BannerButton
} from './BannerSection.styles';

const BannerSection = () => {
  return (
    <BannerWrapper>
      <Container>
        <BannerCard>
          <BannerContent>
            <BannerTitle>Beautiful Spaces Begin Here</BannerTitle>
            <BannerButton>
              Book Consultation <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
            </BannerButton>
          </BannerContent>
        </BannerCard>
      </Container>
    </BannerWrapper>
  );
};

export default BannerSection;