import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
  SectionWrapper,
  Container,
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
  CardTags,
  CardLink
} from './ServicesSection.styles';

const servicesData = [
  {
    id: 1,
    title: 'Modular Kitchens',
    tags: 'Smart • Stylish • Functional',
    linkText: 'Explore Kitchens',
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Living Spaces',
    tags: 'Modern • Comfortable • Inviting',
    linkText: 'View Living Spaces',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Bedroom Designs',
    tags: 'Calm • Elegant • Personal',
    linkText: 'Discover Bedrooms',
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Dining Areas',
    tags: 'Social • Stylish • Welcoming',
    linkText: 'Explore Dining',
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'Smart Storage',
    tags: 'Organized • Seamless • Efficient',
    linkText: 'View Storage Ideas',
    image: 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Complete Home Interiors',
    tags: 'Designed • Built • Delivered',
    linkText: 'Explore Full Interiors',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    title: 'Office Interiors',
    tags: 'Professional • Productive • Modern',
    linkText: 'View Office Designs',
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    title: 'Workspace Solutions',
    tags: 'Focused • Functional • Efficient',
    linkText: 'Explore Workspaces',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Container>
        <HeaderRow>
          <TitleGroup>
            <SectionTitle>Designed for Every Space</SectionTitle>
            <SectionSubtitle>Complete decor solutions tailored for your needs.</SectionSubtitle>
          </TitleGroup>
          <OutlineButton onClick={() => navigate('/services')}>
            Explore More <ArrowRightOutlined style={{ fontSize: '0.8rem' }} />
          </OutlineButton>
        </HeaderRow>

        <CardsGrid>
          {servicesData.map((service) => (
            <Card key={service.id}>
              <CardImage src={service.image} alt={service.title} />
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardTags>{service.tags}</CardTags>
                <CardLink onClick={() => navigate('/projects')}>
                  {service.linkText}
                </CardLink>
              </CardContent>
            </Card>
          ))}
        </CardsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default ServicesSection;