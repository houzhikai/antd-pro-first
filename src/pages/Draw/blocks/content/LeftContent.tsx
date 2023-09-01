import { Collapse } from 'antd';
import { useModel } from '@umijs/max';
import TestItem from './LeftContent/TestItem';
import Sidebar from './LeftContent/Sidebar';

import styles from '../index.less';

const { Panel } = Collapse;

const LeftContent = () => {
  const { isHiddenSide } = useModel('useDrawModel');
  const text = `test demo`;

  return (
    <>
      {isHiddenSide ? (
        <div className={styles.left}>
          <Collapse defaultActiveKey={['test-item']} size="small" ghost>
            <Panel
              header={<div className={styles.header}>测试项</div>}
              key="test-item"
            >
              <TestItem />
            </Panel>
            <Panel
              header={<div className={styles.header}>subflow</div>}
              key="subflow"
            >
              <Sidebar />
            </Panel>
            <Panel
              header={<div className={styles.header}>mainFlow</div>}
              key="mainFlow"
            >
              {text}
            </Panel>
          </Collapse>
        </div>
      ) : null}
    </>
  );
};

export default LeftContent;
