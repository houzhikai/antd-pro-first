import React from 'react';
import { ProviderFunc } from '../../components/containers';
import { Button, Tooltip } from 'antd';
import { otherColor } from '../../icons/base64/otherColor';
import '../../index.css';

const ColorSettings = () => {
  const { setModifyColorModalObj, isStack } = ProviderFunc();

  // 打开 颜色选择 弹窗
  const handleOpenColorListModal = () => {
    setModifyColorModalObj((obj) => ({ ...obj, open: true }));
  };

  return (
    <div>
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

export default ColorSettings;
