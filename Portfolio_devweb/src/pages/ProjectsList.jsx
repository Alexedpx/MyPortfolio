import SharingCard from "../components/SharingCard";
import WookieCard from "../components/WookieCard";
import Project3Card from "../components/Project3Card";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useState } from "react";

export default function ProjectsList() {
  const [openCard, setOpenCard] = useState(null);

  const handleClickShowCard = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName);
  };

  return (
    <>
     <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content"></div>
    <div className="container-presentation">
         <Logo />
         </div>
      <div className="container-card">
        {openCard === "SharingCard" && <SharingCard />}
        {openCard === "WookieCard" && <WookieCard />}
        {openCard === "Project3Card" && <Project3Card />}
        <div className="project-list">
        <div
          className="sharing-project"
          onClick={() => handleClickShowCard("SharingCard")}
        >
          <p>Sharing is Caring</p>
          <br></br>
        </div>
        <div
          className="wookie-project"
          onClick={() => handleClickShowCard("WookieCard")}
        >
          <p>Wookie Taxi</p>
          <br></br>
          </div>
          <div
          className="project3-project"
          onClick={() => handleClickShowCard("Project3Card")}
        >
          <p>Project 3</p>
          </div>
         
      </div>
      
      </div>
      <Footer />
    </>
  );
}