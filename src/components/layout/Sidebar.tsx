import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
import { DesktopOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline">
        <NavLink to="/">
          <Menu.Item
            style={{
              color: "white",
              fontSize: "20px",
              height: "30px",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "10px",
            }}
            key="/wirefree"
          >
            WireFree
          </Menu.Item>
        </NavLink>
        <NavLink to="/dashboard">
          <Menu.Item key="/dashboard/product" icon={<DesktopOutlined />}>
            Products
          </Menu.Item>
        </NavLink>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
