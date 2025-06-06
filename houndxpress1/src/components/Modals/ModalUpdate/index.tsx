import React from "react";
import { ModalUpdateContainer } from "./styles"
import UpdateTable from "./UpdateTable";
import UpdateForm from "./UpdateForm";

const ModalUpdate = () => {
  return (
    <ModalUpdateContainer className="hiddeModal">
      <UpdateTable />
      <UpdateForm />
    </ModalUpdateContainer>
  );
};

export default ModalUpdate
