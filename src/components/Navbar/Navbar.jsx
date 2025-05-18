import React from "react";
import "./Navbar.css";
import Portfolio from "../assets/Portfolio.png";
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="home" className="navbar text-white">
      {" "}
      <div className="navbar-con">
        <h2>
          Adesemowo <span>Emmamuel</span>
        </h2>
        <h4>Front-end Developer</h4>
        <p>
          I'm a passionate frontend developer. My sevices ranges from developing
          custom websites to enchancing existing ones with dynamic features{" "}
          <br />
          If you are seeking a dedicated and innovative frontend developer, I'd
          love to connect
        </p>
        <button className="button">Contact Us </button>
      </div>
      <img src={Portfolio} alt="portfolio-image" />
    </div>
  );
};

export default Navbar;
