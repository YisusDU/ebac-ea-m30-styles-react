import React from "react";
import XIcon from "../../../../assets/IMG/x-solid.svg"
import { UpdateTableContainer } from "./styles"

const UpdateTable = () => {
  return (
    <UpdateTableContainer>
      <i className="table__closeModal">
        <img src={XIcon} alt="close--modal" />
      </i>
      <h3 className="tableModal__title">Actualizar estado del envío</h3>
      <div className="tableModal__container">
        <table className="table__currentGuide">
          <thead className="table__currentGuide--header">
            <tr className="table__modalUptade--row">
              <th className="guide__table--modal">Número de guía</th>
              <th className="guide__table--modal">Estado actual</th>
              <th className="guide__table--modal">Origen</th>
              <th className="guide__table--modal">Destino</th>
              <th className="guide__table--modal">Destinatario</th>
              <th className="guide__table--modal">
                Fecha de la última actualización.
              </th>
              <th className="guide__table--modal">Hora de actualización</th>
            </tr>
          </thead>
          <tbody className="table__currentGuide--body">
            {/* <!--Elementos generados dinámicamente--> */}
          </tbody>
        </table>
      </div>
    </UpdateTableContainer>
  );
};

export default UpdateTable;
