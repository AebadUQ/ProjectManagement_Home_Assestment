import React from "react";
import { Row, Col, Image, Input, Divider } from "antd";
import beforeHoverImage from "../assets/images/EditIcon.svg";
import afterHoverImage from "../assets/images/EditIcon_Hover.svg";
import beforeHoverImageDelete from "../assets/images/DeleteIcon.svg";
import afterHoverImageDelete from "../assets/images/DeleteIcon_Hover.svg";

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
  const [isHovered, setIsHovered] = React.useState(false);
  const [isDeleteHovered, setIsDeleteHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteMouseEnter = () => {
    setIsDeleteHovered(true);
  };

  const handleDeleteMouseLeave = () => {
    setIsDeleteHovered(false);
  };

  return (
    <Row justify="center" align="middle" style={{ padding: '0px', margin: '0px', marginBottom: '10px' }}>
      <Col span={24}>
      <Divider style={{ padding: "0px", margin: "0px", marginTop: '0px' }} />

        <Row style={{ backgroundColor: "white",border:isDeleteHovered?'0.5px solid black':'0px',paddingInline:'2rem' }} justify="space-between" align="middle">

          <Col
          span={10}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'flex', alignItems: 'center' }} // Added CSS properties
          >
            <Image
              src={require("../assets/images/logo.png")}
              preview={false}
              width={32}
              height={32}
              style={{marginRight:'1rem'}}
            />

            {editIndex === index ? (
              <Input
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
                onPressEnter={handleAddData}
                autoFocus
                style={{marginLeft:'1rem'}}
              />
            ) : (
              <p style={{ marginInline: '1rem', fontWeight: 'bold' }}>{item.value}</p>
            )}
            {editIndex === index ? (
              <></>
            ) : (
              <>
                {isHovered ? (
                  <img
                    src={afterHoverImage}
                    alt="After Hover"
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    onClick={() => handleEditData(index)}
                  />
                ) : (
                  <img
                    src={beforeHoverImage}
                    alt="Before Hover"
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    onClick={() => handleEditData(index)}
                  />
                )}
              </>
            )}
          </Col>

          <Col span={10}>
            <p>{item.createdDate}</p>
          </Col>
          <Col onMouseEnter={handleDeleteMouseEnter} onMouseLeave={handleDeleteMouseLeave}>
            {isDeleteHovered ? (
              <img
                src={afterHoverImageDelete}
                alt="After Hover Delete"
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteDataConfirmation(index)}
              />
            ) : (
              <img
                src={beforeHoverImageDelete}
                alt="Before Hover Delete"
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteDataConfirmation(index)}
              />
            )}
          </Col>
        </Row>
        <Divider style={{ padding: "0px", margin: "0px", marginBottom: '0px' }} />

      </Col>
    </Row>
  );
};

export default DataItem;
