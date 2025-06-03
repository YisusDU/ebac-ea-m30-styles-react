import React, { useState, useEffect } from "react";
import logoHeader from "../../assets/IMG/M6-imagotipo-Hound_Express/logo-Hound_Express-bg-white.png";
import buttonShow from "../../assets/IMG/bars-solid.svg";
import buttonHidde from "../../assets/IMG/x-solid.svg";
import {
  HeaderContainer,
  HeaderBottom,
  HeaderNav,
  HeaderIcons,
  HeaderLinksContainer,
} from "./styles";

const Header = () => {
  /* ------------Banner */
  // State to manage the visibility of the menu
  const [openMenu, setOpenMenu] = useState(false);

  //function to change display of menu to fixed or relative
  const [menuDisplay, setMenuDisplay] = useState(false);

  //Function to listen the scroll event and change the display of the menu
  useEffect(() => {
    const changeDisplay = () => {
      if (window.scrollY > 165) {
        setMenuDisplay(true);
      } else {
        setMenuDisplay(false);
      }
    };
    window.addEventListener("scroll", changeDisplay);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", changeDisplay);
  }, []);

  return (
    <HeaderContainer
      className={`header ${menuDisplay ? "fixed" : ""}`}
      id="start"
    >
      <section className="header__top">
        <a href="index.html">
          <img
            className="header__logo"
            src={logoHeader}
            alt="imagotipo-Hound_Express"
          />
        </a>
      </section>
      <HeaderBottom className="header__bottom">
        <HeaderNav className="header__nav">
          <HeaderIcons className={`header__show ${openMenu ? "hidde" : ""}`}>
            <img
              className="header__menuButton--show"
              src={buttonShow}
              alt="menu-icon"
              onClick={() => setOpenMenu(true)}
            />
            <img
              className="header__menuButton--hidde hidde"
              src={buttonHidde}
              alt="x-icon"
              onClick={() => setOpenMenu(false)}
            />
          </HeaderIcons>
          <HeaderLinksContainer
            className={`header__linksContainer ${openMenu ? "" : "hidde"}`}
          >
            <a className="header__link" href="index.html">
              Inicio
            </a>
            <a className="header__link" href="#guide__register">
              Registro de Guías
            </a>
            <a className="header__link" href="#general__state">
              Estado General
            </a>
            <a className="header__link" href="#guide__list">
              Lista de Guías
            </a>
            <a className="header__link" href="#">
              🔍 Buscar Guías
            </a>
            <a className="header__link" href="#">
              Historial de Guías
            </a>
            <div className="header__lineDecorative"></div>
          </HeaderLinksContainer>
        </HeaderNav>
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
