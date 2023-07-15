import React from "react";
import MyIcon from "../assets/images/Question.svg";
import { Col, Image } from "antd";
import {
  StyledModal,
  ModalButtonYes,
  ModalButtonNo,
  ModalDesc,
  ModalTitle,
  ModalRow,ModalImg
} from "../common/styledComponents";

const DeleteConfirmationModal = ({
  visible,
  handleConfirmDelete,
  handleCancelDelete,
}) => {
  return (
    <StyledModal
      closable={false}
      title={
        <ModalRow
          align={"middle"}
          justify={"start"}
        >
          <Col>
            <ModalImg
              src={MyIcon}
              alt="Image"
              width={22}
              height={22}
              preview={false}
            />
            <ModalTitle>
              Are you sure you want to delete this project?
            </ModalTitle>
          </Col>
        </ModalRow>
      }
      visible={visible}
      onCancel={handleCancelDelete}
      onOk={handleConfirmDelete}
      icon={<Image src={MyIcon} alt="Delete Icon" />}
      cancelText="No"
      okText="Yes"
      footer={[
        <ModalButtonNo key="cancel" onClick={handleCancelDelete}>
          No
        </ModalButtonNo>,
        <ModalButtonYes key="ok" onClick={handleConfirmDelete}>
          Yes
        </ModalButtonYes>,
      ]}
    >
      <ModalDesc>This action can't be undone</ModalDesc>
    </StyledModal>
  );
};

export default DeleteConfirmationModal;
