import React from "react";
import { Layout, Typography, Row, Col, Card, Rate, Avatar } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const reviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    avatar: "https://via.placeholder.com/100",
    comment: "Amazing product! It exceeded my expectations.",
  },
  {
    name: "Bob Smith",
    rating: 4,
    avatar: "https://via.placeholder.com/100",
    comment: "Very good quality and fast shipping.",
  },
  {
    name: "Charlie Brown",
    rating: 3,
    avatar: "https://via.placeholder.com/100",
    comment: "It's decent for the price, but could be better.",
  },
];

const Review: React.FC = () => {
  return (
    <Layout className="mb-[40px] sm:mb-[60px] md:mb-[80px]">
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 32 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Title level={2}>Customer Reviews</Title>
          <Row gutter={[16, 16]}>
            {reviews.map((review, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card>
                  <Card.Meta
                    avatar={<Avatar src={review.avatar} />}
                    title={review.name}
                    description={
                      <>
                        <Rate disabled defaultValue={review.rating} />
                        <Paragraph>{review.comment}</Paragraph>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Review;
