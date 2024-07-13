import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "./Hero.css";

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero-section md:my-[80px] pt-[80px] sm:my-[60px] my-[20px]"
      style={{
        color: "#F85606",
        minHeight: "70vh",
        display: "grid",
        gridTemplateColumns: "2",
        gap: "16px",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row justify="center" align="middle">
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div className="hero-content">
            <Title level={1}>
              Discover the Best <span>Keyboards</span>
            </Title>
            <Paragraph>
              Explore our collection of premium keyboards designed for
              performance and style.
            </Paragraph>
            <Button type="primary" size="large">
              Shop Now
            </Button>
          </div>
        </Col>
        <Col xs={0} sm={12} md={12} lg={12} xl={12}>
          <div className="hero-image">
            {/* Insert your hero image or illustration here */}
            <img
              className="rounded-xl"
              src="https://i.ibb.co/kDqpnsj/keyboard1.webp"
              alt="Hero Image"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
