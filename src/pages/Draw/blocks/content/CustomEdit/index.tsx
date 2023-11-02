import MainFlowEdit from './MainFlowEdit';
import SelectedEdgeItem from './SelectedEdgeItem';
import SoftBin from './SoftBin';
// import SubflowNode from './SubflowNode';
import TestItem from './TestItem';

import styles from './index.less';

const CustomEdit = () => {
  return (
    <div className={styles.wrapper}>
      <MainFlowEdit />
      <TestItem />
      <SelectedEdgeItem />
      <SoftBin />
      {/* <SubflowNode /> */}
    </div>
  );
};

export default CustomEdit;
