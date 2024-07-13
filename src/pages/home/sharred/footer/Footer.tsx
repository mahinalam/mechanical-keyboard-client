import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "./Footer.css";

const { Footer } = Layout;
const { Link, Text } = Typography;

const ResponsiveFooter: React.FC = () => {
  return (
    <div className="mx-[20px] sm:mx-[30px] md:mx-[40px]">
      <Footer className="footer">
        <Row justify="center">
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="footer-section">
              <Text strong>Company</Text>
              <br />
              <Link href="#">About Us</Link>
              <br />
              <Link href="#">Contact Us</Link>
              <br />
              <Link href="#">Careers</Link>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="footer-section">
              <Text strong>Products</Text>
              <br />
              <Link href="#">Keyboards</Link>
              <br />
              <Link href="#">Mice</Link>
              <br />
              <Link href="#">Accessories</Link>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="footer-section">
              <Text strong>Legal</Text>
              <br />
              <Link href="#">Privacy Policy</Link>
              <br />
              <Link href="#">Terms of Use</Link>
              <br />
              <Link href="#">Disclaimer</Link>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className="footer-section">
              <Text strong>Social</Text>
              <br />
              <Link href="#">Facebook</Link>
              <br />
              <Link href="#">Twitter</Link>
              <br />
              <Link href="#">Instagram</Link>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <Text>&copy; 2024 MyShop. All rights reserved.</Text>
        </div>
      </Footer>
    </div>
  );
};

export default ResponsiveFooter;
