import React from "react";
import "./skills.scss";
import Separator from "../../components/separator/Separator";
import { domaineComp, techComp, devopsComp } from "../../assets/data.js";

function ProgressBar(techno) {
  return (
    <div className="progress-item">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${techno.level}%` }}>
          <p>{techno.name}</p>
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <Separator
        info={{ title: "Développement Web Responsive", img: "/images/rep.png" }}
      />
      <div className="titles-page-box">
        <h1>mes compétences</h1>
        <h2>Des compétences à votre services</h2>
      </div>

      <div
        className="skills-box"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(/images/bg.jpeg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="skills-box-left">
          <h3>Domaines de compétences</h3>
          <div className="skill-content-left">
            {domaineComp.map((con) => (
              <div className="skill-item-left">
                <h4>
                  <span>{"+"}</span> {con.title}
                </h4>
                <p>{con.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-box-right">
          <div className="skills-code">
            <h3>Compétences en développement</h3>
            <div className="skills-techno">
              {techComp.map((techno) => (
                <ProgressBar key={techno.name} {...techno} />
              ))}
            </div>
          </div>
          <div className="skills-code">
            <h3>Compétences en Devops</h3>
            <div className="skills-techno">
              {devopsComp.map((techno) => (
                <ProgressBar key={techno.name} {...techno} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
