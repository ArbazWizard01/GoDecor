import styled from "styled-components";
import { Layout, Menu, Button } from "antd";

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: transparent;
`;

export const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
`;

export const GlassNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  border-radius: 0;

  padding: 0 5%;
  width: 100%;
  max-width: 1440px;
  height: 70px;
  box-shadow: none;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
  display: block;
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
  font-family: "Inter", sans-serif;
  font-weight: 500;
  line-height: 46px;

  &.ant-menu-horizontal > .ant-menu-item::after,
  &.ant-menu-horizontal > .ant-menu-submenu::after {
    display: none !important;
  }

  .ant-menu-title-content {
    position: relative;
    display: inline-block;
  }

  .ant-menu-title-content::after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #1a56db;
    transition: width 0.3s ease-out;
    border-radius: 2px;
  }

  .ant-menu-item:hover .ant-menu-title-content::after,
  .ant-menu-item-selected .ant-menu-title-content::after,
  .ant-menu-submenu:hover .ant-menu-title-content::after,
  .ant-menu-submenu-selected .ant-menu-title-content::after {
    width: 100%;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    background: transparent !important;
  }

  .ant-menu-item-selected,
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    background: transparent !important;
    color: #1a56db !important;
  }

  .services-label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dropdown-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border: 1px solid currentColor;
    border-radius: 50%;
    transition: all 0.3s ease;

    svg {
      width: 12px;
      height: 12px;
      stroke-width: 2.5;
    }
  }

  .ant-menu-submenu:hover .dropdown-circle,
  .ant-menu-submenu-selected .dropdown-circle {
    border-color: #1a56db;
    color: #1a56db;
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
  background-color: #1a56db !important;
  color: #ffffff !important;
  border: none !important;
  box-shadow: none !important;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  height: 40px;
  padding: 0 24px;
  border-radius: 4px;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #1a56db !important;
    color: #ffffff !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(26, 86, 219, 0.2) !important;
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
  font-family: "Inter", sans-serif;

  .ant-menu-item-selected {
    background-color: rgba(26, 86, 219, 0.05) !important;
    color: #1a56db !important;
    font-weight: 600;
  }

  .dropdown-circle {
    display: none !important;
  }
`;