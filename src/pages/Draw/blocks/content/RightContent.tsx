import { useModel } from '@umijs/max';
import styles from '../index.less';
import CustomEdit from './CustomEdit';

const RightContent = () => {
  const { isHiddenFormat } = useModel('useDrawModel');
  return (
    <>
      {isHiddenFormat ? (
        <div className={styles.right}>
          <CustomEdit />
        </div>
      ) : null}
    </>
  );
};

export default RightContent;
