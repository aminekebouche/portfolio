import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Menu from "../../components/menu/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", closeMenu);

    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar-left">
        <img src="\images\logo.png" alt="AK" />
      </div>
      {}
      <div className="navbar-right">
        <Menu />
      </div>
      <div className="navbar-menu">
        {navActive ? (
          <CloseIcon
            style={{ color: "blue", fontSize: "2rem" }}
            onClick={toggleMenu}
          />
        ) : (
          <MenuIcon
            style={{ color: "blue", fontSize: "2rem" }}
            onClick={toggleMenu}
          />
        )}

        {navActive && (
          <div className="menu-container">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
