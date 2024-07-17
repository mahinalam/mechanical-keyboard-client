import { useGetProductsQuery } from "@/redux/api/baseApi";
import React from "react";
import Cart from "./Cart";
import { IProductState } from "@/redux/features/products/productsSlice";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { Button } from "antd";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  // console.log(data);
  console.log(products);
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="mb-[40px] sm:mb-[60px] md:mb-[80px]">
      <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 ">
        {products?.data?.length > 0 &&
          products.data.slice(0, 6).map((item: IProductState) => (
            <Link key={item.title} to={`/products/${item._id}`}>
              <Cart product={item} />
            </Link>
          ))}
      </div>
      <Link to="/products">
        <p className="text-center mt-[30px] sm:mt-[40px] md:mt-[50px]">
          <Button type="primary">See More</Button>
        </p>
      </Link>
    </div>
  );
};

export default FeaturedProducts;
