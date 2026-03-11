import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  SectionSubtitle,
  GridContainer,
  Card,
  ImageWrapper,
  CardImage,
  CardTitle,
  CardDesc,
  LearnMoreLink
} from './ServiceCollections.styles';

const collectionsData = [
  { id: 1, title: 'Kitchen Collection', desc: 'Engineered modular solutions designed for stunning performance and modern aesthetics.', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Living Collection', desc: 'Balanced layouts integrating media, storage, seating, and spatial harmony.', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Bedroom & Wardrobe Systems', desc: 'Personalized retreats backed by intelligent storage and comfortable acoustics.', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'False Ceiling & Lighting Design', desc: 'Architectural ceiling treatments with integrated lighting to elevate ambiance and mood.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Complete Home Renovation', desc: 'Full-scale residential upgrades with seamless oversight and coordinated execution.', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Design Consultation & Planning', desc: 'Professional space planning, material curation, and 3D visualization before execution.', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Office & Workspace Systems', desc: 'Structured interior solutions for modern home and commercial offices to maximize productivity.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Retail & Commercial Interiors', desc: 'Functional and aesthetic retail environments engineered to optimize flow and brand identity.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'Custom Storage Solutions', desc: 'Smart, modular storage systems tailored to maximize functionality without cluttering the room.', img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop' },
  { id: 10, title: 'Premium Surface & Finish', desc: 'Advanced material selections and surface refinements that elevate durability and sophistication.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop' },
  { id: 11, title: 'Smart Home Integration', desc: 'Modern integration of lighting control, concealed wiring coordination, and system-ready planning.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop' },
  { id: 12, title: 'Renovation & Structural Upgrades', desc: 'Coordinated renovation planning aligned with interior execution frameworks.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop' },
];

const ServiceCollections = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Our Core Service Collections.</SectionTitle>
        <SectionSubtitle>
          Comprehensive interior solutions designed for modern needs. Find spaces that resonate with your lifestyle.
        </SectionSubtitle>
      </HeaderContainer>

      <GridContainer>
        {collectionsData.map((item) => (
          <Card key={item.id}>
            <ImageWrapper>
              <CardImage src={item.img} alt={item.title} />
            </ImageWrapper>
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
            <LearnMoreLink>
              Learn More <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
            </LearnMoreLink>
          </Card>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default ServiceCollections;