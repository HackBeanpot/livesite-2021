import React from 'react';
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Logo from '../assets/logo-white.js';

const MainNavbar = () => {
  return (
    <Navbar className="navbar-center-align" collapseOnSelect expand="lg" variant="dark" expand="lg" sticky="top">
      {/* <Navbar.Brand href="#home"> */}
      <div className="navbar-logo">
        <Logo/>
      </div>
      {/* </Navbar.Brand> */}

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#schedule" className="navbar-text">Schedule</Nav.Link>
          <Nav.Link href="#challenges" className="navbar-text">Challenges</Nav.Link>  
          <Nav.Link href="#mentors" className="navbar-text">Mentors</Nav.Link>
          <Nav.Link href="#resources" className="navbar-text">Resources</Nav.Link>  
          <Nav.Link href="#team" className="navbar-text">Our Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;