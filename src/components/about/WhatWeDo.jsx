import React from "react";
import {
  SectionWrapper,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  IconWrapper,
  CardTitle,
  CardSubtitle,
  CardImage,
} from "./WhatWeDo.styles";

const servicesData = [
  {
    id: 1,
    title: "Interior Design & Planning",
    description: "Thoughtful layouts designed around your lifestyle.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 9V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
        <path d="M2 13v6h2v-2h16v2h2v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
        <path d="M6 11v-2" />
        <path d="M18 11v-2" />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Modular Kitchens",
    description: "Functional kitchens built for everyday efficiency.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="4" y1="10" x2="20" y2="10" />
        <line x1="9" y1="5" x2="9" y2="7" />
        <line x1="9" y1="13" x2="9" y2="15" />
      </svg>
    ),
    image:
      "aboutkitchen.jpg",
  },
  {
    id: 3,
    title: "Living & Bedroom Interiors",
    description: "Comfort-driven spaces with modern aesthetics.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <path d="M2 8h20" />
        <path d="M6 4v4" />
        <path d="M18 4v4" />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Complete Home Interiors",
    description: "End-to-end solutions for a fully designed home.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Office & Workspace Design",
    description: "Productive spaces tailored for professional needs.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Pooja & Custom Spaces",
    description: "Designed corners that bring balance and purpose.",
    icon: (
      <img
        src="/whaticon.png"
        alt="Pooja Icon"
        style={{
          width: "20px",
          height: "20px",
          objectFit: "contain",
          mixBlendMode: "screen",
        }}
      />
    ),
    image: "https://media.designcafe.com/wp-content/uploads/2021/01/27173127/small-pooja-room-designs-in-apartments-1.jpg",   
  },
];

const WhatWeDo = () => {
  return (
    <SectionWrapper>
      <Container>
        <Header>
          <Title>What We Do</Title>
          <Subtitle>
            Designing and delivering interiors tailored for modern living and
            working.
          </Subtitle>
        </Header>

        <Grid>
          {servicesData.map((service) => (
            <Card key={service.id}>
              <IconWrapper>{service.icon}</IconWrapper>
              <CardTitle>{service.title}</CardTitle>
              <CardSubtitle>{service.description}</CardSubtitle>
              <CardImage src={service.image} alt={service.title} />
            </Card>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default WhatWeDo;
