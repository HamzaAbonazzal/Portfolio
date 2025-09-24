import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/pages/technologies.scss";
import reactLogo from "./../imgs/react-logo.png";
import bootstrapLogo from "./../imgs/bootstrap.png";
import css3Logo from "./../imgs/css3.png";
import html5Logo from "./../imgs/html5.png";
import javascribtLogo from "./../imgs/javascribt.png";
import nodejsLogo from "./../imgs/nodejs.png";
import expressLogo from "./../imgs/express.png";
import mysqlLogo from "./../imgs/mysql.png";
import mongodbLogo from "./../imgs/monogdb.png";
import reduxLogo from "./../imgs/redux.png";
import typescriptLogo from "./../imgs/typescript.png";
import jqueryLogo from "./../imgs/jquery.png";

import ajaxLogo from "./../imgs/ajax.png";
import vscodeLogo from "./../imgs/vscode.png";
import visualstudioLogo from "./../imgs/visual-studio.png";
import postmanLogo from "./../imgs/postman.png";
import gitLogo from "./../imgs/git.png";
import githubLogo from "./../imgs/github.png";
import sublimeLogo from "./../imgs/sublime.png";
import webstormLogo from "./../imgs/webstorm.png";
import cliLogo from "./../imgs/cmd.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Heading from "../components/Heading";
function Technologies() {
  const [techsActive, setTechsActive] = useState(true);

  const activeTechsHandle = () => {
    setTechsActive(!techsActive);
    document.querySelector(".techs").classList.remove("active");
  };

  // useEffect(() => {
  //   document.querySelectorAll(".image img").forEach((element) => {
  //     console.log("sdvksdnvl", element.getAttribute("src"));
  //   });
  // }, []);

  const { t } = useTranslation();

  return (
    <div className="technologies">
      <div className="container-parts">
        <Heading text={t("header.technologies")}/>
        <div className="inner-technologies">
          <div className="text-technologies">
            <h3>{t("technologies.p1")}</h3>
            <p>{t("technologies.p2")}</p>
            <button className={`techs`} onClick={activeTechsHandle}>
              <span className={`${techsActive ? "active" : ""}`}>
              {t("technologies.b1")}
              </span>
              <span className={`${techsActive ? "" : "active"}`}>{t("technologies.b2")}</span>
              <span
                className={`background ${techsActive ? "active" : ""}`}
              ></span>
            </button>
            {/* <button className={`techs `} >Tools</button> */}
          </div>
          <div className="imgs-technologies">
            <div className={`imgs techs ${techsActive ? "active" : ""}`}>
              <span className="image html">
                <img src={html5Logo} alt="html5-logo" />
              </span>
              <span className="image css">
                <img src={css3Logo} alt="html5-logo" />
              </span>
              <span className="image js">
                <img src={javascribtLogo} alt="html5-logo" />
              </span>
              <span className="image react">
                <img src={reactLogo} alt="react-logo" />
              </span>
              <span className="image jquery">
                <img src={jqueryLogo} alt="html5-logo" />
              </span>
              <span className="image ts">
                <img src={typescriptLogo} alt="html5-logo" />
              </span>
              <span className="image bootstrap">
                <img src={bootstrapLogo} alt="html5-logo" />
              </span>
              <span className="image redux">
                <img src={reduxLogo} alt="html5-logo" />
              </span>
              <span className="image nodejs">
                <img src={nodejsLogo} alt="html5-logo" />
              </span>
              <span className="image express">
                <img src={expressLogo} alt="html5-logo" />
              </span>
              <span className="image mysql">
                <img src={mysqlLogo} alt="html5-logo" />
              </span>
              <span className="image mongo">
                <img src={mongodbLogo} alt="html5-logo" />
              </span>
            </div>
            <div className={`imgs tools ${techsActive ? "" : "active"}`}>
              <span className="image vscode">
                <img src={vscodeLogo} alt="" />
              </span>
              <span className="image visual">
                <img src={visualstudioLogo} alt="" />
              </span>
              <span className="image git">
                <img src={gitLogo} alt="" />
              </span>
              <span className="image github">
                <img src={githubLogo} alt="" />
              </span>
              <span className="image cli">
                <img src={cliLogo} alt="" />
              </span>
              <span className="image ajax">
                <img src={ajaxLogo} alt="" />
              </span>
              <span className="image sublime">
                <img src={sublimeLogo} alt="" />
              </span>
              <span className="image webstorm">
                <img src={webstormLogo} alt="" />
              </span>
              <span className="image postman">
                <img src={postmanLogo} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
