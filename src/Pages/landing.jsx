import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./../styles/pages/landing.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { scrollToEle } from "./../components/scrollToEle";

function Landing() {
  const { t } = useTranslation();

  return (<div className="landing">
    <div className="container">
      <div className="land-text">
        <h1>{t("landing.main")}</h1>
        <button onClick={() => scrollToEle("contact")}>{t("landing.contact") }</button>
      </div>
      {/* <div className="socials">
        <div className="item">
          <a href="#contact" onClick={() => scrollToEle("contact")}>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <p>Facebook</p>
          <span></span>
        </div>
        <div className="item">
          <a href="#contact" onClick={() => scrollToEle("contact")}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p>Linkedin</p>
          <span></span>
        </div>
        <div className="item">
          <a href="#contact" onClick={() => scrollToEle("contact")}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p>Email</p>
          <span></span>
        </div>
        <div className="item">
          <a href="#contact" onClick={() => scrollToEle("contact")}>
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <p>X</p>
          <span></span>
        </div>
      </div> */}
      <span className="arrow" onClick={() => scrollToEle("skills")}>
          <FontAwesomeIcon icon={faArrowDown} />
      </span>

    </div>
  </div>)
}

export default Landing;