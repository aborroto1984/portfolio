import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

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

const projects = [
  {
    title: "Web Scraper",
    description: "A Python-based web scraper for extracting data from e-commerce sites.",
    code: "import requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://example.com'\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, 'html.parser')\nprint(soup.title.text)",
    repoLink: "https://github.com/your-repo/web-scraper",
    technologies: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "Selenium", icon: "/icons/selenium.png" },
        { name: "SQL", icon: "/icons/sql.png" },
        { name: "SQL", icon: "/icons/flask.png" },
        { name: "SQL", icon: "/icons/fastapi.png" },
        { name: "SQL", icon: "/icons/git.png" },
        { name: "SQL", icon: "/icons/azure.png" }
      ],
  },
  {
    title: "Automated Report Generator",
    description: "Generates PDF reports using Python and Pandas.",
    code: "import pandas as pd\nfrom fpdf import FPDF\n\ndata = pd.DataFrame({'Name': ['Alice', 'Bob'], 'Score': [90, 85]})\npdf = FPDF()\npdf.add_page()\npdf.set_font('Arial', 'B', 16)\npdf.cell(40, 10, 'Student Scores')\npdf.output('report.pdf')",
    repoLink: "https://github.com/your-repo/report-generator",
    technologies: [
        { name: "Python", icon: "/icons/python.png" },
        { name: "Selenium", icon: "/icons/selenium.png" },
        { name: "SQL", icon: "/icons/sql.jpg" }
      ],
  }
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <ProjectsSection>
        <Title>My Projects</Title>
        <ProjectsContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsContainer>
      </ProjectsSection>
      <Footer />
    </>
  );
};

export default Projects;
