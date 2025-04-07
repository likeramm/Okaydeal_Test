// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  color: black;
  text-decoration: none;

  &:hover {
    color: #0077ff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;

  &:hover {
    color: #0077ff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">OKAYDEAL</Logo>
      <NavLinks>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
