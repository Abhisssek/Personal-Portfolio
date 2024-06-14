import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-logo">
            <img src="../img/brandimg.png" alt="" />
          </div>
          <div className="footer-text">
            <div className="footer-link">
              <ul>
                <Link to="/" className="footer-links">
                  Home
                </Link>
                <Link to="/about" className="footer-links">
                  About
                </Link>
                <Link to="/process" className="footer-links">
                  Process
                </Link>
                <Link to="/portfolio" className="footer-links">
                  Portfolio
                </Link>
                <Link to="/blog" className="footer-links">
                  Blog
                </Link>
                <Link to="/services" className="footer-links">
                  Services
                </Link>
              </ul>
            </div>
            
          </div>
          <div className="copyright">
              <h3>Copyright © 2022 Picto.</h3>
            </div>
        </div>
      </div>
    </div>
  );
};
