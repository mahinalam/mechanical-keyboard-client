import React from "react";
import { Row, Col, Typography } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import "./Service.css";

const { Title, Paragraph } = Typography;

const ServiceAdvertisement: React.FC = () => {
  return (
    <div className="service-advertisement-section">
      <Title level={2} className="section-title">
        Why Choose Us?
      </Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <div className="service-item">
            <CheckOutlined className="check-icon" />
            <Title level={4} className="service-title">
              Free Shipping
            </Title>
            <Paragraph>On all orders over $50</Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <div className="service-item">
            <CheckOutlined className="check-icon" />
            <Title level={4} className="service-title">
              Lowest Delivery Charge
            </Title>
            <Paragraph>Competitive rates worldwide</Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <div className="service-item">
            <CheckOutlined className="check-icon" />
            <Title level={4} className="service-title">
              24/7 Support
            </Title>
            <Paragraph>Get help whenever you need it</Paragraph>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <div className="service-item">
            <CheckOutlined className="check-icon" />
            <Title level={4} className="service-title">
              Money Back Guarantee
            </Title>
            <Paragraph>Return within 30 days</Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceAdvertisement;
