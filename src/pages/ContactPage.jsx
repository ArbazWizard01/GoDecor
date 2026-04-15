import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactHero from '../components/contact/ContactHero';
import OurServices from '../components/contact/OurServices';
import IdeasBanner from '../components/contact/IdeasBanner';
import JournalSection from '../components/contact/JournalSection';
import ClientExperience from '../components/home/ClientExperience'
import FAQSection from '../components/home/FAQSection'
import CTASection from '../components/home/CTASection'

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactHero />
      <OurServices />
      <IdeasBanner />
      <JournalSection />
      <ClientExperience />
      <FAQSection />
      <CTASection />
    </MainLayout>
  );
};

export default ContactPage;