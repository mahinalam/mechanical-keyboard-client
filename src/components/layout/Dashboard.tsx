import React from "react";
import { Layout } from "antd";

import ProductTable from "./ProductTable";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import ProductTable from "./ProductTable";

const { Header, Content, Footer } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* <ProductTable /> */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
