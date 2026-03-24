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

const livingData = [
  {
    id: 1,
    title: "Minimal Lounge Setup",
    features: ["TV unit", "Accent wall finish", "Ambient lighting"],
    price: "₹1.8 Lac",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modern Feature Wall",
    features: [
      "Designer TV panel",
      "Wall texture finish",
      "Concealed lighting",
    ],
    price: "₹3.2 Lac",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neutral Comfort Plan",
    features: ["Balanced color scheme", "Storage integration", "Lighting plan"],
    price: "₹4.5 Lac",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Premium Entertainment",
    features: [
      "Custom media console",
      "Acoustic paneling",
      "Smart integration",
    ],
    price: "₹6.0 Lac",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
  },
];

const LivingSpaces = () => {
  return (
    <SectionWrapper style={{ backgroundColor: "#f9f8f6" }}>
      <HeaderContainer>
        <SectionTitle>Living Spaces Reimagined</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          Structured layouts and modern finishes built for comfort and clarity.
        </SectionSubtitle>
      </HeaderContainer>

      <CardsGrid>
        {livingData.map((item) => (
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

export default LivingSpaces;
