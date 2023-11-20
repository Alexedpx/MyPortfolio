import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProjectsList from "../pages/ProjectsList";

export default function Projects() {
  const [showProject, setShowProject] = useState(false);
  const handleShowProjectClick = () => {
    setShowProject(!showProject);
  };

  return (
    <>
      <div className="container-projects">
        <div className="header" onClick={handleShowProjectClick}>
          <NavLink to="/projects">
            <h1>See my projects</h1>
          </NavLink>
        </div>
      </div>
      {showProject && <ProjectsList />}
    </>
  );
}
