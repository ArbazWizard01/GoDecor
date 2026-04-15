import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  SectionWrapper,
  BannerContainer,
  BackgroundOverlay,
  ContentWrapper,
  CtaTitle,
  CtaButton,
} from "./ServicesCTA.styles";

const FinalCta = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper>
      <BannerContainer>
        <BackgroundOverlay />
        <ContentWrapper>
          <CtaTitle>Let's Design Something Beautiful Together</CtaTitle>
          <CtaButton onClick={() => navigate("/contact")}>
            Book Free Design Consultation{" "}
            <ArrowRightOutlined style={{ fontSize: "14px" }} />
          </CtaButton>
        </ContentWrapper>
      </BannerContainer>
    </SectionWrapper>
  );
};

export default FinalCta;
