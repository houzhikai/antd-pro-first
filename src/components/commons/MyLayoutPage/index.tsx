import { Button, ConfigProvider, Typography } from "antd";
import React, { useEffect, useImperativeHandle, useState } from "react";
import CustomNavPage from "./CustomNavPage";
import { getThemeToken } from "./getThemeToken";
import MyErrorPage from "../MyErrorPage";
import "./index.less";

interface MyLayoutPageProps {
  logo: string;
  errorTitle?: React.ReactNode | string;
  title?: string;
  theme: "dark" | "light";
  navExtra?: React.ReactNode | string;
  isShowErrorPage?: boolean;
  children: any;
}

const MyLayoutPage = ({
  logo,
  errorTitle,
  title,
  theme,
  navExtra,
  isShowErrorPage,
  children,
}: MyLayoutPageProps) => {
  const [isErrorPage, setIsErrorPage] = useState<boolean>(true);

  useEffect(() => {
    setIsErrorPage(isShowErrorPage || false);
  }, [isShowErrorPage]);

  return (
    <ConfigProvider theme={getThemeToken(theme)}>
      {isErrorPage ? (
        <MyErrorPage
          theme={theme}
          errorTitle={errorTitle}
          setIsErrorPage={setIsErrorPage}
        />
      ) : (
        <>
          <CustomNavPage logo={logo} title={title} theme={theme}>
            {navExtra}
          </CustomNavPage>
          <div
            className={
              theme === "dark" ? "my-layout-content-dark" : "my-layout-content"
            }
          >
            <Typography.Text>{children}</Typography.Text>
          </div>
        </>
      )}
    </ConfigProvider>
  );
};

export default MyLayoutPage;
