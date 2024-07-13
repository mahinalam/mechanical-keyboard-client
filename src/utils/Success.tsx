import React from "react";
import styled from "styled-components";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

// Styled component for the success message container
const StyledSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Adjust height as needed */
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

// Styled component for the icon
const SuccessIcon = styled(CheckCircleOutlined)`
  font-size: 64px;
  color: #52c41a; /* Green color */
  margin-bottom: 24px;
`;

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); //Navigate to the homepage
  };

  return (
    <StyledSuccess>
      <SuccessIcon />
      <Title>Order Successful!</Title>
      <p className="mb-3">Your order has been successfully placed.</p>
      <Button type="primary" onClick={handleGoHome} size="large">
        Go Home
      </Button>
    </StyledSuccess>
  );
};

export default Success;
