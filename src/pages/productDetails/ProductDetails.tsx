import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Button,
  Typography,
  InputNumber,
  message,
} from "antd";
import {
  ShoppingCartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import {
  useCreateUserCartMutation,
  useGetSingleProductQuery,
} from "@/redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, TCart } from "@/redux/features/cart/cartSlice";
import Loader from "../../components/Loader";
import { generateFourDigitId } from "@/utils/generateCustomId";

const { Content } = Layout;
const { Title, Text } = Typography;

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [createUserCart, result] = useCreateUserCartMutation();
  const dispatch = useAppDispatch();
  console.log(data);
  const [quantity, setQuantity] = useState<number>(1);
  const carts = useAppSelector((state) => state.cart.items);
  console.log(carts);
  // console.log("carts", carts, quantity);
  const handleAddToCart = () => {
    console.log("product is cliked");
    if (quantity > data?.data?.availableQuantity) {
      message.error("Cannot add more than available quantity in stock.");
    } else {
      const cartDetails = {
        id: data?.data?._id as string,
        quantity: quantity,
        price: data?.data?.price as number,
        title: data?.data?.title as string,
        image: data?.data?.image as string,
        description: data?.data.description as string,
        availableQuantity: data?.data?.availableQuantity,
      };
      console.log(cartDetails.quantity);
      console.log("quantity", quantity);
      dispatch(addToCart(cartDetails));
      message.success(`Added to cart successfully!`);
    }
  };

  //   const handleBuyWithStripe = () => {
  //     // Implement Stripe payment logic here
  //     message.success("Redirecting to Stripe payment gateway.");
  //   };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.success ? (
        <div className="md:my-[80px] sm:my-[60px] my-[40px]">
          <Layout>
            <Content className="p-4">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12}>
                  <Card
                    cover={
                      <img
                        alt={data?.data?.title}
                        src={data?.data?.image}
                        style={{ height: 300, objectFit: "cover" }}
                      />
                    }
                    bordered={false}
                    className="flex justify-center items-center"
                  />
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Card bordered={false}>
                    <Title level={3}>{data?.data?.title}</Title>
                    <Text type="secondary">{data?.data?.brand}</Text>
                    <br />
                    <Text strong>Price: ${data?.data?.price}</Text>
                    <br />
                    <Text strong>Rating: {data?.data?.rating} stars</Text>
                    <br />
                    <Text>{data?.data?.description}</Text>
                    <br />
                    <Text strong>
                      Available Quantity: {data?.data?.availableQuantity}
                    </Text>
                    {data?.data?.availableQuantity <= 5 && (
                      <div>
                        <ExclamationCircleOutlined style={{ color: "red" }} />{" "}
                        Limited Stock!
                      </div>
                    )}
                    <br />
                    <InputNumber
                      min={1}
                      max={1}
                      value={quantity}
                      onChange={(value) => setQuantity(value as number)}
                      style={{ width: "100%", marginBottom: 16 }}
                      //   readOnly
                      className="quantity-input"
                    />

                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      onClick={handleAddToCart}
                      disabled={
                        quantity > data?.data?.availableQuantity ||
                        data?.data?.availableQuantity === 0
                      }
                      block
                    >
                      Add to Cart
                    </Button>
                    <Button
                      type="default"
                      //   onClick={handleBuyWithStripe}
                      style={{ marginTop: 16 }}
                      disabled={
                        quantity > data?.data?.availableQuantity ||
                        data?.data?.availableQuantity === 0
                      }
                      block
                    >
                      Buy with Stripe
                    </Button>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
        </div>
      ) : (
        "No product Found"
      )}
    </>
  );
};

export default ProductDetails;
