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

const deliveryData = [
  {
    id: 1,
    title: "1. Introduction",
    content: [
      'This Refund, Return & Cancellation Policy outlines the terms governing cancellations, refunds, and returns for services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED, based in Mumbai, India ("Company", "we", "our", or "us").',
      "This policy is intended to provide clarity on how projects are planned, delivered, and executed as part of our interior design services.",
    ],
  },
  {
    id: 2,
    title: "2. Project Timelines",
    content: [
      "Project timelines are estimated based on the scope of work, design requirements, and site conditions. While GODECOR TECHNOLOGIES PRIVATE LIMITED strives to adhere to agreed schedules, timelines may vary depending on project complexity and external factors.",
      "Final timelines will be communicated through proposals or agreements and may be revised as required during the course of the project.",
    ],
  },
  {
    id: 3,
    title: "3. Delivery of Materials",
    content: [
      "Materials required for project execution may be sourced through the Company or third-party vendors. Delivery schedules for materials depend on availability, supplier timelines, and logistical conditions.",
      "The Company shall not be held responsible for delays caused by suppliers, transportation issues, or other third-party dependencies.",
    ],
  },
  {
    id: 4,
    title: "4. Installation & Execution",
    content: [
      "Installation and execution of interior elements will be carried out as per the agreed design and project plan. The User is required to ensure that the site is ready and accessible for installation activities.",
      "Any delays due to site readiness, access issues, or changes requested during execution may impact the overall timeline.",
    ],
  },
  {
    id: 5,
    title: "5. Delays & Unforeseen Factors",
    content: [
      "Project execution may be affected by factors beyond the control of GODECOR TECHNOLOGIES PRIVATE LIMITED, including but not limited to material shortages, weather conditions, regulatory approvals, or third-party vendor delays.",
      "The Company shall not be liable for delays arising from such unforeseen circumstances. Any revised timelines will be communicated accordingly.",
    ],
  },
];

const DeliveryPolicy = () => {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>Delivery & Execution Policy</PageTitle>
      </Header>

      <Container>
        <ContentBox>
          <IntroTitle>
            Please review this policy to understand how cancellations, refunds,
            and returns are handled.
          </IntroTitle>
          <IntroText>
            This policy outlines the terms under which GoDecor processes
            delivery and execution for its services, ensuring clarity and
            transparency for all users.
          </IntroText>

          {deliveryData.map((section) => (
            <Section key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.content.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </Section>
          ))}

          <Section>
            <SectionTitle>6. Contact Information</SectionTitle>
            <Paragraph>
              For any queries related to delivery timelines or project
              execution, you may contact GODECOR TECHNOLOGIES PRIVATE LIMITED
              using the details below:
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
              We will make reasonable efforts to respond to your requests in a
              timely manner.
            </Paragraph>
          </Section>
        </ContentBox>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default DeliveryPolicy;
