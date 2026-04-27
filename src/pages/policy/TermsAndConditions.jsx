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
} from "./TermsAndConditions.styles";
import Footer from "../../components/common/Footer"; 

const termsData = [
  {
    id: 1,
    title: "1. Introduction",
    content: [
      'Welcome to GoDecor, operated by GODECOR TECHNOLOGIES PRIVATE LIMITED, a company based in Mumbai, India ("Company", "we", "our", or "us"). These Terms & Conditions ("Terms") govern your access to and use of our website and interior design services.',
      "By accessing our website or engaging with our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use our platform or services.",
      'These Terms constitute a legally binding agreement between you ("User", "you", or "your") and the Company, outlining the rights, responsibilities, and obligations of both parties.',
    ],
  },
  {
    id: 2,
    title: "2. Acceptance of Terms & Eligibility",
    content: [
      "By accessing, browsing, or using the services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
      "You represent and warrant that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If you are accessing or using the services on behalf of an organization, you further represent that you have the authority to bind such organization to these Terms.",
      "If you do not meet the eligibility requirements or do not agree with these Terms, you must refrain from using our website and services.",
    ],
  },
  {
    id: 3,
    title: "3. Services Overview",
    content: [
      'GODECOR TECHNOLOGIES PRIVATE LIMITED provides interior design and related services, including but not limited to design consultation, space planning, modular kitchen solutions, home and office interior design, and execution support ("Services").',
      "All services offered by the Company are subject to availability, project scope, and mutual agreement between the Company and the User. The details, timelines, deliverables, and pricing for each project shall be defined separately through proposals, quotations, or service agreements, as applicable.",
      "The Company reserves the right to modify, update, or discontinue any part of its services at its sole discretion without prior notice.",
      "While we strive to deliver high-quality and timely services, the final outcome may vary based on factors such as site conditions, material availability, third-party involvement, and client requirements.",
    ],
  },
  {
    id: 4,
    title: "4. User Responsibilities",
    content: [
      "By using the services of GODECOR TECHNOLOGIES PRIVATE LIMITED, you agree to provide accurate, complete, and up-to-date information as required for the successful execution of your project. You are responsible for ensuring that all details shared, including site specifications, requirements, and preferences, are correct to the best of your knowledge.",
      "You agree to cooperate with the Company and provide timely approvals, feedback, and access to the project site as required. Any delays in communication, approvals, or site readiness may impact project timelines, for which the Company shall not be held responsible.",
      "You are responsible for maintaining the confidentiality of any account credentials, login details, or communication access provided to you. The Company shall not be liable for any unauthorized use arising from your failure to safeguard such information.",
      "You further agree not to misuse the website or services, including engaging in unlawful activities, attempting to disrupt operations, or infringing upon the rights of the Company or third parties.",
    ],
  },
  {
    id: 5,
    title: "5. Pricing & Payments",
    content: [
      "All pricing for services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED shall be communicated to the User through quotations, proposals, or service agreements, based on the scope and requirements of each project.",
      "Payments shall be made in accordance with the agreed payment schedule outlined in the respective proposal or agreement. The Company reserves the right to require advance payments, milestone-based payments, or full payment prior to the commencement or continuation of services.",
      "All fees are exclusive of applicable taxes, unless otherwise stated. The User agrees to bear any additional charges, including but not limited to taxes, duties, or third-party costs, as applicable.",
      "Failure to make payments within the specified timelines may result in delays, suspension, or termination of services at the discretion of the Company. The Company shall not be liable for any consequences arising from such delays or suspension due to non-payment.",
      "The Company reserves the right to revise pricing in case of changes in project scope, material costs, or unforeseen circumstances, subject to prior communication with the User.",
    ],
  },
  {
    id: 6,
    title: "6. Project Timelines",
    content: [
      "All project timelines communicated by GODECOR TECHNOLOGIES PRIVATE LIMITED are estimates based on the scope of work, design requirements, and current project conditions. While the Company makes every effort to adhere to agreed timelines, completion dates may vary due to factors beyond its control.",
      "Such factors may include, but are not limited to, delays in User approvals, changes in project scope, site readiness issues, material availability, logistical constraints, or delays caused by third-party vendors. The Company shall not be held liable for delays arising from these circumstances.",
      "The User agrees to provide timely approvals, feedback, and site access as required for smooth project execution. Any delay on the part of the User may result in corresponding extensions to the project timeline.",
      "Revised timelines, if necessary, will be communicated to the User based on the updated scope or prevailing conditions.",
    ],
  },
  {
    id: 7,
    title: "7. Cancellations & Refunds",
    content: [
      "Any request for cancellation of services must be communicated in writing to GODECOR TECHNOLOGIES PRIVATE LIMITED. Cancellation requests will be subject to review based on the stage of the project and the scope of work already completed.",
      "Payments made towards design services, consultations, or completed work are non-refundable, unless otherwise explicitly stated in a separate written agreement. In the event of cancellation, the Company reserves the right to retain charges for work already executed, materials procured, and any commitments made to third-party vendors.",
      "Refunds, if applicable, shall be processed solely at the discretion of the Company and may be subject to deductions for administrative costs, design efforts, and other incurred expenses.",
      "The Company shall not be liable for any indirect losses, damages, or expenses incurred by the User as a result of cancellation of services.",
    ],
  },
  {
    id: 8,
    title: "8. Intellectual Property",
    content: [
      'All content, materials, designs, concepts, drawings, plans, images, text, graphics, logos, and any other intellectual property created, displayed, or provided by GODECOR TECHNOLOGIES PRIVATE LIMITED ("Intellectual Property") are the exclusive property of the Company, unless otherwise agreed in writing.',
      "The User is granted a limited, non-exclusive, and non-transferable right to use such Intellectual Property solely for personal and non-commercial purposes related to the services provided. Any unauthorized use, reproduction, distribution, modification, or commercial exploitation of the Company's Intellectual Property without prior written consent is strictly prohibited.",
      "All design concepts, layouts, and deliverables developed by the Company remain its intellectual property until full payment for the respective services has been received. Upon full payment, the User may use the final deliverables for their intended purpose; however, the Company retains the right to use project images, designs, and related materials for portfolio, marketing, and promotional purposes.",
      "Any third-party materials, trademarks, or content used in the course of the project shall remain the property of their respective owners.",
    ],
  },
  {
    id: 9,
    title: "9. Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, GODECOR TECHNOLOGIES PRIVATE LIMITED shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the use of its website or services.",
      "This includes, but is not limited to, loss of profits, loss of data, business interruption, delays in project completion, or any other financial or non-financial losses, even if the Company has been advised of the possibility of such damages.",
      "The Company's total liability, whether in contract, tort, or otherwise, shall in no event exceed the total amount paid by the User for the specific services giving rise to the claim.",
      "The Company shall not be held responsible for any issues, damages, or delays caused by third-party vendors, contractors, material suppliers, or factors beyond its reasonable control.",
    ],
  },
  {
    id: 10,
    title: "10. Third-Party Services",
    content: [
      'GODECOR TECHNOLOGIES PRIVATE LIMITED may engage or recommend third-party vendors, contractors, suppliers, or service providers ("Third Parties") as part of the execution of its services. Such Third Parties may include, but are not limited to, material suppliers, installation teams, logistics providers, or external consultants.',
      "While the Company endeavors to work with reliable and qualified Third Parties, it does not own, control, or directly supervise all aspects of their operations. Accordingly, the Company shall not be held liable for any acts, omissions, delays, defects, or deficiencies in services provided by such Third Parties.",
      "Any agreements, transactions, or engagements between the User and Third Parties, whether facilitated by the Company or otherwise, shall be solely between the User and the respective Third Party. The Company shall not be responsible for any disputes, claims, or damages arising from such interactions.",
      "The User acknowledges that certain aspects of the project may be dependent on third-party performance, and any delays or issues arising from such dependencies shall not be attributable to the Company.",
    ],
  },
  {
    id: 11,
    title: "11. Privacy Policy",
    content: [
      "Your use of the website and services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED is also governed by our Privacy Policy, which outlines how we collect, use, store, and protect your personal information.",
      "By accessing or using our services, you consent to the collection and use of your information in accordance with our Privacy Policy. We are committed to safeguarding your data and ensuring that your personal information is handled securely and responsibly.",
      "Users are encouraged to review the Privacy Policy separately to understand their rights, choices, and the Company's data handling practices in detail.",
    ],
  },
  {
    id: 12,
    title: "12. Termination",
    content: [
      "GODECOR TECHNOLOGIES PRIVATE LIMITED reserves the right to suspend, restrict, or terminate access to its website or services at its sole discretion, without prior notice, if the User is found to be in violation of these Terms & Conditions or applicable laws.",
      "The Company may also terminate or discontinue services in cases of non-payment, breach of agreed terms, misuse of services, or failure to cooperate during project execution.",
      "Upon termination, the User shall remain liable for any outstanding payments, fees, or obligations incurred up to the date of termination. The Company shall not be liable for any losses, damages, or consequences arising from such termination.",
      "Any provisions of these Terms that, by their nature, should survive termination (including but not limited to intellectual property, limitation of liability, and payment obligations) shall continue to remain in effect.",
    ],
  },
  {
    id: 13,
    title: "13. Governing Law & Jurisdiction",
    content: [
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India.",
      "Any disputes, claims, or controversies arising out of or in connection with the use of the website or services provided by GODECOR TECHNOLOGIES PRIVATE LIMITED shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.",
      "By using our services, you agree to submit to the jurisdiction of these courts and waive any objections to such jurisdiction or venue.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <PageWrapper>
      <Header>
        <PageTitle>Terms & Conditions</PageTitle>
      </Header>

      <Container>
        <ContentBox>
          <IntroTitle>
            Please read these terms carefully before using our services.
          </IntroTitle>
          <IntroText>
            These Terms & Conditions govern your use of GoDecor's website and
            services. By accessing or using our platform, you agree to comply
            with the terms outlined below.
          </IntroText>

          {termsData.map((section) => (
            <Section key={section.id}>
              <SectionTitle>{section.title}</SectionTitle>
              {section.content.map((text, index) => (
                <Paragraph key={index}>{text}</Paragraph>
              ))}
            </Section>
          ))}

          <Section>
            <SectionTitle>14. Contact Information</SectionTitle>
            <Paragraph>
              If you have any questions, concerns, or requests regarding these
              Terms & Conditions, you may contact GODECOR TECHNOLOGIES PRIVATE
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
              The Company will make reasonable efforts to respond to all
              inquiries in a timely manner.
            </Paragraph>
          </Section>
        </ContentBox>
      </Container>
      <Footer />
    </PageWrapper>
  );
};

export default TermsAndConditions;
