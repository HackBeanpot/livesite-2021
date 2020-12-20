import React from 'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../assets/logo.js';

const MainNavbar = () => {
  return (
    <Navbar className="navbar-center-align" variant="dark" expand="lg" sticky="top">
      <div className="navbar-logo">
        <Logo/>
      </div>
    </Navbar>
  );
};

export default MainNavbar;