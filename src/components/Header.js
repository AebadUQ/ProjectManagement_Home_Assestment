import React from 'react';
import { Layout, Button, Row, Col, Typography, Image } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Logo from '../assets/images/logo.png';

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent = ({ setIsAddingData }) => {
  return (
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
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
