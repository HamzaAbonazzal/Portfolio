import { useTranslation } from "react-i18next";
import "./../styles/pages/languageSwitch.scss"


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.setAttribute("lang", lng);
    // document.querySelector(".about").dir = lng === "ar" ? "rtl" : "ltr"; // تغيير اتجاه النص
  };

  return (
    <div className="btns-lang" >
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("ar")}>العربية</button>
      {/* <li className={`${isDark ? "Dark" : "light"}`}>En</li>
          <li className={`${isDark ? "Dark" : "light"}`}>Ar</li> */}
    </div>
  );
};

export default LanguageSwitcher;