import React from 'react';
import { Spin } from 'antd';
import { useInstrumentPageProvider } from '../../components/container';
import InstrumentTree from './InstrumentTree';
import SlotContentPage from './DetailsPage/SlotContentPage';
import HeadContentPage from './DetailsPage/HeadContentPage';
import '../../index.css';

const InsContentPage = () => {
  const { isShowSpin, webType } = useInstrumentPageProvider();
  return (
    <>
      <div className="ins-layout">
        <InstrumentTree />
        {webType === 'Slot' ? (
          <SlotContentPage />
        ) : webType === 'Head' ? (
          <HeadContentPage />
        ) : null}
      </div>
      {isShowSpin && (
        <div className="show-spin">
          <Spin size="large" tip="设备尝试连接中...">
            <div className="content" />
          </Spin>
        </div>
      )}
    </>
  );
};

export default InsContentPage;
