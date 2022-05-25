import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Alexander Lane</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#work">Work</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  );
};

export default Header;