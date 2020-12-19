import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Welcome to HackBeanpot 2021!
    </a>
  </header>
);

export default Header;
