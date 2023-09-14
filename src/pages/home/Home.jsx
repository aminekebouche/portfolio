import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "./home.scss";

const Home = () => {
  const [charIndex, setCharIndex] = useState(0);
  const titleBeforeSpan = "Développeur ";
  const titleInSpan = "Full stack";
  const fullTitleLength = titleBeforeSpan.length + titleInSpan.length;

  useEffect(() => {
    if (charIndex < fullTitleLength) {
      const timer = setTimeout(() => {
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [charIndex, fullTitleLength]);

  return (
    <section className="home" id="home">
      <div className="home-left">
        <p className="home-hey">Salut, Je suis Amine 😄</p>
        <h1>
          {titleBeforeSpan.slice(0, charIndex)}
          {charIndex > titleBeforeSpan.length ? (
            <span>
              {titleInSpan.slice(0, charIndex - titleBeforeSpan.length)}
            </span>
          ) : null}
        </h1>
        <p className="home-description">
          Spécialiste en développement Full Stack, je fusionne créativité et
          expertise technique pour transformer vos idées en réalités digitales
          impactantes.
        </p>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="btn btn-primary">Discuter</button>
        </Link>
      </div>
      <div className="home-right">
        <img src="/images/me2.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
