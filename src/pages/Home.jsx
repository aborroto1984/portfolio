import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 24px;
  background: linear-gradient(to bottom, #1a202c, #2d3748, #1a202c);
  color: white;
`;

const HeroImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #4a5568;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #cbd5e0;
  margin-bottom: 24px;
  max-width: 640px;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  padding: 12px 24px;
  background-color: #3182ce;
  color: white;
  border-radius: 8px;
  font-size: 1.125rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2b6cb0;
    transform: scale(1.05);
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <HeroImage />
        <Title>Hi, I'm Alfredo Borroto</Title>
        <Description>
          Full Stack Developer | Automation Expert | Problem Solver
        </Description>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt metus a lorem malesuada, vel tempor ipsum blandit. Quisque
          vestibulum nunc sit amet nisl gravida, nec pretium justo vulputate.
        </Description>
        <StyledLink to="/projects">View My Work</StyledLink>
      </Section>
      <Footer />
    </>
  );
};

export default Home;