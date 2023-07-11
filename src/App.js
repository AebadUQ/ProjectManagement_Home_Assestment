import React, { useState } from 'react';
import { Layout, Button, Row, Col, Typography, Image, Input } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Logo from './assets/images/logo.png';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [data, setData] = useState([]);
  const [isAddingData, setIsAddingData] = useState(false);
  const [newData, setNewData] = useState('');
  const [editIndex, setEditIndex] = useState(null);

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
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination || result.destination.index === result.source.index) {
      return;
    }

    const newData = [...data];
    const [removed] = newData.splice(result.source.index, 1);
    newData.splice(result.destination.index, 0, removed);
    setData(newData);
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

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="data">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) => (
                  <Draggable key={index} draggableId={`item-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Row style={{ marginTop: '10px', backgroundColor: 'white' }}>
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
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Content>
    </Layout>
  );
};

export default App;
