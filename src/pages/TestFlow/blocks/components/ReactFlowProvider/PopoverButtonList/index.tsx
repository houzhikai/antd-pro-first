import { Button } from 'antd';
import AddHardBin from './components/AddHardBin';
import RemoveHardBin from './components/RemoveHardBin';
import SettingStartNode from './components/SettingStartNode';
import SettingStopNode from './components/SettingStopNode';
import ChangeTesItem from './components/ChangeTesItem';

import styles from './index.less';

const PopoverButtonList = () => {
  return (
    <div>
      <AddHardBin />
      <RemoveHardBin />
      <SettingStartNode />
      <SettingStopNode />
      <ChangeTesItem />
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
    </div>
  );
};

export default PopoverButtonList;
