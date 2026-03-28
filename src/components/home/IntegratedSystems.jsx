import React from 'react';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  CardsGridThreeCol,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  FullWidthButton
} from './IntegratedSystems.styles';

const systemsData = [
  {
    id: 1,
    title: 'Smart 2BHK Edition',
    description: 'Complete modular setup across all primary spaces.',
    price: '₹6.8 Lac',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop', 
  },
  {
    id: 2,
    title: 'Urban 3BHK Edition',
    description: 'Expanded layout planning with premium material upgrades.',
    price: '₹14.5 Lac',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop', 
  },
  {
    id: 3,
    title: 'Premium Home Suite',
    description: 'High-finish surfaces, detailed lighting plans, and full coordination.',
    price: '₹35 Lac',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop', 
  }
];

const IntegratedSystems = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>All-in-One Home Systems</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>Complete solutions for modern homes.</SectionSubtitle>
      </HeaderContainer>

      <CardsGridThreeCol>
        {systemsData.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardPrice>Starting from {item.price}</CardPrice>
              <FullWidthButton>Schedule Consultation</FullWidthButton>
            </CardContent>
          </Card>
        ))}
      </CardsGridThreeCol>
    </SectionWrapper>
  );
};

export default IntegratedSystems;