import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">flights</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">reservation status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Amenities</h4>
            <ul>
              <li>
                <a href="#">Fitness Center</a>
              </li>
              <li>
                <a href="#">Spa Services</a>
              </li>
              <li>
                <a href="#">Restaurant</a>
              </li>
              <li>
                <a href="#">Room Service</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
