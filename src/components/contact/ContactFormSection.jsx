import React from 'react';
import { Form, message } from 'antd';
import {
  SectionWrapper,
  Container,
  FormCard,
  FormHeader,
  FormTitle,
  FormSubtitle,
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledTextArea,
  SubmitButton,
  DetailsCard,
  DetailsTitle,
  DetailBlock,
  DetailLabel,
  DetailValue,
  ContactLink
} from './ContactFormSection.styles';

const { Option } = StyledSelect;

const ContactFormSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form Submitted:', values);
    message.success('Thank you! Your request has been submitted. We will contact you shortly.');
    form.resetFields();
  };

  return (
    <SectionWrapper>
      <Container>
        
        {/* Left Side: The Form */}
        <FormCard>
          <FormHeader>
            <FormTitle>Share Your Details</FormTitle>
            <FormSubtitle>
              Provide your details and we'll connect with you to understand layout, budget, and scope.
            </FormSubtitle>
          </FormHeader>

          <StyledForm 
            form={form} 
            layout="vertical" 
            onFinish={onFinish}
            requiredMark={false}
          >
            <StyledForm.Item 
              label="Full Name" 
              name="name" 
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <StyledInput placeholder="Enter your name as per contact details" />
            </StyledForm.Item>

            <StyledForm.Item 
              label="Phone Number" 
              name="phone" 
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <StyledInput placeholder="We'll only use this to coordinate consultation" />
            </StyledForm.Item>

            <StyledForm.Item 
              label="City" 
              name="city" 
              rules={[{ required: true, message: 'Please enter your city' }]}
            >
              <StyledInput placeholder="Your City" />
            </StyledForm.Item>

            <StyledForm.Item 
              label="Home Type" 
              name="homeType"
              rules={[{ required: true, message: 'Please select your home type' }]}
            >
              <StyledSelect placeholder="Select home type">
                <Option value="1bhk">1 BHK Apartment</Option>
                <Option value="2bhk">2 BHK Apartment</Option>
                <Option value="3bhk">3 BHK Apartment</Option>
                <Option value="villa">Villa / Independent House</Option>
              </StyledSelect>
            </StyledForm.Item>

            <StyledForm.Item 
              label="Budget Range" 
              name="budget"
            >
              <StyledSelect placeholder="Select an approximate budget for alignment">
                <Option value="under5">Under ₹5 Lacs</Option>
                <Option value="5to10">₹5 - ₹10 Lacs</Option>
                <Option value="10to20">₹10 - ₹20 Lacs</Option>
                <Option value="over20">₹20+ Lacs</Option>
              </StyledSelect>
            </StyledForm.Item>

            <StyledForm.Item 
              label="Space Type" 
              name="spaceType"
            >
              <StyledSelect placeholder="Select space type">
                <Option value="fullHome">Complete Home Interior</Option>
                <Option value="kitchen">Modular Kitchen Only</Option>
                <Option value="living">Living Room Only</Option>
                <Option value="bedroom">Bedroom / Wardrobes Only</Option>
              </StyledSelect>
            </StyledForm.Item>

            <StyledForm.Item 
              label="Message" 
              name="message"
            >
              <StyledTextArea 
                rows={4} 
                placeholder="Share layout size or any specific requirements" 
              />
            </StyledForm.Item>

            <StyledForm.Item>
              <SubmitButton type="primary" htmlType="submit">
                Submit Request
              </SubmitButton>
            </StyledForm.Item>
          </StyledForm>
        </FormCard>

        {/* Right Side: Contact Details */}
        <DetailsCard>
          <DetailsTitle>Contact Details</DetailsTitle>
          
          <DetailBlock>
            <DetailLabel>Response Timeline</DetailLabel>
            <DetailValue>Within 24 Hours</DetailValue>
          </DetailBlock>

          <DetailBlock>
            <DetailLabel>Operational Hours</DetailLabel>
            <DetailValue>Monday - Saturday</DetailValue>
            <DetailValue>10:00 AM - 7:00 PM</DetailValue>
          </DetailBlock>

          <DetailBlock>
            <DetailLabel>Prefer to speak directly?</DetailLabel>
            <ContactLink href="tel:+919876543210">Request a callback</ContactLink>
          </DetailBlock>
        </DetailsCard>

      </Container>
    </SectionWrapper>
  );
};

export default ContactFormSection;