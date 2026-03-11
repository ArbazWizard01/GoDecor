import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// --- Features Banner Styles ---
export const FeaturesBanner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 8%;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f5ff; /* Very light blue */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a56db;
  font-size: 20px;
`;

export const FeatureText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4b5563;
`;

// --- About Block Styles ---
export const AboutBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 8%;
  background-color: #f9f8f6; /* Matching the Figma cream background */
  gap: 60px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImageGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const GreyBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 180px;
  background-color: #e5e7eb;
  border-radius: 12px;
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 550px;
`;

export const Heading = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const HighlightText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a56db;
  margin: 0;
`;