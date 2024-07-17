import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader: React.FC = () => {
  return (
    <div
      className="text-blue-900"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
