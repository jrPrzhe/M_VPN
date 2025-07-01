import React, { useState, useEffect } from "react";
import Link from "next/link";
// Импорт для навигации
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  // Активация навбара при скролле
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {/* Десктопная версия */}
     <header style={{ backgroundColor: "white" }} className="fixed top-0 w-full z-30 shadow-md transition-all">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          {/* Логотип */}
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-14 w-auto" />
          </div>

          {/* Навигационное меню */}
          <ul className="hidden lg:flex col-start-4 col-end-8 text-gray-700 items-center space-x-6">
  <LinkScroll
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    duration={500}
    onSetActive={() => setActiveLink("about")}
    className={
      "px-3 py-2 cursor-pointer hover:text-orange-500 transition-colors " +
      (activeLink === "about" ? "text-orange-500 font-medium" : "")
    }
  >
    О нас
  </LinkScroll>
  <LinkScroll
    activeClass="active"
    to="feature"
    spy={true}
    smooth={true}
    duration={500}
    onSetActive={() => setActiveLink("protocols")}
    className={
      "px-3 py-2 cursor-pointer hover:text-orange-500 transition-colors " +
      (activeLink === "protocols" ? "text-orange-500 font-medium" : "")
    }
  >
    Протоколы
  </LinkScroll>
  <LinkScroll
    activeClass="active"
    to="pricing"
    spy={true}
    smooth={true}
    duration={500}
    onSetActive={() => setActiveLink("pricing")}
    className={
      "px-3 py-2 cursor-pointer hover:text-orange-500 transition-colors " +
      (activeLink === "pricing" ? "text-orange-500 font-medium" : "")
    }
  >
    Тарифы
  </LinkScroll>
  <LinkScroll
    activeClass="active"
    to="testimoni"
    spy={true}
    smooth={true}
    duration={500}
    onSetActive={() => setActiveLink("testimoni")}
    className={
      "px-3 py-2 cursor-pointer hover:text-orange-500 transition-colors " +
      (activeLink === "testimoni" ? "text-orange-500 font-medium" : "")
    }
  >
    Отзывы
  </LinkScroll>
</ul>
          {/* Кнопки входа / регистрации */}
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center space-x-4">
            <Link href="/login">
              <a className="text-gray-700 hover:text-orange-500 transition-colors">Войти</a>
            </Link>
            <ButtonOutline>Регистрация</ButtonOutline>
          </div>
        </nav>
      </header>

      {/* Мобильное меню */}
    {/* Mobile Navigation */}
<nav
  className="fixed lg:hidden bottom-0 left-0 right-0 z-50 px-4 sm:px-8 shadow-t"
  style={{ backgroundColor: "#fff" }}
>
  <div className="flex justify-between items-center h-16">
    <LinkScroll
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("about")}
      className={`flex flex-col items-center justify-center px-3 py-1 flex-1 text-xs ${
        activeLink === "about"
          ? "text-orange-500 border-t-2 border-orange-500"
          : "text-gray-600"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>О нас</span>
    </LinkScroll>

    <LinkScroll
      activeClass="active"
      to="feature"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("protocols")}
      className={`flex flex-col items-center justify-center px-3 py-1 flex-1 text-xs ${
        activeLink === "protocols"
          ? "text-orange-500 border-t-2 border-orange-500"
          : "text-gray-600"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span>Протоколы</span>
    </LinkScroll>

    <LinkScroll
      activeClass="active"
      to="pricing"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("pricing")}
      className={`flex flex-col items-center justify-center px-3 py-1 flex-1 text-xs ${
        activeLink === "pricing"
          ? "text-orange-500 border-t-2 border-orange-500"
          : "text-gray-600"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Тарифы</span>
    </LinkScroll>

    <LinkScroll
      activeClass="active"
      to="testimoni"
      spy={true}
      smooth={true}
      duration={500}
      onSetActive={() => setActiveLink("testimoni")}
      className={`flex flex-col items-center justify-center px-3 py-1 flex-1 text-xs ${
        activeLink === "testimoni"
          ? "text-orange-500 border-t-2 border-orange-500"
          : "text-gray-600"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
      <span>Отзывы</span>
    </LinkScroll>
  </div>
</nav>
    </>
  );
};

export default Header;