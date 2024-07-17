import { Layout } from "antd";

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "../Loader";
// import ProductTable from "./ProductTable";

const { Header, Content } = Layout;

const Dashboard = () => {
  const { isLoading } = useGetProductsQuery(undefined);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          {isLoading ? (
            <>
              <Loader />
            </>
          ) : (
            <div
              className="site-layout-background w-full"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* <ProductTable /> */}
              <Outlet />
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
