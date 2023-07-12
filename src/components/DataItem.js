import React from "react";
import { Row, Col, Image, Input, Divider } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
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
    <Row justify={"center"} align={"center"}>
      <Col span={22}>
        <Row
          style={{
            backgroundColor: "white",
          }}
          justify={"space-between"}
          align={"middle"}
        >
          <Divider style={{ padding: "5px", margin: "5px" }} />

          <Col onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Row>
              <Image
                src={require("../assets/images/logo.png")}
                preview={false}
                width={32}
                height={32}
                
              />

              {editIndex === index ? (
                <Input
                  value={newData}
                  onChange={(e) => setNewData(e.target.value)}
                  onPressEnter={handleAddData}
                  autoFocus
                />
              ) : (
                <p style={{marginInline:'1rem',fontWeight:'bold'}}>{item.value}</p>
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
            </Row>
          </Col>

          <Col>
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
          <Divider style={{ padding: "5px", margin: "5px" }} />
        </Row>
      </Col>
    </Row>
  );
};

export default DataItem;
