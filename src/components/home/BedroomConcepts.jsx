import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  CardsGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  FeatureList,
  FeatureItem,
  CardPrice,
  CardLink,
} from "../common/CategoryGrid.styles";

const bedroomData = [
  {
    id: 1,
    title: "Compact Storage Plan",
    features: ["Sliding wardrobe", "Bed-back panel", "Lighting setup"],
    price: "₹1.5 Lac",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Master Setup",
    features: ["Hinged wardrobe", "Soft paneling", "Side storage integration"],
    price: "₹3.2 Lac",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Soft Neutral Finish",
    features: ["Light-toned palette", "Under-bed storage", "Warm lighting"],
    price: "₹4.5 Lac",
    // ⬇️ Swapped to a highly reliable Pexels image ⬇️
    image:
      "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Premium Suite",
    features: [
      "Walk-in closet ready",
      "Layered textures",
      "Accent seating area",
    ],
    price: "₹7.0 Lac",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop",
  },
];

const BedroomConcepts = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Modern Bedroom Concepts</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          Storage-focused, calm, and thoughtfully layered bedroom systems.
        </SectionSubtitle>
      </HeaderContainer>

      <CardsGrid>
        {bedroomData.map((item) => (
          <Card key={item.id}>
            <CardImage src={item.image} alt={item.title} />
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <FeatureList>
                {item.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <div style={{ marginTop: "auto" }}>
                <CardPrice>Starting from {item.price}</CardPrice>
                <CardLink>
                  Explore Concept{" "}
                  <ArrowRightOutlined style={{ fontSize: "0.8rem" }} />
                </CardLink>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardsGrid>
    </SectionWrapper>
  );
};

export default BedroomConcepts;
