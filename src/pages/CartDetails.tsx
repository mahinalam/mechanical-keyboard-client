// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   Col,
//   Row,
//   Button,
//   InputNumber,
//   Typography,
//   Divider,
//   List,
//   message,
// } from "antd";
// import { DeleteOutlined } from "@ant-design/icons";

// import "./ShoppingCart.css"; // Custom CSS for additional styling

// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import {
//   CartItem,
//   incrementQuantity,
//   decrementQuantity,
// } from "@/redux/features/cart/cartSlice";

// const { Title, Text } = Typography;
// const { Meta } = Card;

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// const ShoppingCart = () => {
//   const carts = useAppSelector((state) => state.cart);
//   const newCarts = carts.items;
//   const [products, setProducts] = useState(newCarts);
//   const [availableQuantity, setAvailableQuantity] = useState(0);
//   const [minQuantity, setMinQuantity] = useState(0);
//   const dispatch = useAppDispatch();
//   // console.log(quantity);
//   console.log("totalAmount", carts.totalAmount);
//   console.log("totalQuantity", carts.totalQuantity);
//   console.log(newCarts);

//   const handleQuantityChange = (id: string, quantity: number) => {
//     console.log(quantity);

//     const product = products.find((item) => item.id === id);
//     // setAvailableQuantity(product.availableQuantity);
//     setProducts(
//       products.map((product) =>
//         product.id === id ? { ...product, quantity } : product
//       )
//     );
//     if (product && quantity > product.availableQuantity) {
//       message.error("Cannot add more than available quantity in stock.");
//     }
//     if (product!.quantity < quantity) {
//       dispatch(incrementQuantity(id));
//     } else {
//       dispatch(decrementQuantity(id));
//     }
//     setAvailableQuantity(product.availableQuantity);
//     // if (product && quantity > product.availableQuantity) {
//     //   message.error("Cannot add more than available quantity in stock.");
//     // } else {
//     //   dispatch(incrementQuantity({ id, quantity }));
//     // }
//   };

//   // };

//   const handleRemoveProduct = (id: string) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const getTotalPrice = () => {
//     return products
//       .reduce(
//         (total, product) => total + Number(product.price * product.quantity),
//         0
//       )
//       .toFixed(2);
//   };

//   const salesTax = 8.8;
//   const shipping = 0;

//   return (
//     <div className="shopping-cart">
//       <Title level={2}>Your Cart</Title>
//       <Row gutter={[16, 16]}>
//         <Col xs={24} md={16}>
//           <List
//             dataSource={products}
//             renderItem={(product) => (
//               <List.Item key={product.id}>
//                 <Card
//                   hoverable
//                   className="cart-item-card"
//                   cover={<img alt={product.title} src={product.image} />}
//                   actions={[
//                     <Button
//                       type="link"
//                       icon={<DeleteOutlined />}
//                       onClick={() => handleRemoveProduct(product.id)}
//                     >
//                       Remove
//                     </Button>,
//                   ]}
//                 >
//                   <Meta
//                     title={product.title}
//                     description={product.description}
//                   />
//                   <div className="cart-item-details">
//                     <Text strong>${product.price.toFixed(2)}</Text>
//                     <InputNumber
//                       min={1}
//                       max={availableQuantity}
//                       onChange={(value) => {
//                         handleQuantityChange(product.id, value as number);
//                       }}
//                     />
//                   </div>
//                 </Card>
//               </List.Item>
//             )}
//           />
//         </Col>
//         <Col xs={24} md={8}>
//           <Card className="cart-summary-card">
//             <Title level={3}>Subtotal</Title>
//             <Divider />
//             <List>
//               {products.map((product) => (
//                 <List.Item key={product.id}>
//                   <Text>{product.title}</Text>
//                   <Text>${(product.price * product.quantity).toFixed(2)}</Text>
//                 </List.Item>
//               ))}
//             </List>
//             <Divider />
//             <Row justify="space-between">
//               <Text>Sales Tax</Text>
//               <Text>${salesTax.toFixed(2)}</Text>
//             </Row>
//             <Row justify="space-between">
//               <Text>Shipping</Text>
//               <Text>
//                 {shipping === 0 ? "Free" : `$${(shipping as any).toFixed(2)}`}
//               </Text>
//             </Row>
//             <Divider />
//             <Row justify="space-between">
//               <Title level={4}>Total</Title>
//               <Title level={4}>
//                 $
//                 {(parseFloat(getTotalPrice()) + salesTax + shipping).toFixed(2)}
//               </Title>
//             </Row>
//             <Button type="primary" block>
//               Proceed to payment
//             </Button>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  InputNumber,
  Typography,
  Divider,
  List,
  message,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import "./ShoppingCart.css"; // Custom CSS for additional styling
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Meta } = Card;

const ShoppingCart = () => {
  const carts = useAppSelector((state) => state.cart);
  const products = carts.items;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, quantity: number) => {
    const product = products.find((item) => item.id === id);
    if (product && quantity <= product.availableQuantity) {
      const diff = quantity - product.quantity;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          dispatch(incrementQuantity({ id }));
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          dispatch(decrementQuantity({ id }));
        }
      }
    } else if (product && quantity > product.availableQuantity) {
      message.error("Cannot add more than available quantity in stock.");
    }
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const getTotalPrice = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const hasOutOfStockItems = () => {
    return products.some(
      (product) => product.quantity > product.availableQuantity
    );
  };

  const handleCheckout = () => {
    if (!hasOutOfStockItems()) {
      navigate("/checkout"); // Assuming you have a checkout route defined
    } else {
      message.error("Some products are out of stock.");
    }
  };

  const salesTax = 8.8;
  const shipping = 0;

  return (
    <div className="shopping-cart">
      <Title level={2}>Your Cart</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <List
            dataSource={products}
            renderItem={(product) => (
              <List.Item key={product.id}>
                <Card
                  hoverable
                  className="cart-item-card"
                  cover={<img alt={product.title} src={product.image} />}
                  actions={[
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </Button>,
                  ]}
                >
                  <Meta
                    title={product.title}
                    description={product.description}
                  />
                  <div className="cart-item-details">
                    <Text strong>${product.price.toFixed(2)}</Text>
                    <InputNumber
                      min={1}
                      max={product.availableQuantity}
                      value={product.quantity}
                      onChange={(value) =>
                        handleQuantityChange(product.id, value as number)
                      }
                    />
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} md={8}>
          <Card className="cart-summary-card">
            <Title level={3}>Subtotal</Title>
            <Divider />
            <List>
              {products.map((product) => (
                <List.Item key={product.id}>
                  <Text>{product.title}</Text>
                  <Text>${(product.price * product.quantity).toFixed(2)}</Text>
                </List.Item>
              ))}
            </List>
            <Divider />
            <Row justify="space-between">
              <Text>Sales Tax</Text>
              <Text>${salesTax.toFixed(2)}</Text>
            </Row>
            <Row justify="space-between">
              <Text>Shipping</Text>
              <Text>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</Text>
            </Row>
            <Divider />
            <Row justify="space-between">
              <Title level={4}>Total</Title>
              <Title level={4}>
                $
                {(parseFloat(getTotalPrice()) + salesTax + shipping).toFixed(2)}
              </Title>
            </Row>
            <Button
              type="primary"
              block
              onClick={handleCheckout}
              disabled={hasOutOfStockItems()}
            >
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingCart;
