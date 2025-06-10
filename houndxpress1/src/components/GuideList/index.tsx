import React, { useRef, useEffect } from "react";
import {
  GuideListContainer,
  GuideTable,
  TableHeader,
  TableData,
  TableButtonsContainer,
} from "./styles";
import useDraggTable from "../../hooks/useDraggTable";

//Types of the props
interface Guide {
  guide__number: string;
  guide__origin: string;
  guide__destination: string;
  guide__recipient: string;
  guide__stage: GuideStage[];
}

interface GuideStage {
  guide__date: string;
  guide__status: string;
  guide__hour: string;
}

interface GuideListProps {
  guides: Guide[];
  setGuides: React.Dispatch<React.SetStateAction<Guide[]>>;
}

const GuideList = ({ guides, setGuides }: GuideListProps) => {
  //Function to drag the table on scroll event
  const tableRef = useDraggTable();

  /* useEffect(() => {
    const table = tableRef.current;
    let isDown: boolean = false;
    let startX: number = 0;
    let scrollLeft = 0;

    const handleMouseDown = (event: MouseEvent) => {
      event.preventDefault(); // Evita seleccionar texto
      isDown = true;
      if (table) {
        startX = event.pageX - table.offsetLeft;
        scrollLeft = table.scrollLeft;
      }
    };

    const handleMouseUp = (event: MouseEvent) => {
      isDown = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) return;
      if (table) {
        const moveX = event.pageX - table.offsetLeft;
        const walk = (moveX - startX) * 1.5;
        table.scrollLeft = scrollLeft - walk;
      }
    };

    const node = tableRef.current;
    if (node) {
      node.addEventListener("mousedown", handleMouseDown);
      node.addEventListener("mouseup", handleMouseUp);
      node.addEventListener("mouseleave", handleMouseUp);
      node.addEventListener("mousemove", handleMouseMove);
    }

    // Limpieza al desmontar el componente
    return () => {
      if (node) {
        node.addEventListener("mousedown", handleMouseDown);
        node.addEventListener("mouseup", handleMouseUp);
        node.addEventListener("mouseleave", handleMouseUp);
        node.addEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); */
  return (
    /* <!--Lista de guías--> */
    <GuideListContainer className="guide__list" id="guide__list">
      <h2 className="list__title">Lista de guías</h2>
      <section ref={tableRef} className="list__tableContainer">
        <GuideTable className="guide__table" cellPadding={5}>
          <TableHeader className="table__header">
            <tr className="table__header--row">
              <th className="guide__table--header">Número de guía</th>
              <th className="guide__table--header">Estado actual</th>
              <th className="guide__table--header">Origen</th>
              <th className="guide__table--header">Destino</th>
              <th className="guide__table--header">Destinatario</th>
              <th className="guide__table--header">
                Fecha de la última actualización.
              </th>
              <th className="guide__table--header">Opciones</th>
            </tr>
          </TableHeader>
          <tbody className="table__body">
            {guides.map((g) => (
              <tr className="guide__table--row" key={g.guide__number}>
                <TableData className="guide__table--data">
                  {g.guide__number}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__stage[g.guide__stage.length - 1].guide__status}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__origin}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__destination}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__recipient}
                </TableData>
                <TableData className="guide__table--data">
                  {g.guide__stage[g.guide__stage.length - 1].guide__date}
                </TableData>
                <TableButtonsContainer className="guide__table--data list__buttonsContainer">
                  <button className="guide__button guideButton--seeHistory">
                    Ver Historial
                  </button>
                  <button className="guide__button guide__button--updateState">
                    Actualizar Estado
                  </button>
                </TableButtonsContainer>
              </tr>
            ))}
          </tbody>
        </GuideTable>
      </section>
    </GuideListContainer>
  );
};

export default GuideList;
