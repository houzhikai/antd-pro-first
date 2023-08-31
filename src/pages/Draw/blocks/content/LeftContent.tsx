import { Collapse } from 'antd';
import styles from '../index.less';

const { Panel } = Collapse;

const LeftContent = () => {
  const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

  return (
    <div className={styles.left}>
      <Collapse defaultActiveKey={['hardBin']} ghost>
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
          {text}
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
  );
};

export default LeftContent;
