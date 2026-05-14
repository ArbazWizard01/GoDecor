import React from "react";
import { FiArrowRight, FiBox, FiHome, FiMoon, FiColumns, FiLayers, FiFeather } from "react-icons/fi";
import {
  SectionContainer,
  SectionHeader,
  TitleBlock,
  SectionTitle,
  SectionDescription,
  ExploreButton,
  FeaturedCard,
  FeaturedOverlay,
  FeaturedCardInner,
  FeaturedContent,
  FeaturedTitle,
  FeaturedDescription,
  FeaturesList,
  FeatureItem,
  FeaturedBottom,
  PriceBlock,
  PriceLabel,
  FeaturedPrice,
  PackageButton,
  GridContainer,
  SubCard,
  SubCardImage,
  SubCardContent,
  SubCardTitle,
  SubCardDescription,
  SubFeaturesGrid,
  SubFeatureItem,
  SubCardBottom,
  SubCardPrice,
  ExplorePackageButton
} from "./CompleteSolutions.styles";

const featuredData = {
  title: "Complete Home Interior Package",
  description: "A comprehensive end-to-end interior solution designed to bring consistency, comfort, and functionality across every corner of your home.",
  features: [
    { text: "Modular Kitchen", icon: <FiBox className="feature-icon" /> },
    { text: "Living Room", icon: <FiHome className="feature-icon" /> },
    { text: "Bedrooms", icon: <FiMoon className="feature-icon" /> },
    { text: "Wardrobe & Storage", icon: <FiColumns className="feature-icon" /> },
    { text: "False Ceiling & Lighting", icon: <FiLayers className="feature-icon" /> },
    { text: "Decor & Styling", icon: <FiFeather className="feature-icon" /> }
  ],
  priceLabel: "Starting From",
  priceValue: "₹8.99L*",
  image: "complete-solutions.jpg"
};

const subPackages = [
  {
    id: 1,
    title: "Modern Kitchen Package",
    description: "Stylish and functional kitchen interiors designed for modern homes and everyday use.",
    features: ["Modular Layout", "Storage Units", "Ambient Lighting", "+2 More"],
    price: "Starting from ₹1.99L*",
    image: "complete-solutions-kitchen.jpg"
  },
  {
    id: 2,
    title: "Workspace Setup Package",
    description: "Smart workspace interiors crafted to improve focus, productivity, and comfort.",
    features: ["Workstation Design", "Storage Solutions", "Lighting Setup", "+3 More"],
    price: "Starting from ₹2.49L*",
    image: "complete-solutions-workspace.jpg"
  },
  {
    id: 3,
    title: "Luxury Living Package",
    description: "Elegant living room interiors with layered textures, lighting, and refined finishes.",
    features: ["TV Unit Design", "False Ceiling", "Accent Lighting", "+2 More"],
    price: "Starting from ₹3.25L*",
    image: "complete-solutions-living.jpg"
  }
];

const CompleteSolutions = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <TitleBlock>
          <SectionTitle>Complete Solutions</SectionTitle>
          <SectionDescription>
            Explore expertly designed interior packages that combine functionality, aesthetics, and seamless execution for modern living and working spaces.
          </SectionDescription>
        </TitleBlock>
        <ExploreButton>
          Explore More <FiArrowRight />
        </ExploreButton>
      </SectionHeader>

      <FeaturedCard $bgImage={featuredData.image}>
        <FeaturedOverlay />
        
        <FeaturedCardInner>
          <FeaturedContent>
            <FeaturedTitle>{featuredData.title}</FeaturedTitle>
            <FeaturedDescription>{featuredData.description}</FeaturedDescription>
            
            <FeaturesList>
              <p>INCLUDES:</p>
              {featuredData.features.map((feature, index) => (
                <FeatureItem key={index}>
                  {feature.icon} {feature.text}
                </FeatureItem>
              ))}
            </FeaturesList>
          </FeaturedContent>

          <FeaturedBottom>
            <PriceBlock>
              <PriceLabel>{featuredData.priceLabel}</PriceLabel>
              <FeaturedPrice>{featuredData.priceValue}</FeaturedPrice>
            </PriceBlock>
            <PackageButton>
              Explore Packages <FiArrowRight />
            </PackageButton>
          </FeaturedBottom>
        </FeaturedCardInner>
        
      </FeaturedCard>

      <GridContainer>
        {subPackages.map((pkg) => (
          <SubCard key={pkg.id}>
            <SubCardImage src={pkg.image} alt={pkg.title} />
            <SubCardContent>
              <SubCardTitle>{pkg.title}</SubCardTitle>
              <SubCardDescription>{pkg.description}</SubCardDescription>
              
              <SubFeaturesGrid>
                {pkg.features.map((feature, idx) => (
                  <SubFeatureItem key={idx}>{feature}</SubFeatureItem>
                ))}
              </SubFeaturesGrid>
              
              <SubCardBottom>
                <SubCardPrice>{pkg.price}</SubCardPrice>
                <ExplorePackageButton>
                  Explore Package <FiArrowRight />
                </ExplorePackageButton>
              </SubCardBottom>
            </SubCardContent>
          </SubCard>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default CompleteSolutions;