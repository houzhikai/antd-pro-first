import { Button, Result, Typography } from "antd";
import React from "react";

const MyErrorPage = ({ theme, setIsErrorPage, errorTitle }: any) => {
  const handleRefresh = () => {
    setIsErrorPage(false);
    location.reload();
  };
  const getThemeToken = (darkColor: string, lightColor: string) => {
    return theme === "dark" ? darkColor : lightColor;
  };
  return (
    <Result
      style={
        theme === "dark"
          ? { background: "#000", minHeight: "100vh" }
          : { background: "#fff", minHeight: "100vh" }
      }
      status="error"
      title={
        <div style={{ color: getThemeToken("#fff", "#000") }}>
          <Typography.Text>
            {errorTitle || "Please refresh the page"}
          </Typography.Text>
        </div>
      }
      extra={[
        <Button type="primary" key="refresh" onClick={handleRefresh}>
          Refresh
        </Button>,
      ]}
    ></Result>
  );
};

export default MyErrorPage;
