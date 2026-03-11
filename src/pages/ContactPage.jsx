import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactHero from '../components/contact/ContactHero';
import ContactFormSection from '../components/contact/ContactFormSection';

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactFormSection />
    </MainLayout>
  );
};

export default ContactPage;