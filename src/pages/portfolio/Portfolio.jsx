import React from "react";
import "./portfolio.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";

const projects = [
  {
    image: "/images/bg.jpeg",
    title: "Dauphinder",
    description: "Site de rencontre universitaie",
  },
  {
    image: "/images/me.png",
    title: "Portfolio Doudine smart data buisness",
    description: "Site de rencontre universitaie",
  },
  {
    image: "/images/bg.jpeg",
    title: "Daphinder",
    description: "Site de rencontre universitaie",
  },
  {
    image: "/images/bg.jpeg",
    title: "Daphinder",
    description:
      "Site de rencontre universitaie Site de  Site de rencontre  rencontre universitaie Site de  Site de rencontre universitaie Site de rencontrerencontre universitaie Site de rencontre  Site de rencontre universitaie Site de rencontre universitaie niversitaie Site de rencontre universitaie Site de rencontre universitaie",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="titles-page-box">
        <h1>mes projets</h1>
        <h2>Un voyage à travers mes initiatives professionnelles</h2>
      </div>
      <div className="portfolio-container-project">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
