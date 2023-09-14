import React from "react";
import "./portfolio.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { projects } from "../../assets/data";

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
