import React from "react";
import { Layout, Typography, Row, Col, Divider, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://i.ibb.co/KNbdxj0/people1.jpg",
    description:
      "John is the visionary behind our company, leading with passion and dedication.",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image: "https://i.ibb.co/3rdgM2J/people2.jpg",
    description:
      "Jane is the tech genius ensuring our platform is cutting-edge and reliable.",
  },
  {
    name: "Michael Johnson",
    role: "Chief Marketing Officer",
    image: "https://i.ibb.co/w6MwPDx/people3.jpg",
    description:
      "Michael crafts our marketing strategies and builds strong customer relationships.",
  },
];

const About: React.FC = () => {
  return (
    <Layout>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Title level={1}>About Us</Title>
          <Paragraph>
            Welcome to our company! We are dedicated to providing the best
            products and services to our customers. Our team is passionate about
            innovation and excellence, constantly striving to exceed
            expectations.
          </Paragraph>

          <Divider />

          <Title level={2}>Our Mission</Title>
          <Paragraph>
            Our mission is to revolutionize the industry with groundbreaking
            solutions that enhance the lives of our customers. We are committed
            to sustainability, quality, and customer satisfaction.
          </Paragraph>

          <Divider />

          <Title level={2}>Meet Our Team</Title>
          <Row gutter={[16, 16]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <img
                      className="object-cover h-[300px] w-[300px]"
                      alt={member.name}
                      src={member.image}
                    />
                  }
                >
                  <Card.Meta
                    title={member.name}
                    description={
                      <>
                        <p>
                          <strong>{member.role}</strong>
                        </p>
                        <p>{member.description}</p>
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

export default About;
