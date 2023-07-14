import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Typography, Input ,Divider,Image} from 'antd';
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
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    // Reorder the data array based on the drag and drop result
    const newData = Array.from(data);
    const [removed] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, removed);

    // Update the state with the new data order
    dragEnd(newData);
  };

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <HeaderComponent setIsAddingData={setIsAddingData} />

      <Content style={{ padding: '20px' }}>
        {isAddingData ? (
              <>
      <Divider style={{ padding: "0px", margin: "0px", marginBottom: '6px' }} />

<Row style={{ paddingInline: '2rem' }}>
  <Col >
    <Row >
      <Image
        src={require("./assets/images/logo.png")}
        preview={false}
        width={32}
        height={32}
        style={{ display: 'inline-flex' }}
      />
      <Input
        placeholder="Name your project"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        onKeyPress={handleInputKeyPress}
        style={{ display: 'inline-flex', marginLeft: '0.5rem',width:'200px' }}
      />
    </Row>
  </Col>
</Row>

      <Divider style={{ padding: "0px", margin: "0px", marginTop: '6px',marginBottom:'2rem' }} /></>

        ) : null}

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="data">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) => (
                  <Draggable key={index} draggableId={`item-${index}`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          boxShadow: snapshot.isDragging
                            ? '0 0 5px 2px rgba(0, 0, 0, 0.1)'
                            : 'none',
                          ...provided.draggableProps.style
                        }}
                      >
                        <DataItem
                          item={item}
                          newData={newData}
                          editIndex={editIndex}
                          setNewData={setNewData}
                          handleAddData={handleAddData}
                          handleEditData={() => handleEditData(index)}
                          handleCancelEdit={handleCancelEdit}
                          handleDeleteDataConfirmation={() =>
                            handleDeleteDataConfirmation(index)
                          }
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
