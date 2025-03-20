import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import "../css/footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Bhagya Wijenayake</h3>
            <p>
              Crafting clean code and bringing ideas to life. Let's connect!
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/Bhagyawijenayake"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bhagyawijenayake/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/BSudaraka"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/bhagya.wijenayake/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <p>
              &copy; {new Date().getFullYear()} Bhagya Wijenayake. All rights
              reserved.
            </p>
            <p>Designed and built by me using React</p>
            <p>Feel free to reach out!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
