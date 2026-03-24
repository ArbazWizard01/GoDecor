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

const kitchenData = [
  {
    id: 1,
    title: "Compact Modular",
    features: [
      "Core modular cabinetry",
      "Soft-close hardware",
      "Essential lighting",
    ],
    price: "₹2.5 Lac",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Urban Standard",
    features: [
      "Premium laminate options",
      "Optimized workflow layout",
      "Integrated lighting",
    ],
    price: "₹4.2 Lac",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Smart Storage Pro",
    features: [
      "Tall units & pull-outs",
      "Soft-close channels",
      "Advanced storage systems",
    ],
    price: "₹6.8 Lac",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Peninsula",
    features: [
      "Island/Peninsula layout",
      "Premium acrylic finishes",
      "Built-in appliance housing",
    ],
    price: "₹9.5 Lac",
    image:
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600&auto=format&fit=crop",
  },
];

const ModernKitchens = () => {
  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Modern Kitchen, Smarter Living</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          Functional design solutions engineered for contemporary homes.
        </SectionSubtitle>
      </HeaderContainer>

      <CardsGrid>
        {kitchenData.map((item) => (
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

export default ModernKitchens;
