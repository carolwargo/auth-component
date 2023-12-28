import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSignInAlt, FaUserPlus, FaPhone } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.css';


function NavDropdownExample() {
    
  return (
    <Navbar expand="md" className='mx-auto' 
    style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', fontSize:'1rem', fontFamily:'Poppins'}}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/graphic-design">Graphic Design</Nav.Link>
        <Nav.Link as={Link} to="/web-dev">Web Development</Nav.Link>
        <Nav.Link as={Link} to="/test">Test</Nav.Link>
        <Nav.Link as={Link} to="/graphic-brief">Graphic Brief</Nav.Link>
        </Nav>
      

        <Nav className='mx-auto'>
          <NavDropdown title="Service Menu" id="nav-dropdown">
          <NavDropdown.Item as={Link}  eventKey="/web-development">Web Development</NavDropdown.Item>
          <NavDropdown title="Graphic Design" className='mx-auto'>
            <NavDropdown.Item as={Link} eventKey="/graphic-design/logo">Logo</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/graphic-design/branding">Branding</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/graphic-design/business-cards">Business Cards</NavDropdown.Item>
            <NavDropdown.Item as={Link} eventKey="/graphic-design/essentials">Essentials</NavDropdown.Item>
          
          </NavDropdown>

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
        <Nav className='px-3'>
  <Nav.Link as={Link} to="/login" style={{ marginRight: '10px' }}><FaSignInAlt /></Nav.Link>
  <Nav.Link as={Link} to="/signup" style={{ marginRight: '10px' }}><FaUserPlus /></Nav.Link>
  <Nav.Link as={Link} to="/contact" style={{ marginRight: '10px' }}><FaPhone /></Nav.Link>
</Nav>


      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavDropdownExample;
