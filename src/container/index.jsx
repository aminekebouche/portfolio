import React from "react";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Skills from "../pages/skills/Skills";
import Portfolio from "../pages/portfolio/Portfolio";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Footer from "../pages/footer/Footer";

const Container = () => {
  return (
    <>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Container;
