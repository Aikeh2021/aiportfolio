import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav className="container-fluid static-bottom" id="footer-div">
        <div className="row">
          <div className="col-6 footer-info">
            <h4>Ashley's Socials:</h4>
            <a
              className="navbar-brand col-md-auto footer-links"
              href="https://github.com/Aikeh2021"
              target="blank"
            >
              Github
            </a>
            <div className="w-100"></div>
            <a
              className="navbar-brand col-md-auto footer-links"
              href="https://www.linkedin.com/in/ashley-ik/"
              target="blank"
            >
              LinkedIn
            </a>
            <div className="w-100"></div>
            <a
              className="navbar-brand col-md-auto footer-links"
              href="https://calendly.com/ashley-i21/30min"
              target="blank"
            >
              Calendly
            </a>
          </div>
          <div className="col-6 footer-info">
            <h4>Navigation:</h4>
              <NavLink
                className="footer-links"
                to={process.env.PUBLIC_URL + "/"}
                >
                  Home
                </NavLink>
                <div className="w-100"></div>
              <NavLink
                className="footer-links"
                to="/about"
                >
                  About
                </NavLink>
                <div className="w-100"></div>
              <NavLink
                className="footer-links"
                to="/projects"
                >
                  Projects
                </NavLink>
                <div className="w-100"></div>
              <NavLink
                className="footer-links"
                to="/contact"
                >
                  Contact
                </NavLink>
          </div>
        </div>
        <div className="row">
          <p className="col-12 prvcy-stmt">
            This website is not intended for use or replication by anyone other
            than the site's creator. Violators will be subject to legal ramifications.
          </p>
        </div>
        <div className="row">
          <hr />
          <div className="col-12 prvcy-stmt">
            © Copyright of Ashley Ikeh 2021, All Rights Reserved
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
