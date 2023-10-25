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
        setOpenTestUnitModal({
          param: 'add',
          isOpen: true,
          values: {
            testMethod: 'baseName',
            isFlowUnit: false,
            isStartUnit: true,
            name: 'baseName',
            number: '0000',
            loopCount: 3,
            targetFlowName: 'add test unit',
            variables: [],
          },
        });
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
        setSelected('');
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
          <Collapse
            defaultActiveKey={['SoftBin', 'test-item', 'Subflow', 'MainFlow']}
            size="small"
            ghost
          >
            <Panel
              header={<div className={styles.header}>MainFlow</div>}
              key="MainFlow"
              extra={mainflowExtra}
            >
              <Sidebar />
            </Panel>
            <Panel
              header={<div className={styles.header}>Subflow</div>}
              key="Subflow"
              extra={subflowExtra}
            >
              <SubflowList />
            </Panel>
            <Panel
              header={<div className={styles.header}>Test Class</div>}
              key="test-item"
              extra={testUnit}
            >
              <TestItem />
            </Panel>

            <Panel
              header={<div className={styles.header}>BinMap</div>}
              key="SoftBin"
              extra={softBinIcon}
            >
              <SoftItemList />
            </Panel>
          </Collapse>
        </div>
      ) : null}
    </>
  );
};

export default LeftContent;
