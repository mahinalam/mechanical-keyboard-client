// import React, { useEffect, useState } from "react";
// import { Layout, Input, Select, Row, Col, Card, Button } from "antd";
// import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import { useGetProductsQuery } from "@/redux/api/baseApi";
// import Loader from "@/components/Loader";
// import Cart from "../home/featuredProducts/Cart";

// const { Header, Content, Footer } = Layout;
// const { Option } = Select;

// const Products = () => {
//   const { data: productsData, isLoading } = useGetProductsQuery(undefined);
//   //   const productValues = productsData?.data || [];
//   //   const [products, setProducts] = useState(productValues);
//   //   useEffect(() => {
//   //     if (productsData) {
//   //       setProducts(productsData.data); // Assuming your API response structure has a 'data' property
//   //     }
//   //   }, [productsData]);

//   // Dummy data for products (replace with your actual data)
//     const [products, setProducts] = useState<any[]>(productsData?.data); // Initial state with all products

//     const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products
//     const [searchValue, setSearchValue] = useState<string>(""); // State for search input
//     const [sortValue, setSortValue] = useState<string | undefined>(undefined); // State for sort option
//     const [filtersEnabled, setFiltersEnabled] = useState<boolean>(false);
//     // State to enable/disable filters
//     console.log(isLoading);

//     // Function to handle search
//     const handleSearch = (value: string) => {
//       setSearchValue(value);
//       filterProducts(value, sortValue);
//     };

//   // Function to handle filtering
//     const handleFilterChange = (value: string) => {
//       setSortValue(value);
//       filterProducts(searchValue, value);
//     };

//   // Function to filter products based on search and sort
//     const filterProducts = (search: string, sort: string | undefined) => {
//       let filtered = [...products];

//       // Apply search filter
//       if (search) {
//         filtered = filtered.filter((product) =>
//           product.title.toLowerCase().includes(search.toLowerCase())
//         );
//       }

//       // Apply sort filter
//       switch (sort) {
//         case "priceAsc":
//           filtered.sort((a, b) => a.price - b.price);
//           break;
//         case "priceDesc":
//           filtered.sort((a, b) => b.price - a.price);
//           break;
//         case "brandAsc":
//           filtered.sort((a, b) => a.brand.localeCompare(b.brand));
//           break;
//         case "brandDesc":
//           filtered.sort((a, b) => b.brand.localeCompare(a.brand));
//           break;
//         default:
//           break;
//       }

//       setFilteredProducts(filtered);
//     };

//     // Function to reset filters
//     const handleResetFilters = () => {
//       setSearchValue("");
//       setSortValue(undefined);
//       setFilteredProducts(products); // Reset to all products
//     };

//     // Function to enable filters when "Filter" button is clicked
//     const handleEnableFilters = () => {
//       setFiltersEnabled(true);
//     };

//   return (
//     <div className="md:my-20 sm:my-[60px] my-[40px]">
//       {!isLoading && productsData.data.length > 0 ? (
//         <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 ">
//           {productsData.data.map((item) => (
//             <Cart product={item}>
//               {/* <Card.Meta title={brand.title} /> */}
//             </Cart>
//           ))}
//         </div>
//       ) : (
//         <>
//           <Loader />
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import { Layout, Input, Select, Row, Col, Card, Button, message } from "antd";
import { SearchOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "@/components/Loader";
import Cart from "../home/featuredProducts/Cart";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

export interface IProducts {
  title: string;
  image: string;
  brand: string;
  availableQuantity: number;
  price: number;
  description: string;
  rating: number;
}

const Products = () => {
  const { data: productsData, isLoading } = useGetProductsQuery(undefined);
  const [products, setProducts] = useState<any[]>(productsData?.data || []);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortValue, setSortValue] = useState<string | undefined>(undefined);
  const [filtersEnabled, setFiltersEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (productsData) {
      setProducts(productsData.data);
      setFilteredProducts(productsData.data);
    }
  }, [productsData]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    filterProducts(value, sortValue);
  };

  const handleFilterChange = (value: string) => {
    setSortValue(value);
    filterProducts(searchValue, value);
  };

  const filterProducts = (search: string, sort: string | undefined) => {
    let filtered = [...products];

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "brandAsc":
        filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "brandDesc":
        filtered.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleResetFilters = () => {
    setSearchValue("");
    setSortValue(undefined);
    setFilteredProducts(products);
  };

  const handleEnableFilters = () => {
    setFiltersEnabled(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* <Header
        style={{
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-gray-900 text-2xl">Mechanical Keyboards</h1>
            <Input.Search
              placeholder="Search keyboards"
              onSearch={handleSearch}
              // style={{ width: 300 }}
              prefix={<SearchOutlined />}
            />
          </div>
          <Select
            defaultValue="Sort by"
            style={{ width: 120 }}
            onChange={handleFilterChange}
          >
            <Option value="priceAsc">Price: Low to High</Option>
            <Option value="priceDesc">Price: High to Low</Option>
            <Option value="brandAsc">Brand: A-Z</Option>
            <Option value="brandDesc">Brand: Z-A</Option>
          </Select>
          <Button onClick={handleResetFilters}>Reset Filters</Button>
        </div>
      </Header> */}
      {/* <Header
        style={{
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          padding: "0 16px",
        }}
      >
        <Row justify="space-between" align="middle">
          <Col xs={24} sm={12} md={8}>
            <h1 className="text-gray-900 text-2xl">Mechanical Keyboards</h1>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              textAlign: "center",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <Input.Search
              placeholder="Search keyboards"
              onSearch={handleSearch}
              style={{ width: "100%" }}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{
              textAlign: "right",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <Select
              defaultValue="Sort by"
              style={{ width: "100%" }}
              onChange={handleFilterChange}
            >
              <Option value="priceAsc">Price: Low to High</Option>
              <Option value="priceDesc">Price: High to Low</Option>
              <Option value="brandAsc">Brand: A-Z</Option>
              <Option value="brandDesc">Brand: Z-A</Option>
            </Select>
          </Col>
        </Row>
      </Header> */}
      {/* <Header
        style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}
        style={{
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          padding: "0 16px",
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} md={8} lg={8} className="text-center text-md-left">
            <h1 className="text-gray-900 text-2xl">Mechanical Keyboards</h1>
          </Col>
          <Col xs={24} md={8} lg={8} className="text-center">
            <Input.Search
              placeholder="Search keyboards"
              onSearch={handleSearch}
              style={{ width: "100%" }}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col xs={24} md={8} lg={8} className="text-center text-md-right">
            <Select
              defaultValue="Sort by"
              style={{ width: "100%" }}
              onChange={handleFilterChange}
            >
              <Option value="priceAsc">Price: Low to High</Option>
              <Option value="priceDesc">Price: High to Low</Option>
              <Option value="brandAsc">Brand: A-Z</Option>
              <Option value="brandDesc">Brand: Z-A</Option>
            </Select>
          </Col>
        </Row>
      </Header> */}
      <Header
        className=" mt-[40px] sm:mt-[60px] md:mt-[80px]"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          padding: "0 16px",
        }}
      >
        <Row justify="space-between" align="middle" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <h1 className="text-gray-900 text-2xl text-center md:text-left">
              Mechanical Keyboards
            </h1>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Input.Search
              placeholder="Search keyboards"
              onSearch={handleSearch}
              style={{ width: "100%" }}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Select
              defaultValue="Sort by"
              style={{ width: "100%" }}
              onChange={handleFilterChange}
            >
              <Option value="priceAsc">Price: Low to High</Option>
              <Option value="priceDesc">Price: High to Low</Option>
              <Option value="brandAsc">Brand: A-Z</Option>
              <Option value="brandDesc">Brand: Z-A</Option>
            </Select>
          </Col>
        </Row>
      </Header>
      <Content className="p-4" style={{ background: "#FFFFFF" }}>
        {isLoading ? (
          <Loader />
        ) : (
          // <Row gutter={[16, 16]}>
          //   {filteredProducts.map((product) => (
          //     <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          //       <Cart product={product} />
          //     </Col>
          //   ))}
          // </Row>

          <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 my-[40px] sm:my-[60px] md:my-[80px]">
            {filteredProducts.map((item) => (
              <Link to={`/products/${item._id}`} key={item._id}>
                <Cart product={item}>
                  {/* Adjust your Card content or styling here if needed */}
                </Cart>
              </Link>
            ))}
          </div>
        )}
      </Content>
    </div>
  );
};

export default Products;
