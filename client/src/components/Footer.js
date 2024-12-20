import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #f5f5f5; /* Light gray for a more elegant look */
  color: #333;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #ddd;
  font-family: 'Arial', sans-serif;


   @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 0 1rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #111; /* Darker for emphasis */
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a, p {
    color: #555;
    text-decoration: none;
    margin-bottom: 0.5rem;
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s;
  }

  a:hover {
    color: #111; /* Darker color on hover for contrast */
    text-decoration: underline;
  }

    @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1rem;
    }

    a, p {
      font-size: 0.85rem;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #555;

  svg {
    font-size: 1.1rem;
    color: #111;
  }

    @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;

    svg {
      font-size: 1rem;
    }
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 1.5rem;
  font-size: 0.8rem;
  color: #777;
  margin-top: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;

   @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-top: 1rem;
    margin-top: 0.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <h3>Gold API</h3>
        <a href="#">About Us</a>
        <a href="#">Know Us</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQs</a>
      </Column>

      <Column>
        <h3>Policies</h3>
        <a href="#">30-Day Returns</a>
        <a href="#">Lifetime Exchange</a>
        <a href="#">Buy Pack</a>
        <a href="#">Terms & Conditions</a>
      </Column>

      <Column>
        <h3>Services</h3>
        <a href="#">Repairs</a>
        <a href="#">Personalisation</a>
        <a href="#">Art of Gifting</a>
        <a href="#">Lending</a>
        <a href="#">Gold SIP and Reward</a>
      </Column>

      <Column>
        <h3>Features</h3>
        <a href="#">Gold Subscription</a>
        <a href="#">Gold Investment</a>
      </Column>

      <Column>
        <h3>Contact</h3>
        <ContactItem>
          <FaEnvelope />
          <a href="mailto:hello@harmaig.com">hello@harmaig.com</a>
        </ContactItem>
        <ContactItem>
          <FaWhatsapp />
          <a href="tel:+917021920836">+91 7021920836</a>
        </ContactItem>
        <ContactItem>
          <FaInstagram />
          <a href="https://instagram.com/harmaig_jewellers">@harmaig_jewellers</a>
        </ContactItem>
      </Column>

      <FooterBottom>
        &copy; 2024 Harmaig Jewellers. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
