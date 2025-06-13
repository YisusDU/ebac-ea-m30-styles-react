import React, { useEffect } from "react";
import XIcon from "../../../assets/IMG/x-solid.svg";
import { Guide } from "../../GuideReguister/types";
import HistoryTable from "./HistoryTable";
import HistoryPath from "./HistoryPath";
import {
  ModalHistoryContainer,
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
        <HistoryTable guideIndex={guideIndex} currentGuide={currentGuide} />
        <HistoryPath guideIndex={guideIndex} currentGuide={currentGuide} />
      </section>
    </ModalHistoryContainer>
  );
};

export default ModalHistory;
