import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutSection = styled.section`
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

const About = () => {
  return (
    <>
      <Navbar />
      <AboutSection>
        <Title>About Me</Title>
        <Description>
          Hi, I'm Alfredo Borroto, a passionate Full Stack Developer with a strong background
          in automation and problem-solving. I specialize in building efficient, scalable,
          and user-friendly applications that make an impact.
        </Description>
        <Description>
          With expertise in modern web technologies, I love tackling complex challenges and
          continuously improving my skills to stay ahead in the industry.
        </Description>
      </AboutSection>
      <Footer />
    </>
  );
};

export default About;
