import React from 'react';
import { Modal } from 'antd';
import MyIcon from '../assets/images/Question.svg'; 
import { StyledModal } from '../common/styledComponents';
const DeleteConfirmationModal = ({ visible, handleConfirmDelete, handleCancelDelete }) => {
  return (
    <StyledModal
    title={
      <div style={{display:'flex',alignItems:'center',backgroundColor:'#eeeff3'}}>
        <img src={MyIcon} alt="Image" width={18} height={18}/>
        <span style={{marginLeft:'4px'}}>Are you sure you want to delete this project?</span>
      </div>
    }
      visible={visible}
      onCancel={handleCancelDelete}
      onOk={handleConfirmDelete}
      icon={<img src={MyIcon} alt="Delete Icon" />}
      cancelText="No"
      okText="Yes"

    >
      <p style={{marginLeft:'18px',color:'#87888a'}}>
      This action can't be undone</p>
    </StyledModal>
  );
};

export default DeleteConfirmationModal;
