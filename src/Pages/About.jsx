import Heading from "../components/Heading";
import "./../styles/pages/about.scss";
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="container-parts">
        <Heading text={t("header.about")}/>
            <p className="name">
              {t("about.name")}
            </p>
        <div className="about-inner">
          <div className="short-about">
            <p>
              {t("about.short.first-p")}
            </p>
            <p>{t("about.short.last-p")}  </p>
            <button className="btn"><a style={{color: "white"}} href="/myCv/cv.pdf" download target="blank">Download CV</a></button>
          </div>
          <div className="long-about">
            <div>
            
            <p className="head">* {t("about.long.first-p.head")}</p>
            <p>- {t("about.long.first-p.first-p")}</p>  
            <p>- {t("about.long.first-p.last-p")}  </p>
            <br />
            <p className="head">* {t("about.long.second-p.head")}</p>
            <p>- {t("about.long.second-p.first-p")}</p>
            <p>- {t("about.long.second-p.last-p")}</p>
            <br />
            <p className="head">* {t("about.long.last-p.head")} </p>   
            <p>- {t("about.long.last-p.first-p")}  </p>
            <p>- {t("about.long.last-p.second-p")}</p>
            <p>- {t("about.long.last-p.last-p")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

