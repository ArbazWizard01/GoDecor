import React from "react";
import MainLayout from "../layouts/MainLayout";
import ExploreHero from "../components/explore/ExploreHero";
import RecommendedServices from "../components/explore/RecommendedServices";
import CompleteSolutions from "../components/explore/CompleteSolutions";
import SpaceCategory from "../components/explore/SpaceCategory";
import ExploreCTA from "../components/explore/ExploreCTA";

const categoriesData = [
  {
    id: "kitchen-spaces",
    title: "Kitchen Spaces",
    items: [
      {
        id: 1,
        title: "Modular Kitchen",
        description:
          "Functional modular kitchen layouts designed for efficiency and modern living.",
        price: "Starting from ₹1.5L*",
        image: "complete-solutions-kitchen.jpg",
      },
      {
        id: 2,
        title: "Pantry & Storage Units",
        description:
          "Smart storage solutions built to maximize organization and accessibility.",
        price: "Starting from ₹45K*",
        image:
          "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 3,
        title: "Breakfast Counter Design",
        description:
          "Modern counter concepts crafted for casual dining and connected spaces.",
        price: "Starting from ₹35K*",
        image: "kitchen-breakfast.jpg",
      },
      {
        id: 4,
        title: "Kitchen Lighting",
        description:
          "Layered lighting setups to enhance ambiance and task visibility.",
        price: "Starting from ₹18K*",
        image: "kitchen-lighting.jpg",
      },
      {
        id: 5,
        title: "Island Concepts",
        description:
          "Centralized kitchen islands blending prep space with social seating.",
        price: "Starting from ₹60K*",
        image: "kitchen-island.jpg",
      },
    ],
  },
  {
    id: "living-spaces",
    title: "Living Spaces",
    items: [
      {
        id: 6,
        title: "TV Unit Design",
        description:
          "Minimal and modern entertainment units crafted for organized and elegant living spaces.",
        price: "Starting from ₹35K*",
        image: "tv-unit.jpg",
      },
      {
        id: 7,
        title: "False Ceiling Design",
        description:
          "Layered ceiling concepts with integrated lighting and refined visual depth.",
        price: "Starting from ₹55K*",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 8,
        title: "Accent Wall Design",
        description:
          "Statement wall treatments that add texture, depth, and character to modern interiors.",
        price: "Starting from ₹26K*",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 9,
        title: "Ambient Lighting",
        description:
          "Balanced lighting solutions for warmth, functionality, and atmosphere.",
        price: "Starting from ₹22K*",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 10,
        title: "Sofa & Seating",
        description:
          "Premium lounging arrangements designed for unparalleled comfort and style.",
        price: "Starting from ₹45K*",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    id: "bedroom-spaces",
    title: "Bedroom Spaces",
    items: [
      {
        id: 11,
        title: "Custom Wardrobes",
        description:
          "Tailored wardrobe systems designed for smarter organization and seamless functionality.",
        price: "Starting from ₹65K*",
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 12,
        title: "Bed Backdrop Design",
        description:
          "Elegant backdrop concepts that add texture, warmth, and visual depth to bedrooms.",
        price: "Starting from ₹28K*",
        image:
          "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 13,
        title: "Bedroom Lighting",
        description:
          "Layered lighting solutions designed to create calm and comfortable bedroom environments.",
        price: "Starting from ₹18K*",
        image: "bedroom-lighting.jpg",
      },
      {
        id: 14,
        title: "Storage Solutions",
        description:
          "Smart storage integrations crafted for maximizing space while maintaining a clean aesthetic.",
        price: "Starting from ₹35K*",
        image: "storage-solutions.jpg",
      },
      {
        id: 15,
        title: "Kids Room Design",
        description:
          "Vibrant and safe spaces engineered for creativity, rest, and active play.",
        price: "Starting from ₹85K*",
        image:
          "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    id: "workspace-design",
    title: "Workspace Design",
    items: [
      {
        id: 16,
        title: "Workstation Setup",
        description:
          "Functional workstations layouts designed for comfort, efficiency, and organized work environments.",
        price: "Starting from ₹45K*",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 17,
        title: "Storage & Filing Units",
        description:
          "Smart storage systems crafted to maintain clean, organized, and clutter-free workspaces.",
        price: "Starting from ₹28K*",
        image: "filing-units.jpg",
      },
      {
        id: 18,
        title: "Meeting Space Design",
        description:
          "Professional meeting environments designed for collaboration, discussions, and presentations.",
        price: "Starting from ₹75K*",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 19,
        title: "Workspace Lighting",
        description:
          "Balanced lighting solutions crafted for focus, productivity, and overall workspace functionality.",
        price: "Starting from ₹20K*",
        image:
          "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 20,
        title: "Ergonomic Furniture",
        description:
          "Posture-supporting chairs and desks designed for long hours of comfortable work.",
        price: "Starting from ₹15K*",
        image:
          "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    id: "pooja-spaces",
    title: "Pooja Spaces",
    items: [
      {
        id: 21,
        title: "Wall-Mounted Mandirs",
        description:
          "Compact and elegant wall-mounted pooja units designed for modern living spaces.",
        price: "Starting from ₹18K*",
        image: "mandir-1.jpg",
      },
      {
        id: 22,
        title: "Wooden Temple Units",
        description:
          "Traditional and contemporary wooden mandir designs crafted with rich detailing.",
        price: "Starting from ₹42K*",
        image: "mandir-2.jpg",
      },
      {
        id: 23,
        title: "Backlit Pooja Panels",
        description:
          "Decorative illuminated back panels designed to enhance the spiritual ambiance.",
        price: "Starting from ₹15K*",
        image: "mandir-3.jpg",
      },
      {
        id: 24,
        title: "Storage & Drawers",
        description:
          "Functional storage solutions integrated for pooja essentials and accessories.",
        price: "Starting from ₹12K*",
        image: "mandir-4.jpg",
      },
      {
        id: 25,
        title: "Floor Standing Mandirs",
        description:
          "Grand, standalone architectural pieces serving as the spiritual core of your home.",
        price: "Starting from ₹55K*",
        image: "mandir-5.jpg",
      },
    ],
  },
  {
    id: "decor-styling",
    title: "Decor & Styling",
    items: [
      {
        id: 26,
        title: "Wall Decor & Panels",
        description:
          "Decorative wall concepts designed to add texture, character, and visual depth.",
        price: "Starting from ₹18K*",
        image:
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 27,
        title: "Ambient Lighting",
        description:
          "Mood-focused lighting setups crafted to create warm and balanced interior experiences.",
        price: "Starting from ₹20K*",
        image:
          "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: 28,
        title: "Mirrors & Accent Elements",
        description:
          "Reflective surfaces and decor accents designed to enhance openness and elegance.",
        price: "Starting from ₹12K*",
        image:
          "mirror-elements.jpg",
      },
      {
        id: 29,
        title: "Soft Furnishings",
        description:
          "Curtains, cushions, fabrics, and textures crafted to complete the interior experience.",
        price: "Starting from ₹18K*",
        image:
          "soft-furnishing.jpg",
      },
      {
        id: 30,
        title: "Rugs & Carpets",
        description:
          "Premium floor coverings that anchor rooms and provide underfoot comfort.",
        price: "Starting from ₹10K*",
        image:
          "rugs-carpets.jpg",
      },
    ],
  },
];

const ExplorePage = () => {
  return (
    <MainLayout>
      <ExploreHero />
      <RecommendedServices />
      <CompleteSolutions />

      {categoriesData.map((category) => (
        <SpaceCategory
          key={category.id}
          title={category.title}
          items={category.items}
        />
      ))}
      <ExploreCTA />
    </MainLayout>
  );
};

export default ExplorePage;
