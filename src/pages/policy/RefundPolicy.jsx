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

const refundData = [
  {
    id: 1,
    title: "1. Introduction",
    content: [
      'This Refund, Return & Cancellation Policy outlines the terms governing cancellations, refunds, and returns for services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED, based in Mumbai, India ("Company", "we", "our", or "us").',
      "By engaging with our services, you agree to the terms set forth in this policy. This policy should be read in conjunction with our Terms & Conditions.",
    ],
  },
  {
    id: 2,
    title: "2. Cancellation Policy",
    content: [
      "Any request for cancellation of services must be submitted in writing to GODECOR TECHNOLOGIES PRIVATE LIMITED. Cancellation requests will be reviewed based on the stage of the project and the scope of work completed at the time of the request.",
      "The Company reserves the right to accept or reject cancellation requests at its discretion. Charges may apply for work already completed, materials procured, and commitments made to third-party vendors.",
    ],
  },
  {
    id: 3,
    title: "3. Refund Policy",
    content: [
      "Refunds, if applicable, will be processed only in cases where explicitly agreed upon in writing by GODECOR TECHNOLOGIES PRIVATE LIMITED.",
      "Any eligible refunds shall be subject to deductions for design work, consultation fees, administrative costs, and expenses already incurred. Refund decisions will be made based on the specific circumstances of each project.",
    ],
  },
  {
    id: 4,
    title: "4. Non-Refundable Items",
    content: [
      "The following payments are generally non-refundable:",
      "• Design consultation fees",
      "• Charges for completed work or services",
      "• Payments made for materials already procured",
      "• Payments made to third-party vendors or contractors",
      "• Any customized or made-to-order items",
      "Once a project has progressed beyond initial stages, refunds may not be applicable.",
    ],
  },
  {
    id: 5,
    title: "5. Return Policy",
    content: [
      "As GODECOR TECHNOLOGIES PRIVATE LIMITED primarily provides interior design and project-based services, returns are generally not applicable.",
      "However, in cases where physical products or materials are supplied as part of the project, returns may be considered only if the item is defective, damaged upon delivery, or does not match the agreed specifications.",
      "Any return request must be raised within a reasonable time from delivery and will be subject to inspection and approval by the Company. Approved returns may be replaced or addressed at the Company's discretion.",
    ],
  },
  {
    id: 6,
    title: "6. Project-Based Adjustments",
    content: [
      "Interior design projects may involve customizations and evolving requirements. Any changes requested by the User after project initiation may result in revisions to scope, pricing, and timelines.",
      "The Company reserves the right to charge additional fees for modifications, rework, or adjustments requested beyond the agreed scope.",
      "Such changes will be communicated and documented before implementation to ensure clarity between both parties.",
    ],
  },
  {
    id: 7,
    title: "7. Processing of Refunds",
    content: [
      "Where refunds are approved by GODECOR TECHNOLOGIES PRIVATE LIMITED, they will be processed within a reasonable timeframe using the original mode of payment, unless otherwise agreed.",
      "Refund timelines may vary depending on internal processing procedures, banking channels, or third-party payment providers.",
      "The Company shall not be responsible for delays caused by financial institutions or external payment gateways.",
    ],
  },
];

const RefundPolicy = () => {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>Refund, Return & Cancellation Policy</PageTitle>
      </Header>

      <Container>
        <ContentBox>
          <IntroTitle>
            Please review this policy to understand how cancellations, refunds,
            and returns are handled.
          </IntroTitle>
          <IntroText>
            This policy outlines the terms under which GoDecor processes
            cancellations, refunds, and returns for its services, ensuring
            clarity and transparency for all users.
          </IntroText>

          {refundData.map((section) => (
            <Section key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.content.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </Section>
          ))}

          <Section>
            <SectionTitle>8. Contact Information</SectionTitle>
            <Paragraph>
              For any queries, concerns, or requests related to cancellations,
              refunds, or returns, you may contact GODECOR TECHNOLOGIES PRIVATE
              LIMITED using the details below:
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

export default RefundPolicy;
