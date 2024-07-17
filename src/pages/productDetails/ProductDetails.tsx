import { useState } from "react";
import { Card, Button, Typography } from "antd";
import {
  ShoppingCartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Loader from "../../components/Loader";
import RcRate from "rc-rate";
import "rc-rate/assets/index.css";

const { Title, Text } = Typography;

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useGetSingleProductQuery(id);
  const [quantity, setQuantity] = useState<number>(0);

  const dispatch = useAppDispatch();
  console.log(data);

  const handleAddToCart = () => {
    setQuantity((value) => value + 1);
    console.log("product is cliked");

    if (data?.data?.availableQuantity) {
      const cartDetails = {
        id: data?.data?._id as string,
        quantity: quantity,
        price: data?.data?.price as number,
        title: data?.data?.title as string,
        image: data?.data?.image as string,
        description: data?.data.description as string,
        availableQuantity: data?.data?.availableQuantity,
      };

      // console.log(cartDetails.quantity);
      // console.log("quantity", quantity);
      dispatch(addToCart(cartDetails));
      // message.success(`Added to cart successfully!`);
      // setIsAddToCartDisable(false);
    }
  };

  //   };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data?.success && (
        <div className="md:my-[80px] sm:my-[60px] my-[40px] grid grid-cols-1 md:grid-cols-2">
          {/* <Card */}
          {/* cover={ */}
          <div className="w-full h-[296px] mt-4 sm:mt-0">
            <img
              alt={data?.data?.title}
              src={data?.data?.image}
              className="w-full h-full object-cover"
              // style={{ height: 300, objectFit: "cover" }}
            />
          </div>

          <div className=" ">
            <Card bordered={false} className="rounded-t-none0">
              <Title level={3}>{data?.data?.title}</Title>
              <Text>Brand: {data?.data?.brand}</Text>
              <br />
              <Text strong>Price: ${data?.data?.price}</Text>
              <br />

              <Text>{data?.data?.description}</Text>
              <br />
              <div>
                {" "}
                <RcRate allowHalf defaultValue={data?.data?.rating} disabled />
              </div>
              <Text strong>
                Available Quantity: {data?.data?.availableQuantity}
              </Text>
              {data?.data?.availableQuantity <= 5 && (
                <div>
                  <ExclamationCircleOutlined style={{ color: "red" }} /> Limited
                  Stock!
                </div>
              )}
              <br />

              <Button
                className="mt-2"
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={() => {
                  handleAddToCart();
                }}
                disabled={
                  quantity === data?.data?.availableQuantity ||
                  // quantity > data?.data?.availableQuantity ||
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
