import React from "react";
import "./footer.css";
import facebook from "../../../assets/image/facebook.svg"
import twitter from "../../../assets/image/twitter.svg"
import insta from "../../../assets/image/insta.svg"
import logo from "../../../assets/image/logo.png"
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
        <div class="footer-brand">
  <a href="#" class="logo">
    <img src={logo} width="190" height="28" alt="wealthome"/>
  </a>
  <p class="body-medium footer-text">
    Lorem ipsum dolor sit amet consectetur. Non bibendum sit non congue pharetra pulvinar leo.
    Sed ut amet ipsum.
  </p>
</div>
          <nav class="footer-nav" aria-labelledby="nav-label-1">
            <p class="title-small footer-list-title" id="nav-label-1">
              Quick Links
            </p>
            <ul class="footer-list">
              <li>
                <a href="#" class="body-medium footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Rent
                </a>
              </li>
            </ul>
          </nav>

          <nav class="footer-nav" aria-labelledby="nav-label-2">
            <p class="title-small footer-list-title" id="nav-label-2">
              Support
            </p>
            <ul class="footer-list">
              <li>
                <a href="#" class="body-medium footer-link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="body-medium footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>

          <nav class="footer-nav" aria-labelledby="nav-label-3">
            <p class="title-small footer-list-title" id="nav-label-3">
              Get in touch
            </p>
            <ul class="footer-list">
              <li>
                <a href="#" class="body-medium footer-link">
                  hello@wealthome.com
                </a>
              </li>
              <li>
                <address class="address body-medium">
                  4148 Parker Rd. Allentown, New Mexico 31134
                </address>
              </li>
              <li>
                <ul class="social-list">
                  <li>
                    <a href="#" class="social-link">
                      <img
                        src={facebook}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link">
                      <img src={twitter} alt="twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link">
                      <img src={insta} alt="instagram" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright body-medium">Copyright 2023 codewithsadee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;