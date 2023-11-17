import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt, FaUserPlus, FaPhone } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.css';


function NavDropdownExample() {
    
  return (
    <Navbar expand="md"
    style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/graphic-design">Graphic Design</Nav.Link>
        </Nav>
        <Nav className='mx-auto'>
          <NavDropdown title="Service Menu" id="nav-dropdown">
          <NavDropdown.Item as={Link}  eventKey="/web-development">Web Development</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/software-solutions">Software Solutions</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/graphic-design">Graphic Design Work</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/graphic-design/logo">Logo</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/digital-marketing">Digital Marketing</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/ecommerce">E-Commerce Integration</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/mobile-app">Mobile Applications</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} eventKey="/consulting">Consulting</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/support-services">Support Services</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/signup"><FaSignInAlt /> </Nav.Link>
          <Nav.Link as={Link} to="/login"><FaUserPlus /> </Nav.Link>
          <Nav.Link
  as={Link}
  to="/contact"
 
    style={{
        fontSize: "1.25rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Example shadow: 0 offset, 4px blur, 8px spread, 10% opacity
        textShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#BF6A6A",
        color: "white",
        paddingRight: "2rem",
        paddingLeft: "2rem",
    
  
  
    borderRadius: '4px',
    padding: '4px 8px 2px 8px',
    textDecoration: 'none',
    textAlign: 'center',

  }}
>
  <FaPhone /> Contact Us
</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavDropdownExample;
