import React from "react";
import logoHeader from "../../assets/IMG/M6-imagotipo-Hound_Express/logo-Hound_Express-bg-white.png";
import buttonShow from "../../assets/IMG/bars-solid.svg";
import buttonHidde from "../../assets/IMG/x-solid.svg";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer className="header" id="start">
      <section className="header__top">
        <a href="index.html">
          <img
            className="header__logo"
            src={logoHeader}
            alt="imagotipo-Hound_Express"/>
        </a>
      </section>
      <section className="header__bottom">
        <nav className="header__nav">
            <i className="header__show">
                <img className="header__menuButton--show" src={buttonShow} alt="menu-icon" />
                <img className="header__menuButton--hidde hidde" src={buttonHidde} alt="x-icon" />
            </i>
            <div className="header__linksContainer hidde">
                <a className="header__link" href="index.html">Inicio</a>
                <a className="header__link" href="#guide__register">Registro de Guías</a>
                <a className="header__link" href="#general__state">Estado General</a>
                <a className="header__link" href="#guide__list">Lista de Guías</a>
                <a className="header__link" href="#">🔍 Buscar Guías</a>
                <a className="header__link" href="#">Historial de Guías</a>
                <div className="header__lineDecorative"></div>
            </div>
        </nav>
      </section>
    </HeaderContainer>
  );
};

export default Header;
