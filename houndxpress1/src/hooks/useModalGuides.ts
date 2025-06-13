import { ModalGuidesProps } from "../components/Modals/ModalHistory";

const useModalGuides = ({
  guides,
  modalData,
  setModalData,
  setIsOpenModal,
}: ModalGuidesProps) => {
  const guideIndex = guides.findIndex(
    (guide) => String(guide.guide__number.trim()) === String(modalData.trim())
  );

  const currentGuide = guides[guideIndex];

  const cleanGuideData = () => {
    setModalData("");
    setIsOpenModal("");
  };
  return { guideIndex, currentGuide, cleanGuideData };
};

export { useModalGuides };
