import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SectionWrapper,
  InnerContainer,
  HeaderRow,
  TitleGroup,
  SectionTitle,
  SectionSubtitle,
  StyledButton,
  VideoContainer,
  StyledVideo,
} from "./VideoSection.styles";

const VideoSection = () => {
  const navigate = useNavigate();
  
  return (
    <SectionWrapper>
      <InnerContainer>
        <HeaderRow>
          <TitleGroup>
            <SectionTitle>See the Calm Take Shape.</SectionTitle>
            <SectionSubtitle>
              A structured process that turns planning into precision and spaces
              into places you love coming back to.
            </SectionSubtitle>
          </TitleGroup>

          <StyledButton onClick={() => navigate('contact')}>
            Schedule Consultation
          </StyledButton>
        </HeaderRow>

        <VideoContainer>
          <StyledVideo key="interior-video" autoPlay loop muted playsInline>
            <source src="goRoom2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoContainer>
      </InnerContainer>
    </SectionWrapper>
  );
};

export default VideoSection;