import React, { useState } from 'react';
import {
  SectionWrapper,
  HeaderContainer,
  SectionTitle,
  TitleAccentLine,
  SectionSubtitle,
  FilterContainer,
  FilterButton,
  GridContainer,
  ProjectCard,
  ProjectImage
} from './ExecutedProjects.styles';

const projectsData = [
  {
    id: 1,
    category: 'Kitchen',
    img: 'https://anupamkitchen.com/wp-content/uploads/2025/10/main-kitchen-image.webp'
  },
  {
    id: 2,
    category: 'Living',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Bedroom',
    img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Kitchen',
    img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Living',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Bedroom',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop'
  }
];

const categories = ['All', 'Kitchen', 'Living', 'Bedroom'];

const ExecutedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeFilter);

  return (
    <SectionWrapper>
      <HeaderContainer>
        <SectionTitle>Executed Projects</SectionTitle>
        <TitleAccentLine />
        <SectionSubtitle>
          Selected spaces delivered across modern urban residences.
        </SectionSubtitle>
      </HeaderContainer>

      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category}
            $isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <GridContainer>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.img} alt={`${project.category} Project`} />
          </ProjectCard>
        ))}
      </GridContainer>
    </SectionWrapper>
  );
};

export default ExecutedProjects;