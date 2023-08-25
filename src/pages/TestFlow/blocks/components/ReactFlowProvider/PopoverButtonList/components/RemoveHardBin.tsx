import { Popover, Button, message } from 'antd';
import { useModel } from '@umijs/max';

import styles from '../index.less';

const RemoveHardBin = () => {
  const { binMap, setBinMap } = useModel('useTestFlowModel');

  const handleRemoveItem = (Name: string) => {
    if (binMap.HardBin.length > 1) {
      const hardBinList = binMap.HardBin.filter((item) => item.Name !== Name);
      setBinMap((obj) => {
        return {
          ...obj,
          HardBin: hardBinList,
        };
      });
    } else {
      message.error('最少保留一个HardBin');
    }
  };
  const list = (
    <>
      {binMap.HardBin.map((item) => (
        <div
          className={styles['remove-bin-item-div']}
          onClick={() => handleRemoveItem(item.Name)}
          key={item.Name}
        >
          {item.Name}
        </div>
      ))}
    </>
  );
  return (
    <Popover placement="right" title="" content={list} trigger="hover">
      <Button className={styles['bottom-item']}>remove option</Button>
    </Popover>
  );
};

export default RemoveHardBin;
