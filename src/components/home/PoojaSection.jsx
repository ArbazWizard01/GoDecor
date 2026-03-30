import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  FullScreenContainer,
  ImageWrapper,
  MainImage,
  TopTextOverlay,
  Title,
  Subtitle,
  BottomGlassCard,
  CardText,
  ExploreButton
} from './PoojaSection.styles';

const PoojaSection = () => {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      <ImageWrapper>
        <MainImage
          src="https://media.designcafe.com/wp-content/uploads/2021/01/27173127/small-pooja-room-designs-in-apartments-1.jpg"
          alt="Serene Temple Architecture"
        />
        
        <TopTextOverlay>
          <Title>Sacred Spaces for<br/>Peaceful Moments</Title>
          <Subtitle>
            Thoughtfully designed pooja rooms that bring serenity, devotion, and elegance into your home.
          </Subtitle>
        </TopTextOverlay>

        <BottomGlassCard>
          <CardText>
            A pooja room is more than just a space—it's a place for reflection, gratitude, and daily rituals. At GoDecor, we design serene and beautifully crafted pooja rooms that blend traditional elements with modern interiors. From compact wall-mounted mandirs to dedicated prayer rooms, each space is thoughtfully designed to create a calm and sacred atmosphere within your home.
          </CardText>
        </BottomGlassCard>

        <ExploreButton onClick={() => navigate('/projects')}>
          Explore Pooja Room Designs <ArrowRightOutlined style={{ fontSize: '14px' }} />
        </ExploreButton>
        
      </ImageWrapper>
    </FullScreenContainer>
  );
};

export default PoojaSection;