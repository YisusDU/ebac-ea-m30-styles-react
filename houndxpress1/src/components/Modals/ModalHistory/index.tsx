import React, { useEffect } from "react";
import XIcon from "../../../assets/IMG/x-solid.svg";
import Paw from "../../../assets/IMG/paw-solid.svg";
import { Guide } from "../../GuideReguister/types";
import {
  ModalHistoryContainer,
  ModalHistoryPath,
  ModalPathContent,
  ModalSVGContainer,
} from "./styles";

interface ModalProp {
  modalData: string;
  guides: Guide[];
}

const ModalHistory = ({ modalData, guides }: ModalProp) => {
  useEffect(() => {
    //Get the index of the current guide
  }, [guides, modalData]);

  const guideIndex = guides.findIndex(
    (guide) => guide.guide__number === modalData
  );

  const currentGuide = guides[guideIndex];

  const printGuideData = () => {
    console.log("guideData", guides[guideIndex]);
  };

  return (
    <ModalHistoryContainer
      className="table__modal--history hiddeModa"
      role="dialog"
      aria-modal="true"
    >
      <i className="tableHistory__closeModal">
        <img src={XIcon} alt="close--modal" onClick={printGuideData} />
      </i>
      <h3 className="tableModal__title">Historial de envío</h3>
      <section className="tableModal__container">
        {/* Current info into a table */}
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
                    currentGuide.guide__stage[
                      currentGuide.guide__stage.length - 1
                    ]?.guide__status
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
        <section>
          {/* Dinamics paths of following  */}
          {guideIndex !== -1 && currentGuide.guide__stage.length > 0 ? (
            <>
              {currentGuide.guide__stage.map((stage, idx) => (
                <ModalHistoryPath key={idx}>
                  <ModalSVGContainer>
                    <img src={Paw} alt="paw-icon" />
                  </ModalSVGContainer>
                  <ModalPathContent>
                    <h3
                      className={
                        stage.guide__status === "Pendiente"
                          ? "status--pending"
                          : stage.guide__status === "En tránsito"
                          ? "status--transit"
                          : stage.guide__status === "Entregado"
                          ? "status--delivered"
                          : ""
                      }
                    >
                      {stage.guide__status}
                    </h3>
                    <div>
                      <span>{`${stage.guide__date} , ${stage.guide__hour} | `}</span>
                      <span>
                        {stage.guide__status === "Pendiente" &&
                          "Tu envío está en preparación"}
                        {stage.guide__status === "En tránsito" &&
                          "Tu envío está en camino"}
                        {stage.guide__status === "Entregado" &&
                          "¡Tu envío fue entregado!"}
                      </span>
                    </div>
                    <hr />
                  </ModalPathContent>
                </ModalHistoryPath>
              ))}
            </>
          ) : (
            <p>No hay valores para mostrar</p>
          )}
        </section>
      </section>
    </ModalHistoryContainer>
  );
};

export default ModalHistory;
