import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import {
  FooterWrapper,
  FooterContent,
  TopSection,
  LinkColumn,
  FooterLink,
  Divider,
  BottomSection,
  BrandInfo,
  FooterLogo,
  BrandDescription,
  Copyright,
  SocialContainer,
  SocialIcon,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <TopSection>
          <LinkColumn>
            <FooterLink>Home Interior Design</FooterLink>
            <FooterLink>Modular Kitchen</FooterLink>
            <FooterLink>Office & Commercial</FooterLink>
            <FooterLink>Renovation & Remodeling</FooterLink>
            <FooterLink>Luxury Villa Design</FooterLink>
            <FooterLink>Apartment Interiors</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <FooterLink>Mumbai</FooterLink>
            <FooterLink>Delhi</FooterLink>
            <FooterLink>Bangalore</FooterLink>
            <FooterLink>Hyderabad</FooterLink>
            <FooterLink>Chennai</FooterLink>
            <FooterLink>Pune</FooterLink>
            <FooterLink>Kolkata</FooterLink>
            <FooterLink>Ahmedabad</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <FooterLink>Become a Franchise</FooterLink>
            <FooterLink>Partner Benefits</FooterLink>
            <FooterLink>Franchise Requirements</FooterLink>
            <FooterLink>Contact Sales</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <FooterLink>About GoDecor</FooterLink>
            <FooterLink>How It Works</FooterLink>
            <FooterLink>Quality Standards</FooterLink>
            <FooterLink>Contact Us</FooterLink>
            <FooterLink>Careers</FooterLink>
          </LinkColumn>
        </TopSection>

        <Divider />

        <BottomSection>
          <BrandInfo>
            <FooterLogo>GoDecor</FooterLogo>
            <BrandDescription>
              Premium interior design marketplace. Verified agencies,
              standardized quality.
            </BrandDescription>
            <Copyright>
              © {new Date().getFullYear()} GoDecor. All rights reserved.
            </Copyright>
          </BrandInfo>

          <SocialContainer>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/godecor.co.in?igsh=YTl3anl0a3Z1Ymlp">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/company/decoreline/">
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
          </SocialContainer>
        </BottomSection>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
