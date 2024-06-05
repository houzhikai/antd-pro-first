import React, { useEffect } from 'react';
import { ConfigProvider, Spin, message } from 'antd';
import LeftPage from './LeftPage';
import NavPage from './NavPage';
import RightPage from './RightPage';
import { ProviderFunc } from '../components/containers';
import ColorListModalPage from './ModalPages/ColorListModalPage';
import ModeModalPage from './ModalPages/ModeModalPage';
import { useAsyncEffect } from 'ahooks';
import myFetch from '../components/myFetch';
import {
  custom_dark_token,
  custom_dark_Button,
  custom_dark_Popconfirm,
  custom_dark_Radio,
  custom_dark_Tree,
  custom_dark_Input,
  custom_dark_Message,
  custom_dark_Modal,
  custom_dark_Select,
} from '../components/theme';
import '../index.css';

const LayoutPage = ({ setIsErrorPage }) => {
  const {
    setBitMapPort,
    vscodeParams,
    theme,
    loading,
    setLoading,
    bitMapPort,
  } = ProviderFunc();

  useAsyncEffect(async () => {
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:27700/toolmgr/startbitmap`,
        params: { special: vscodeParams.special },
      });
      setBitMapPort(res[0].value);
    } catch (error) {
      console.log({ error });
      // setIsErrorPage(true);
    }
  }, []);

  // const queryConvertStatusFetch = async () => {
  //   try {
  //     const res = await myFetch({
  //       url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/queryconvertstatus`,
  //       isExceptionHand: true,
  //     });
  //     if (res.result === 0) {
  //       /**
  //        * 接口调用成功的操作,
  //        * 1: Converting, 0: not converting
  //        * true: Converting  false: not converting
  //        */
  //       setLoading(res.data[0].value === 1);
  //     } else {
  //       message.error(res.msg);
  //     }
  //   } catch (error) {
  //     message.error('Get convert status fail');
  //     setLoading(true);
  //   }
  // };

  // useEffect(() => {
  //   if (bitMapPort) {
  //     console.log(11);
  //     queryConvertStatusFetch();
  //   }
  // }, [bitMapPort]);
  // useEffect(() => {
  //   // 设备列表接口
  //   const time = setInterval(() => {
  //     if (loading) {
  //       console.log(22);
  //       queryConvertStatusFetch();
  //     } else {
  //       setLoading(false);
  //     }
  //   }, 3000);
  //   // 清除定时器
  //   return () => clearInterval(time);
  // }, [loading, bitMapPort]);

  return (
    <ConfigProvider
      theme={
        theme === 'dark'
          ? {
              token: custom_dark_token,
              components: {
                Button: custom_dark_Button,
                Popconfirm: custom_dark_Popconfirm,
                Radio: custom_dark_Radio,
                Tree: custom_dark_Tree,
                Input: custom_dark_Input,
                Message: custom_dark_Message,
                Modal: custom_dark_Modal,
                Select: custom_dark_Select,
              },
            }
          : {}
      }
    >
      <Spin spinning={loading} size="large" tip="Converting">
        <NavPage />
        <div className="content-page">
          <LeftPage />
          <RightPage />
        </div>
        <ModeModalPage />
        <ColorListModalPage />
      </Spin>
    </ConfigProvider>
  );
};

export default LayoutPage;
