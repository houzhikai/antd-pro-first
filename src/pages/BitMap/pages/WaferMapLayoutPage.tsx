import React, { useEffect } from 'react';
import { ConfigProvider, Spin, message } from 'antd';
import WaferMapPages from './WaferMapPages/WaferMapPages';
import SingleModeModal from './ModalPages/SingleModeModals/SingleModeModal';
import StackModeModalPage from './ModalPages/StackModeModal';
import ColorListModalPage from './ModalPages/ColorListModalPage';
import ModeModalPage from './ModalPages/ModeModalPage';
import { getThemeToken } from '../components/getThemeToken';
import { ProviderFunc } from '../components/containers';
import { useAsyncEffect } from 'ahooks';
import myFetch from '../components/myFetch';

// // @ts-expect-error
// const vscode = acquireVsCodeApi();

const WaferMapLayoutPage = ({ setIsErrorPage }) => {
  const {
    setBitMapPort,
    vscodeParams,
    theme,
    loading,
    setLoading,
    bitMapPort,
    // setSelectDutsModal,
    // setVscodeParams,
    // setTheme,
    // triggerTiming,
    // setTriggerTiming,
    // setFullPath,
    // setConvertModalObj,
    // setScrambleCfgOptionsList,
    // setModifyColorModalObj,
    // setEchartsDataColor,
    // echartsDataColor,
  } = ProviderFunc();

  // useEffect(() => {
  //   vscode.postMessage({ command: 'startParams' });
  // }, []);

  // useEffect(() => {
  //   if (triggerTiming.importPhysical) {
  //     vscode.postMessage({ command: 'importDirLocation' });
  //   }
  // }, [triggerTiming.importPhysical]);

  // // source file location
  // useEffect(() => {
  //   if (triggerTiming.sourceDataLocation > 1) {
  //     vscode.postMessage({ command: 'importSourcrFile' });
  //   }
  // }, [triggerTiming.sourceDataLocation]);

  // // output file location
  // useEffect(() => {
  //   if (triggerTiming.physicalOutputLocation > 1) {
  //     vscode.postMessage({ command: 'importOutputFile' });
  //   }
  // }, [triggerTiming.physicalOutputLocation]);

  // // saveStackColorList
  // useEffect(() => {
  //   if (triggerTiming.colorList > 1) {
  //     const colorList = echartsDataColor.map((item) => item.color);
  //     vscode.postMessage({ command: 'saveStackColorList', text: colorList });
  //   }
  // }, [triggerTiming.colorList]);

  // // stack UI select dut1 location
  // useEffect(() => {
  //   if (triggerTiming.stackModeDut1Location > 1) {
  //     vscode.postMessage({ command: 'selectDutOneLocation' });
  //   }
  // }, [triggerTiming.stackModeDut1Location]);

  // // stack UI select dut2 location
  // useEffect(() => {
  //   if (triggerTiming.stackModeDut2Location > 1) {
  //     vscode.postMessage({ command: 'selectDutTwoLocation' });
  //   }
  // }, [triggerTiming.stackModeDut2Location]);

  // useEffect(() => {
  //   window.addEventListener('message', (e) => {
  //     if (e.data.command === 'startParams') {
  //       setVscodeParams(e.data.text.vscodeParams);
  //       const defaultScrambleCfg = e.data.text.physicalConvertFiles?.[0];
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         sourceDataLocation: e.data.text.sourceDataLocation,
  //         physicalOutputLocation: e.data.text.physicalOutputLocation,
  //         scrambleCfg: {
  //           fileName: defaultScrambleCfg?.label,
  //           location: defaultScrambleCfg?.location,
  //         },
  //       }));
  //       setTheme(e.data.text.theme);
  //       setScrambleCfgOptionsList(e.data.text.physicalConvertFiles);
  //       setModifyColorModalObj((obj) => ({
  //         ...obj,
  //         colorList: e.data.text.colorListCfg,
  //       }));
  //       setSelectDutsModal((obj) => ({
  //         ...obj,
  //         dut1: e.data.text.selectDutOneLocation,
  //         dut2: e.data.text.selectDutTwoLocation,
  //       }));
  //       // echarts data
  //       const newColorList = e.data.text.colorListCfg.map((item, index) => {
  //         return { value: index + 1, color: item };
  //       });
  //       setEchartsDataColor(newColorList);
  //     } else if (e.data.command === 'params') {
  //       setTheme(e.data.text.theme);
  //     } else if (e.data.command === 'importDirLocation') {
  //       setTriggerTiming((obj) => ({ ...obj, importPhysical: false }));
  //       setFullPath((obj) => ({
  //         ...obj,
  //         importPhysicalPath: e.data.text === '' ? obj.importPhysicalPath : e.data.text,
  //       }));
  //     } else if (e.data.command === 'importSourcrFile') {
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         sourceDataLocation: e.data.text === '' ? obj.sourceDataLocation : e.data.text,
  //       }));
  //     } else if (e.data.command === 'importOutputFile') {
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         physicalOutputLocation: e.data.text === '' ? obj.physicalOutputLocation : e.data.text,
  //       }));
  //     } else if (e.data.command === 'selectDutOneLocation') {
  //       setSelectDutsModal((obj) => ({ ...obj, dut1: e.data.text }));
  //     } else if (e.data.command === 'selectDutTwoLocation') {
  //       setSelectDutsModal((obj) => ({ ...obj, dut2: e.data.text }));
  //     }
  //   });
  // }, []);

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
    <ConfigProvider theme={getThemeToken(theme)}>
      <Spin spinning={loading} size="large" tip="Converting">
        <WaferMapPages />
        <SingleModeModal />
        <StackModeModalPage />
        <ModeModalPage />
        <ColorListModalPage />
      </Spin>
    </ConfigProvider>
  );
};

export default WaferMapLayoutPage;
