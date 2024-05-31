import React from 'react';
import { ConfigProvider } from 'antd';
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

const LayoutPage = () => {
  const { setBitMapPort, vscodeParams, setIsErrorPage, theme } = ProviderFunc();

  useAsyncEffect(async () => {
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:27700/toolmgr/startbitmap`,
        params: { special: vscodeParams.special },
      });
      setBitMapPort(res[0].value);
    } catch (error) {
      setIsErrorPage(true);
    }
  }, []);

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
      <NavPage />
      <div className="content-page">
        <LeftPage />
        <RightPage />
      </div>
      <ModeModalPage />
      <ColorListModalPage />
    </ConfigProvider>
  );
};

export default LayoutPage;
