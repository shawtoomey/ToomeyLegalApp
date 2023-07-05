import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Our Website</Heading>
            <FooterLink href="https://toomeylegal.co.uk/">Toomey Legal website</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>0191 605 3710</FooterLink>
            <FooterLink>enquiries@toomeylegal.co.uk</FooterLink>
            <FooterLink href="https://www.google.co.uk/maps/place/Surveyors+House,+Cramlington+NE23+1DN/@55.0865962,-1.5859731,17z/data=!3m1!4b1!4m5!3m4!1s0x487e7306461f8a2b:0x2d5653ea40e156ac!8m2!3d55.0865962!4d-1.5837898">Surveyors House, Cramlington, NE23 1DN</FooterLink>
          </Column>
          <Column>
            <Heading>Legal Info</Heading>
            <FooterLink href="https://toomeylegal.co.uk/policy-page/">Policy Page</FooterLink>
            <FooterLink href="https://toomeylegal.co.uk/terms-of-engagement/">Terms of Engagement</FooterLink>
            <FooterLink href="https://toomeylegal.co.uk/complaint-information/">Complaint Information</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/LegalToomey/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/company/toomey-legal">
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/LegalToomey">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;


