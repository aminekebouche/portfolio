import React from "react";
import "./about.scss";
import Separator from "../../components/separator/Separator";

const About = () => {
  return (
    <div className="about">
      <Separator />
      <div className="titles-page-box">
        <h1>à propos</h1>
        <h2>Innover, s'adapter, créer : telle est ma devise</h2>
      </div>
      <div className="about-box">
        <div className="about-img">
          <img src="/images/about.png" alt="aboutme" />
        </div>
        <div className="about-description">
          <h1>Dévelppeur passioné</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Autem officiis sit debitis omnis harum
            sed veniam quasi dicta accusamus recusandae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Autem officiis sit debitis omnis
            harum sed veniam quasi dicta accusamus recusandae? Voluptatem,
            reprehenderit alias? Eligendi aperiam tempora numquam sint odit
            optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem officiis sit debitis omnis harum sed veniam quasi dicta
            accusamus recusandae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem officiis sit debitis omnis harum sed veniam
            quasi dicta accusamus recusandae? Voluptatem, reprehenderit alias?
            Eligendi aperiam tempora numquam sint odit optio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem officiis sit debitis
            omnis harum sed veniam quasi dicta accusamus recusandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
