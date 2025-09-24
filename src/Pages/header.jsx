import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myimg from "/Logo.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { scrollToEle } from "../components/scrollToEle";

function Header() {
  const [linksVisible, setLinksVisible] = useState(false);
  const [linksRotate, setLinksRotate] = useState(true);

  function handleVisible() {
    setLinksVisible(!linksVisible);
  }

  function handleRotate() {
    setLinksRotate(!linksRotate);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  function handleClick() {
    handleVisible();
    handleRotate();
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 5;
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > scrollThreshold) {
        setIsScrolled(!isScrolled);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const { t } = useTranslation();

  return (
    <header>
      <div className={`header-container  ${isScrolled ? "shadow-header" : ""}`}>
        <div className="mylogo">
          <img src={myimg} alt="" />
        </div>
        <ul className={`links-header ${linksVisible ? "show" : "hide"}`}>
          <li>
            <a onClick={() => scrollToEle("skills")} >{t("header.skills")}</a>
          </li>
          <li>
            <a onClick={() => scrollToEle("about")}>{t("header.about")}</a>
          </li>
          <li>
            <a onClick={() => scrollToEle("technologies")}>{t("header.technologies")}</a>
          </li>
          <li>
            <a onClick={() => scrollToEle("projects")}>{t("header.projects")}</a>
          </li>
          <li>
            <a onClick={() => scrollToEle("contact")}>{t("header.contact")}</a>
          </li>
        </ul>
        <ul className="settings">
          {/* <li>
            <Settings />
          </li> */}
          <li>
            {linksVisible ? (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={handleClick}
                className={linksRotate ? "rotated" : "not-rotated"}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                onClick={handleClick}
                className={linksRotate ? "rotated" : "not-rotated"}
              />
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}



export default Header;
