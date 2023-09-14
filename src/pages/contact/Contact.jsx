import React, { useState } from "react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Separator from "../../components/separator/Separator";
import "./contact.scss";
import validator from "validator";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyValue = Object.values(formData).some((val) => val === "");
    if (!hasEmptyValue || validator.isEmail(formData.email)) {
      emailjs
        .send("myPortfolio", "template_avq0c4s", formData, "EiqIlKSUIg5wiDAYj")
        .then(
          (response) => {
            console.log(
              "Email sent successfully!",
              response.status,
              response.text
            );
            setMessage({ text: "Email sent successfully!", status: "success" });
            setFormData({
              name: "",
              email: "",
              tel: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            console.error("Failed to send email.", error);
            setMessage({
              text: "Failed to send email! Please retry",
              status: "error",
            });
          }
        );
    } else {
      console.log("vide");
      setMessage({ text: "Invalid form", status: "error" });
    }
  };
  return (
    <div className="contact">
      <Separator
        info={{
          title:
            "Rencontrons-nous et donnons vie à vos idées. Contactez-moi dès maintenant !",
          img: "/images/con.png",
        }}
      />
      <div className="titles-page-box">
        <h1>contactez-moi</h1>
        <h2>Discuttons de vos idées</h2>
      </div>
      <div className="contact-box">
        <div className="contact-cord">
          <div className="contact-cord-item">
            <PersonPinCircleIcon className="icone" />
            <div>
              <h1>Adresse</h1>
              <p>7 rue robespierre 78800, Houilles</p>
            </div>
          </div>
          <div className="contact-cord-item">
            <LocalPhoneIcon className="icone" />
            <div>
              <h1>Téléphone</h1>
              <p>0610942602</p>
            </div>
          </div>
          <div className="contact-cord-item">
            <MailIcon className="icone" />
            <div>
              <h1>E-mail</h1>
              <p>keboucheamine6@gmail.com</p>
            </div>
          </div>
          <div className="contact-cord-item">
            <QueryBuilderIcon className="icone" />
            <div>
              <h1>Horaire</h1>
              <p>Du Lundi au Vendredi</p>
              <p>9H00 - 18H00</p>
            </div>
          </div>
        </div>
        <div className="contact-adress">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.768280552835!2d2.1805714968065444!3d48.91980689744452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e663f34b2f2e1b%3A0xcc99590fe1859d11!2s7%20Rue%20Robespierre%2C%2078800%20Houilles!5e0!3m2!1sfr!2sfr!4v1694435582581!5m2!1sfr!2sfr"
            width="300"
            height="335"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="my-adress"
          ></iframe>
        </div>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nom et prénom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="+33610942602"
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Devis d'un site vitrine"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Exprimez votre besoin en détails"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              {message && (
                <div className={`message ${message.status}`}>
                  {message.text}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
