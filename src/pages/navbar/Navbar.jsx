import React from "react";
import { Link } from "react-scroll";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="\images\logo.png" alt="AK" />
      </div>
      <div className="navbar-right">
        <Link
          to="home"
          className="icon-home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <HomeRoundedIcon />
        </Link>
        <Link
          to="services"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          services
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          compétences
        </Link>
        <Link
          to="portfolio"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          portflio
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          à propos
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
