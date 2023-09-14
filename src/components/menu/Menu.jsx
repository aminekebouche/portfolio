import React from "react";
import { Link } from "react-scroll";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const Menu = () => {
  return (
    <>
      <Link
        to="home"
        className="icon-home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <HomeRoundedIcon />
      </Link>
      <Link
        to="services"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        services
      </Link>
      <Link
        to="skills"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        compétences
      </Link>
      <Link
        to="portfolio"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        portflio
      </Link>
      <Link
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        à propos
      </Link>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        contact
      </Link>
    </>
  );
};

export default Menu;
