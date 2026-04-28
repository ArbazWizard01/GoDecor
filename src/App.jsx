import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ScrollToTop from "./components/common/ScrollToTop";
import BudgetPage from "./pages/BudgetPage";
import TermsAndConditions from "./pages/policy/TermsAndConditions";
import PrivacyPolicy from "./pages/policy/PrivacyPolicy";
import RefundPolicy from "./pages/policy/RefundPolicy";
import DeliveryPolicy from "./pages/policy/DeliveryPolicy";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/delivery-policy" element={<DeliveryPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
