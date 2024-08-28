import React, { useEffect, useState } from 'react';
import { ConfigProvider, Dropdown, Spin, message } from 'antd';
import DetailsPage from './DetailsPage';
import NavPage from './NavPage';
import '../index.css';
import myFetch from '@/components/myFetch';
import { getThemeToken } from '@/pages/BitMap/components/getThemeToken';
import { LoadingOutlined } from '@ant-design/icons';
import { useFUProviderModule } from '../components/containers';
import { mockDeviceListInterface } from './mockData/mockTableDataList';

// // @ts-expect-error
// const vscode = acquireVsCodeApi();

const LayoutPage = ({ setIsErrorPage }) => {
  const {
    getDeviceListAndHeartObj,
    setGetDeviceListAndHeartObj,
    errorTimes,
    setErrorTimes,
    startParams,
    // setStartParams,
    setUbootEnv,
    theme,
    // setTheme,
  } = useFUProviderModule();
  const [isLoading, setIsLoading] = useState(false);
  const [firstTimes, setFirstTimes] = useState(1);

  // useEffect(() => {
  //   vscode.postMessage({ command: 'startParams' });
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('message', (e) => {
  //     if (e.data.command === 'startParams') {
  //       setStartParams(e.data.text.vscodeParams);
  //       setTheme(e.data.text.theme);
  //     } else if (e.data.command === 'params') {
  //       setTheme(e.data.text.theme);
  //     }
  //   });
  // }, []);
  // show uboot env
  useEffect(() => {
    if (getDeviceListAndHeartObj?.tableList && firstTimes === 1) {
      const newUbootEnvList = (getDeviceListAndHeartObj?.tableList || [])
        .map((item) => item?.children || [])
        .flat(Infinity)
        ?.filter((item: any) => item?.firmware === 'Uboot')
        .map((item: any, index) => {
          return {
            key: item.key || String(index),
            env: item.env || 0,
          };
        });
      setUbootEnv(newUbootEnvList);
      setFirstTimes((c) => c + 1);
    }
  }, [getDeviceListAndHeartObj?.tableList]);

  const getDeviceDataList = async () => {
    try {
      const res = await myFetch({
        url: `http://${startParams.initIp}:28700/upgrade/heartbeat`,
        params: { heartbeat: String(startParams.vscodeId) },
        isExceptionHand: true,
      });
      if (res.result === '0') {
        setIsLoading(false);
        setGetDeviceListAndHeartObj(mockDeviceListInterface);
      } else {
        setIsLoading(true);
        setGetDeviceListAndHeartObj(mockDeviceListInterface);
        message.error(res.msg);
      }
    } catch (error) {
      setGetDeviceListAndHeartObj(mockDeviceListInterface);
      // setIsLoading(true);
      setErrorTimes((obj) => {
        return {
          ...obj,
          times: errorTimes.times + 1,
        };
      });
    }
  };
  // first query firmware list
  useEffect(() => {
    getDeviceDataList();
  }, [startParams?.initIp]);
  // 轮询查状态
  useEffect(() => {
    // 设备列表接口
    const time = setInterval(() => {
      if (errorTimes.times < errorTimes.aboveTimes) {
        getDeviceDataList();
      } else {
        setIsErrorPage(true);
      }
    }, 3000);
    // 清除定时器
    return () => clearInterval(time);
  }, [mockDeviceListInterface]); // 监听 initIp 变化 请求接口

  return (
    <ConfigProvider theme={getThemeToken(theme)}>
      <Dropdown menu={{ items: [] }} trigger={['contextMenu']}>
        <Spin
          indicator={
            <LoadingOutlined
              spin
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
          spinning={isLoading}
          size="large"
          tip={
            <div style={{ fontSize: 20 }}>
              Trying to reconnect the device...
            </div>
          }
          fullscreen={isLoading}
        >
          <NavPage />
          <DetailsPage />
        </Spin>
      </Dropdown>
    </ConfigProvider>
  );
};

export default LayoutPage;
