import App from "@/App";
import Dashboard from "@/components/layout/Dashboard";
import DashboardTable from "@/components/layout/DashboardTable";
// import TableDemo from "@/components/layout/ProductTable";
import About from "@/pages/About";
import ShoppingCart from "@/pages/CartDetails";
import Checkout from "@/pages/checkout/Checkout";
import Contact from "@/pages/Contact";
import Home from "@/pages/home/Home";
import ProductDetails from "@/pages/productDetails/ProductDetails";
import Products from "@/pages/products/Products";
import Success from "@/utils/Success";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "success",
        element: <Success />,
      },
      // {
      //   path: "/productDetails",
      //   element: <ProductDetails />,
      // },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardTable />,
      },
    ],
  },
]);

export default router;
