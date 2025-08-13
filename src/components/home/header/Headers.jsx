import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./headers.css";
import logo from "../../../assets/image/logo.png";

function Headers() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNotHomePage = location.pathname !== "/";

  return (
    <header
      className={`header ${isHeaderActive && "active"} ${isNotHomePage && "blue-background"}`}
      data-header
    >
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} width="190" height="28" alt="wealthome" />
        </a>
        <nav className={`navbar ${isNavbarOpen && "active"}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link to={'/'} className="navbar-link label-medium active">
                Home
              </Link>
            </li>
            <li>
               <Link to={'/allproperty'} className="navbar-link label-medium active">
                Rent
              </Link>
            </li>
            <li>
               <Link to={'/allproperty'}  className="navbar-link label-medium active">
                Sell
              </Link>
            </li>
            <li>
               <Link to={'/allproperty'}  className="navbar-link label-medium active">
                Buy
              </Link>
            </li>
            <li>
            <Link to={'/aboutus'} acti className="navbar-link label-medium active" >
                        <span> About</span>
                    </Link>
              {/* <a href="#" className="navbar-link label-medium active">
                About
              </a> */}
            </li>
          </ul>
          <div className="navbar-wrapper">
            <Link to={"/login"} className="btn-link label-medium">
              Login
            </Link>
             <Link to={'/contactUs'} className="btn btn-fill label-medium active" >
                        <span>  Contact Us</span>
                    </Link>
                      
            {/* <a href="/contactUs" className="btn btn-fill label-medium">
              Contact Us
            </a> */}
          </div>
        </nav>
        <button
          className={`nav-toggle-btn icon-btn ${
            isHeaderActive ? "active" : ""
          }`}
          aria-label="toggle navbar"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          {!isNavbarOpen ? (
            <span className="material-symbols-rounded open" aria-hidden="true">
              menu
            </span>
          ) : (
            <span className="material-symbols-rounded close" aria-hidden="true">
              close
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Headers;
