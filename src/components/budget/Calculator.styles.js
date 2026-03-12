import styled from 'styled-components';
import { Card } from 'antd';

export const CalculatorWrapper = styled.section`
  background-color: #fdfbf9; /* Matching soft cream background */
  padding: 80px 5%;
  min-height: calc(100vh - 80px); /* Keeps card centered vertically */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCard = styled(Card)`
  width: 100%;
  max-width: 1000px;
  border-radius: 20px !important; /* Elegant rounded corners from blueprint */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.03) !important; /* Premium soft shadow */
  overflow: hidden;
  border: none !important;

  /* Overriding Ant Design body padding for custom layout */
  .ant-card-body {
    padding: 60px !important;
  }

  @media (max-width: 768px) {
    .ant-card-body {
      padding: 30px !important;
    }
  }
`;

export const StepContentArea = styled.div`
  min-height: 350px; /* Ensures consistent card height between steps */
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 50px;
  width: 100%;
`;

/* Add these below your existing styles */

export const StepContainer = styled.div`
  width: 100%;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const StepHeading = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1f2937;
  text-align: center;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const StepSubheading = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  text-align: center;
  margin: 0 0 40px 0;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  width: 100%;
`;

export const OptionCard = styled.div`
  background-color: #ffffff;
  border: 2px solid ${props => props.$active ? '#1a56db' : '#eaeaea'};
  background-color: ${props => props.$active ? '#f4f7ff' : '#ffffff'};
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border-color: ${props => props.$active ? '#1a56db' : '#cbd5e1'};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
  }
`;

export const OptionIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.$active ? '#1a56db' : '#9ca3af'};
  margin-bottom: 16px;
  transition: color 0.3s ease;
`;

export const OptionTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.$active ? '#1a56db' : '#1f2937'};
  margin: 0 0 8px 0;
`;

export const OptionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

/* --- ADD THESE TO THE BOTTOM OF YOUR STYLES FILE --- */

export const ResultContainer = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  animation: slideUp 0.6s ease;

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export const ResultEyebrow = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #1a56db;
  margin: 0 0 16px 0;
`;

export const ResultPrice = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #1f2937;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ResultNarrative = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0 0 40px 0;
  padding: 0 20px;
`;

export const ResultActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;