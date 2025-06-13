import React from "react";
import { Guide } from "../../../GuideReguister/types";

 export interface HistoryGuide {
    guideIndex: number,
    currentGuide: Guide | undefined,
}

const HistoryTable = ({guideIndex, currentGuide}: HistoryGuide) => {
  return (
    <table className="tableHistory__currentGuide">
      <thead className="tableHistory__currentGuide--header">
        <tr className="tableHistory__modalUptade--row">
          <th className="tableHistory__table--modal">Número de guía</th>
          <th className="tableHistory__table--modal">Estado actual</th>
          <th className="tableHistory__table--modal">Origen</th>
          <th className="tableHistory__table--modal">Destino</th>
          <th className="tableHistory__table--modal">Destinatario</th>
        </tr>
      </thead>
      <tbody className="tableHistory__currentGuide--body">
        {guideIndex && currentGuide ? (
          <tr>
            <td>{currentGuide.guide__number}</td>
            <td>
              {
                currentGuide.guide__stage[currentGuide.guide__stage.length - 1]
                  ?.guide__status
              }
            </td>
            <td>{currentGuide.guide__origin}</td>
            <td>{currentGuide.guide__destination}</td>
            <td>{currentGuide.guide__recipient}</td>
          </tr>
        ) : (
          <td>No hay valores para mostrar</td>
        )}
      </tbody>
    </table>
  );
};

export default HistoryTable;

