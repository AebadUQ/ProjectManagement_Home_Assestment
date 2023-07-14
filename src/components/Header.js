import React from "react";
import { Layout, Button, Row, Col, Typography, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Logo from "../assets/images/logo.png";
import {
  StyledHeader,
  StyledButton,
  StyledPlusOutlined,
  StyledTitle
} from "../common/styledComponents";
const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = ({ setIsAddingData }) => {
  return (
    <StyledHeader>
      <Row
        align="top"
        justify="center"
        style={{
          position: "relative",
          height: "100%",
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
                style={{ marginRight: "10px" }}
              />
             <StyledTitle level={4}>MY PROJECT</StyledTitle>
            </Col>
            <StyledButton
              type="primary"
              shape="circle"
              icon={<StyledPlusOutlined />}
              onClick={() => setIsAddingData(true)}
            />
          </Row>
        </Col>
      </Row>
    </StyledHeader>
  );
};

export default HeaderComponent;
