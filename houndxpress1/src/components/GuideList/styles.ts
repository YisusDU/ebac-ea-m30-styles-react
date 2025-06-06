import styled from "styled-components";
import {
  box,
  colorBg,
  flex,
  hover,
  active,
  secondaryColor,
  primaryColor,
  cursorGrab,
  cursorGrabbing,
} from "../../theme/mixins";

const sizesMedia = {
  xl: "69rem", //1104px
  lg: "61rem", //976px
  xmd: "52.5rem", //840px
  md: "48rem", //768px
  sm: "44rem", //704px
  xsm: "33rem", //528px
};

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

  //Responsive styles

  @media screen and (max-width: ${sizesMedia.xmd}) {
    .list__tableContainer {
      overflow-x: scroll;
      ${cursorGrab()};
      ${cursorGrabbing()};
    }
  }

  @media screen and (prefers-color-scheme: dark) {
    color: #fff;
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
