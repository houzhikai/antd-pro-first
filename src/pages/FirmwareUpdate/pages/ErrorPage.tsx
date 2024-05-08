import React from 'react';
import { Button, Result } from 'antd';
import { useFUProviderModule } from '../components/containers';

const ErrorPage = ({ setIsErrorPage }) => {
  const { setErrorTimes } = useFUProviderModule();
  const handleRefresh = () => {
    setIsErrorPage(false);
    setErrorTimes((obj) => {
      return {
        ...obj,
        times: 0,
      };
    });
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
