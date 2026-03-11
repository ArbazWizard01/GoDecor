import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer'; // <--- 1. Imported the Footer!
import { 
  StyledLayout,
  NavbarWrapper, 
  GlassNav,
  Logo, 
  StyledMenu, 
  RightActions,
  ActionButton,
  MobileMenuButton,
  MobileMenu
} from './MainLayout.styles';

const { Content } = Layout;

const navItems = [
  { key: 'services', label: 'Services' },
  { key: 'packages', label: 'Packages' },
  { key: 'projects', label: 'Projects' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
  { key: 'calculator', label: 'Budget Calculator' }
];

const MainLayout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
    setDrawerVisible(false);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <StyledLayout>
      <NavbarWrapper>
        <GlassNav>
          <Logo onClick={goHome}>
            go<span>Decor</span>
          </Logo>
          
          <StyledMenu 
            mode="horizontal" 
            items={navItems} 
            disabledOverflow={true} 
            onClick={handleMenuClick}
            selectedKeys={[location.pathname.substring(1)]} 
          />
          
          <RightActions>
            <ActionButton type="primary" shape="round">Explore</ActionButton>
            
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
          mode="vertical" 
          items={navItems} 
          onClick={handleMenuClick}
          selectedKeys={[location.pathname.substring(1)]} 
        />
      </Drawer>

      {/* The page content goes here */}
      <Content>
        {children}
      </Content>

      {/* 2. Added the Footer so it shows up on EVERY page automatically! */}
      <Footer /> 

    </StyledLayout>
  );
};

export default MainLayout;