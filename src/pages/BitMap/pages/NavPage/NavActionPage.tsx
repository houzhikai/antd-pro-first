import React, { useEffect } from 'react';
import { message, Button, Tooltip } from 'antd';
import ConvertPage from '../RightPage/DetailDataPage/NavAction/ConvertPage';
import { otherColor } from '../../icons/base64/otherColor';
import myFetch from '../../components/myFetch';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';
import { useAsyncEffect } from 'ahooks';

const NavActionPage = () => {
  const {
    setModifyColorModalObj,
    setPhysicalFileList,
    bitMapPort,
    vscodeParams,
    isStack,
    setTriggerTiming,
    fullPath,
    setFullPath,
    setSelectedTreeDataList,
    setData,
  } = ProviderFunc();

  useAsyncEffect(async () => {
    if (vscodeParams.initIp && fullPath.importPhysicalPath !== '') {
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/selectbitmapdir?location=${fullPath.importPhysicalPath}`,
          isExceptionHand: true,
          timeout: 300,
        });
        if (res.result === 0) {
          const result = JSON.parse(res.data[0].value);
          const newKeyResult = result.map((item, index) => {
            if (item.children) {
              const children = item.children.map((duts, idx) => ({
                ...duts,
                key: `${index}-0-${idx}`,
                location: item.location,
                name: duts.title,
                title: (
                  <Tooltip placement='right' title={duts.title}>
                    <div className='bit-map-left-dut-title'>{duts.title}</div>
                  </Tooltip>
                ),
              }));
              return { ...item, children };
            }
            return { ...item, key: `${index}-0` };
          });
          setPhysicalFileList(newKeyResult);
          setSelectedTreeDataList([]);
          setData([]);
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

  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };

  return (
    <div className='bit-map-nav-page'>
      <ConvertPage />
      <Button className='bit-map-nav-gap' type='primary' size='small' onClick={handleSelectFolder}>
        Import
      </Button>

      {/* 颜色选择器 */}
      {isStack ? (
        <Button
          className='bit-map-nav-gap'
          type='text'
          icon={<img width={20} src={otherColor} />}
          onClick={handleOpenColorListModal}
          disabled={!isStack}
        />
      ) : (
        <Tooltip title='Color Settings' placement='bottom'>
          <Button
            className='bit-map-nav-gap'
            type='text'
            icon={<img width={20} src={otherColor} />}
            onClick={handleOpenColorListModal}
            disabled={!isStack}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default NavActionPage;
