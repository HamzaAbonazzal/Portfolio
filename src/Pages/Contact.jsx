import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/pages/contact.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  faEnvelope,
  faPhone,
  faUser,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTelegram,
  faWhatsapp,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/Heading";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipient = "your-email@example.com"; // استبدل هذا بالبريد الإلكتروني المطلوب
    const subject = encodeURIComponent(`رسالة من ${name}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nالبريد الإلكتروني: ${email}\nالرسالة: ${message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const { t } = useTranslation();

  return (
    <div className="contact">
      <Heading text={t("header.contact")} />
      <div className="inner-contact">
        <div className="text-contact">
          <div className="head-contact">
            <h3>{t("contact.head")}</h3>
            <p>{t("contact.par")}</p>
          </div>
          {/* <div className="phone contacts">
            <FontAwesomeIcon icon={faPhone} />
            <span>{t("contact.phone")}</span>
            <p>+963 123-456-789</p>
          </div> */}
          <div className="email contacts">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{t("contact.email")}</span>
            <p>hamzaabonazzal@gmail.com</p>
          </div>
          {/* <div className="socials">
            <a href="#face">
              <FontAwesomeIcon icon={faFacebook} className="facebook" />
            </a>
            <a href="#tw">
              <FontAwesomeIcon icon={faXTwitter} className="twitter" />
            </a>
            <a href="#whats">
            <FontAwesomeIcon icon={faWhatsapp} className="linkedin" />
            </a>
            <a href="#tele">
            <FontAwesomeIcon icon={faTelegram} className="linkedin" />
            </a>
            </div> */}
          <div className="socials">
            <a href="https://www.linkedin.com/in/hamza-abonazzal-1b85a7340">
              <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
            </a>
            <a href="https://github.com/hamzaabonazzal">
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
          </div>
        </div>
        <div className="form-contact">
          <form onSubmit={handleSubmit} action="">
            <div className="input-container">
              <label htmlFor="">{t("contact.name")}</label>
              <input
                type="text"
                name=""
                id=""
                placeholder={t("contact.your-name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="input-container">
              <label htmlFor="">{t("contact.email")}</label>
              <input
                type="email"
                name=""
                id=""
                placeholder={t("contact.your-email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="input-container">
              <label htmlFor="">{t("contact.message")}</label>
              <textarea
                type="text"
                name=""
                id=""
                placeholder={t("contact.write-message")}
                className="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <FontAwesomeIcon icon={faComments} />
            </div>
            <button type="submit" className="btn">
              {t("contact.send")}
            </button>
            <p>{t("contact.note")}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
