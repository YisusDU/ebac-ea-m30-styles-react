import { css } from "styled-components";

const secondaryColor = (props: any) => props.theme.colors.secondaryColor;
const primaryColor = (props: any) => props.theme.colors.primaryColor;

//mixins
const flex = (
  direction: string = "row",
  align: string = "center",
  justify: string = "center"
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

//Box model
const box = (
  width: string = "100%",
  margin: string = "0 auto",
  padding: string = "1.25rem"
) => css`
  width: ${width};
  margin: ${margin};
  padding: ${padding};
  box-sizing: border-box;
`;

//BG color primario
const colorBg = (
  color: string = "#fff",
  bg: string | ((props: any) => string) = primaryColor
) => css`
  color: ${color};
  background-color: ${typeof bg === "function" ? bg : bg};
`;

//Mixin de hover
const hover = (bgColor: string |  ((props: any) => string) = primaryColor)  => css`
  @media (hover: hover) and (pointer: fine) {
    & {
      transition: 0.4s ease-in-out;
    }

    &:hover {
      background-color: ${typeof bgColor === "function" ? bgColor : bgColor};
      cursor: pointer;
    }
  }
`;

//mixin de active button effect
const active = () => css`
  & {
    transition: 0.1s ease-in-out;
  }

  &:active {
    transform: scale(0.95);
  }
`;

//Mixin de cursor not allowed
const cursorNotAllowed = () => css`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: not-allowed;
    }
  }
`;

//Mixin de cursor grab
const cursorGrab = () => css`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: grab;
    }
  }
`;

//Mixin de cursor grabbing
const cursorGrabbing = () => css`
  @media (hover: hover) and (pointer: fine) {
    &:active {
      cursor: grabbing;
    }
  }
`;

//Extend de modales
const modalStyle = () => css`
  ${flex("column", "center", "space-evenly")};
  ${box("80dvw", "0 auto", "1rem")};
  ${colorBg("#fff", secondaryColor)}
  transition: all .1s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  .tableModal__container {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100dvw;
    height: 100dvh;
    background-color: rgb(0 0 0 / 8%);
    z-index: -1;
  }

  div:nth-of-type(1) {
    ${flex("row", "center", "flex-start")};
    ${box("100%", "0 auto", "0rem")};

    img {
      width: 1.4rem;
      background-color: ${primaryColor};
      ${active()};
      ${hover(primaryColor)};
      padding: 5px;
    }
  }

  table {
    width: 100%;
    text-align: center;

    th {
      background-color: $primaryColor;
    }

    td {
      border: 2px solid #fff;
    }

    th,
    td {
      padding: clamp(1px, 2px, 5px);
      font-size: clamp(0.8rem, 1rem, 1.3rem);
    }
  }
`;

export {
    flex,
    box,
    colorBg,
    hover,
    active,
    cursorNotAllowed,
    cursorGrab,
    cursorGrabbing,
    modalStyle
}
