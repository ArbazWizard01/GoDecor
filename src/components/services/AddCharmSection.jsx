import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  InnerContainer,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  GridContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardSubtext,
  ExploreButton
} from './AddCharmSection.styles';

const charmData = [
  {
    id: 1,
    title: 'Wall Decor',
    subtext: 'Art • Panels • Textures',
    buttonText: 'Explore Wall Decor',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Lighting',
    subtext: 'Ambient • Functional • Accent',
    buttonText: 'Explore Lighting',
    image: 'light-charm.jpg'
  },
  {
    id: 3,
    title: 'Soft Furnishings',
    subtext: 'Curtains • Cushions • Fabrics',
    buttonText: 'Explore Furnishings',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Mirrors & Panels',
    subtext: 'Depth • Reflection • Design',
    buttonText: 'Explore Mirrors',
    image: 'mirror-charm.jpg'
  }
];

const AddCharmSection = () => {
  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderContainer>
          <SectionTitle>Add the Charm</SectionTitle>
          <TitleAccent />
          <SectionSubtitle>Small details that make a big difference.</SectionSubtitle>
        </HeaderContainer>

        <GridContainer>
          {charmData.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardSubtext>{item.subtext}</CardSubtext>
                <ExploreButton>
                  {item.buttonText} <ArrowRightOutlined style={{ fontSize: '12px' }} />
                </ExploreButton>
              </CardContent>
            </Card>
          ))}
        </GridContainer>
      </InnerContainer>
    </SectionWrapper>
  );
};

export default AddCharmSection;