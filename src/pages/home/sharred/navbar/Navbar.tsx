// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Drawer, Button, Badge } from "antd";
// import {
//   MenuOutlined,
//   HomeOutlined,
//   UserOutlined,
//   InfoCircleOutlined,
//   PhoneOutlined,
//   ShoppingCartOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux"; // Assuming you use Redux for cart state

// const { Header } = Layout;

// const Navbar: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
//   const cartItemsCount = useSelector((state: any) => state.cart.totalQuantity); // Update this according to your state structure

//   useEffect(() => {
//     setSelectedKey(location.pathname);
//   }, [location]);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 w-full z-10 bg-white shadow-md">
//       <Layout>
//         <Header className="header bg-blue-900 flex items-center px-4">
//           <div className="logo text-white text-2xl">Logo</div>

//           {/* Desktop Menu */}
//           <div className="desktop-menu hidden md:flex items-center">
//             <Menu
//               theme="dark"
//               mode="horizontal"
//               selectedKeys={[selectedKey]}
//               className="flex justify-end"
//             >
//               <Menu.Item key="/" icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item key="/products" icon={<UserOutlined />}>
//                 <Link to="/products">Products</Link>
//               </Menu.Item>
//               <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
//                 <Link to="/about">About Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/contact" icon={<PhoneOutlined />}>
//                 <Link to="/contact">Contact Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
//                 <Link to="/dashboard">Product Management</Link>
//               </Menu.Item>
//             </Menu>
//             <div className="flex items-center ml-4">
//               <Link to="/cart">
//                 <Badge
//                   count={cartItemsCount}
//                   offset={[10, 0]}
//                   style={{ backgroundColor: "red" }}
//                 >
//                   <ShoppingCartOutlined
//                     style={{ fontSize: "24px", color: "white" }}
//                   />
//                 </Badge>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="mobile-menu md:hidden">
//             <Button
//               type="primary"
//               icon={<MenuOutlined />}
//               onClick={showDrawer}
//             />
//           </div>

//           {/* Mobile Menu Drawer */}
//           <Drawer
//             title="Menu"
//             placement="right"
//             onClose={onClose}
//             visible={visible}
//           >
//             <Menu
//               mode="vertical"
//               selectedKeys={[selectedKey]}
//               onClick={onClose}
//             >
//               <Menu.Item key="/" icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item key="/products" icon={<UserOutlined />}>
//                 <Link to="/products">Products</Link>
//               </Menu.Item>
//               <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
//                 <Link to="/about">About Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/contact" icon={<PhoneOutlined />}>
//                 <Link to="/contact">Contact Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
//                 <Link to="/dashboard">Product Management</Link>
//               </Menu.Item>
//               <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
//                 <Link to="/cart">
//                   <Badge
//                     count={cartItemsCount}
//                     offset={[10, 0]}
//                     style={{ backgroundColor: "red" }}
//                   >
//                     Cart
//                   </Badge>
//                 </Link>
//               </Menu.Item>
//             </Menu>
//           </Drawer>
//         </Header>
//       </Layout>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Layout, Menu, Drawer, Button, Badge } from "antd";
// import {
//   MenuOutlined,
//   HomeOutlined,
//   UserOutlined,
//   InfoCircleOutlined,
//   PhoneOutlined,
//   ShoppingCartOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux"; // Assuming you use Redux for cart state

// const { Header } = Layout;

// const Navbar: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
//   const cartItemsCount = useSelector((state: any) => state.cart.totalQuantity); // Update this according to your state structure

//   useEffect(() => {
//     setSelectedKey(location.pathname);
//   }, [location]);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 w-full z-10 bg-white shadow-md">
//       <Layout>
//         <Header className="header bg-blue-900 flex items-center px-4">
//           <div className="logo text-white text-2xl">Logo</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex flex-1 justify-end items-center">
//             <Menu
//               theme="dark"
//               mode="horizontal"
//               selectedKeys={[selectedKey]}
//               className="flex justify-end bg-transparent"
//             >
//               <Menu.Item key="/" icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item key="/products" icon={<UserOutlined />}>
//                 <Link to="/products">Products</Link>
//               </Menu.Item>
//               <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
//                 <Link to="/about">About Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/contact" icon={<PhoneOutlined />}>
//                 <Link to="/contact">Contact Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
//                 <Link to="/dashboard">Product Management</Link>
//               </Menu.Item>
//             </Menu>
//             <div className="ml-4">
//               <Link to="/cart">
//                 <Badge
//                   count={cartItemsCount}
//                   offset={[10, 0]}
//                   style={{ backgroundColor: "red" }}
//                 >
//                   <ShoppingCartOutlined
//                     style={{ fontSize: "24px", color: "white" }}
//                   />
//                 </Badge>
//               </Link>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex-1 flex justify-end">
//             <Button
//               type="primary"
//               icon={<MenuOutlined />}
//               onClick={showDrawer}
//             />
//           </div>

//           {/* Mobile Menu Drawer */}
//           <Drawer
//             title="Menu"
//             placement="right"
//             onClose={onClose}
//             visible={visible}
//             bodyStyle={{ padding: 0 }}
//           >
//             <Menu
//               mode="vertical"
//               selectedKeys={[selectedKey]}
//               onClick={onClose}
//               className="pt-4"
//             >
//               <Menu.Item key="/" icon={<HomeOutlined />}>
//                 <Link to="/">Home</Link>
//               </Menu.Item>
//               <Menu.Item key="/products" icon={<UserOutlined />}>
//                 <Link to="/products">Products</Link>
//               </Menu.Item>
//               <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
//                 <Link to="/about">About Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/contact" icon={<PhoneOutlined />}>
//                 <Link to="/contact">Contact Us</Link>
//               </Menu.Item>
//               <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
//                 <Link to="/dashboard">Product Management</Link>
//               </Menu.Item>
//               <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
//                 <Link to="/cart">
//                   <Badge
//                     count={cartItemsCount}
//                     offset={[10, 0]}
//                     style={{ backgroundColor: "red" }}
//                   >
//                     Cart
//                   </Badge>
//                 </Link>
//               </Menu.Item>
//             </Menu>
//           </Drawer>
//         </Header>
//       </Layout>
//     </div>
//   );
// };

// export default Navbar;

import { Layout, Menu, Drawer, Button, Badge } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you use Redux for cart state
import { useEffect, useState } from "react";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const cartItemsCount = useSelector((state: any) => state.cart.totalQuantity); // Update this according to your state structure

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-10 bg-white shadow-md">
      <Layout>
        <Header className="header bg-blue-900 flex items-center px-4">
          <Link to="/">
            <div className="logo text-white text-2xl">WireFree</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end items-center">
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              className="flex justify-end bg-transparent"
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/products" icon={<UserOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About Us</Link>
              </Menu.Item>
              <Menu.Item key="/contact" icon={<PhoneOutlined />}>
                <Link to="/contact">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
                <Link to="/dashboard">Product Management</Link>
              </Menu.Item>
            </Menu>
            <div className="ml-4">
              <Link to="/cart">
                <Badge
                  count={cartItemsCount}
                  offset={[10, 0]}
                  style={{ backgroundColor: "red" }}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: "24px", color: "white" }}
                  />
                </Badge>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-1 flex justify-end">
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={showDrawer}
            />
          </div>

          {/* Mobile Menu Drawer */}
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="vertical"
              selectedKeys={[selectedKey]}
              onClick={onClose}
              className="pt-4"
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/products" icon={<UserOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
              <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About Us</Link>
              </Menu.Item>
              <Menu.Item key="/contact" icon={<PhoneOutlined />}>
                <Link to="/contact">Contact Us</Link>
              </Menu.Item>
              <Menu.Item key="/dashboard" icon={<SettingOutlined />}>
                <Link to="/dashboard">Product Management</Link>
              </Menu.Item>
              <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                  <Badge
                    count={cartItemsCount}
                    offset={[10, 0]}
                    style={{ backgroundColor: "red" }}
                  >
                    Cart
                  </Badge>
                </Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
