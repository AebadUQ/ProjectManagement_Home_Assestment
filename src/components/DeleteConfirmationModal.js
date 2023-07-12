import React from 'react';
import { Modal } from 'antd';

const DeleteConfirmationModal = ({ visible, handleConfirmDelete, handleCancelDelete }) => {
  return (
    <Modal
      title="Confirm Delete"
      visible={visible}
      onOk={handleConfirmDelete}
      onCancel={handleCancelDelete}
    >
      <p>Are you sure you want to delete this item?</p>
    </Modal>
  );
};

export default DeleteConfirmationModal;
