# 🛋️ GoDecor: Premium Interior Design Platform

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-Latest-DB7093.svg)](https://styled-components.com/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.x-0170FE.svg)](https://ant.design/)
[![Status](https://img.shields.io/badge/Status-Active_Development-success.svg)]()

GoDecor is a high-end, fully responsive web application built for a modern residential interior design agency. It focuses on structured execution, transparency, and a premium user experience. The application features advanced CSS layouts, modular component architecture, and enterprise-grade UI design.

---

## ✨ Key Features

- **Premium UI/UX:** Pixel-perfect implementation of Figma designs featuring custom typography, soft shadows, and high-end imagery.
- **Advanced Parallax Scrolling:** Custom-engineered depth effects optimized for desktop while gracefully degrading on mobile for battery performance.
- **Modular Component Architecture:** Highly reusable UI grids and layout blocks (`SignatureConcepts`, `LivingSpaces`, etc.) utilized across multiple pages to ensure lightning-fast rendering and DRY code.
- **Automated Global Layout:** Persistent Navbar and Footer wrappers using React Router to seamlessly frame dynamic page content.
- **100% Mobile Responsive:** Fluid grids, stacking timelines, and adaptive typography ensure a flawless experience across all devices.
- **Custom Ant Design Integration:** Overridden global Ant Design styles to match custom brand aesthetics (forms, inputs, and buttons).

---

## 🏗️ Project Structure

The application is built with scalability in mind, separating pages from reusable UI components:

```text
src/
├── components/          # Reusable UI sections organized by domain
│   ├── common/          # Global elements (Navbar, Footer, etc.)
│   ├── home/            # Homepage grids and banners
│   ├── services/        # Service timelines and overview cards
│   ├── packages/        # Package layouts
│   ├── about/           # Timelines, team stats, and overlapping collages
│   └── projects/        # Project grids and parallax dividers
├── layouts/             # App layout wrappers (MainLayout)
├── pages/               # Top-level route components
└── App.jsx              # Application routing and entry point