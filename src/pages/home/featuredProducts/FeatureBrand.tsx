import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";

const brands = [
  {
    logo: "https://i.ibb.co/Qf6fTSD/brand1.png",
    title: "KeyBrand",
  },
  {
    logo: "https://i.ibb.co/LpythLb/brand2.jpg",
    title: "GameKey",
  },
  {
    logo: "https://i.ibb.co/35b78Zs/brand3.png",
    title: "KeyLite",
  },
  {
    logo: "https://i.ibb.co/G9hNjG9/brand4.jpg",
    title: "WireFree",
  },
  {
    logo: "https://i.ibb.co/Cn6yhWM/brand5.png",
    title: "LightKey",
  },
  {
    logo: "https://i.ibb.co/z2WccbR/brand6.png",
    title: "SilentKey",
  },
  {
    logo: "https://i.ibb.co/m9Fs5w5/brand7.png",
    title: "ErgoKey",
  },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mechanical_Keyboard_Logo_5.svg/1280px-Mechanical_Keyboard_Logo_5.svg.png",
  //   title: "BudgetKey",
  // },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Mechanical_Keyboard_Logo_6.svg/1280px-Mechanical_Keyboard_Logo_6.svg.png",
  //   title: "ProKey",
  // },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mechanical_Keyboard_Logo_7.svg/1280px-Mechanical_Keyboard_Logo_7.svg.png",
  //   title: "CustomKey",
  // },
];

const FeaturedBrands: React.FC = () => {
  return (
    <div
      className="featured-brands md:mb-20 sm:mb-[60px] mb-[40px]"
      style={{ padding: "20px", backgroundColor: "#f9f9f9" }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "24px",
          fontWeight: "medium",
        }}
      >
        Top Brands
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {brands.slice(0, 6).map((brand, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Link to="/products">
              <Card
                hoverable
                cover={
                  <img
                    alt={brand.title}
                    src={brand.logo}
                    style={{
                      padding: "20px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                }
                style={{ textAlign: "center" }}
              >
                <Card.Meta title={brand.title} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedBrands;
