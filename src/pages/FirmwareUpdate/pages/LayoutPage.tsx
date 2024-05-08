// import { useEffect } from 'react';
import NavPage from './NavPage';
import { useFUProviderModule } from '../components/containers';
import DetailsPage from './DetailsPage';
import myFetch from '@/components/myFetch';
import { mockDeviceListInterface } from './mockData/mockTableDataList';
import '../index.css';
import { useEffect } from 'react';

const LayoutPage = ({ setIsErrorPage }) => {
  const { setGetDeviceList, errorTimes, setErrorTimes, startParams } =
    useFUProviderModule();
  const fetchData = async () => {
    try {
      const res = await myFetch({
        url: `http://${startParams.initIp}:29000/upgrade/heartbeat`,
        params: { heartbeat: String(startParams.vscodeId) },
        isExceptionHand: true,
      });
      setGetDeviceList(res.data);
    } catch (error) {
      setGetDeviceList(mockDeviceListInterface);
      setErrorTimes((obj) => {
        return {
          ...obj,
          times: errorTimes.times + 1,
        };
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    // 设备列表接口
    const time = setInterval(() => {
      if (errorTimes.times < errorTimes.aboveTimes) {
        fetchData();
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

  return (
    <div>
      {/* <div style={{ margin: '0 auto', width: '80%' }}> */}
      <NavPage />
      <DetailsPage />
      {/* </div> */}
    </div>
  );
};

export default LayoutPage;
