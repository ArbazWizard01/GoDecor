import React, { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccent,
  SectionSubtitle,
  FilterContainer,
  FilterButton,
  GalleryGrid,
  GalleryItem,
  ItemImage,
  ItemContent,
  ItemTitle,
  ItemCategory,
  SeeAllButton,
} from "./ProjectsGallery.styles";

/* --- THE PROJECT DATA --- */
const projectsData = [
  /* KITCHENS */
  {
    id: 1,
    title: "Minimalist Modular Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
  },

  {
    id: 3,
    title: "Luxury Peninsula Layout",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=600&auto=format&fit=crop",
  },
  /* LIVING */
  {
    id: 4,
    title: "Modern Neural Lounge",
    category: "Living",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cozy Accent Setup",
    category: "Living",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=600&auto=format&fit=crop",
  },
  /* BEDROOM */
  {
    id: 6,
    title: "Urban Master Suite",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Neutral Storage Plan",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = ["All", "Kitchen", "Living", "Bedroom"];

const ProjectsGallery = () => {
  /* State to manage the active filter */
  const [activeFilter, setActiveFilter] = useState("All");

  /* Filtering Logic */
  const filteredProjects = projectsData.filter((project) =>
    activeFilter === "All" ? true : project.category === activeFilter,
  );

  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Executed Projects</SectionTitle>
        <TitleAccent />
        <SectionSubtitle>
          A curated portfolio of recently transformed spaces, built to mirror
          the vision of our premium packages.
        </SectionSubtitle>
      </HeaderContainer>

      {/* --- FILTER BUTTONS --- */}
      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            onClick={() => setActiveFilter(category)}
            /* Pass active state to Styled Components with $ prefix (to avoid passing to standard button tag) */
            $isActive={activeFilter === category}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      {/* --- GALLERY GRID --- */}
      <GalleryGrid>
        {filteredProjects.map((project) => (
          <GalleryItem key={project.id}>
            <ItemImage src={project.image} alt={project.title} />
            <ItemContent>
              <ItemCategory>{project.category}</ItemCategory>
              <ItemTitle>{project.title}</ItemTitle>
            </ItemContent>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* --- "SEE ALL" BUTTON --- */}
      <SeeAllButton>
        See All Projects <ArrowRightOutlined />
      </SeeAllButton>
    </SectionWrapper>
  );
};

export default ProjectsGallery;
