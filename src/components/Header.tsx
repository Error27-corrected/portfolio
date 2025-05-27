import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background-color: rgba(245, 239, 230, 0.95);
  box-shadow: 0 2px 10px rgba(107, 66, 38, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #6B4226;
  font-family: 'Playfair Display', serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #A68A64;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #6B4226;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>Showmya</Logo>
        <NavLinks>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 