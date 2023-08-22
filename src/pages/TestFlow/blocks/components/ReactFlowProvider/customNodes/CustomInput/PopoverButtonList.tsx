import { Button } from 'antd';
import styles from './index.less';

const PopoverButtonList = () => {
  return (
    <div>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
      <Button className={styles['bottom-item']}>test button</Button>
    </div>
  );
};

export default PopoverButtonList;
