import React from "react";
import {
  GeneralStateContainer,
  StateContainer,
  StateElement,
  StateGroup,
  StatePicture,
} from "./styles";

const GeneralState = () => {
  return (
    /* <!--Panel de estado general--> */
    <GeneralStateContainer id="general__state" className="state">
      <StateContainer className="state__container">
        <h2 className="state__title">Estado general</h2>
        <hr />
        <StateElement className="state__element">
          <StateGroup className="state__group">
            <h2 className="state__subject">Número total de guías activas</h2>
            <p className="state__info totalGuidesActive">" 3 "</p>
          </StateGroup>
          <StateGroup className="state__group">
            <h2 className="state__subject">Guías en tránsito</h2>
            <p className="state__info onTransitGuides">" 1 "</p>
          </StateGroup>
          <StateGroup className="state__group">
            <h2 className="state__subject">Guías entregadas</h2>
            <p className="state__info deliveredGuides">" 1 "</p>
          </StateGroup>
        </StateElement>
      </StateContainer>
      <StatePicture className="state__picture">
        <img
          className="state__img"
          src="https://www.hound-express.com/images/Animacion-beneficios-sistema-v2.gif"
          alt="hx__gift"
        />
      </StatePicture>
    </GeneralStateContainer>
  );
};

export default GeneralState;
