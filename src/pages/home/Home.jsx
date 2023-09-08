import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <p className="home-hey">Salut, Je suis Amine</p>
        <h1>
          Développeur <br />
          <span>Full stack</span>
        </h1>
        <p className="home-description">
          Spécialiste en développement Full Stack, je fusionne créativité et
          expertise technique pour transformer vos idées en réalités digitales
          impactantes.
        </p>
        <button className="btn btn-primary">Discuter</button>
      </div>
      <div className="home-right">
        <img src="/images/me2.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
