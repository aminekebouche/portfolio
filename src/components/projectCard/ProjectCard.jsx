import React from "react";
import "./projectCard.scss";

const ProjectCard = (props) => {
  const { image, title, description } = props.project;
  return (
    <div className="projectCard">
      <div className="projectCard-img">
        <img src={image} alt="pictur" />
      </div>
      <div className="projectCard-description">
        <h1>
          {title}
          <div />
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
