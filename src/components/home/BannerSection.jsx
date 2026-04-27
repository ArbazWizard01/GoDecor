import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
  return (
    <BannerWrapper>
      <Container>
        <BannerCard>
          <BannerContent>
            <BannerTitle>Beautiful Spaces Begin Here</BannerTitle>
            <BannerButton onClick={() => navigate('/contact')}>
              Book Consultation <ArrowRightOutlined />
            </BannerButton>
          </BannerContent>
        </BannerCard>
      </Container>
    </BannerWrapper>
  );
};

export default BannerSection;