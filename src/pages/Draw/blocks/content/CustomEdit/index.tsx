import MainFlowEdit from './MainFlowEdit';
import TestItem from './TestItem';

import styles from './index.less';

const CustomEdit = () => {
  return (
    <div className={styles.wrapper}>
      <MainFlowEdit />
      <TestItem />
    </div>
  );
};

export default CustomEdit;
