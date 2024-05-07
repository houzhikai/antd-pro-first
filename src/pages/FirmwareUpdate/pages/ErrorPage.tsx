import React from 'react';
import { Button, Result } from 'antd';
import { useFUProviderModule } from '../components/containers';

const ErrorPage = () => {
  const { setIsErrorPage } = useFUProviderModule();
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
