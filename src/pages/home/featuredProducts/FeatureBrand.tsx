import React from "react";
import { Card } from "antd";
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
];

const FeaturedBrands: React.FC = () => {
  return (
    <div
      className="featured-brands md:mb-20 sm:mb-[60px] mb-[40px] bg-white"
      style={{ padding: "20px", backgroundColor: "" }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Top Brands
      </h2>

      <div className="grid md:grid-cols-6 gap-4 sm:grid-cols-3 grid-cols-3 ">
        {brands?.length > 0 &&
          brands.slice(0, 6).map((brand) => (
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
          ))}
      </div>
    </div>
  );
};

export default FeaturedBrands;
