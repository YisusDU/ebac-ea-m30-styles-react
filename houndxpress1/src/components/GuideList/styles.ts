import styled from "styled-components";
import { box, colorBg, flex, hover, active } from "../../theme/mixins";
import { primaryColor, secondaryColor } from "../../theme/mixins";

const GuideListContainer = styled.article`
  ${box("100%", "0 auto", "1.25rem")};
  ${colorBg(primaryColor, "transparent")};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.2rem;

  .list__title {
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: clamp(1.2rem, 1.7rem, 2rem);
  }
`;

const GuideTable = styled.table`
  width: 100%;
  border-spacing: 2px;
  border-collapse: separate;
`;

const TableHeader = styled.thead`
  ${colorBg()};
  font-size: clamp(0.9rem, 1.2rem, 1.5rem);
  font-weight: bold;
  margin: 0;
  padding: 0.625rem;

  .table__header--row {
    vertical-align: middle;
  }

  th {
    font-size: clamp(0.9rem, 1.2rem, 1.5rem);
    vertical-align: middle;
    padding: 10px;
  }
`;

const TableData = styled.td`
  border: 0.125rem solid $secondaryColor;
`;

const TableButtonsContainer = styled.td`
  ${flex("column", "center", "center")};
  ${box()}
  color: ${primaryColor};
  text-align: center;
  gap: 1.5rem;

  .guide__button {
    ${colorBg()};
    width: fit-content;
    border: none;
    padding: 0.3125rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-wrap: nowrap;
    ${hover(secondaryColor)};
    ${active()};
  }
`;

export {
  GuideListContainer,
  GuideTable,
  TableHeader,
  TableData,
  TableButtonsContainer,
};
