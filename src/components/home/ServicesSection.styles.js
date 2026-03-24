import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 100px 0;
  background-color: #ffffff;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const TitleGroup = styled.div``;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  color: #1f2937;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #6b7280;
  margin: 0;
`;

export const OutlineButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #1a56db;
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;

  &:hover {
    border-color: #1a56db;
    background: #f8fafc;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fcfbfa;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #eaeaea;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #1f2937;
  margin: 0 0 8px 0;
`;

export const CardTags = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0 0 24px 0;
`;

export const CardLink = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a56db;
  margin-top: auto;
  transition: color 0.3s ease;
  display: inline-block;

  ${Card}:hover & {
    color: #1e3a8a;
  }
`;