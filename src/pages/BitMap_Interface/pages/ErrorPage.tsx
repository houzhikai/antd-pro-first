import React from 'react';
import { Button, Result } from 'antd';

const ErrorPage = ({ setIsErrorPage }) => {
  const handleRefresh = () => {
    setIsErrorPage(false);
  };

  return (
    <Result
      status="error"
      title="Please refresh the page"
      extra={[
        <Button type="primary" key="refresh" onClick={handleRefresh}>
          Refresh
        </Button>,
      ]}
    ></Result>
  );
};

export default ErrorPage;
