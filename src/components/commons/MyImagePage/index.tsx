import React from "react";
import { Image, Typography } from "antd";
import "./index.less";

interface MyImagePageProps {
  src: string;
  title: string;
}

const MyImagePage = (props: MyImagePageProps) => {
  const { src, title } = props;
  return (
    <div className="myLogo">
      <div style={{ lineHeight: "40px" }}>
        <Image width={40} src={src} preview={false} />
      </div>
      <div className="logo-title">
        <Typography.Text> {title || ""}</Typography.Text>
      </div>
    </div>
  );
};

export default MyImagePage;
