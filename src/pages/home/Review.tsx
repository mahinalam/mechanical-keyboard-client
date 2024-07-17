import React from "react";
import { Layout, Card, Avatar, Row, Col } from "antd";
import RcRate from "rc-rate";
import { UserOutlined } from "@ant-design/icons";
import "rc-rate/assets/index.css";
import "./Review.css";

const { Content } = Layout;

const reviews = [
  {
    name: "John Doe",
    avatar: "",
    rating: 5,
    comment: "Great keyboard! Highly recommend.",
  },
  {
    name: "Jane Smith",
    avatar: "",
    rating: 4,
    comment: "Good value for the price.",
  },
  {
    name: "Alice Johnson",
    avatar: "",
    rating: 3,
    comment: "Decent, but could be better.",
  },
  {
    name: "Bob Brown",
    avatar: "",
    rating: 2,
    comment: "Not satisfied with the quality.",
  },
  {
    name: "Charlie Davis",
    avatar: "",
    rating: 4,
    comment: "Solid build and nice feel.",
  },
  {
    name: "Eve Evans",
    avatar: "",
    rating: 5,
    comment: "Fantastic product, exceeded expectations!",
  },
];

const Review: React.FC = () => {
  return (
    <Layout style={{ minHeight: "70vh" }}>
      <Content style={{ padding: "px" }}>
        <h1 className="font-medium text-[24px]">Product Reviews</h1>
        <Row gutter={[16, 16]}>
          {reviews.map((review, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="review-card">
                <Card.Meta
                  avatar={
                    review.avatar ? (
                      <Avatar src={review.avatar} />
                    ) : (
                      <Avatar icon={<UserOutlined />} />
                    )
                  }
                  title={review.name}
                  description={
                    <div>
                      <RcRate allowHalf defaultValue={review.rating} disabled />
                      <p>{review.comment}</p>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Review;
