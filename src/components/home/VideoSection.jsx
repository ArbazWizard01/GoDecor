import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  SectionWrapper,
  InnerContainer,
  HeaderRow,
  TitleGroup,
  SectionTitle,
  SectionSubtitle,
  VideoContainer,
  StyledVideo,
} from "./VideoSection.styles";

const VideoSection = () => {
  const navigate = useNavigate()
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

          <Button
            style={{
              color: "#1a56db",
              borderColor: "#1a56db",
              borderRadius: "6px",
              fontWeight: 500,
              padding: "8px 24px",
              height: "auto",
              marginTop: "8px",
            }}
            onClick={() =>navigate('contact')}
          >
            Schedule Consultation
          </Button>
        </HeaderRow>

        {/* Removed the duplicate VideoContainer here! */}
        <VideoContainer>
          <StyledVideo key="interior-video" autoPlay loop muted playsInline>
            {/* Stable, non-expiring link of a modern interior! */}
            <source src="goRoom2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoContainer>
      </InnerContainer>
    </SectionWrapper>
  );
};

export default VideoSection;
