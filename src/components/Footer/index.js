import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubheading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRight,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";
import { Button } from "../../GlobalStyle";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubheading>
          Join Our Exclusive membership to receive the latest news and trends
        </FooterSubheading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/sign-up">Testimonials</FooterLink>
            <FooterLink to="/sign-up">Careers</FooterLink>
            <FooterLink to="/sign-up">Investors</FooterLink>
            <FooterLink to="/sign-up">Terms of Service</FooterLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon>Ultra</SocialIcon>
          </SocialLogo>
          <WebsiteRight>Ultra &copy;2020</WebsiteRight>
          <SocialIcons>
            <SocialIconLink to="/" target="__blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to="/" target="__blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink to="/" target="__blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink to="/" target="__blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink to="/" target="__blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
