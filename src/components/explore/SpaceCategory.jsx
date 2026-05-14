import React, { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  SectionContainer,
  SectionHeader,
  SectionTitle,
  ExploreButton,
  SliderWrapper,
  SliderContainer,
  NavButton,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice
} from "./SpaceCategory.styles";

const SpaceCategory = ({ title, items }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <ExploreButton onClick={() => navigate("/services")}>
          Explore More <FiArrowRight className="arrow-icon" />
        </ExploreButton>
      </SectionHeader>

      <SliderWrapper>
        {canScrollLeft && (
          <NavButton $direction="left" onClick={() => scroll("left")}>
            <FiChevronLeft />
          </NavButton>
        )}
        
        <SliderContainer ref={sliderRef} onScroll={checkScroll}>
          {items.map((item) => (
            <Card key={item.id}>
              <CardImage src={item.image} alt={item.title} />
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <CardPrice>{item.price}</CardPrice>
              </CardContent>
            </Card>
          ))}
        </SliderContainer>

        {canScrollRight && (
          <NavButton $direction="right" onClick={() => scroll("right")}>
            <FiChevronRight />
          </NavButton>
        )}
      </SliderWrapper>
    </SectionContainer>
  );
};

export default SpaceCategory;