import React from 'react';
import {
  SectionWrapper,
  SectionTitle,
  GridContainer,
  Card,
  CardImage,
  CardOverlay,
  CardTitle
} from './ServiceCollections.styles';

const collectionsData = [
  { id: 1, title: 'Living Collection', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Bedroom Interior Collections', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Office Space Collection', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Kitchen & Dining Space Collection', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Sacred Spaces Collection', img: 'https://media.designcafe.com/wp-content/uploads/2021/01/27173127/small-pooja-room-designs-in-apartments-1.jpg' },
  { id: 6, title: 'Living Collection', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' }
];

const ServiceCollections = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Curated Interior Collections</SectionTitle>
      
      <GridContainer>
        {collectionsData.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.img} alt={item.title} />
            <CardOverlay />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default ServiceCollections;