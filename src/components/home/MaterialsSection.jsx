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
  CardDescription
} from './MaterialsSection.styles';

const materialsData = [
  {
    id: 1,
    title: 'Laminate & Acrylic Surfaces',
    description: 'Scratch-resistant finishes with contemporary color options.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Engineered Stone & Countertops',
    description: 'Durable work surfaces engineered for daily use.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Modular Hardware Systems',
    description: 'Soft-close channels, hinges, and functional storage fittings.',
    // ⬇️ Replaced with a reliable Pexels image ⬇️
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Lighting Integration',
    description: 'Under-cabinet, cove, and ambient lighting systems.',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Storage Mechanisms',
    description: 'Pull-outs, tall units, and corner optimizers.',
    // ⬇️ Replaced with a reliable Pexels image ⬇️
    image: 'https://images.pexels.com/photos/5998135/pexels-photo-5998135.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Surface & Texture Finishes',
    description: 'Matte, gloss, wood-grain, and stone-inspired textures.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=600&auto=format&fit=crop',
  }
];

const MaterialsSection = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Materials. Finishes. Precision.</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          We integrate durable materials and engineered finishes designed for long-term performance and modern aesthetics.
        </SectionSubtitle>
      </HeaderContainer>

      <CardsGridThreeCol>
        {materialsData.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CardsGridThreeCol>
    </SectionWrapper>
  );
};

export default MaterialsSection;