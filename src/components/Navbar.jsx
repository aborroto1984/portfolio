import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #1a202c;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #1a202c;
    width: 200px;
    padding: 16px;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Show/hide menu */
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  padding: 8px 16px;

  &:hover {
    color: #63b3ed;
  }
`;

const NameButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 8px 16px;

  &:hover {
    color: #63b3ed;
    transform: scale(1.05);
  }
`;

/* Hamburger Menu Icon */
const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <NameButton to="/">Alfredo Borroto</NameButton>
      
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>

      <NavLinks isOpen={menuOpen}>
        <StyledLink to="/" onClick={() => setMenuOpen(false)}>Home</StyledLink>
        <StyledLink to="/about" onClick={() => setMenuOpen(false)}>About</StyledLink>
        <StyledLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</StyledLink>
        <StyledLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
