import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsData";  // Import project data

const ProjectsSection = styled.section`
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
  margin-bottom: 24px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`;

const Projects = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ProjectsSection>
        <Title>Some of My Projects</Title>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsContainer>
      </ProjectsSection>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
