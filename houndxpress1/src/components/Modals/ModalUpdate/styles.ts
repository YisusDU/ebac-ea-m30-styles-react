import styled from "styled-components";
import { flex, modalStyle } from "../../../theme/mixins";

const ModalUpdateContainer = styled.section`
${modalStyle()};
  ${flex("column", "center", "center")};
  width: auto;
  padding: 0;

  &.hiddeModal {
    scale: 0;
  }
`;

export { ModalUpdateContainer };
