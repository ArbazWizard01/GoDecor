import styled from 'styled-components';

export const StatsWrapper = styled.section`
  background-color: #ffffff;
  padding: 40px 5%;
  border-bottom: 1px solid #eaeaea; /* Light separator line like in Figma */
  display: flex;
  justify-content: center;
`;

export const StatsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 40px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(26, 86, 219, 0.05); /* Light blue background for the icons */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a56db;
  font-size: 1.5rem;
`;

export const StatText = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0;
`;