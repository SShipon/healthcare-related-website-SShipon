import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
 import log from './../../assets/images/log/log.png'
 import './Header.css'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
       
    <Navbar className="header" expand="lg">
    <Container className="navbar">
    <Navbar.Brand href="#home"><img width="70px" src={log} alt="" /> <span className="font-size">Troma Center</span> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} className="text-white" to="/home">Home</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/about">About</Nav.Link>
        
        <Nav.Link as={NavLink} className="text-white" to="/contact">Contact</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/services">Services</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/signup">Sign Up</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/login">Log In</Nav.Link>

        <Nav.Link as={NavLink} className="text-white" to="/cart"> <FontAwesomeIcon icon={faHandHoldingMedical} /></Nav.Link>
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    );
};

export default Header;