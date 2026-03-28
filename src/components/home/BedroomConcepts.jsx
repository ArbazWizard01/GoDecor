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

const bedroomData = [
  {
    id: 1,
    title: "Compact Storage Plan",
    price: "₹1.5 Lac",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Master Setup",
    price: "₹3.2 Lac",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Soft Neutral Finish",
    price: "₹4.5 Lac",
    image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Premium Suite",
    price: "₹7.0 Lac",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop",
  },
];

const BedroomConcepts = () => {
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
          <SectionTitle>Designed for Restful Living</SectionTitle>
          <TitleAccent />
          <SectionSubtitle>
            Storage-focused, calm, and thoughtfully layered bedroom systems.
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
        {bedroomData.map((item) => (
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

export default BedroomConcepts;