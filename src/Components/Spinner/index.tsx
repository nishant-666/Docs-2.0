import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 154 }} spin />;

const Spinner: React.FC = () => (
  <div className="spinner-container">
    <Spin indicator={antIcon} />
  </div>
);

export default Spinner;
