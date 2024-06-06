import React from 'react';
import { Button, Result } from 'antd';

const ErrorPage = ({ setIsErrorPage }) => {
  const handleRefresh = () => {
    setIsErrorPage(false);
  };

  return (
    <Result
      status="error"
      title={<div style={{color: '#cfcdca'}}>Please refresh the page</div>}
      extra={[
        <Button type="primary" key="refresh" onClick={handleRefresh}>
          Refresh
        </Button>,
      ]}
    ></Result>
  );
};

export default ErrorPage;
