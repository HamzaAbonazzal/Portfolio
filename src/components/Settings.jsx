import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/components/settings.scss";
import {
  faCog,
  faLanguage,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../Pages/languageSwitcher";
import { useTranslation } from "react-i18next";
import { scrollToEle } from "./scrollToEle";

function Settings() {
  const [isVisible, setIsVisible] = useState(true);
  const [langVisible, setLangVisible] = useState(true);
  const [isRotate, setIsRotate] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header-container");
    const a = document.querySelectorAll("a");
    const landing = document.querySelector(".landing");
    const h1 = document.querySelector("h1");
    const darkClass = "Dark";
    if (isDark) {
      body.classList.add(darkClass);
      header.classList.add(darkClass);
      header.classList.remove("light");
      for (let i = 0; i < a.length; i++) {
        a[i].classList.add("a-dark");
      }
      landing.classList.add(darkClass);
      h1.classList.add("a-dark");
      // faBar.style.color = "green";
    } else {
      body.classList.remove(darkClass);
      header.classList.remove(darkClass);
      header.classList.add("light");
      for (let i = 0; i < a.length; i++) {
        a[i].classList.remove("a-dark");
      }
      landing.classList.remove(darkClass);
      h1.classList.remove("a-dark");
      // faBar.style.color = "yellow";
    }
  });

  const toggleLangVisibility = () => {
    setLangVisible(!langVisible);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleRotate = () => {
    setIsRotate(isRotate);
  };

  const handleClick = () => {
    toggleVisibility();
    toggleRotate();
  };

  const handleDark = () => {
    setIsDark(!isDark);
  };


  return (
    <div
      className={`new-settings ${isRotate ? "" : "rotate"}`}
    >
      <ul className={`${isVisible ? "show" : "hide"} sett-ele`}>
        <p className="close">اغلاق</p>
        <li
          className={`top`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          ^
          <p className="after">{t("settings.top")}</p>
        </li>
        <li className={`lang`}>
          <FontAwesomeIcon icon={faLanguage} onClick={toggleLangVisibility} />
          <p className="after">{t("settings.lang")}</p>
        </li>
        <li className={`dark `} style={{backgroundColor: "transparent"}}>
          {isDark ? <FontAwesomeIcon icon={faSun} onClick={handleDark} />: <FontAwesomeIcon icon={faMoon} onClick={handleDark} /> }
        <p className="after">{t("settings.dark")}</p>
        </li>
        <li
          className={`top bottom`}
          onClick={() => {
            scrollToEle("footer");
          }}
        >
          ^
          <p className="after">{t("settings.bottom")}</p>
        </li>
        <ul className={`${langVisible ? "show" : "hide"}  lang-visible`}>
          <LanguageSwitcher />
        </ul>
      </ul>
      {!isVisible ? (
        <FontAwesomeIcon
          className={`sett ${isRotate ? "rotated" : "not-rotate"}`}
          icon={faCog}
          onClick={handleClick}
        />
      ) : (
        <FontAwesomeIcon
          className={`sett ${isRotate ? "not-rotate" : "rotate"}`}
          icon={faXmark}
          onClick={handleClick}
        />
      )}
      
    </div>
  );
}

export default Settings;
