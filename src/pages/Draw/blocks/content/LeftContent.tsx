import { Collapse } from 'antd';
import styles from '../index.less';
import Sidebar from './LeftContent/Sidebar';
import { useModel } from '@umijs/max';

const { Panel } = Collapse;

const LeftContent = () => {
  const { isHiddenSide } = useModel('useDrawModel');
  const text = `test demo`;

  return (
    <>
      {isHiddenSide ? (
        <div className={styles.left}>
          <Collapse defaultActiveKey={['hardBin']} size="small" ghost>
            <Panel
              header={<div className={styles.header}>hardBin</div>}
              key="hardBin"
            >
              {text}
            </Panel>
            <Panel
              header={<div className={styles.header}>softBin</div>}
              key="softBin"
            >
              {text}
            </Panel>
            <Panel
              header={<div className={styles.header}>测试项</div>}
              key="test-item"
            >
              <Sidebar />
            </Panel>
            <Panel
              header={<div className={styles.header}>subflow</div>}
              key="subflow"
            >
              {text}
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
