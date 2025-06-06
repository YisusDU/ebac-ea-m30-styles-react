import React from "react";
import ModalHistory from "../../ModalHistory";
import {
  ModalUpdateContainer,
  ModalForm,
  ModalSelect,
  ModalInput,
  ModalFormSubmit,
} from "./styles";

const UpdateForm = () => {
  return (
    <ModalUpdateContainer>
      <ModalForm action="#" className="tableModal__form">
        <label className="table__form--label" htmlFor="guide__newStatus">
          Nuevo estado:
        </label>
        <ModalSelect
          className="tableModal__form--select tableModal__input"
          id="guide__newStatus"
          name="guide__status"
          title="Selecciona el estado actuaizado del envío"
        >
          <option className="tableModal__form--option option--1" value="">
            Nuevo estado:
          </option>
          <option
            className="tableModal__form--option option--2"
            value="En tránsito"
          >
            En tránsito 🚚
          </option>
          <option
            className="tableModal__form--option option--3"
            value="Entregado"
          >
            Entregado ✅
          </option>
        </ModalSelect>
        <span className="error-message"></span>

        <label className="table__form--label" htmlFor="guide__newDate">
          Fecha de la última actualización:
        </label>
        <ModalInput
          className="tableModal__form--input tableModal__input"
          id="guide__newDate"
          name="guide__date"
          type="date"
          placeholder="Fecha de creación:"
          title="Añade la fecha de creación en el formato que se indica"
        />
        <span className="error-message"></span>
        <label className="table__form--label" htmlFor="guide__hour">
          Hora de la última actualización:
        </label>
        <ModalInput
          className="tableModal__form--input tableModal__input"
          id="guide__newTime"
          name="guide__hour"
          type="time"
          placeholder="Hora de actualización:"
          title="Añade la hora de la actualización"
        />
        <span className="error-message"></span>
        <br />
        <ModalFormSubmit className="tableModal__form--submit" type="submit">
          Actualizar
        </ModalFormSubmit>
      </ModalForm>
    </ModalUpdateContainer>
  );
};

export default UpdateForm;
