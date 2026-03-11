import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {
  SectionWrapper,
  HeaderRow,
  TitleGroup,
  SectionTitle,
  SectionSubtitle,
  CardsSlider,
  SliderCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  CardLink
} from './SignatureConcepts.styles';

const conceptsData = [
  {
    id: 1,
    title: 'Urban Modular Kitchen',
    description: 'Refined finishes. Smart storage. Everyday efficiency.',
    price: '₹3.5 Lac',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Modern Neutral Living',
    description: 'Clean lines. Balanced lighting. Elevated comfort.',
    price: '₹4.2 Lac',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Smart 2BHK Setup',
    description: 'Integrated design across kitchen, living, and bedrooms.',
    price: '₹6.8 Lac',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Minimalist Studio',
    description: 'Space-saving furniture. Maximized natural light.',
    price: '₹2.8 Lac',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=600&auto=format&fit=crop',
  }
];

const SignatureConcepts = () => {
  return (
    <SectionWrapper>
      <HeaderRow>
        <TitleGroup>
          <SectionTitle>Signature Concepts</SectionTitle>
          <SectionSubtitle>A curated selection of our most requested modern transformations.</SectionSubtitle>
        </TitleGroup>
        <Button size="large" style={{ color: '#1a56db', borderColor: '#1a56db', borderRadius: '6px' }}>
          Explore More <ArrowRightOutlined />
        </Button>
      </HeaderRow>

      {/* Replaced CardsGrid with our new CardsSlider */}
      <CardsSlider>
        {conceptsData.map((concept) => (
          <SliderCard key={concept.id}>
            <CardImage src={concept.image} alt={concept.title} />
            <CardContent>
              <CardTitle>{concept.title}</CardTitle>
              <CardDescription>{concept.description}</CardDescription>
              
              <div style={{ marginTop: 'auto' }}>
                <CardPrice>Starting from {concept.price}</CardPrice>
                <CardLink>
                  Explore Concept <ArrowRightOutlined style={{ fontSize: '0.8rem' }}/>
                </CardLink>
              </div>
            </CardContent>
          </SliderCard>
        ))}
      </CardsSlider>
    </SectionWrapper>
  );
};

export default SignatureConcepts;