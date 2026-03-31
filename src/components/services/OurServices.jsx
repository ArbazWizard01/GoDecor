import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  GridContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDesc,
  CardButton
} from './OurServices.styles';

const servicesData = [
  {
    id: 1,
    title: 'Modular Kitchen Design',
    desc: 'Efficient, stylish kitchens built for everyday functionality.',
    buttonText: 'Explore Kitchens',
    img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Living Room Interiors',
    desc: 'Modern living spaces designed for comfort and connection.',
    buttonText: 'View Living Spaces',
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Bedroom Interiors',
    desc: 'Calm, elegant bedrooms crafted for rest and relaxation.',
    buttonText: 'Discover Bedrooms',
    img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Complete Home Interiors',
    desc: 'End-to-end design solutions for a fully transformed home.',
    buttonText: 'Explore Full Interiors',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Office & Workspace Design',
    desc: 'Professional environments built for productivity and focus.',
    buttonText: 'View Office Designs',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Pooja Room Design',
    desc: 'Peaceful and thoughtfully designed spaces for devotion.',
    buttonText: 'Explore Pooja Spaces',
    img: 'https://media.designcafe.com/wp-content/uploads/2021/01/27173127/small-pooja-room-designs-in-apartments-1.jpg'
  },
  {
    id: 7,
    title: 'Custom Storage Solutions',
    desc: 'Smart storage systems that keep your home organized and clutter-free.',
    buttonText: 'View Storage',
    img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with modern design and upgraded functionality.',
    buttonText: 'Explore Renovations',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop'
  }
];

const OurServices = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Our Interior Services</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          End-to-end design and execution services tailored for modern homes and workspaces.
        </SectionSubtitle>
      </HeaderContainer>

      <GridContainer>
        {servicesData.map((service) => (
          <Card key={service.id}>
            <CardImage src={service.img} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.desc}</CardDesc>
              <CardButton>
                {service.buttonText} <ArrowRightOutlined style={{ fontSize: '12px' }} />
              </CardButton>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default OurServices;