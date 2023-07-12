import React from 'react';
import { Modal } from 'antd';
import MyIcon from '../assets/images/Question.svg'; 

const DeleteConfirmationModal = ({ visible, handleConfirmDelete, handleCancelDelete }) => {
  return (
    <Modal
      title="Confirm Delete"
      visible={visible}
      onCancel={handleCancelDelete}
      onOk={handleConfirmDelete}
      icon={<img src={MyIcon} alt="Delete Icon" />}
    >
      <p>Are you sure you want to delete this project?<br/>
      This action can't be undone</p>
    </Modal>
  );
};

export default DeleteConfirmationModal;
