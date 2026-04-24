import React, { useState } from "react";
import { Layout, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/common/Footer";
import {
  StyledLayout,
  NavbarWrapper,
  GlassNav,
  Logo,
  LogoImage,
  StyledMenu,
  RightActions,
  ActionButton,
  MobileMenuButton,
  MobileMenu,
} from "./MainLayout.styles";

const { Content } = Layout;

const navItems = [
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
  { key: "packages", label: "Packages" },
  { key: "projects", label: "Projects" },
  { key: "about", label: "About Us" },
  { key: "contact", label: "Contact" },
  { key: "budget", label: "Budget Calculator" },
];

const MainLayout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleMenuClick = (e) => {
    if (e.key.startsWith('services/')) {
      navigate('/services');
    } else {
      navigate(`/${e.key}`);
    }
    setDrawerVisible(false);
  };

  const goHome = () => {
    navigate("/");
  };

  const activeKey = location.pathname.substring(1) || "";

  return (
    <StyledLayout>
      <NavbarWrapper>
        <GlassNav>
          <Logo
            onClick={goHome}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <LogoImage src="/godecor-text-logo.png" alt="goDecor" />
          </Logo>

          <StyledMenu
            mode="horizontal"
            items={navItems}
            disabledOverflow={true}
            onClick={handleMenuClick}
            selectedKeys={[activeKey]}
          />

          <RightActions>
            <ActionButton type="primary" onClick={() => navigate("/projects")}>
              Plan Your Space
            </ActionButton>

            <MobileMenuButton onClick={showDrawer}>
              <MenuOutlined />
            </MobileMenuButton>
          </RightActions>
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
          items={navItems}
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