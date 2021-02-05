import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="newsletter">
      <a href="https://hackbeanpot.us10.list-manage.com/subscribe/post?u=a98050d47fdae2481521f0474&amp;id=dccd8c8431">
        Sign up for our Newsletter
      </a>
    </div>
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

    <div className="footer__legal">
      <p>HackBeanpot, Inc. is a registered 501(c)(3) organization. </p>
      <a href="https://hackbeanpot.com/code-of-conduct">Code of Conduct</a>
    </div>
  </div>
);

export default Footer;
