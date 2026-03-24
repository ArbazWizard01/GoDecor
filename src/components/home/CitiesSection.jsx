import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  SectionWrapper,
  Container,
  HeaderRow,
  TextContent,
  SectionTitle,
  SectionDesc,
  CarouselWrapper,
  StyledCarousel,
  CarouselArrow,
  CityImageWrapper,
  CityImage,
  TagsContainer,
  CityTag
} from './CitiesSection.styles';

// --- INDIA'S LEADING CITIES POI DATA (Random 2-4 landmarks per city) ---
const cityData = {
  'Mumbai': [
    { src: 'https://boundlessexplorism.com/wp-content/uploads/2023/09/Taj-Mahal-Palace.jpg', alt: 'Gateway of India' },
    { src: 'https://images.pexels.com/photos/13620245/pexels-photo-13620245.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Marine Drive' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Chhatrapati_shivaji_terminus%2C_esterno_01.jpg', alt: 'CSMT Station' }
  ],
  'Delhi NCR': [
    { src: 'https://www.indiadrivertours.com/wp-content/uploads/2025/01/red-delhi-678e547716b25.webp', alt: 'India Gate' },
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/1f/31/qutab-minar.jpg?w=500&h=400&s=1', alt: 'Lotus Temple' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCphStjdNJB7fZ3gQ8NZrYcGc6zF8BztyQZA&s', alt: 'Qutub Minar' },
    { src: 'https://3.imimg.com/data3/WX/RP/MY-9438223/1.jpg', alt: 'Akshardham Temple' }
  ],
  'Kolkata': [
    { src: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Victoria Memorial' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4IEdJgLkpe-AprM9i-Z8G0l4c7UvPrLZXeg&s', alt: 'Howrah Bridge' }
  ],
  'Jaipur': [
    { src: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Hawa Mahal' },
    { src: 'https://s7ap1.scene7.com/is/image/incredibleindia/gaitore-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1742194269699', alt: 'Amer Fort' },
    { src: 'https://images.pexels.com/photos/15707011/pexels-photo-15707011.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'City Palace' }
  ],
  'Bangalore': [
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/5d/12/08/caption.jpg?w=300&h=300&s=1', alt: 'Vidhana Soudha' },
    { src: 'https://cdn.britannica.com/56/177656-050-04529521/Glass-House-conservatory-building-Lalbagh-Botanical-Garden.jpg', alt: 'ISKCON Temple' }
  ],
  'Chandigarh': [
    { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9c/5f/d4/stuc-pu-largejpg.jpg?w=500&h=500&s=1', alt: 'Sukhna Lake' },
    { src: 'https://d1msew97rp2nin.cloudfront.net/prodin/tntravel/blogthumbnail/10-must-visit-places-in-chandigarh-the-ultimate-checklist-f83079fc-6c2b-4b24-ab90-57e127d441a8.jpeg', alt: 'Capitol Complex' }
  ],
  'Gurugram': [
    { src: 'https://savemax.in/blogs/wp-content/uploads/2024/11/AdobeStock_692844209_Editorial_Use_Only-1-1.jpg', alt: 'CyberHub' },
    { src: 'https://hblimg.mmtcdn.com/content/hubble/img/manesardestimgs/mmt/activities/t_ufs/m_Kingdom_of_Dreams_1_l_480_640.jpg', alt: 'Kingdom of Dreams' }
  ],
  'Chennai': [
    { src: 'https://www.treebo.com/blog/wp-content/uploads/2018/06/feature-8.jpg', alt: 'Marina Beach' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrluVej3SJ5N7MYVEteBx3yvc3TjqSdIsPfw&s', alt: 'Kapaleeshwarar Temple' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Ripon_Building_panorama.jpg', alt: 'San Thome Basilica' }
  ],
  'Hyderabad': [
    { src: 'https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Charminar' },
    { src: 'https://static.toiimg.com/thumb/msid-93361207,width-1280,height-720,resizemode-72/93361207.jpg', alt: 'Hussain Sagar' },
    { src: 'https://d61pl13vok4ac.cloudfront.net/media/filer_public/3e/29/3e29d295-6481-4905-805a-33d6ce84f21c/bg_892x500.png', alt: 'Golconda Fort' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSb0zlqoE1Unpl-GOozqQeumcuIDvnMHBYbw&s', alt: 'Ramoji Film City' }
  ],
  'Indore': [
    { src: 'https://ido.iiti.ac.in/images/new_building/Abhinandan%20Bhawan/5.JPG', alt: 'Rajwada Palace' },
    { src: 'https://images.architectureplusdesign.in/wp-content/uploads/2023/06/23134809/DSC07013-copy-inside-image-816-x-576-Horizontal.jpg', alt: 'Lal Bagh Palace' }
  ],
};

const allCities = Object.keys(cityData);

const CitiesSection = () => {
  const [activeCity, setActiveCity] = useState('Mumbai');
  const carouselRef = useRef(null);

  const currentImages = cityData[activeCity] || cityData['Mumbai'];

  // Ensure we don't try to show 4 slides if the city only has 2 images
  const slidesToShow = Math.min(4, currentImages.length);

  const carouselSettings = {
    ref: carouselRef,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false, // Turned off infinite looping to keep the UI grounded
    swipeToSlide: true,
    dots: false,
    arrows: false, // We use custom arrows below
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: Math.min(3, currentImages.length) } },
      { breakpoint: 800, settings: { slidesToShow: Math.min(2, currentImages.length) } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <SectionWrapper>
      <Container>
        <HeaderRow>
          <TextContent>
            <SectionTitle>Expanding Beautiful Spaces<br/>Across India's Leading Cities</SectionTitle>
          </TextContent>
          <TextContent>
            <SectionDesc>
              At GoDecor, we believe thoughtful design should be accessible to every home and workspace. As we continue to grow, we're expanding our services to major cities across India, bringing modern interiors and expert craftsmanship closer to you.
            </SectionDesc>
          </TextContent>
        </HeaderRow>

        {/* --- DYNAMIC CITY SLIDER --- */}
        <CarouselWrapper>
          <StyledCarousel key={activeCity} {...carouselSettings}>
            {currentImages.map((image, index) => (
              <CityImageWrapper key={index}>
                <CityImage src={image.src} alt={image.alt} />
              </CityImageWrapper>
            ))}
          </StyledCarousel>
          
          {/* Only show arrows if there are enough images to actually scroll */}
          {currentImages.length > slidesToShow && (
            <>
              <CarouselArrow onClick={() => carouselRef.current.prev()} style={{ left: '-20px' }}>
                <LeftOutlined />
              </CarouselArrow>
              <CarouselArrow onClick={() => carouselRef.current.next()} style={{ right: '-20px' }}>
                <RightOutlined />
              </CarouselArrow>
            </>
          )}
        </CarouselWrapper>

        {/* --- CITY TAG FILTERS --- */}
        <TagsContainer>
          {allCities.map((city) => (
            <CityTag 
              key={city} 
              $isActive={activeCity === city}
              onClick={() => setActiveCity(city)}
            >
              {city}
            </CityTag>
          ))}
        </TagsContainer>
        
      </Container>
    </SectionWrapper>
  );
};

export default CitiesSection;