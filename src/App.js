import React, { useState } from 'react';
import { Layout, Button, Row, Col, Typography, Image, Input, Modal } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Logo from './assets/images/logo.png';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [data, setData] = useState([]);
  const [isAddingData, setIsAddingData] = useState(false);
  const [newData, setNewData] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleAddData = () => {
    if (newData) {
      const currentDate = new Date().toLocaleString();
      const newDataItem = {
        value: newData,
        createdDate: currentDate,
      };
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex].value = newData;
        setData(updatedData);
        setEditIndex(null);
      } else {
        setData([...data, newDataItem]);
      }
      setNewData('');
      setIsAddingData(false);
    }
  };

  const handleEditData = (index) => {
    setNewData(data[index].value);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setNewData('');
    setEditIndex(null);
  };

  const handleDeleteData = (index) => {
    setDeleteIndex(index);
    setIsDeleteModalVisible(true);
  };

  const handleConfirmDelete = () => {
    const updatedData = [...data];
    updatedData.splice(deleteIndex, 1);
    setData(updatedData);
    setIsDeleteModalVisible(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
    }
  };

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(151, 151, 151, 1)',
          height: '124px',
        }}
      >
        <Row
          align="top"
          justify="center"
          style={{
            position: 'relative',
            height: '100%',
          }}
        >
          <Col xs={24} sm={22} md={22} lg={22} xl={22} xxl={22}>
            <Row>
              <Col>
                <Image
                  src={Logo}
                  alt="Logo"
                  preview={false}
                  width={40}
                  height={40}
                  style={{ marginRight: '10px' }}
                />
                <Title
                  level={4}
                  style={{ fontWeight: '600', marginBottom: 0, color: 'rgba(66, 66, 66, 1)' }}
                >
                  MY PROJECT
                </Title>
              </Col>
              {!isAddingData && (
                <Button
                  type="primary"
                  shape="circle"
                  icon={<PlusOutlined style={{ fontSize: '18px' }} />}
                  style={{
                    position: 'absolute',
                    right: '-15px',
                    bottom: '0',
                    marginBottom: '-30px',
                    backgroundColor: '#4a475f',
                    height: '60px',
                    width: '60px',
                  }}
                  onClick={() => setIsAddingData(true)}
                />
              )}
            </Row>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: '20px' }}>
        {isAddingData ? (
          <Row>
            <Col span={8}>
              <Input
                placeholder="Enter data"
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
                onKeyPress={handleInputKeyPress}
              />
            </Col>
          </Row>
        ) : null}

        {data.map((item, index) => (
          <Row key={index} style={{ marginTop: '10px', backgroundColor: 'white' }}>
            <Col>
              <Image src={Logo} preview={false} width={32} height={32} />
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
                    onClick={() => handleDeleteData(index)}
                  />
                </>
              )}
            </Col>
          </Row>
        ))}
      </Content>

      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        <p>Are you sure you want to delete this data item?</p>
      </Modal>
    </Layout>
  );
};

export default App;
