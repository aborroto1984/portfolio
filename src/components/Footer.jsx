import React from "react";
import styled from "styled-components";


const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 24px;

  background-color: #1a202c;
  color: white;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterLinks = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
`;

const FooterLink = styled.a`
  color: #63b3ed;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Alfredo Borroto. All rights reserved.</p>
      <FooterLinks>
        <FooterLink href="https://github.com/aborroto1984" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
        <FooterLink href="https://www.linkedin.com/in/aborroto1984" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
        <FooterLink href="mailto:aborroto1984@gmail.com.com">Email</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;