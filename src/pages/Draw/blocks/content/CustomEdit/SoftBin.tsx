import { useModel } from '@umijs/max';
import { Select } from 'antd';
import { useMemo } from 'react';

import styles from './index.less';

const SoftBin = () => {
  const { softBinData } = useModel('useDrawModel');
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = useMemo(
    () => nodes.filter((item) => item.selected)[0],
    [nodes],
  );
  const softBinNameList = softBinData.map((item) => item.Name);
  const options = softBinNameList.map((item) => {
    if (item === selectedNodeItem?.data?.label) {
      return {
        disabled: true,
        value: item,
        label: item,
      };
    }
    return {
      value: item,
      label: item,
    };
  });
  const handleChange = (value) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        // const id = `'fen-bin-${value}-${item.id.split('.')[1]}`;
        // 不可更改id，因为会影响连线
        return {
          ...item,
          data: { label: value },
        };
      }
      return item;
    });
    setNodes(newData);
  };
  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'fen-bin' ? (
        <>
          <div className={styles.title}>Member：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>FenBin： </label>
            <Select
              style={{ width: '100%' }}
              options={options}
              value={selectedNodeItem?.data?.label}
              onChange={handleChange}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SoftBin;
