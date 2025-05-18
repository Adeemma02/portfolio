import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Project from "../components/Project/Project.jsx";
import Skill from "../components/Skill/Skill.jsx";
import Header from "../components/Header/Header.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1300px] mx-auto">
        <Navbar />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
