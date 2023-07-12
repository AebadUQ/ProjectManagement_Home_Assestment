import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Typography, Input } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { addData, editData, deleteData, dragEnd } from './actions';

import HeaderComponent from './components/Header';
import DataItem from './components/DataItem';
import DeleteConfirmationModal from './components/DeleteConfirmationModal';

import Logo from './assets/images/logo.png';

const { Content } = Layout;
const { Title } = Typography;

const App = ({ data, addData, editData, deleteData, dragEnd }) => {
  const [isAddingData, setIsAddingData] = useState(false);
  const [newData, setNewData] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);

  const handleAddData = () => {
    if (newData) {
      const currentDate = new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      const newDataItem = {
        value: newData,
        createdDate: currentDate,
      };
      if (editIndex !== null) {
        editData(editIndex, newDataItem);
        setEditIndex(null);
      } else {
        addData(newDataItem);
      }
      setNewData('');
      setIsAddingData(false);
    }
  };

  const handleEditData = (index) => {
    const item = data[index];
    setNewData(item.value);
    setEditIndex(index);
  };
  

  const handleCancelEdit = () => {
    setNewData('');
    setEditIndex(null);
  };

  const handleDeleteData = (index) => {
    deleteData(index);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
    }
  };

  const handleDeleteDataConfirmation = (index) => {
    setDeleteModalVisible(true);
    setDeleteItemIndex(index);
  };

  const handleConfirmDelete = () => {
    deleteData(deleteItemIndex);
    setDeleteModalVisible(false);
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
    setDeleteItemIndex(null);
  };

  const handleDragEnd = (result) => {
    dragEnd(result);
  };

  return (
    <Layout style={{backgroundColor:'white'}}>
      <HeaderComponent setIsAddingData={setIsAddingData} />

      <Content style={{ padding: '20px' }}>
        {isAddingData ? (
          <Row >
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

        <DragDropContext onDragEnd={handleDragEnd} >
          <Droppable droppableId="data">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) => (
                  <Draggable key={index} draggableId={`item-${index}`} index={index} >
                    {(provided) => (
                      <div
                     
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DataItem
                          item={item}
                          newData={newData}
                          editIndex={editIndex}
                          setNewData={setNewData}
                          handleAddData={handleAddData}
                          handleEditData={() => handleEditData(index)}
                          handleCancelEdit={handleCancelEdit}
                          handleDeleteDataConfirmation={() => handleDeleteDataConfirmation(index)}
                          index={index} 
                        />
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

      <DeleteConfirmationModal
        visible={deleteModalVisible}
        handleConfirmDelete={handleConfirmDelete}
        handleCancelDelete={handleCancelDelete}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  addData,
  editData,
  deleteData,
  dragEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
