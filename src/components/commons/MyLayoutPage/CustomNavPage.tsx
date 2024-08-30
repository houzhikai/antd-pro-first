import React from "react";
import MyLogo from "../MyImagePage";
import { Typography } from "antd";

const CustomNavPage = ({ logo, title, children, theme }: any) => {
  return (
    <div
      style={{
        background: theme === "dark" ? "#1e1e1e" : "#ffffff",
        borderBottom: `1px solid ${theme === "dark" ? "#2c2b2b" : "#ccc"}`,
      }}
      className="customNavPage-wrapper"
    >
      <MyLogo src={logo} title={title} />
      <Typography.Text>{children}</Typography.Text>
    </div>
  );
};

export default CustomNavPage;
