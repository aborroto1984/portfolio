import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 24px 40px;
  background: linear-gradient(to bottom, #1a202c, #2d3748, #1a202c);
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding: 24px;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: black;
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  background: rgba(255, 255, 255, 0.9);
  color: black;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #3182ce;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2b6cb0;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #5a7184;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_zxxclhh",
      "template_8od8mii",
      {
        name: formData.name, 
        email: formData.email, 
        message: formData.message
      },
      "2sOBsWKuOH5dIypWL"
    )
    .then((response) => {
      console.log("Email sent successfully!", response);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Failed to send email", error);
    });
  };

  return (
    <>
    <Navbar />  
      <ContactSection>
        <h1>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <TextArea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit" disabled={submitted}>{submitted ? "Sent!" : "Send Message"}</Button>
        </Form>
        {submitted && <p style={{ color: "lightgreen", marginTop: "10px" }}>Message sent successfully!</p>}
      </ContactSection>
    <Footer />
  </>
  );
};

export default Contact;
