import { useEffect } from 'react';
import { message } from 'antd';
import NavPage from './NavPage';
import { useFUProviderModule } from '../components/containers';
import DetailsPage from './DetailsPage';
import myFetch from '@/components/myFetch';
import '../index.css';
import { mockDeviceListInterface } from './mockData/mockTableDataList';

// TODO 样式放在 vscode 中再调试
const LayoutPage = ({ setIsErrorPage }) => {
  const {
    setGetDeviceListAndHeartObj,
    errorTimes,
    setErrorTimes,
    startParams,
    setUbootEnv,
  } = useFUProviderModule();
  const getDeviceDataList = async () => {
    try {
      const res = await myFetch({
        url: `http://${startParams.initIp}:28700/upgrade/heartbeat`,
        params: { heartbeat: String(startParams.vscodeId) },
        isExceptionHand: true,
      });
      if (res.result === '0') {
        // setGetDeviceListAndHeartObj(res.data);

        setGetDeviceListAndHeartObj(mockDeviceListInterface);
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      setGetDeviceListAndHeartObj(mockDeviceListInterface);

      setErrorTimes((obj) => {
        return {
          ...obj,
          times: errorTimes.times + 1,
        };
      });
    }
  };
  useEffect(() => {
    const ubootEnvList = (mockDeviceListInterface?.tableList || [])
      .map((item) => item.children)
      .flat(Infinity)
      ?.filter((item: any) => item.firmware === 'Uboot')
      .map((item: any, index) => {
        return {
          key: item.key || String(index),
          env: item.env || 0,
        };
      });
    setUbootEnv(ubootEnvList);
  }, []);
  useEffect(() => {
    getDeviceDataList();
  }, []);
  useEffect(() => {
    // 设备列表接口
    const time = setInterval(() => {
      if (errorTimes.times < errorTimes.aboveTimes) {
        getDeviceDataList();
      } else {
        setIsErrorPage(true);
        setErrorTimes((obj) => {
          return {
            ...obj,
            times: obj.aboveTimes,
          };
        });
      }
    }, 3000);
    // 清除定时器
    return () => clearInterval(time);
  }, [errorTimes]); // 监听 initIp 变化 请求接口

  // 轮询查状态

  return (
    <>
      <NavPage />
      <DetailsPage />
    </>
  );
};

export default LayoutPage;
