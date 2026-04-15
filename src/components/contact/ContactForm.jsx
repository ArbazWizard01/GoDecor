import React from 'react';
import {
  FormWrapper,
  FormHeader,
  FormTitle,
  FormSubtitle,
  StyledForm,
  InputGroup,
  Label,
  Input,
  Select,
  SubmitButton,
  Disclaimer
} from './ContactForm.styles';

const ContactForm = () => {
  return (
    <FormWrapper>
      <FormHeader>
        <FormTitle>Get a free design consultation with our experts</FormTitle>
        <FormSubtitle>No obligation. Quick response within 24 hours.</FormSubtitle>
      </FormHeader>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <InputGroup>
          <Label>Full Name *</Label>
          <Input type="text" placeholder="Enter your name as per contact details" required />
        </InputGroup>
        <InputGroup>
          <Label>Phone Number *</Label>
          <Input type="tel" placeholder="We'll only use this to coordinate consultation" required />
        </InputGroup>
        <InputGroup>
          <Label>City *</Label>
          <Input type="text" placeholder="Your City" required />
        </InputGroup>
        <InputGroup>
          <Label>Home Type *</Label>
          <Select required defaultValue="">
            <option value="" disabled>Select home type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa / Independent House</option>
            <option value="office">Office / Commercial</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>Budget Range *</Label>
          <Select required defaultValue="">
            <option value="" disabled>Select an approximate budget for alignment</option>
            <option value="5-10">₹5L - ₹10L</option>
            <option value="10-20">₹10L - ₹20L</option>
            <option value="20-50">₹20L - ₹50L</option>
            <option value="50+">₹50L+</option>
          </Select>
        </InputGroup>
        <SubmitButton type="submit">Submit Request</SubmitButton>
        <Disclaimer>
          By submitting this form, you agree to the privacy policy & terms and conditions.
        </Disclaimer>
      </StyledForm>
    </FormWrapper>
  );
};

export default ContactForm;