import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';
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

// Fixed the key to 'budget' so it matches your actual route!
const navItems = [
  { key: 'services', label: 'Services' },
  { key: 'packages', label: 'Packages' },
  { key: 'projects', label: 'Projects' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
  { key: 'budget', label: 'Budget Calculator' } 
];

const MainLayout = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
    setDrawerVisible(false); // Closes drawer automatically on mobile
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <StyledLayout>
      <NavbarWrapper>
        <GlassNav>
          <Logo onClick={goHome} style={{ cursor: 'pointer' }}>
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
            {/* Wired up the Explore button to route to Projects */}
            <ActionButton 
              type="primary" 
              shape="round" 
              onClick={() => navigate('/projects')}
            >
              Explore
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
          mode="vertical" 
          items={navItems} 
          onClick={handleMenuClick}
          selectedKeys={[location.pathname.substring(1)]} 
        />
      </Drawer>

      <Content>
        {children}
      </Content>

      <Footer /> 

    </StyledLayout>
  );
};

export default MainLayout;