import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

import "bootstrap/dist/css/bootstrap.min.css";

function NavNew() {
  const [showSignup, setShowSignup] = useState(false);

  const dosignup = () => {
    setShowSignup(true);
  };

  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
                <Button variant="secondary" onClick={dosignup}>Signup</Button>{' '}
              <Nav.Link eventKey={2}  onClick={dosignup}>
                <Button variant="secondary">Login</Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <br></br>
      {showSignup && <Signup />} {/* Conditional rendering of Signup component */}
    </BrowserRouter>
  );
}

export default NavNew;
