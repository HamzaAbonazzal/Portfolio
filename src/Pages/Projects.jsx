


//////////////////

import React, { useState } from "react";
// import "./styles/pages/projects.scss";
import "./../styles/pages/projects.scss";
import Heading from "./../components/Heading";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Projects() {
// const [key, setKey] = useState(0);
  const { t, i18n } = useTranslation();
    // useEffect(() => {
    //   i18n.on('languageChanged', () => {
    //     setKey(prevKey => prevKey + 1); // تغيير المفتاح يجبر إعادة التصيير
    //   });
    //   return () => i18n.off('languageChanged');
    // }, [i18n]);
  const slides = [
    {
      title: t("projects.proj1.head"),
      content: t("projects.proj1.content"),
      images: [
        "/websites/page1-1.png",
        "/websites/page1-2.png",
        "/websites/kasper.png",
      ],
      links: [
        "https://hamzaabonazzal.github.io/Leon-template/",
        "https://hamzaabonazzal.github.io/Kasper-template/",
        "https://hamzaabonazzal.github.io/Technology-template/",
      ],
    },
    {
      title: t("projects.proj2.head"),
      content: t("projects.proj2.content"),
      images: [
        "/websites/date.png",
        "/websites/calculator.png",
        "/websites/to-do.png",
      ],
      links: [
        "https://hamzaabonazzal.github.io/Calculator/",
        "https://hamzaabonazzal.github.io/Digital-clock/",
        "https://hamzaabonazzal.github.io/to-do-app/",
      ],
    },
    {
      title: t("projects.proj3.head"),
      content: t("projects.proj3.content"),
      images: [
        "/websites/unit-converter2.png",
        "/websites/page3-2.png",
        "/websites/page3-3.png",
      ],
      links: [
        "https://hamzaabonazzal.github.io/fake-chat-app/",
        "https://hamzaabonazzal.github.io/unit-converter/",
        "https://hamzaabonazzal.github.io/Basic-E-Commerce/",
      ],
    },
    {
      title: t("projects.proj4.head"),
      content: t("projects.proj4.content"),
      images: [
        "/websites/bondi4.png",
        "/websites/bondi1.png",
        "/websites/bondi2.png",
      ],
      links: [
        "https://hamzaabonazzal.github.io/bootstrap-design/",
      ],
    },
    {
      title: t("projects.proj5.head"),
      content: t("projects.proj5.content"),
      images: [
        "/websites/react4.png",
        "/websites/react1.png",
        "/websites/react2.png",
      ],
      links: [
        "https://hamzaabonazzal.github.io/cart-app/",
        "https://hamzaabonazzal.github.io/E-commerce/",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (direction) => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => {
        if (direction === "next") return (prev + 1) % slides.length;
        if (direction === "prev")
          return (prev - 1 + slides.length) % slides.length;
        return prev;
      });
      setFade(true);
    }, 300);
  };

  return (
    <div className="projects">
      <Heading text={t("header.projects")} />
      <div className="wrapper">
        <button onClick={() => changeSlide("prev")} className="arrow left">
          ←
        </button>

        <div className={`container ${fade ? "fade-in" : "fade-out"}`}>
          <div className="images-wrapper">
            <div className="left-images">
              <img
                src={slides[current].images[1]}
                alt="small1"
                className="image-small"
              />
              <img
                src={slides[current].images[2]}
                alt="small2"
                className="image-small"
              />
            </div>
            <div className="big-wrapper">
              <img
                src={slides[current].images[0]}
                alt="big"
                className="image-big"
              />
            </div>
          </div>

          <div className="text-box">
            <h3 className="title">{slides[current].title}</h3>
            <p className="text">{slides[current].content}</p>
            <a href={slides[current].links[0]} className="btn" target="_blank">
              {t("projects.proj1.pro1")}
            </a>
            {slides[current].links[1] && (
              <a
                href={slides[current].links[1]}
                className="btn"
                target="_blank"
              >
                {t("projects.proj1.pro2")}
              </a>
            )}
            {slides[current].links[2] && (
              <a
                href={slides[current].links[2]}
                className="btn"
                target="_blank"
              >
                {t("projects.proj1.pro3")}
              </a>
            )}
          </div>
        </div>

        <button onClick={() => changeSlide("next")} className="arrow right">
          →
        </button>
      </div>
    </div>
  );
}
