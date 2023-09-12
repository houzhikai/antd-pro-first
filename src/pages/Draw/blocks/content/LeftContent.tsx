import { Collapse } from 'antd';
import { useModel } from '@umijs/max';
import SoftItemList from './LeftContent/SoftItemList';
import TestItem from './LeftContent/TestItem';
import Sidebar from './LeftContent/Sidebar';
import SubflowList from './LeftContent/SubflowList';
import { PlusOutlined } from '@ant-design/icons';

import styles from '../index.less';

const { Panel } = Collapse;

const LeftContent = () => {
  const { isHiddenSide, setOpenMainFlowModal, setOpenBinMapForm } =
    useModel('useDrawModel');

  const softBinIcon = (
    <PlusOutlined
      onClick={(event) => {
        event.stopPropagation();
        setOpenBinMapForm(true);
      }}
    />
  );

  const extra = (
    <PlusOutlined
      onClick={(event) => {
        event.stopPropagation();
        setOpenMainFlowModal(true);
      }}
    />
  );

  return (
    <>
      {isHiddenSide ? (
        <div className={styles.left}>
          <Collapse defaultActiveKey={['test-item']} size="small" ghost>
            <Panel
              header={<div className={styles.header}>BinMap</div>}
              key="SoftBin"
              extra={softBinIcon}
            >
              <SoftItemList />
            </Panel>
            <Panel
              header={<div className={styles.header}>测试项</div>}
              key="test-item"
            >
              <TestItem />
            </Panel>
            <Panel
              header={<div className={styles.header}>subflow</div>}
              key="subflow"
              extra={extra}
            >
              <SubflowList />
            </Panel>
            <Panel
              header={<div className={styles.header}>mainFlow</div>}
              key="mainFlow"
              extra={extra}
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
