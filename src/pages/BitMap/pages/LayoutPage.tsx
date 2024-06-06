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
  custom_light_Table,
  custom_dark_Table,
} from '../components/theme';
import '../index.css';
// @ts-expect-error
// const vscode = acquireVsCodeApi();

const LayoutPage = ({ setIsErrorPage }) => {
  const {
    setBitMapPort,
    vscodeParams,
    theme,
    loading,
    setLoading,
    bitMapPort,
    setVscodeParams,
    setTheme,
    triggerTiming,
    setFullPath,
    setConvertModalObj,
    setScrambleCfgOptionsList,
    setModifyColorModalObj,
    setEchartsDataColor,
    echartsDataColor,
  } = ProviderFunc();

  // useEffect(() => {
  //   vscode.postMessage({ command: 'startParams' });
  // }, []);

  // useEffect(()=>{
  //   if(triggerTiming.importPhysical){
  //     vscode.postMessage({ command: 'importDirLocation' });
  //   }
  // },[triggerTiming.importPhysical])

  // // source file location
  // useEffect(()=>{
  //   if(triggerTiming.sourceDataLocation>1){
  //   vscode.postMessage({ command: 'importSourcrFile' });
  //   }
  // },[triggerTiming.sourceDataLocation])

  // // output file location
  // useEffect(()=>{
  //   if(triggerTiming.physicalOutputLocation>1){
  //   vscode.postMessage({ command: 'importOutputFile' });
  //   }
  // },[triggerTiming.physicalOutputLocation])

  //   // saveStackColorList
  //   useEffect(()=>{
  //     if(triggerTiming.colorList>1){
  //       const colorList = echartsDataColor.map(item=>item.color)
  //     vscode.postMessage({ command: 'saveStackColorList',text:colorList });
  //     }
  //   },[triggerTiming.colorList])

  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (e.data.command === 'startParams') {
        setVscodeParams(e.data.text.vscodeParams);
        const defaultScrambleCfg = e.data.text.physicalConvertFiles?.[0];
        setConvertModalObj((obj) => ({
          ...obj,
          sourceDataLocation: e.data.text.sourceDataLocation,
          physicalOutputLocation: e.data.text.physicalOutputLocation,
          scrambleCfg: {
            fileName: defaultScrambleCfg?.label,
            location: defaultScrambleCfg?.location,
          },
        }));
        setTheme(e.data.text.theme);
        setScrambleCfgOptionsList(e.data.text.physicalConvertFiles);
        setModifyColorModalObj((obj) => ({
          ...obj,
          colorList: e.data.text.colorListCfg,
        }));
        // echarts data
        const newColorList = e.data.text.colorListCfg.map((item, index) => {
          return { value: index + 1, color: item };
        });
        setEchartsDataColor(newColorList);
      } else if (e.data.command === 'params') {
        setTheme(e.data.text.theme);
      } else if (e.data.command === 'importDirLocation') {
        setFullPath((obj) => ({ ...obj, importPhysicalPath: e.data.text }));
      } else if (e.data.command === 'importSourcrFile') {
        setConvertModalObj((obj) => ({
          ...obj,
          sourceDataLocation: e.data.text,
        }));
      } else if (e.data.command === 'importOutputFile') {
        setConvertModalObj((obj) => ({
          ...obj,
          physicalOutputLocation: e.data.text,
        }));
      }
    });
  }, []);

  useAsyncEffect(async () => {
    if (vscodeParams?.initIp) {
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:27700/toolmgr/startbitmap`,
          params: { special: vscodeParams.special },
        });
        setBitMapPort(res[0].value);
      } catch (error) {
        setIsErrorPage(true);
      }
    }
  }, [vscodeParams?.initIp]);

  const queryConvertStatusFetch = async () => {
    try {
      if (vscodeParams?.initIp) {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/queryconvertstatus`,
          isExceptionHand: true,
        });
        if (res.result === 0) {
          /**
           * 0: not converting, 1: Converting, 2:error + msg
           * true: Converting  false: not converting
           */
          const result = JSON.parse(res.data[0].value);
          if (result.status === 0) {
            setLoading(false);
          } else if (result.status === 1) {
            setLoading(true);
          } else {
            setLoading(false);
            message.error(result.msg, 5);
          }
        } else {
          message.error(res.msg);
        }
      }
    } catch (error) {
      message.error('Get convert status fail');
    }
  };

  useEffect(() => {
    if (bitMapPort) {
      queryConvertStatusFetch();
    }
  }, [vscodeParams.initIp, bitMapPort]);

  useEffect(() => {
    const time = setInterval(() => {
      if (loading) {
        queryConvertStatusFetch();
      } else {
        setLoading(false);
      }
    }, 3000);
    return () => clearInterval(time);
  }, [vscodeParams.initIp, loading, bitMapPort]);

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
                Table: custom_dark_Table, //  dark light
              },
            }
          : {
              token: {},
              components: {
                Table: custom_light_Table, //  dark light
              },
            }
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
