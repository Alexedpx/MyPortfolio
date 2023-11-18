import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfilCard from "../components/ProfilCard";
import ContactCard from "./ContactCard";
import Projects from "../components/Projects";

import Logo from "../components/Logo";


export default function MainPage() {
  const [showProfile, setShowProfile] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleAboutMeClick = () => {
    setShowProfile(!showProfile);
  };

  const handleContactMeClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <>
      <div className="container-presentation">
        <div className="logo">
         <Logo />
        </div>
        <div className="Profil" onClick={handleAboutMeClick}>
          <p>About me</p>
        </div>

        <div className="Social_link">
          <a href="https://github.com/Alexedpx">
            <img src="src/public/images/social/Github.png" />
          </a>
          <NavLink to="/contact">
          <img
            onClick={handleContactMeClick}
            src="src/public/images/social/Mail.png"
          />
          </NavLink>

          <a href="https://www.linkedin.com/in/alexandra-depourtoux-422b38203/">
            <img src="src/public/images/social/Linkedin.png" />
          </a>
        </div>
        
      </div>
      {showProfile && <ProfilCard />}
      {showInfo && <ContactCard />}
      
      <Projects />
      
      
      
    </>
  );
}
