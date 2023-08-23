import { Popover, Button, message } from 'antd';
import styles from '../index.less';
import { useModel } from '@umijs/max';

const RemoveHardBin = () => {
  const { binMap, setBinMap } = useModel('useTestFlowModel');

  const handleRemoveItem = (Name: string) => {
    if (binMap.HardBin.length > 1) {
      const xxx = binMap.HardBin.filter((item) => item.Name !== Name);
      console.log(xxx);
      setBinMap((obj) => {
        return {
          ...obj,
          HardBin: xxx,
        };
      });
    } else {
      message.error('只剩下一个HardBin，不可删除');
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
