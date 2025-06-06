import styled from "styled-components";
import { modalStyle } from "../../../../theme/mixins";

const UpdateTableContainer = styled.section`
  ${modalStyle()};
  position: relative;
  transform: translate(0);
  top: 0;
  left: 0;

  &::after {
    display: none;
  }
`;

export { UpdateTableContainer };
