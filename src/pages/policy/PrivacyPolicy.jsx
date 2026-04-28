import React from "react";
import {
  PageWrapper,
  Container,
  Header,
  PageTitle,
  ContentBox,
  IntroTitle,
  IntroText,
  Section,
  SectionTitle,
  Paragraph,
  ContactInfo,
} from "./Policy.styles";
import Footer from "../../components/common/Footer";

const privacyData = [
  {
    id: 1,
    title: "1. Introduction",
    content: [
      'This Privacy Policy describes how GODECOR TECHNOLOGIES PRIVATE LIMITED, based in Mumbai, India ("Company", "we", "our", or "us"), collects, uses, stores, and protects your personal information when you access our website or use our services.',
      "By using our website or engaging with our services, you consent to the collection and use of your information in accordance with this Privacy Policy.",
      "We are committed to safeguarding your personal data and ensuring that your information is handled securely, responsibly, and in compliance with applicable laws.",
    ],
  },
  {
    id: 2,
    title: "2. Information We Collect",
    content: [
      "We may collect various types of information from you when you interact with our website or use our services. This includes both personal and non-personal information.",
      <React.Fragment key="personal">
        <strong>Personal Information</strong> may include your name, phone
        number, email address, location, and any other details you voluntarily
        provide when filling out forms, booking consultations, or communicating
        with us.
      </React.Fragment>,
      <React.Fragment key="usage">
        <strong>Usage Information</strong> may include details such as your IP
        address, browser type, device information, pages visited, and
        interaction behavior on our website.
      </React.Fragment>,
      "We collect this information to better understand user needs, improve our services, and provide a more personalized experience.",
    ],
  },
  {
    id: 3,
    title: "3. How We Use Your Information",
    content: [
      "The information collected by GODECOR TECHNOLOGIES PRIVATE LIMITED is used for the following purposes:",
      "• To provide and manage our interior design services",
      "• To communicate with you regarding inquiries, consultations, or project updates",
      "• To personalize user experience and improve our website functionality",
      "• To process payments and maintain records of transactions",
      "• To send updates, promotional content, or service-related notifications (where applicable)",
      "We ensure that your information is used only for legitimate business purposes and in accordance with this Privacy Policy.",
    ],
  },
  {
    id: 4,
    title: "4. Sharing of Information",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. However, your information may be shared in the following circumstances:",
      "• With trusted third-party vendors, contractors, or service providers involved in project execution",
      "• With payment gateways or financial institutions for processing transactions",
      "• When required by law, regulation, or legal process",
      "• To protect the rights, safety, or property of the Company or its users",
      "All third parties engaged by the Company are expected to maintain confidentiality and use the information only for the intended purpose.",
    ],
  },
  {
    id: 5,
    title: "5. Data Security",
    content: [
      "GODECOR TECHNOLOGIES PRIVATE LIMITED implements reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or alteration.",
      "While we strive to ensure the security of your data, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information.",
      "Users are advised to take appropriate precautions while sharing personal information online.",
    ],
  },
  {
    id: 6,
    title: "6. Data Retention",
    content: [
      "GODECOR TECHNOLOGIES PRIVATE LIMITED retains your personal information only for as long as it is necessary to fulfill the purposes outlined in this Privacy Policy, including providing services, complying with legal obligations, resolving disputes, and enforcing agreements.",
      "Once the information is no longer required, we take reasonable steps to securely delete, anonymize, or archive the data in accordance with applicable laws and internal policies.",
    ],
  },
  {
    id: 7,
    title: "7. Cookies & Tracking Technologies",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance user experience, analyze website performance, and understand user behavior. Cookies are small data files stored on your device that help us recognize returning users and improve functionality.",
      "You may choose to disable cookies through your browser settings; however, doing so may affect certain features or functionality of the website.",
      "By continuing to use our website, you consent to the use of cookies in accordance with this Privacy Policy.",
    ],
  },
  {
    id: 8,
    title: "8. User Rights",
    content: [
      "As a user, you have certain rights regarding your personal information, subject to applicable laws. These may include the right to:",
      "• Access the personal data we hold about you",
      "• Request correction or updating of inaccurate information",
      "• Request deletion of your personal data, where applicable",
      "• Withdraw consent for data processing, where such consent has been provided",
      "To exercise any of these rights, you may contact us using the details provided in this policy. We will make reasonable efforts to respond to such requests in accordance with applicable regulations.",
    ],
  },
  {
    id: 9,
    title: "9. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or services that are not operated or controlled by GODECOR TECHNOLOGIES PRIVATE LIMITED.",
      "We are not responsible for the privacy practices, policies, or content of such third-party websites. Users are encouraged to review the privacy policies of any external sites they visit before providing any personal information.",
      "Accessing third-party links is at your own discretion and risk.",
    ],
  },
  {
    id: 10,
    title: "10. Updates to This Policy",
    content: [
      "GODECOR TECHNOLOGIES PRIVATE LIMITED reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, services, or legal requirements.",
      "Any updates will be effective immediately upon being posted on this page, unless otherwise stated. Users are encouraged to review this Privacy Policy periodically to stay informed about how their information is being handled.",
      "Continued use of the website or services after any changes constitutes your acceptance of the revised Privacy Policy.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>Privacy Policy</PageTitle>
      </Header>

      <Container>
        <ContentBox>
          <IntroTitle>
            Please read this policy carefully to understand how we handle your
            information.
          </IntroTitle>
          <IntroText>
            This Privacy Policy explains how GoDecor collects, uses, and
            protects your personal data when you use our website and services.
          </IntroText>

          {privacyData.map((section) => (
            <Section key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.content.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </Section>
          ))}

          <Section>
            <SectionTitle>11. Contact Information</SectionTitle>
            <Paragraph>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information, you
              may contact GODECOR TECHNOLOGIES PRIVATE LIMITED using the details
              below:
            </Paragraph>
            <ContactInfo>
              <strong>Company Name:</strong> GODECOR TECHNOLOGIES PRIVATE
              LIMITED
              <br />
              <strong>Location:</strong> Mumbai, Maharashtra, India
              <br />
              <strong>Email:</strong> care@godecor.co.in
              <br />
              <strong>Phone:</strong> +91 98674 12084
            </ContactInfo>
            <Paragraph>
              We will make reasonable efforts to respond to your inquiries in a
              timely manner.
            </Paragraph>
          </Section>
        </ContentBox>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default PrivacyPolicy;
