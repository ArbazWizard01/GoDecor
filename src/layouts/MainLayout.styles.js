import styled from "styled-components";
import { Layout, Menu } from "antd";

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
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`;

export const GlassNav = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  width: 100%;
  max-width: 1200px;
  height: 64px;
  padding: 0 5%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
`;

export const LogoImage = styled.img`
  height: 22px;
  width: auto;
  object-fit: contain;
  display: block;
`;

export const StyledMenu = styled(Menu)`
  flex: 1;
  display: flex;
  flex-wrap: nowrap !important;
  min-width: 0;
  border-bottom: none !important;
  background: transparent !important;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 64px;

  &.ant-menu-horizontal > .ant-menu-item,
  &.ant-menu-horizontal > .ant-menu-submenu {
    padding: 0 16px;
    margin: 0;
    color: #4b5563;
  }

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
    bottom: 10px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #223F9A;
    transition: width 0.3s ease-out;
    border-radius: 2px;
  }

  .ant-menu-item:hover .ant-menu-title-content::after,
  .ant-menu-submenu:hover .ant-menu-title-content::after,
  .ant-menu-item-selected .ant-menu-title-content::after,
  .ant-menu-submenu-selected .ant-menu-title-content::after {
    width: 100%;
  }

  .ant-menu-item-selected,
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    background: transparent !important;
    color: #223F9A !important;
  }

  .services-label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .dropdown-circle {
    display: none;
  }

  @media (max-width: 1100px) {
    display: none !important;
  }
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #4b5563;
  cursor: pointer;
  background-color: #f9fafb;
  flex-shrink: 0;

  .icon-grey {
    color: #6b7280;
    font-size: 14px;
  }

  &.hide-mobile {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background-color: #ffffff;
  flex-shrink: 0;

  .icon-grey {
    color: #6b7280;
    font-size: 16px;
    cursor: pointer;
    margin-left: 8px;
  }

  &.hide-mobile {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 200px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  background: transparent;
  color: #1f2937;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 1200px) {
    width: 140px;
  }
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #4b5563;
  cursor: pointer;
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: #1a56db;
  }

  &.hide-mobile {
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  color: #1f2937;
  cursor: pointer;

  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

export const MobileMenu = styled(Menu)`
  border-right: none !important;
  font-size: 1.1rem;
  font-family: "Inter", sans-serif;

  .ant-menu-item-selected {
    background-color: rgba(34, 63, 154, 0.05) !important;
    color: #223F9A !important;
    font-weight: 600;
  }
`;