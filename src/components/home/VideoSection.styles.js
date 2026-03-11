import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 80px 5%;
  background-color: #ffffff;
  display: flex;
  justify-content: center; /* Forces the inner container to the dead center */
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Locks the max width so it perfectly matches the Navbar width */
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const TitleGroup = styled.div`
  max-width: 75%;
`;

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1f2937;
  margin: 0 0 12px 0;
  line-height: 1.2;
`;

export const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  color: #4b5563;
  margin: 0;
  max-width: 700px;
  line-height: 1.6;
`;

export const VideoContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 8.5; 
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06); 
  background-color: #f3f4f6; /* Soft placeholder color before video loads */
`;

/* We will style the actual video tag now */
export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video fills the box perfectly without stretching */
`;