import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/pages/skills.scss";
import { useTranslation } from "react-i18next";
import {
  faChartLine,
  faClock,
  faCode,
  faComments,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "../components/Heading";

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills" id="skills">
      <div className="container">
        <Heading text={t("skills.skills")}/>
        <div className="container-parts">
          <div className="inner-skills">
            <div className="skill">
              <FontAwesomeIcon icon={faCode} />
              <p>{t("skills.clean")}</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faWrench} />
              <p>{t("skills.problem")}</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faUsers} />
              <p>{t("skills.team")}</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faClock} />
              <p>{t("skills.time")}</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faComments} />
              <p>{t("skills.effect")}</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faChartLine} />
              <p>{t("skills.learn")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
