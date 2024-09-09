import { ConfigProvider, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import CustomNavPage from './CustomNavPage';
import { getThemeToken } from './getThemeToken';
import MyErrorPage from '../MyErrorPage';
import './index.less';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';

interface MyLayoutPageProps {
  logo: string;
  errorTitle?: React.ReactNode | string;
  title?: string;
  theme: 'dark' | 'light';
  navExtra?: React.ReactNode | string;
  isShowErrorPage?: boolean;
  defaultLocale?: 'en-US' | 'zh-CN';
  children: any;
}

const MyLayoutPage = ({
  logo,
  errorTitle,
  title,
  theme,
  navExtra,
  isShowErrorPage,
  defaultLocale,
  children,
}: MyLayoutPageProps) => {
  const [isErrorPage, setIsErrorPage] = useState<boolean>(true);
  const [locale, setLocale] = useState<any>();

  useEffect(() => {
    setIsErrorPage(isShowErrorPage || false);
  }, [isShowErrorPage]);
  useEffect(() => {
    setLocale(defaultLocale === 'zh-CN' ? zhCN : enUS);
  }, [defaultLocale]);

  return (
    <ConfigProvider theme={getThemeToken(theme)} locale={locale}>
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
              theme === 'dark' ? 'my-layout-content-dark' : 'my-layout-content'
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
