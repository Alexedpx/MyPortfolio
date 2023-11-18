import SharingCard from "./SharingCard";
import WookieCard from "./WookieCard";
import { useState } from "react";

export default function ProjectsList() {
  const [openCard, setOpenCard] = useState(null);

  const handleClickShowCard = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName);
  };

  return (
    <>
      <div className="container-card">
        {openCard === "SharingCard" && <SharingCard />}
        {openCard === "WookieCard" && <WookieCard />}
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
          <div className="project-3">
          <p>Project 3</p>
          </div>
      </div>
      </div>
    </>
  );
}