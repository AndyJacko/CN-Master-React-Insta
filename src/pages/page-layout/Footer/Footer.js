import React from "react";
import { Link } from "react-router-dom";

import MadeBy from "./MadeBy/MadeBy";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div id="footer-links">
        <Link to="/">About</Link>
        <Link to="/">Help</Link>
        <Link to="/">Press</Link>
        <Link to="/">API</Link>
        <Link to="/">Jobs</Link>
        <Link to="/">Privacy</Link>
        <Link to="/">Terms</Link>
        <Link to="/">Locations</Link>
        <Link to="/">Language</Link>
      </div>

      <MadeBy />
    </footer>
  );
};

export default Footer;
