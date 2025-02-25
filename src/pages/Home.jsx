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
  width: 300px;
  height: 300px;
  background-color: #4a5568;
  border-radius: 50%;
  margin-bottom: 16px;
  background-image: url('${process.env.PUBLIC_URL}/hero_image.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
      {/* <Navbar /> */}
      <Section>
        <HeroImage />
        <Title>Hi, I'm Alfredo Borroto</Title>
        <Description>
          Full Stack Developer | Automation Expert | Problem Solver
        </Description>
        <Description>
          <div style={{ textAlign: "left" }}>
            <p>
            I'm, a Full Stack Software Engineer with a passion for building efficient, scalable, and user-friendly applications. With expertise in React, Angular, Python, and SQL, I specialize in crafting automation solutions and intuitive interfaces that streamline operations and enhance productivity.
            Over the years, I have successfully:
            </p>
            <ul>
              <li>Automated workflows, reducing 8,580+ hours of manual labor annually and saving companies $171,600+ per year.</li>
              <li>Developed enterprise-level order management systems, improving efficiency by 80%.</li>
              <li>Integrated APIs for Amazon, QuickBooks, and FTP-based solutions to ensure seamless data synchronization.</li>
            </ul>
          <p>My experience spans front-end UI development, backend integration, and DevOps, allowing me to bridge the gap between design and functionality. Whether it’s creating sleek user interfaces with Angular and Bootstrap, or building API-driven systems with Python and Flask, I am always focused on delivering high-performance and scalable solutions.</p>
          <p>If you're looking for a UI Developer or Full Stack Engineer to bring innovation and technical expertise to your team, let’s connect!</p>
          </div>
        </Description>
        <StyledLink to="/projects">View My Work</StyledLink>
      </Section>
      {/* <Footer /> */}
    </>
  );
};

export default Home;