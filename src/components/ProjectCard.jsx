import React, { useState } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const Card = styled.div`
  background: #2d3748;
  color: white;
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
  width: 90%; /* Change fixed width to percentage */
  max-width: 900px; /* Prevents it from being too large on desktop */
  min-width: 300px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%; /* Ensure it takes full screen width on mobile */
    padding: 16px;
    margin: 16px;
  }
`;


const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #cbd5e0;
  text-align: center;
  margin-bottom: 20px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  justify-content: center;
`;

const Badge = styled.img`
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate3d(1, 1, 0, 15deg);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #1d4ed8;
    transform: scale(1.08);
  }
`;

const CodeContainer = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  background: #1e293b;
  padding: 14px;
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;


const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  overflow-x: auto; /* Allows scrolling on small screens */
  white-space: nowrap;
  max-width: 100%; /* Ensures it doesn't exceed screen width */
`;

const Tab = styled.button`
  background-color: ${({ active }) => (active ? "#2563eb" : "#4a5568")};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ active }) => (active ? "#1d4ed8" : "#2d3748")};
  }
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  /* Remove internal styling */
  pre {
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
  }

  code {
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    line-height: 1 !important; /* Force tight spacing */
  }

  /* Mobile Overrides */
  @media (max-width: 932px) {
    pre, code {
      font-size: 0.6rem !important;
      line-height: 1.5 !important;
      margin: 1px 0 !important;
      padding: 0 !important;
    }
  }

 `;






const ProjectCard = ({ title, description, files, repoLink, technologies }) => {
  const [showCode, setShowCode] = useState(false);
  const [activeFile, setActiveFile] = useState(0);

  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BadgeContainer>
        {technologies.map((tech, index) => (
          <Badge key={index} src={tech.icon} alt={tech.name} title={tech.name} />
        ))}
      </BadgeContainer>
      <ButtonContainer>
        <Button onClick={() => setShowCode(!showCode)}>
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Button>View on GitHub</Button>
        </a>
      </ButtonContainer>
      {showCode && (
        <CodeContainer>
          <TabContainer>
            {files.map((file, index) => (
              <Tab
                key={index}
                active={index === activeFile}
                onClick={() => setActiveFile(index)}
              >
                {file.filename}
              </Tab>
            ))}
          </TabContainer>
          <StyledSyntaxHighlighter language="python" style={materialOceanic} wrapLongLines={true}>
            {files[activeFile].code}
          </StyledSyntaxHighlighter>
        </CodeContainer>
      )}
    </Card>
  );
};

export default ProjectCard;
