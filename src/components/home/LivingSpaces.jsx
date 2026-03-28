import React, { useRef } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import {
  SectionWrapper,
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

const livingData = [
  {
    id: 1,
    title: "Minimal Lounge Setup",
    price: "₹1.8 Lac",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Feature Wall",
    price: "₹3.2 Lac",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neutral Comfort Plan",
    price: "₹4.5 Lac",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Entertainment",
    price: "₹6.0 Lac",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
  },
];

const LivingSpaces = () => {
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
      <HeaderRow>
        <HeaderText>
          <SectionTitle>Living Spaces, Reimagined</SectionTitle>
          <TitleAccent />
          <SectionSubtitle>
            Structured layouts and modern finishes built for comfort and clarity.
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
        {livingData.map((item) => (
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
    </SectionWrapper>
  );
};

export default LivingSpaces;