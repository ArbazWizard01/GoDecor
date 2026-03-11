import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderRow,
  TitleGroup,
  SectionTitle,
  SectionSubtitle,
  OutlineButton,
  CardsGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardLink
} from './ServicesSection.styles';

const servicesData = [
  {
    id: 1,
    title: 'Living Room Styling',
    description: 'Create inviting spaces that reflect your personality and lifestyle',
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Modular Kitchen Solutions',
    description: 'Functional, clutter-free designs engineered for contemporary homes',
    // Swapped to a clean, empty modular kitchen
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop', 
  },
  {
    id: 3,
    title: 'Bedroom Transformation',
    description: 'Storage-focused, calm, and thoughtfully layered bedroom systems',
    // Fixed the broken image link
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Home Office Design',
    description: 'Productivity-driven layouts with ergonomic spatial planning',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop',
  }
];

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <HeaderRow>
        <TitleGroup>
          <SectionTitle>Our Decor Services</SectionTitle>
          <SectionSubtitle>Comprehensive solutions for every space in your home</SectionSubtitle>
        </TitleGroup>
        <OutlineButton>
          Explore More <ArrowRightOutlined />
        </OutlineButton>
      </HeaderRow>

      <CardsGrid>
        {servicesData.map((service) => (
          <Card key={service.id}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <CardLink>
                Explore Packages <ArrowRightOutlined style={{ fontSize: '0.8rem' }}/>
              </CardLink>
            </CardContent>
          </Card>
        ))}
      </CardsGrid>
    </SectionWrapper>
  );
};

export default ServicesSection;