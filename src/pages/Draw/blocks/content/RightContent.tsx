import { useModel } from '@umijs/max';
import styles from '../index.less';

const RightContent = () => {
  const { isHiddenFormat } = useModel('useDrawModel');
  return (
    <>
      {isHiddenFormat ? <div className={styles.right}>RightContent</div> : null}
    </>
  );
};

export default RightContent;
