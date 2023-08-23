import { Button } from 'antd';

import styles from './index.less';
import AddHardBin from './components/AddHardBin';

const PopoverButtonList = () => {
  return (
    <div>
      <AddHardBin />
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
    </div>
  );
};

export default PopoverButtonList;
