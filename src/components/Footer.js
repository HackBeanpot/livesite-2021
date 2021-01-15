import React from "react";
import Logo from "../assets/logo-vertical.js";
import NewsletterSignup from "../data/NewsletterSignup.jsx";

const Footer = () => (
  <div className="footer">
    {/* Reference Hackbeanpot.com */}
    <div className="footer__socials">
        <a
        href="https://www.facebook.com/hackbeanpot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-facebook  fa-2x footer-social-icon footer-text"></i>
      </a>
      <a
        href="https://www.instagram.com/hackbeanpot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-instagram fa-2x footer-social-icon footer-text"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/9315150/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-linkedin fa-2x footer-social-icon footer-text"></i>
      </a>
      <a
        href="https://hackbeanpot.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-medium-m  fa-2x footer-social-icon footer-text"></i>
      </a>

      <a
        href="https://twitter.com/hackbeanpot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-twitter  fa-2x footer-social-icon footer-text"></i>
      </a>
      
    </div>

    {/* Newsletter */}

    <div className="footer__HBP">
      <div className="logo">
        <Logo />
      </div>

      <NewsletterSignup />
    </div>

    <div className="footer__legal">
      {/* Code of Conduct */}
      <p>HackBeanpot, Inc. is a registered 501(c)(3) organization. </p>
      <a href="https://hackbeanpot.com/code-of-conduct">Code of Conduct</a>
    </div>
  </div>
);

export default Footer;
