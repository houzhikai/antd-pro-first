import { Collapse } from 'antd';
import Content from './Content';

import styles from '../../index.less';

const { Panel } = Collapse;

const SetAxisValue = () => {
  return (
    <div style={{ margin: '0 12px' }}>
      <Collapse
        expandIconPosition="end"
        size="small"
        className={styles.collapse}
      >
        <Panel header="设置坐标轴值" key="1">
          <Content />
        </Panel>
      </Collapse>
    </div>
  );
};
export default SetAxisValue;
