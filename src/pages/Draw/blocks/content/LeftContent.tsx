import { Collapse } from 'antd';
import { useModel } from '@umijs/max';
import TestItem from './LeftContent/TestItem';
import Sidebar from './LeftContent/Sidebar';
import SubflowList from './LeftContent/SubflowList';

import styles from '../index.less';

const { Panel } = Collapse;

const LeftContent = () => {
  const { isHiddenSide } = useModel('useDrawModel');

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
              <SubflowList />
            </Panel>
            <Panel
              header={<div className={styles.header}>mainFlow</div>}
              key="mainFlow"
            >
              <Sidebar />
            </Panel>
          </Collapse>
        </div>
      ) : null}
    </>
  );
};

export default LeftContent;
