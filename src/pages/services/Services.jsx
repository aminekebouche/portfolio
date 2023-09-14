import React from "react";
import "./services.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { services } from "../../assets/data.js";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="titles-page-box">
        <h1>mes services</h1>
        <h2>Des solutions sur mesure pour répondre à vos exigences</h2>
      </div>
      <div className="services-container">
        {services.map((item, index) => (
          <ServiceCard service={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
