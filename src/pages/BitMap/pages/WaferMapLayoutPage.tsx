import React, { useEffect } from 'react';
import { ConfigProvider, message } from 'antd';
import WaferMapPages from './WaferMapPages/WaferMapPages';
import ColorListModalPage from './ModalPages/ColorListModalPage';
import ModeModalPage from './ModalPages/ModeModalPage';
import { getThemeToken } from '../components/getThemeToken';
import { useAsyncEffect } from 'ahooks';
import myFetch from '../components/myFetch';
import BitMapModalPages from './BitMapPages';
import { ProviderFunc } from '../components/containers';

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
    // scrambleCfgOptionsList,
    // setModifyColorModalObj,
    // setEchartsDataColor,
    // echartsDataColor,
    // echartsIndex,
    // isStackModalOpen,
    // bitmapColorModalObj,
    // setBitmapColorModalObj,
    // setWaferIDPath,
    // waferIDPath
  } = ProviderFunc();

  // useEffect(() => {
  //   vscode.postMessage({ command: 'startParams' });
  // }, []);

  // useEffect(() => {
  //   if (triggerTiming.importPhysical) {
  //     vscode.postMessage({ command: 'importDirLocation' });
  //   }
  // }, [triggerTiming.importPhysical]);

  // useEffect(() => {
  //   if (triggerTiming.importWaferIDPath) {
  //     vscode.postMessage({ command: 'importWaferIDPath', text: waferIDPath });
  //   }
  // }, [triggerTiming.importWaferIDPath]);

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

  // //scrmble file list
  // useEffect(() => {
  //   if (triggerTiming.importScrambleFile > 1) {
  //     vscode.postMessage({ command: 'importScrambleFile' });
  //   }
  // }, [triggerTiming.importScrambleFile]);

  // useEffect(() => {
  //   if (triggerTiming.deleteScrambleFile !== '') {
  //     vscode.postMessage({ command: 'deleteScrambleFile', text: triggerTiming.deleteScrambleFile });
  //     setTriggerTiming((obj) => ({
  //       ...obj,
  //       deleteScrambleFile: '',
  //     }));
  //   }
  // }, [triggerTiming.deleteScrambleFile]);
  // useEffect(() => {
  //   if (triggerTiming.changeScrambleFile !== '') {
  //     vscode.postMessage({ command: 'changeScrambleFile', text: triggerTiming.changeScrambleFile });
  //     setTriggerTiming((obj) => ({
  //       ...obj,
  //       changeScrambleFile: '',
  //     }));
  //   }
  // }, [triggerTiming.changeScrambleFile]);

  // // saveStackColorList
  // useEffect(() => {
  //   if (triggerTiming.colorList > 1) {
  //     // const colorList = echartsDataColor.map((item) => item.color);
  //     vscode.postMessage({ command: 'saveStackColorList', text: bitmapColorModalObj.colorList });
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
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         sourceDataLocation: e.data.text.sourceDataLocation,
  //         physicalOutputLocation: e.data.text.physicalOutputLocation,
  //         scrambleCfg: {
  //           fileName: e.data.text.selectScrambleCfg,
  //           location:
  //             e.data.text.physicalConvertFiles.find((item) => item.label === e.data.text.selectScrambleCfg)?.location ??
  //             '',
  //         },
  //       }));
  //       setTheme(e.data.text.theme);
  //       setScrambleCfgOptionsList(() => e.data.text.physicalConvertFiles);
  //       setBitmapColorModalObj((obj) => ({ ...obj, colorList: e.data.text.colorListCfg }))
  //       // setModifyColorModalObj((obj) => ({
  //       //   ...obj,
  //       //   colorList: e.data.text.colorListCfg,
  //       // }));
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
  //     } else if (e.data.command === 'importWaferIDPath') {
  //       setTriggerTiming((obj) => ({ ...obj, importWaferIDPath: false }));
  //       setWaferIDPath(e.data.text)
  //     }
  //     else if (e.data.command === 'importSourcrFile') {
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         sourceDataLocation: e.data.text === '' ? obj.sourceDataLocation : e.data.text,
  //       }));
  //     } else if (e.data.command === 'importOutputFile') {
  //       setConvertModalObj((obj) => ({
  //         ...obj,
  //         physicalOutputLocation: e.data.text === '' ? obj.physicalOutputLocation : e.data.text,
  //       }));
  //     } else if (e.data.command === 'importScrambleFile') {
  //       if (!e.data.result) {
  //         //show error
  //         message.error(e.data.message);
  //       } else {
  //         setScrambleCfgOptionsList(e.data.text);
  //       }
  //     } else if (e.data.command === 'deleteScrambleFile') {
  //       if (!e.data.result) {
  //         //show error
  //         message.error(e.data.message);
  //       } else {
  //         setScrambleCfgOptionsList((list) => {
  //           const newList = list.filter((option) => option.label !== e.data.text);
  //           return newList;
  //         });
  //         setConvertModalObj((obj) => {
  //           return {
  //             ...obj,
  //             scrambleCfg: {
  //               ...obj.scrambleCfg,
  //               fileName: obj.scrambleCfg.fileName === e.data.text ? '' : obj.scrambleCfg.fileName,
  //               location: obj.scrambleCfg.fileName === e.data.text ? '' : obj.scrambleCfg.location,
  //             },
  //           };
  //         });
  //       }
  //     } else if (e.data.command === 'changeScrambleFile') {
  //       if (!e.data.result) {
  //         //show error
  //         message.error(e.data.message);
  //       } else {
  //         if (!scrambleCfgOptionsList) {
  //           return;
  //         }

  //         const filterValue = scrambleCfgOptionsList?.filter((item) => item.value === e.data.text)?.[0] || {
  //           fileName: '',
  //           location: '',
  //         };
  //         setConvertModalObj((obj) => {
  //           return {
  //             ...obj,
  //             scrambleCfg: {
  //               ...obj.scrambleCfg,
  //               fileName: filterValue.value,
  //               location: filterValue.location,
  //             },
  //           };
  //         });
  //       }
  //     } else if (e.data.command === 'selectDutOneLocation') {
  //       setSelectDutsModal((obj) => ({ ...obj, dut1: e.data.text }));
  //     } else if (e.data.command === 'selectDutTwoLocation') {
  //       setSelectDutsModal((obj) => ({ ...obj, dut2: e.data.text }));
  //     }
  //   });
  // }, [scrambleCfgOptionsList]);

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
      message.error('Error:	Failed to get convert status.');
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
      {/* {loading && (
        <LoadingPage
          theme={theme}
          isMask={true}
          isLoadingPage={{ message: 'Converting' }}
        />
      )} */}
      <>
        <WaferMapPages />
        <BitMapModalPages />
        <ModeModalPage />
        <ColorListModalPage />
      </>
    </ConfigProvider>
  );
};

export default WaferMapLayoutPage;
