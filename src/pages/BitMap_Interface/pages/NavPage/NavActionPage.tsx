import React from 'react';
import { message, Button, Tooltip } from 'antd';
import ConvertPage from '../RightPage/DetailDataPage/NavAction/ConvertPage';
import { otherColor } from '../../icons/base64/otherColor';
import myFetch from '../../components/myFetch';
import { ProviderFunc } from '../../components/containers';
import '../../index.css';
import { treeDataList } from '@/pages/BitMap copy/mockData/mockTreeData';

const NavActionPage = () => {
  const {
    setModifyColorModalObj,
    setPhysicalFileList,
    bitMapPort,
    vscodeParams,
    isStack,
  } = ProviderFunc();
  // 选择文件夹
  const handleSelectFolder = async () => {
    // TODO， vscode interface
    try {
      const res = await myFetch({
        url: `http://${
          vscodeParams.initIp
        }:${bitMapPort}/bitmap/selectbitmapdir?location=${'/home/kkuser/public/partner/'}&fileName=${'afmtest_00'}`,
        isExceptionHand: true,
      });
      if (res.result === 0) {
        const result = JSON.parse(res.data[0].value);
        const newKeyResult = result.map((item, index) => {
          if (item.children) {
            const children = item.children.map((duts, idx) => ({
              ...duts,
              key: `${index}-0-${idx}`,
              location: `${item.location}${item.title}`,
            }));
            return { ...item, children };
          }
          return { ...item, key: `${index}-0` };
        });
        console.log({ newKeyResult });
        setPhysicalFileList(newKeyResult);
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      message.error('获取文件夹数据失败');
      setPhysicalFileList(treeDataList);
    }
  };

  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };

  return (
    <div className="bit-map-nav-page">
      <ConvertPage />
      <Button
        className="bit-map-nav-gap"
        type="primary"
        size="small"
        onClick={handleSelectFolder}
      >
        Import
      </Button>

      {/* 颜色选择器 */}
      {isStack ? (
        <Button
          className="bit-map-nav-gap"
          type="text"
          icon={<img width={20} src={otherColor} />}
          onClick={handleOpenColorListModal}
          disabled={!isStack}
        />
      ) : (
        <Tooltip title="stack 模式可用" placement="bottom">
          <Button
            className="bit-map-nav-gap"
            type="text"
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
