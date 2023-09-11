// Footer.js
import React from "react";
import "./footer.scss";
import Menu from "../../components/menu/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src="/images/logo.png" alt="Logo" className="footer-logo" />
        <div className="footer-links">
          <h1>Liens important</h1>
          <Menu />
        </div>
        <div className="footer-social">
          <h1>Suivez moi sur mes réseaux</h1>
          <div>
            <a
              href="https://github.com/votreNom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/votreNom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/votreNom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/votreNom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p>© 2023 KEBOUCHE Amine. Tous droits réservés.</p>
    </div>
  );
};

export default Footer;
