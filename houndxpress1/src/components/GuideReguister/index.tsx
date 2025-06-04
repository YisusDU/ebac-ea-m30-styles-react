import React from "react";
import Paws from "../../assets/IMG/paw-solid.svg"
import {
  GuideRegisterContainer,
  GuideContainer,
  GuideForm,
  GuideSubmit,
  GuideAnimation,
} from "./styles";

const GuideRegister = () => {
  return (
    <GuideRegisterContainer className="guide__register" id="guide__register">
      {/* <!--Formulario--> */}
      <GuideContainer className="guide__container">
        <h2 className="guide__title">Registro de guías</h2>
        <GuideForm className="guide__form" action="#">
          <label className="guide__form--label" htmlFor="guide__number">
            Número de guía:
          </label>
          <input
            className="guide__form--input"
            id="guide__number"
            name="guide__number"
            type="text"
            inputMode="numeric"
            pattern="\d{1,8}"
            maxLength={8}
            placeholder="Número de guía:"
            title="Añade un número de guía de máximo 8 caracteres"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__origin">
            Origen:
          </label>
          <input
            className="guide__form--input"
            id="guide__origin"
            name="guide__origin"
            type="text"
            maxLength={30}
            placeholder="Origen:"
            title="Añade la ciudad de origen"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__destination">
            Destino:
          </label>
          <input
            className="guide__form--input"
            id="guide__destination"
            name="guide__destination"
            type="text"
            maxLength={30}
            placeholder="Destino:"
            title="Añade la ciudad de destino"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__recipient">
            Destinatario:
          </label>
          <input
            className="guide__form--input"
            id="guide__recipient"
            name="guide__recipient"
            type="text"
            maxLength={30}
            placeholder="Destinatario:"
            title="Añade el nombre y apellido del destinatario"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__date">
            Fecha de creación:
          </label>
          <input
            className="guide__form--input"
            id="guide__date"
            name="guide__date"
            type="date"
            placeholder="Fecha de creación:"
            title="Añade la fecha de creación en el formato que se indica"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__hour">
            Hora de creación:
          </label>
          <input
            className="guide__form--input"
            id="guide__time"
            name="guide__hour"
            type="time"
            placeholder="Hora de creación:"
            title="Añade la hora de creación"
          />
          <span className="error-message"></span>

          <label className="guide__form--label" htmlFor="guide__status">
            Estado inicial:
          </label>
          <select
            className="guide__form--select guide__form--input"
            id="guide__status"
            name="guide__status"
            title="Selecciona el estado inicial del envío"
          >
            <option className="guide__form--option " value="">
              Estado inicial:
            </option>
            <option className="guide__form--option" value="Pendiente">
              Pendiente 📦
            </option>
            <option className="guide__form--option" value="En tránsito">
              En tránsito 🚚
            </option>
            <option className="guide__form--option" value="Entregado">
              Entregado ✅
            </option>
          </select>
          <span className="error-message"></span>
          <br />
          <GuideSubmit className="guide__form--submit" type="submit">
            Enviar
          </GuideSubmit>
        </GuideForm>
      </GuideContainer>

      {/* <!--Animacion--> */}
      <GuideAnimation className="guide__animation">
        <img
          className="guide__svg guide__svg--left"
          src={Paws}
          alt="paw-svg"
        />
        <img
          className="guide__svg guide__svg--right"
          src={Paws}
          alt="paw-svg"
        />
        <img
          className="guide__svg guide__svg--left"
          src={Paws}
          alt="paw-svg"
        />
        <img
          className="guide__svg guide__svg--right"
          src={Paws}
          alt="paw-svg"
        />
        <img
          className="guide__svg guide__svg--left"
          src={Paws}
          alt="paw-svg"
        />
      </GuideAnimation>
    </GuideRegisterContainer>
  );
};

export default GuideRegister;
