import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: transparent;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding: 0 5%;
`;

export const GlassNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: rgba(255, 255, 255, 0.3); 
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  border-radius: 50px;
  padding: 0 30px;
  width: 100%;
  max-width: 1300px;
  height: 70px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px; /* Gives it some breathing room from the "Services" link */
  cursor: pointer;
`;


export const LogoImage = styled.img`
  height: 24px; /* Dropped from 32px to match the sleekness of the text */
  width: auto;
  object-fit: contain;
  display: block; /* This is the magic rule that removes the invisible spacing under images! */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledMenu = styled(Menu)`
  flex: 1;
  justify-content: center;
  border-bottom: none !important;
  background: transparent !important; 
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 66px;

  &.ant-menu-horizontal > .ant-menu-item::after {
    display: none !important; 
  }
  
  .ant-menu-title-content {
    position: relative;
    display: inline-block;
  }

  /* Left-to-Right sweep animation */
  .ant-menu-title-content::after {
    content: '';
    position: absolute;
    bottom: 4px; 
    left: 0;
    width: 0;
    height: 2px;
    background-color: #1a56db;
    transition: width 0.3s ease-out;
    border-radius: 2px;
  }

  /* Expand width to 100% on hover AND when active/selected */
  .ant-menu-item:hover .ant-menu-title-content::after,
  .ant-menu-item-selected .ant-menu-title-content::after {
    width: 100%;
  }

  .ant-menu-item {
    background: transparent !important;
  }
  
  .ant-menu-item-selected {
    background: transparent !important;
    color: #1a56db !important;
  }

  @media (max-width: 992px) {
    display: none !important;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActionButton = styled(Button)`
  background-color: #1a56db;
  font-weight: 500;
  padding: 0 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(26, 86, 219, 0.2) !important;
  }

  @media (max-width: 600px) {
    display: none !important;
  }
`;

export const MobileMenuButton = styled.div`
  display: none; 
  font-size: 1.5rem;
  color: #1f2937;
  cursor: pointer;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenu = styled(Menu)`
  border-right: none !important;
  font-size: 1.1rem;
  font-family: 'Inter', sans-serif;

  .ant-menu-item-selected {
    background-color: rgba(26, 86, 219, 0.05) !important;
    color: #1a56db !important;
    font-weight: 600;
  }
`;