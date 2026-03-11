import styled from 'styled-components';
import { Form, Input, Select, Button } from 'antd';

export const SectionWrapper = styled.section`
  background-color: #f8f6f3; /* Soft cream background behind the cards */
  padding: 80px 5% 120px 5%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* Form gets more space than the details card */
  gap: 40px;
  align-items: flex-start;
  margin-top: -120px; /* Pulls the cards UP over the hero banner slightly! */
  position: relative;
  z-index: 10;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 0; /* Disables the pull-up effect on mobile for clean stacking */
  }
`;

/* --- LEFT SIDE: The Form Card --- */
export const FormCard = styled.div`
  background-color: #ffffff;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormHeader = styled.div`
  margin-bottom: 30px;
`;

export const FormTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const FormSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0;
`;

/* Customizing Ant Design Form Elements */
export const StyledForm = styled(Form)`
  .ant-form-item-label > label {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #4b5563;
  }
`;

export const StyledInput = styled(Input)`
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  
  &:hover, &:focus {
    border-color: #1a56db;
    box-shadow: 0 0 0 2px rgba(26, 86, 219, 0.1);
  }
`;

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    height: 48px !important;
    padding: 6px 16px !important;
    border-radius: 8px !important;
    font-family: 'Inter', sans-serif;
  }
  
  &.ant-select-focused .ant-select-selector {
    border-color: #1a56db !important;
    box-shadow: 0 0 0 2px rgba(26, 86, 219, 0.1) !important;
  }
`;

export const StyledTextArea = styled(Input.TextArea)`
  padding: 12px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;

  &:hover, &:focus {
    border-color: #1a56db;
    box-shadow: 0 0 0 2px rgba(26, 86, 219, 0.1);
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #1a56db;
  color: #fff;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  border: none;
  margin-top: 10px;

  &:hover {
    background-color: #164bb8 !important;
    color: #fff !important;
    transform: translateY(-2px);
  }
`;

/* --- RIGHT SIDE: Contact Details Card --- */
export const DetailsCard = styled.div`
  background-color: #fdfbf9; /* Slightly warmer than pure white */
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #eaeaea;

  @media (max-width: 992px) {
    padding: 30px 20px;
  }
`;

export const DetailsTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 24px 0;
`;

export const DetailBlock = styled.div`
  margin-bottom: 24px;
`;

export const DetailLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 4px 0;
`;

export const DetailValue = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #1f2937;
  margin: 0;
`;

export const ContactLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1a56db;
  text-decoration: none;
  display: inline-block;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;