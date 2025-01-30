import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        {/* Left Section: Logo or Company Name */}
        <div className="footer-section">
          <h2 className="footer-logo">My Website</h2>
          <p className="footer-description">
            Bringing you awesome content since 2023.
          </p>
        </div>

        {/* Middle Section: Navigation or Useful Links */}
        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Socials or Contact */}
        <div className="footer-section footer-socials">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
