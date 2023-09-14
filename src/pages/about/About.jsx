import React from "react";
import "./about.scss";
import Separator from "../../components/separator/Separator";
import { aboutMe } from "../../assets/data";

const About = () => {
  return (
    <div className="about">
      <Separator
        info={{
          title: "Je réponds à vos besoins en développement web!",
          img: "/images/sep.png",
        }}
      />
      <div className="titles-page-box">
        <h1>à propos</h1>
        <h2>Innover, s'adapter, créer : telle est ma devise</h2>
      </div>
      <div className="about-box">
        <div className="about-img">
          <img src="/images/about.png" alt="aboutme" />
        </div>
        <div className="about-description">
          <h1>{aboutMe.titre}</h1>
          <p>{aboutMe.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
