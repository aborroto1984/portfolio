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
  max-width: 650px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: #1e293b;
  padding: 14px;
  border-radius: 8px;
  width: 100%;
  overflow-x: auto;
`;

const ProjectCard = ({ title, description, code, repoLink, technologies }) => {
  const [showCode, setShowCode] = useState(false);

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
          <SyntaxHighlighter language="python" style={materialOceanic}>
            {code}
          </SyntaxHighlighter>
        </CodeContainer>
      )}
    </Card>
  );
};

export default ProjectCard;
