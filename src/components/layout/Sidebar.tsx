import React from "react";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu;
const { Sider } = Layout;
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <NavLink to="/">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
        </NavLink>
        <NavLink to="/dashboard">
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Products
          </Menu.Item>
        </NavLink>

        <NavLink to="/">
          <Menu.Item key="9" icon={<FileOutlined />}>
            Users
          </Menu.Item>
        </NavLink>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
