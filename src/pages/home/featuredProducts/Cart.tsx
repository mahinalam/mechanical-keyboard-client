/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card } from "antd";
import RcRate from "rc-rate";
import "rc-rate/assets/index.css";

const { Meta } = Card;

const Cart = ({ product }: any) => {
  return (
    <Card
      hoverable
      className="product-card p-4  border-1 border-black border-opacity-10"
      cover={
        <div className="product-card-image-container">
          <img
            alt={product.title}
            src={product.image}
            className="product-card-image w-full h-full "
          />
        </div>
      }
      // actions={
      //   [
      //     // <Link
      //     //   to={`/products/${product._id}`}
      //     //   style={{ margin: 0 }}
      //     //   className="bg-[#F7F7F7]"
      //     // ></Link>,
      //   ]
      // }
    >
      <Meta
        className="text-center"
        title={
          <span className="product-card-title text-[18px] font-semibold uppercase">
            {product.title}
          </span>
        }
        description={
          <div className="product-card-description text-[15px]">
            <p className="text-opacity-80 text-black">Brand: {product.brand}</p>
            <p className=" text-black text-opacity-80">
              Available Quantity:
              <span className="font-semibold">{product.availableQuantity}</span>
            </p>
            <p className="product-card-price  text-black text-opacity-80">
              Price:
              <span className="font-bold text-md"> ${product.price}</span>
            </p>
            <p className="text-black text-opacity-80">
              <div>
                <RcRate allowHalf defaultValue={product.rating} disabled />
              </div>
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default Cart;
