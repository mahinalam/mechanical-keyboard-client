/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Typography,
  Row,
  Col,
  message,
} from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { clearCart } from "@/redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom"; // Updated to use useNavigate

const { Title } = Typography;

const Checkout = () => {
  const [form] = Form.useForm();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Updated to use useNavigate

  const handlePaymentChange = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        // const updatedQuantity = {
        //   id:
        // }

        if (paymentMethod === "cod") {
          // Handle Cash on Delivery logic
          dispatch(clearCart());

          message.success("Order placed successfully!");
          navigate("/success");
        } else if (paymentMethod === "stripe") {
          // Handle Stripe payment logic
          // Note: For a real implementation, you'll need to integrate with Stripe's API
          message.info("Redirecting to Stripe...");
          setTimeout(() => {
            dispatch(clearCart());
            navigate("/success");
          }, 3000);
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        message.error("Failed to create Order!");
      });
  };

  return (
    <div className="checkout-page my-[40px] sm:my-[60px] md:my-[80px]">
      <Title level={2}>Checkout</Title>
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number" },
                {
                  pattern: /^\d{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="address"
              label="Delivery Address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Payment Method">
          <Radio.Group onChange={handlePaymentChange} value={paymentMethod}>
            <Radio value="cod">Cash on Delivery</Radio>
            <Radio value="stripe">Stripe</Radio>
          </Radio.Group>
        </Form.Item>
        <Button type="primary" onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
