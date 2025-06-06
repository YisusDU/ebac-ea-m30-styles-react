import React from "react";
import XIcon from "../../../assets/IMG/x-solid.svg";
import { ModalHistoryContainer } from "./styles";



const ModalHistory = () => {
  return (
    <ModalHistoryContainer
      className="table__modal--history hiddeModal"
      role="dialog"
      aria-modal="true"
    >
      <i className="tableHistory__closeModal">
        <img src={XIcon} alt="close--modal" />
      </i>
      <h3 className="tableModal__title">Historial de envío</h3>
      <section className="tableModal__container">
        <table className="tableHistory__currentGuide">
          <thead className="tableHistory__currentGuide--header">
            <tr className="tableHistory__modalUptade--row">
              <th className="tableHistory__table--modal">Número de guía</th>
              <th className="tableHistory__table--modal">Estado actual</th>
              <th className="tableHistory__table--modal">Origen</th>
              <th className="tableHistory__table--modal">Destino</th>
              <th className="tableHistory__table--modal">Destinatario</th>
              <th className="tableHistory__table--modal">
                Fecha de la última actualización.
              </th>
              <th className="tableHistory__table--modal">
                Hora de actualización
              </th>
            </tr>
          </thead>
          <tbody className="tableHistory__currentGuide--body">
            {/* <!--Elementos generados dinámicamente--> */}
          </tbody>
        </table>
      </section>
    </ModalHistoryContainer>
  );
};

export default ModalHistory;
