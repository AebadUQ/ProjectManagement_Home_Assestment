import React from "react";
import { Row, Col, Image, Input, Divider } from "antd";
import beforeHoverImage from "../assets/images/EditIcon.svg";
import afterHoverImage from "../assets/images/EditIcon_Hover.svg";
import beforeHoverImageDelete from "../assets/images/DeleteIcon.svg";
import afterHoverImageDelete from "../assets/images/DeleteIcon_Hover.svg";
import Logo from '../assets/images/logo.png'
import {
  StyledRowDataItem,
  DividerTopDataItem,
  StyledInnerRowDataItem,
  StyledRowApp,
  DividerBottomDataItem,
  EditInput
} from "../common/styledComponents";
const DataItem = ({
  item,
  newData,
  editIndex,
  setNewData,
  handleAddData,
  handleEditData,
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
    <StyledRowDataItem justify="center" align="middle" >
      <Col xs={23} sm={23} md={21} lg={21} xl={21} xxl={21} >
        <DividerTopDataItem />

        <StyledInnerRowDataItem
       
          isDeleteHovered={isDeleteHovered}
          justify="center"
          align="middle"
        >
          <Col span={24} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
            <Row  align={"middle"}>
              <Col xs={14} sm={14} md={12} lg={12} xl={12} xxl={12} >
                <Row>
                  <Col span={24}>
                    <Row align={"middle"}>
                      <Col
                        xs={20}
                        sm={20}
                        md={20}
                        lg={20}
                        xl={20}
                        xxl={14}
                      >
                        <Row align={"middle"}>
                          <Image
                            src={Logo}
                            preview={false}
                            width={32}
                            height={32}
                            style={{ marginRight: "1rem" }}
                          />

                          {editIndex === index ? (
                            <EditInput
                              value={newData}
                              onChange={(e) => setNewData(e.target.value)}
                              onPressEnter={handleAddData}
                              autoFocus
                            />
                          ) : (
                            <p
                              style={{
                                marginInline: "1rem",
                                fontWeight: "bold",
                              }}
                            >
                              {item.value}
                            </p>
                          )}
                        </Row>
                      </Col>
                      <Col
                        xs={4}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={4}
                        xxl={10}
                      >
                        <Row align={"middle"} justify={"center"}>
                          <Col>
                            {editIndex === index ? (
                              <></>
                            ) : (
                              <>
                                {isHovered ? (
                                  <Image
                                    src={afterHoverImage}
                                    alt="After Hover"
                                    style={{
                                      marginRight: "5px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleEditData(index)}
                                    preview={false}
                                  />
                                ) : (
                                  <Image
                                    src={beforeHoverImage}
                                    alt="Before Hover"
                                    style={{
                                      marginRight: "5px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleEditData(index)}
                                    preview={false}
                                  />
                                )}
                              </>
                            )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={10} sm={10} md={12} lg={12} xl={12} xxl={12} >
                <Row>
                  <Col span={24}>
                    <Row>
                      <Col
                        xs={20}
                        sm={20}
                        md={20}
                        lg={12}
                        xl={12}
                        xxl={12}
                      >
                    <Row justify={"center"}>
                    <span style={{paddingInline:'1rem'}}>
                    {item.createdDate}
                    </span>
                    </Row>
                      </Col>
                      <Col
                        xs={4}
                        sm={4}
                        md={4}
                        lg={12}
                        xl={12}
                        xxl={12}
                      >
                        <Row justify={"end"}>
                          <Col
                            onMouseEnter={handleDeleteMouseEnter}
                            onMouseLeave={handleDeleteMouseLeave}
                          >
                            {isDeleteHovered ? (
                              <Image
                                src={afterHoverImageDelete}
                                alt="After Hover Delete"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleDeleteDataConfirmation(index)
                                }
                                preview={false}
                              />
                            ) : (
                              <Image
                                src={beforeHoverImageDelete}
                                alt="Before Hover Delete"
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  handleDeleteDataConfirmation(index)
                                }
                                preview={false}
                              />
                            )}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
         
        </StyledInnerRowDataItem>
        <DividerBottomDataItem
        />
      </Col>
    </StyledRowDataItem>
  );
};

export default DataItem;
