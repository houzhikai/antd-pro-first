import { Button } from 'antd';
import AddHardBin from './components/AddHardBin';
import RemoveHardBin from './components/RemoveHardBin';

import styles from './index.less';

const PopoverButtonList = () => {
  return (
    <div>
      <AddHardBin />
      <RemoveHardBin />
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
    </div>
  );
};

export default PopoverButtonList;
