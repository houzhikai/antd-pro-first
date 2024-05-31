import LeftPage from './LeftPage';
import NavPage from './NavPage';
import RightPage from './RightPage';
import { ProviderFunc } from '../components/containers';
import ColorListModalPage from './ModalPages/ColorListModalPage';
import ModeModalPage from './ModalPages/ModeModalPage';
// import myFetch from '@/components/myFetch';
// import { useAsyncEffect } from 'ahooks';
import '../index.css';
import OpenPhysicalModalPage from './ModalPages/OpenPhysicalModalPage';
import { ConfigProvider } from 'antd';
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

const LayoutPage = () => {
  const { theme } = ProviderFunc();

  // useAsyncEffect(async () => {
  //   try {
  //     const res = await myFetch({
  //       url: `http://${vscodeParams.initIp}:27700/toolmgr/startbitmap`,
  //       params: { special: vscodeParams.special },
  //     });
  //     setBitMapPort(res.data[0].value);
  //   } catch (error) {
  //     // TODO, 没有返回端口号，返回错误页面
  //     setBitMapPort('27001');
  //     // setIsErrorPage(true);
  //   }
  // }, []);
  console.log({ theme });
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
                Modal: custom_dark_Modal,
                Message: custom_dark_Message,
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
      <OpenPhysicalModalPage />
    </ConfigProvider>
  );
};

export default LayoutPage;
