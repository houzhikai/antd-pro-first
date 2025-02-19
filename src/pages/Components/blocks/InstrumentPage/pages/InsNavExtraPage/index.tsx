import React from 'react';
import { useInstrumentPageProvider } from '../../components/container';
import { Button } from 'antd';

const InsNavExtraPage = () => {
  const { setWebRefresh, translation } = useInstrumentPageProvider();

  const handleRefresh = () => {
    setWebRefresh((c: number) => c + 1);
  };
  return (
    <div className="navAction-root">
      <Button type="primary" onClick={handleRefresh} size="small">
        {translation('testLayout.name')}
      </Button>
    </div>
  );
};

export default InsNavExtraPage;
