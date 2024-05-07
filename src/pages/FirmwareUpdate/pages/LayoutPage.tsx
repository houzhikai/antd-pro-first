// import { useEffect } from 'react';
import NavPage from './NavPage';
import { useFUProviderModule } from '../components/containers';
import DetailsPage from './DetailsPage';
import myFetch from '@/components/myFetch';
import { useAsyncEffect } from 'ahooks';
import { mockDeviceListInterface } from './mockData/mockTableDataList';
import '../index.css';

const LayoutPage = () => {
  const { setGetDeviceList, setIsErrorPage } = useFUProviderModule();
  const initIp = '172.168.0.100';
  // 初始化设备列表接口
  useAsyncEffect(async () => {
    try {
      const res = await myFetch({
        url: `http://${initIp}:29000/upgrade/heartbeat`,
        params: { heartbeat: String(12345) },
        timeout: 1,
        isExceptionHand: true,
      });
      console.log({ res });
    } catch (error) {
      setGetDeviceList(mockDeviceListInterface);
      setIsErrorPage(true);
    }
  }, []);

  // 轮询 设备列表接口
  // useEffect(() => {
  //   let errTimes = 0;
  //   const time = setInterval(async () => {
  //     try {
  //       const res = await myFetch({
  //         url: `http://${initIp}:29000/upgrade/heartbeat`,
  //         params: { heartbeat: String(12345) },
  //         timeout: 1,
  //         isExceptionHand: true,
  //       });
  //       console.log({ res });
  //     } catch (error) {
  //       setGetDeviceList(mockDeviceListInterface);
  //       console.log(11);
  //       errTimes++;
  //     }

  //     if (errTimes > 1) {
  //       setIsErrorPage(true);
  //       return (errTimes = 1);
  //     }
  //   }, 3000);
  //   return () => {
  //     clearInterval(time);
  //   };
  // }, []); // 监听 initIp 变化 请求接口

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
