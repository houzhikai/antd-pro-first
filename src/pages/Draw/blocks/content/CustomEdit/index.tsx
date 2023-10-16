import MainFlowEdit from './MainFlowEdit';
import SelectedEdgeItem from './SelectedEdgeItem';
import SubflowNode from './SubflowNode';
import TestItem from './TestItem';

import styles from './index.less';

const CustomEdit = () => {
  return (
    <div className={styles.wrapper}>
      <MainFlowEdit />
      <TestItem />
      <SelectedEdgeItem />
      <SubflowNode />
    </div>
  );
};

export default CustomEdit;
