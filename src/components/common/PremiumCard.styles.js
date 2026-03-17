import styled from 'styled-components';

export const GlobalCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05); 
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 12px; 

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08);
    border-color: #e5e7eb;
  }
`;

export const GlobalCardImage = styled.img`
  width: 100%;
  /* We can leave the height flexible so different sections can override it if needed, 
     but 200px is a great global default! */
  height: ${props => props.height || '200px'}; 
  object-fit: cover;
  border-radius: 12px;
`;

export const GlobalCardContent = styled.div`
  padding: 20px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const GlobalCardTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 1.35rem;
  color: #1f2937;
  margin: 0 0 8px 0;
  transition: color 0.3s ease;

  ${GlobalCard}:hover & {
    color: #1a56db;
  }
`;