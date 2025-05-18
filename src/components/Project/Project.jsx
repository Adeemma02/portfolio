import React from "react";
import "./Project.css";
import Nurse from "../assets//Nurse.png";
import Nacos from "../assets/Nacos.png";
import movie from "../assets/Movie.png";
import pizza from "../assets/Pizza.png";
import ecom from "../assets/ecom.png";
import weather from "../assets/weather-app.jpg";

const Project = () => {
  return (
    <div className="Project bg-[#15202b] text-white" id="project">
      <h2 className="project-h2">
        Explore some of <span>My Projects</span>
      </h2>
      <div className="project-con">
        <div className="project-con-item">
          <img src={weather} alt="weather-image" className="project-image" />
          <div className="pro">
            <div className="project-title init">
              Weather App <br />
              (Moblie view){" "}
            </div>
            <a
              href="https://adeemma02.github.io/weather-app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="project-link"
            >
              {" "}
              View Demo
            </a>
          </div>
        </div>
        <div className="project-con-item">
          <img src={Nurse} alt="nurse-image" className="project-image" />
          <div className="pro">
            <div className="project-title">Nursing Website</div>
            <a
              href="https://www.everythingnursingstaffing.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="project-link"
            >
              {" "}
              View Demo
            </a>
          </div>
        </div>
        <div className="project-con-item">
          <img src={Nacos} alt="nacos-image" className="project-image" />
          <div className="pro">
            <div className="project-title">Nacos Website</div>
            <a
              href="https://nacos-ade.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="project-link"
            >
              {" "}
              View Demo
            </a>
          </div>
        </div>
        <div className="project-con-item">
          <img src={movie} alt="movie-img" className="project-image" />
          <div className="pro">
            <div className="project-title">Movie APP</div>
            <a
              href="https://movie-app-lyart-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="project-link"
            >
              {" "}
              View Demo
            </a>
          </div>
        </div>
        <div className="project-con-item">
          <img src={pizza} alt="pizza-image" className="project-image" />
          <div className="pro">
            <div className="project-title">Pizza APP</div>
            <a
              href="https://pizza-theta-flame.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="project-link"
            >
              {" "}
              View Demo
            </a>
          </div>
        </div>
        <div className="project-con-item">
          <img src={ecom} alt="ecom-image" className="project-image" />
          <div className="pro">
            <div className="project-title init">E-Commerce Website</div>
            <div className="project-titl">(Still developing)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
