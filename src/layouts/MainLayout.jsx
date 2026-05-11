import React, { useState } from "react";
import { Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import {
  FiChevronDown,
  FiMapPin,
  FiSearch,
  FiShoppingCart,
  FiSmile,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import {
  StyledLayout,
  NavbarWrapper,
  GlassNav,
  Logo,
  LogoImage,
  StyledMenu,
  LocationBox,
  SearchBox,
  SearchInput,
  IconButton,
  MobileMenuButton,
  MobileMenu,
} from "./MainLayout.styles";

const { Content } = Layout;

const desktopNavItems = [
  {
    key: "services-dropdown",
    label: (
      <span className="services-label">
        Services
        <span className="dropdown-circle">
          <FiChevronDown />
        </span>
      </span>
    ),
    children: [
      { key: "services/moduler-kitchens", label: "Modular Kitchens" },
      { key: "services/living-spaces", label: "Living Spaces" },
      { key: "services/bedroom-designs", label: "Bedroom Designs" },
      { type: "divider" },
      { key: "services", label: "View All Services" },
    ],
  },
  { key: "explore", label: "Explore" },
  { key: "about", label: "About Us" },
  { key: "blog", label: "Blog" },
  { key: "contact", label: "Contact" },
];

const mobileNavItems = [
  {
    key: "services-dropdown",
    label: "Services",
    children: [
      { key: "services/moduler-kitchens", label: "Modular Kitchens" },
      { key: "services/living-spaces", label: "Living Spaces" },
      { key: "services/bedroom-designs", label: "Bedroom Designs" },
      { type: "divider" },
      { key: "services", label: "View All Services" },
    ],
  },
  { key: "explore", label: "Explore" },
  { key: "about", label: "About Us" },
  { key: "blog", label: "Blog" },
  { key: "contact", label: "Contact" },
];

const MainLayout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleMenuClick = (e) => {
    if (e.key.startsWith("services/")) {
      navigate("/services");
    } else {
      navigate(`/${e.key}`);
    }
    setDrawerVisible(false);
  };

  const goHome = () => {
    navigate("/");
  };

  const activeKey =
    location.pathname === "/" ? "" : location.pathname.substring(1);

  return (
    <StyledLayout>
      <NavbarWrapper>
        <GlassNav>
          <Logo onClick={goHome}>
            <LogoImage src="/godecor-text-logo.png" alt="goDecor" />
          </Logo>

          <StyledMenu
            mode="horizontal"
            items={desktopNavItems}
            disabledOverflow={true}
            onClick={handleMenuClick}
            selectedKeys={[activeKey]}
          />

          <LocationBox className="hide-mobile">
            <FiMapPin className="icon-grey" />
            <span>Mumbai</span>
            <FiChevronDown className="icon-grey" />
          </LocationBox>

          <SearchBox className="hide-mobile">
            <SearchInput placeholder="Search for services, e.g., False Ceiling" />
            <FiSearch className="icon-grey" />
          </SearchBox>

          <IconButton className="hide-mobile">
            <FiShoppingCart />
          </IconButton>

          <IconButton className="hide-mobile">
            <FiSmile />
          </IconButton>

          <MobileMenuButton onClick={showDrawer}>
            <MenuOutlined />
          </MobileMenuButton>
        </GlassNav>
      </NavbarWrapper>

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        size="default"
      >
        <MobileMenu
          mode="inline"
          items={mobileNavItems}
          onClick={handleMenuClick}
          selectedKeys={[activeKey]}
        />
      </Drawer>

      <Content>{children}</Content>

      <Footer />
    </StyledLayout>
  );
};

export default MainLayout;
