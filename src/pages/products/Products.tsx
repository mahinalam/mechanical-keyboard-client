/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "@/components/Loader";
import Cart from "../home/featuredProducts/Cart";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
// import { Button } from "@/components/ui/button";

const Products = () => {
  const { data: productsData, isSuccess } = useGetProductsQuery(undefined);

  const [searchInput, setSearchInput] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [isResetOpen, setIsResetOpen] = useState(false);

  const handleSearchChange = (e: any) => {
    setSearchInput(e.target.value);
    if (!e.target.value) {
      setIsResetOpen(false);
    } else {
      setIsResetOpen(true);
    }
  };

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    setIsResetOpen(true);
  };

  const resetFilters = () => {
    setSearchInput("");
    setSelectedSort("");
  };

  // Filter and sort logic
  let filteredProducts = productsData?.data || [];

  // }

  if (searchInput) {
    filteredProducts = filteredProducts.filter((product: any) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  if (selectedSort === "priceAsc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceDesc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (selectedSort === "brandAsc") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.brand.localeCompare(b.brand)
    );
  } else if (selectedSort === "brandDesc") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.brand.localeCompare(a.brand)
    );
  }

  return (
    <>
      {isSuccess ? (
        <div className="mt-[100px] sm:mt-[120px] mb-[40px] sm:my-[60px] md:my-[80px]">
          <section className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 md:mb-10 ">
            <div>
              <h1 className="text-gray-900 mb-0 text-2xl text-center md:text-left font-semibold">
                Mechanical Keyboards
              </h1>
            </div>
            <div>
              <div className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 absolute left-3 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.15 12.15z"
                  />
                </svg>
                <Input
                  type="text"
                  placeholder="Search Keyboards"
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex justify-end mb-5 sm:mb-4">
              <Select onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                    <SelectItem value="priceDesc">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="brandAsc">Brand: A-Z</SelectItem>
                    <SelectItem value="brandDesc">Brand: Z-A</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1">
            {filteredProducts.map((item: any) => (
              <Link to={`/products/${item._id}`} key={item._id}>
                <Cart product={item}>
                  {/* Adjust your Card content or styling here if needed */}
                </Cart>
              </Link>
            ))}
          </div>
          {isResetOpen && (
            <div
              onClick={() => setIsResetOpen(false)}
              className="flex justify-center md:mb-[80px] sm:mb-[60px] mb-[40px] mt-4"
            >
              <Button
                type="text"
                className="btn btn-red"
                style={{ color: "red", borderColor: "red" }}
                icon={<CloseCircleOutlined />}
                onClick={resetFilters}
              >
                Reset
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Products;
