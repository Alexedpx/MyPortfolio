import SharingCard from "./SharingCard";
import React, { useState } from "react";

export default function ProjectsList() {

    const [showCardSharing, setShowCardSharing] = useState(false);

    const handleClickShowCard = () => {
        setShowCardSharing(!showCardSharing);
      };
  return (
    <>
      <div className="container-card">
      {showCardSharing && <SharingCard />}
        <div className="projects-list" onClick={handleClickShowCard}>
          <p>Sharing is Caring</p>
          <br></br>
          <p>Wookie Taxi</p>
          <br></br>
          <p>Project 3</p>
        </div>
      </div>
      
    </>
  );
}
