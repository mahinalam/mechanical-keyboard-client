// Import necessary modules and Ant Design components
import React from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import "./Contact.css"; // Import your own styles file
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  // Function to handle form submission
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    message.success("Message sent successfull!");
    navigate("/");
    // Handle form submission logic here (e.g., send data to server)
  };

  // Function to handle form submission errors
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.success("Someting went wrong!!");
  };

  return (
    <div className="contact-us-page">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <div className="contact-form-container">
            <h1>Contact Us</h1>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item>
                <p className="text-center">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </p>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
