import { Descriptions } from 'antd';
import React from 'react';
import styles from '../../../index.less';
import { useModel } from '@umijs/max';

const DeviceInfo = () => {
  const { waferMapData } = useModel('useEchartsModel');

  const title = waferMapData?.deviceInfo?.title ?? '';
  const descriptions = waferMapData?.deviceInfo?.data ?? [];

  return (
    <div>
      <h3>{title}</h3>
      {descriptions.length > 0 ? (
        <Descriptions
          className={styles.left}
          bordered
          column={1}
          items={descriptions}
          size="small"
        />
      ) : null}
    </div>
  );
};

export default DeviceInfo;
