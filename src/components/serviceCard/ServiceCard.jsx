import React from "react";
import "./serviceCard.scss";

const ServiceCard = (props) => {
  const { title, description, icone } = props.service;

  return (
    <div className="service-card">
      <div className="service-card-img">
        <img src={icone} alt="ico" />
      </div>
      <div className="service-card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
