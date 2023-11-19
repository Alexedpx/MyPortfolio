import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfilCard from "../components/ProfilCard";
import ContactCard from "./ContactCard";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

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
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content"></div>
      <div className="container-presentation">
        <Logo />
        <div className="Profil" onClick={handleAboutMeClick}>
          <button class="cta">
            <span>
              <p>About me</p>
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
            </svg>
          </button>
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
      <Footer />
    </>
  );
}
