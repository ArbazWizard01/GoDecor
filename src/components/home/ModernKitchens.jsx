import React, { useRef } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  SectionWrapper,
  InnerContainer,
  HeaderRow,
  HeaderText,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  SliderControls,
  ControlButton,
  CardsSlider,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  ExploreButton,
} from "../common/CategoryGrid.styles";

const kitchenData = [
  {
    id: 1,
    title: "Compact Modular",
    price: "₹2.5 Lac",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Standard",
    price: "₹4.2 Lac",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Storage Pro",
    price: "₹6.8 Lac",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Modern Matte Finish",
    price: "₹7.2 Lac",
    image: "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600&auto=format&fit=crop",
  },
];

const ModernKitchens = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 338; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderRow>
          <HeaderText>
            <SectionTitle>Modern Kitchens, Smarter Living</SectionTitle>
            <TitleAccent />
            <SectionSubtitle>
              Functional designs built for today's homes.
            </SectionSubtitle>
          </HeaderText>
          <SliderControls>
            <ControlButton onClick={() => scroll("left")}>
              <ArrowLeftOutlined style={{ fontSize: "16px" }} />
            </ControlButton>
            <ControlButton onClick={() => scroll("right")}>
              <ArrowRightOutlined style={{ fontSize: "16px" }} />
            </ControlButton>
          </SliderControls>
        </HeaderRow>

        <CardsSlider ref={sliderRef}>
          {kitchenData.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardPrice>Starting from {item.price}</CardPrice>
                <ExploreButton>
                  Explore Concept <ArrowRightOutlined style={{ fontSize: "12px" }} />
                </ExploreButton>
              </CardContent>
            </Card>
          ))}
        </CardsSlider>
      </InnerContainer>
    </SectionWrapper>
  );
};

export default ModernKitchens;