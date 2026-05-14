import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiUsers,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  ExploreButton,
  CardsContainer,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
  HighlightsWrapper,
  HighlightItem,
  HighlightIcon,
  HighlightText,
  HighlightTitle,
  HighlightDesc,
} from "./RecommendedServices.styles";

const services = [
  {
    id: 1,
    image: "explore-right.jpg",
    title: "Modular Kitchen",
    description:
      "Modern kitchens built for functionality and everyday comfort.",
    price: "Starting from ₹1.5L",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600",
    title: "False Ceiling",
    description:
      "Layered ceiling solutions with integrated lighting aesthetics.",
    price: "Starting from ₹45K",
  },
  {
    id: 3,
    image: "explore-right-bottom.jpg",
    title: "Custom Wardrobes",
    description: "Storage systems tailored for organization and clean living.",
    price: "Starting from ₹65K",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    title: "Lighting Design",
    description: "Ambient, accent, and task lighting setups for modern spaces.",
    price: "Starting from ₹25K",
  },
];

const highlights = [
  {
    id: 1,
    icon: <FiAward />,
    title: "Premium Material",
    description: "Sourced from trusted brands and suppliers.",
  },
  {
    id: 2,
    icon: <FiUsers />,
    title: "Verified Experts",
    description: "Experienced designers and skilled professionals.",
  },
  {
    id: 3,
    icon: <FiShield />,
    title: "Transparent Pricing",
    description: "Clear estimates with no hidden costs.",
  },
  {
    id: 4,
    icon: <FiHeadphones />,
    title: "End-to-End Support",
    description: "From design to installation and aftercare.",
  },
];

const RecommendedServices = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Recommended Services</SectionTitle>
        <ExploreButton onClick={() => navigate("/services")}>
          Explore More <FiArrowRight />
        </ExploreButton>
      </SectionHeader>

      <CardsContainer>
        {services.map((service) => (
          <Card key={service.id}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <CardPrice>{service.price}</CardPrice>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>

      <HighlightsWrapper>
        {highlights.map((item) => (
          <HighlightItem key={item.id}>
            <HighlightIcon>{item.icon}</HighlightIcon>
            <HighlightText>
              <HighlightTitle>{item.title}</HighlightTitle>
              <HighlightDesc>{item.description}</HighlightDesc>
            </HighlightText>
          </HighlightItem>
        ))}
      </HighlightsWrapper>
    </SectionContainer>
  );
};

export default RecommendedServices;