import MainFlowEdit from './MainFlowEdit';
import SelectedEdgeItem from './SelectedEdgeItem';
import TestItem from './TestItem';

import styles from './index.less';

const CustomEdit = () => {
  return (
    <div className={styles.wrapper}>
      <MainFlowEdit />
      <TestItem />
      <SelectedEdgeItem />
    </div>
  );
};

export default CustomEdit;
