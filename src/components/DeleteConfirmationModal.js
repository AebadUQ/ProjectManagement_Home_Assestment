import React from 'react';
import MyIcon from '../assets/images/Question.svg'; 
import { Col, Image,Typography,Row } from 'antd';
import { StyledModal } from '../common/styledComponents';
const { Title } = Typography;

const DeleteConfirmationModal = ({ visible, handleConfirmDelete, handleCancelDelete }) => {
  return (
    <StyledModal
    title={
      <Row style={{ backgroundColor: '#eeeff3' }} align={"middle"} justify={"start"}>
      <Col>
        <Image
          src={MyIcon}
          alt="Image"
          width={18}
          height={18}
          preview={false}
          style={{marginBottom:'5px'}}
         
        />
        <span style={{ marginLeft: '4px'}}>
          Are you sure you want to delete this project?
        </span>
      </Col>
    </Row>
      
    }
      visible={visible}
      onCancel={handleCancelDelete}
      onOk={handleConfirmDelete}
      icon={<Image src={MyIcon} alt="Delete Icon" />}
      cancelText="No"
      okText="Yes"

    >
      <p style={{marginLeft:'20px',color:'#87888a'}}>
      This action can't be undone</p>
    </StyledModal>
  );
};

export default DeleteConfirmationModal;
