import React from 'react';
import { message, Button, Tooltip } from 'antd';
import { useAsyncEffect } from 'ahooks';
import ConvertPage from '../SingleModePages/DetailDataPage/NavAction/ConvertPage';
import { ProviderFunc } from '../../components/containers';
import myFetch from '../../components/myFetch';
import '../../index.css';

const NavActionPage = () => {
  const { bitMapPort, vscodeParams, setTriggerTiming, fullPath, setFullPath, setWaferMapData, setWafermapLayout } =
    ProviderFunc();

  useAsyncEffect(async () => {
    if (vscodeParams.initIp && fullPath.importPhysicalPath !== '') {
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/selectbitmapdir?location=${fullPath.importPhysicalPath}`,
          isExceptionHand: true,
          timeout: 300, // Large data volume and long parsing time
        });
        if (res.result === 0) {
          const result = JSON.parse(res.data[0].value);
          setWaferMapData({ info: result.waferInfo, data: result.waferData });
          setWafermapLayout({
            xMin: result.waferLayout.xOrigin,
            xMax: result.waferLayout.xMax,
            yMin: result.waferLayout.yOrigin,
            yMax: result.waferLayout.yMax,
            dots: result.waferLayout.origin, // TopLeft, TopRight, BottomLeft, BottomRight
            gap: result.waferLayout.flat, // bottom top left right
          });
        } else {
          message.error(res.msg);
        }
      } catch (error) {
        message.error('Get physical file fail');
      }
      setFullPath((obj) => ({ ...obj, importPhysicalPath: '' }));
    }
  }, [vscodeParams.initIp, bitMapPort, fullPath.importPhysicalPath]);

  // 选择文件夹
  const handleSelectFolder = async () => {
    setTriggerTiming((obj) => ({ ...obj, importPhysical: true }));
  };

  return (
    <div className='bit-map-nav-page'>
      <ConvertPage />
      <Button className='bit-map-nav-gap' type='primary' size='small' onClick={handleSelectFolder}>
        Import
      </Button>
    </div>
  );
};

export default NavActionPage;
