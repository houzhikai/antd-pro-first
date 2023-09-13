import { Button, Collapse } from 'antd';
import { useModel } from '@umijs/max';
import SoftItemList from './LeftContent/SoftItemList';
import TestItem from './LeftContent/TestItem';
import Sidebar from './LeftContent/Sidebar';
import SubflowList from './LeftContent/SubflowList';
import { PlusOutlined } from '@ant-design/icons';

import styles from '../index.less';

const { Panel } = Collapse;

const LeftContent = () => {
  const {
    isHiddenSide,
    setOpenMainFlowModal,
    setOpenBinMapForm,
    setOpenTestUnitModal,
    setOpenSubFlowModal,
    isOnLine,
    setSelected,
  } = useModel('useDrawModel');

  const softBinIcon = (
    <Button
      type="text"
      disabled={isOnLine}
      icon={<PlusOutlined />}
      onClick={(event) => {
        event.stopPropagation();
        setOpenBinMapForm(true);
      }}
    />
  );
  const testUnit = (
    <Button
      type="text"
      disabled={isOnLine}
      icon={<PlusOutlined />}
      onClick={(event) => {
        event.stopPropagation();
        setOpenTestUnitModal(true);
      }}
    />
  );
  const subflowExtra = (
    <Button
      type="text"
      disabled={isOnLine}
      icon={<PlusOutlined />}
      onClick={(event) => {
        event.stopPropagation();
        setOpenSubFlowModal(true);
      }}
    />
  );

  const mainflowExtra = (
    <Button
      type="text"
      disabled={isOnLine}
      icon={<PlusOutlined />}
      onClick={(event) => {
        event.stopPropagation();
        setOpenMainFlowModal(true);
        setSelected('');
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
              extra={testUnit}
            >
              <TestItem />
            </Panel>
            <Panel
              header={<div className={styles.header}>subflow</div>}
              key="Subflow"
              extra={subflowExtra}
            >
              <SubflowList />
            </Panel>
            <Panel
              header={<div className={styles.header}>mainFlow</div>}
              key="MainFlow"
              extra={mainflowExtra}
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
