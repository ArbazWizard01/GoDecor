import React from 'react';
import {
  SectionWrapper,
  Container,
  HeaderRow,
  TitleContent,
  DescContent,
  SectionTitle,
  SectionDesc,
  ImageGrid,
  CityImageWrapper,
  CityImage,
  TagsContainer,
  CityTag
} from './CitiesSection.styles';

const displayImages = [
  { src: 'https://boundlessexplorism.com/wp-content/uploads/2023/09/Taj-Mahal-Palace.jpg', alt: 'Mumbai Architecture' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=500&h=400&s=1', alt: 'Delhi Monument' },
  { src: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Kolkata Memorial' },
  { src: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Jaipur Palace' },
  { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5d/12/08/caption.jpg?w=300&h=300&s=1', alt: 'Bangalore Building' }
];

const citiesList = [
  'Mumbai', 'Delhi NCR', 'Kolkata', 'Jaipur', 'Bangalore',
  'Chandigarh', 'Gurugram', 'Chennai', 'Hyderabad', 'Indore'
];

const CitiesSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <HeaderRow>
          <TitleContent>
            <SectionTitle>Expanding Beautiful Spaces<br/>Across India's Leading Cities</SectionTitle>
          </TitleContent>
          <DescContent>
            <SectionDesc>
              At GoDecor, we believe thoughtful design should be accessible to every home and workspace. As we continue to grow, we're expanding our services to major cities across India, bringing modern interiors and expert craftsmanship closer to you. Soon, homeowners and businesses in these cities will be able to experience beautifully designed spaces with GoDecor.
            </SectionDesc>
          </DescContent>
        </HeaderRow>

        <ImageGrid>
          {displayImages.map((image, index) => (
            <CityImageWrapper key={index}>
              <CityImage src={image.src} alt={image.alt} />
            </CityImageWrapper>
          ))}
        </ImageGrid>

        <TagsContainer>
          {citiesList.map((city) => (
            <CityTag key={city}>{city}</CityTag>
          ))}
        </TagsContainer>
        
      </Container>
    </SectionWrapper>
  );
};

export default CitiesSection;