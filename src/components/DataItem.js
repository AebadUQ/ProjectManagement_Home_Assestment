import React from 'react';
import { Row, Col, Image, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const DataItem = ({
  item,
  newData,
  editIndex,
  setNewData,
  handleAddData,
  handleEditData,
  handleCancelEdit,
  handleDeleteDataConfirmation,
  index,
}) => {
  return (
    <Row style={{ marginTop: '10px', backgroundColor: 'white' }}>
      <Col>
        <Image src={require('../assets/images/logo.png')} preview={false} width={32} height={32} />
      </Col>
      <Col span={8}>
        {editIndex === index ? (
          <Input
            value={newData}
            onChange={(e) => setNewData(e.target.value)}
            onPressEnter={handleAddData}
            autoFocus
          />
        ) : (
          <p>{item.value}</p>
        )}
      </Col>
      <Col span={8}>
        <p>{item.createdDate}</p>
      </Col>
      <Col span={4}>
        {editIndex === index ? (
          <>
            <Button
              type="primary"
              shape="circle"
              icon={<CheckOutlined />}
              style={{ marginRight: '5px' }}
              onClick={handleAddData}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={handleCancelEdit}
            />
          </>
        ) : (
          <>
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              style={{ marginRight: '5px' }}
              onClick={() => handleEditData(index)}
            />
            <Button
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => handleDeleteDataConfirmation(index)}
            />
          </>
        )}
      </Col>
    </Row>
  );
};

export default DataItem;
