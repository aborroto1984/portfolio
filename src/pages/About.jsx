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
  max-width: 800px;
  line-height: 1.5;
  text-align: left;
`;

const About = () => {
  return (
    <>
    <Navbar />
      <AboutSection>
        <Title>About Me</Title>
        <Description>
My name Alfredo Lazaro Borroto. I'm a Full Stack Software Engineer with a passion for solving problems through automation and intuitive UI design. For me, programming isn’t just about writing code—it’s about creating solutions that make life easier. I thrive on the challenge of breaking down complex problems into manageable pieces, planning ahead to minimize rework, and delivering efficient, scalable software solutions.
From a young age, I’ve been the go-to tech troubleshooter for my family, always determined to solve the next challenge. That mindset has shaped my career, where I specialize in automation scripting with Python, API integrations, and database management, particularly in Azure-based environments. But I also enjoy the front-end side of development, where I can create user-friendly tools that simplify workflows and boost productivity.
One of my proudest achievements was the complete automation of a dropship order processing system, eliminating 8,580+ hours of manual work annually and saving my company over $171K per year. When API limitations blocked direct database access, I creatively leveraged SellerCloud’s task scheduling system and FTP workflows, allowing my Python scripts to seamlessly extract and process the required data.
Beyond automation, I also built a desktop app for our warehouse team, enabling them to track and categorize returns from Amazon Vendor—a solution that now provides monthly reports to our leadership team, helping them track trends and optimize logistics.
Looking ahead, I aspire to develop software solutions that impact even more people. I see myself working at a larger company with a broader scope, continuously learning new stacks and technologies while refining my expertise in Software Engineering and SaaS development.
Outside of coding, I’m a dedicated father, an avid problem solver, and a lifelong learner. Whether it's in my career or personal growth, sheer determination and a goal-oriented mindset have always driven me forward.
        </Description>
      </AboutSection>
      <Footer />
    </>
  );
};

export default About;
