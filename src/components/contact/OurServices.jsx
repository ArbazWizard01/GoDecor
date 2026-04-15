import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  SectionSubtitle,
  GridContainer,
  ServiceCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardButton
} from './OurServices.styles';

const servicesData = [
  {
    id: 1,
    title: 'Modular Kitchen Design',
    description: 'Efficient, stylish kitchens built for everyday functionality.',
    buttonText: 'Explore Kitchens',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Living Room Interiors',
    description: 'Modern living spaces designed for comfort and connection.',
    buttonText: 'View Living Spaces',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Bedroom Interiors',
    description: 'Calm, elegant bedrooms crafted for rest and relaxation.',
    buttonText: 'Discover Bedrooms',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Complete Home Interiors',
    description: 'End-to-end design solutions for a fully transformed home.',
    buttonText: 'Explore Full Interiors',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Office & Workspace Design',
    description: 'Professional environments built for productivity and focus.',
    buttonText: 'View Office Designs',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Pooja Room Design',
    description: 'Peaceful and thoughtfully designed spaces for devotion.',
    buttonText: 'Explore Pooja Spaces',
    image: 'https://media.designcafe.com/wp-content/uploads/2021/01/27173127/small-pooja-room-designs-in-apartments-1.jpg'
  },
  {
    id: 7,
    title: 'Custom Storage Solutions',
    description: 'Smart storage systems that keep your home organized and clutter-free.',
    buttonText: 'View Storage',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with modern design and upgraded functionality.',
    buttonText: 'Explore Renovations',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop'
  }
];

const OurServices = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Our Interior Services</SectionTitle>
        <SectionSubtitle>
          End-to-end design and execution services tailored for modern homes and workspaces.
        </SectionSubtitle>
      </HeaderContainer>

      <GridContainer>
        {servicesData.map((service) => (
          <ServiceCard key={service.id}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <CardButton>
                {service.buttonText} <ArrowRightOutlined style={{ fontSize: '12px' }} />
              </CardButton>
            </CardContent>
          </ServiceCard>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default OurServices;