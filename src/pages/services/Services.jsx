import React from "react";
import "./services.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";

const data = [
  {
    title: "Développement web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Développement mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Maintenance web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Gestion de projet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Développements spéciiques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Développements spéciiques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Développements spéciiques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
  {
    title: "Développements spéciiques",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
    icone: "/icones/web.png",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="titles-page-box">
        <h1>mes services</h1>
        <h2>Des solutions sur mesure pour répondre à vos exigences</h2>
      </div>
      <div className="services-container">
        {data.map((item, index) => (
          <ServiceCard service={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
