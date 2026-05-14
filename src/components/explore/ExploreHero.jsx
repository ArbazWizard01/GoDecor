import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowRight, FiBox, FiLayers, FiSun, FiColumns, FiMonitor, FiHome, FiMoon, FiStar, FiFeather, FiGrid } from "react-icons/fi";
import {
  HeroContainer,
  HeroContent,
  Overline,
  Title,
  Highlight,
  Description,
  SearchWrapper,
  SearchInput,
  CategoryGrid,
  CategoryItem,
  IconBox,
  CategoryLabel,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroImages,
  GridImage
} from "./ExploreHero.styles";

const categories = [
  { id: 1, label: "Kitchens", icon: <FiBox /> },
  { id: 2, label: "False Ceiling", icon: <FiLayers /> },
  { id: 3, label: "Lighting", icon: <FiSun /> },
  { id: 4, label: "Wardrobes", icon: <FiColumns /> },
  { id: 5, label: "TV Units", icon: <FiMonitor /> },
  { id: 6, label: "Living Rooms", icon: <FiHome /> },
  { id: 7, label: "Bedrooms", icon: <FiMoon /> },
  { id: 8, label: "Pooja Spaces", icon: <FiStar /> },
  { id: 9, label: "Decor Styling", icon: <FiFeather /> },
  { id: 10, label: "All Services", icon: <FiGrid /> }
];

const ExploreHero = () => {
  const navigate = useNavigate();

  return (
    <HeroContainer>
      <HeroContent>
        <Overline>INTERIOR SERVICES & PACKAGES</Overline>
        <Title>
          Interior Solutions <br />
          <Highlight>Designed Around You</Highlight>
        </Title>
        <Description>
          From modular kitchens to complete home interiors, explore our wide range of services and curated packages crafted for every space and lifestyle.
        </Description>

        <SearchWrapper>
          <FiSearch className="search-icon" />
          <SearchInput placeholder="Search for services, e.g., Modular Kitchen" />
        </SearchWrapper>

        <CategoryGrid>
          {categories.map((item) => (
            <CategoryItem key={item.id}>
              <IconBox>{item.icon}</IconBox>
              <CategoryLabel>{item.label}</CategoryLabel>
            </CategoryItem>
          ))}
        </CategoryGrid>

        <ButtonGroup>
          <PrimaryButton onClick={() => navigate("/services")}>
            Explore Services <FiArrowRight />
          </PrimaryButton>
          <SecondaryButton>View Packages</SecondaryButton>
        </ButtonGroup>
      </HeroContent>

      <HeroImages>
        <GridImage className="img-tall" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="Living Room" />
        <GridImage className="img-short" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Lighting" />
        <GridImage className="img-sq-1" src="explore-right.jpg" alt="Kitchen" />
        <GridImage className="img-sq-2" src="explore-right-middle.jpg" alt="Ceiling" />
        <GridImage className="img-sq-3" src="explore-right-bottom.jpg" alt="Wardrobe" />
      </HeroImages>
    </HeroContainer>
  );
};

export default ExploreHero;