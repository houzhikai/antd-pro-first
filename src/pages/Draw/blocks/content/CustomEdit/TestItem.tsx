import { useModel } from '@umijs/max';
import { Input, Image, Tooltip, Switch, Table, InputNumber } from 'antd';
import toolTipSvg from '@/icon/draw/tooltip.svg';

import styles from './index.less';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useState } from 'react';

const TestItem = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = nodes.filter((item) => item.selected)[0];

  // 修改测试项class
  const testItemClass = nodes
    .filter((item) => item.selected)
    .map((item: any) => item?.Class)[0];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((c) => !c);
  };

  const handleChangeLoopCount = (value) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, LoopCount: value };
      }
      return item;
    });
    setNodes(newData);
  };

  const columns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '50%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          {isOpen ? (
            <RightOutlined style={{ width: 10 }} />
          ) : (
            <DownOutlined style={{ width: 10 }} />
          )}
          <span> param</span>
        </div>
      ),
      render: (text) => {
        const handleChange = (e) => {
          console.log(e.target.value);
        };
        return <Input value={text} onChange={handleChange} bordered={false} />;
      },
    },
    {
      key: 'value',
      dataIndex: 'value',
      width: '50%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          value
        </div>
      ),
      render: (text) => {
        return <Input value={text} bordered={false} />;
      },
    },
  ];
  const portsColumns = [
    {
      key: 'param',
      dataIndex: 'param',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          {isOpen ? (
            <RightOutlined style={{ width: 10 }} />
          ) : (
            <DownOutlined style={{ width: 10 }} />
          )}
          <span> param</span>
        </div>
      ),
      render: (text) => {
        const handleChange = (e) => {
          console.log(e.target.value);
        };
        return <Input value={text} onChange={handleChange} bordered={false} />;
      },
    },
    {
      key: 'type',
      dataIndex: 'type',
      width: '33%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          type
        </div>
      ),
      render: (text) => {
        return <Input value={text} bordered={false} />;
      },
    },
    {
      key: 'value',
      dataIndex: 'value',
      width: '33%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          value
        </div>
      ),
      render: (text) => {
        return <Input value={text} bordered={false} />;
      },
    },
  ];

  const dataSource = [
    { key: 0, param: 'Vaa', value: '3' },
    { key: 1, param: 'Vhh', value: '3.5' },
    { key: 2, param: 'Load_from_File', value: '111' },
  ];
  const portsDataSource = [
    { key: 0, param: 0, value: '3', type: '1' },
    { key: 1, param: 1, value: '3.5', type: '4' },
  ];

  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'test-method' ? (
        <>
          <div className={styles.title}>Member：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>
              <span>ClassName </span>
              <Tooltip title="此处不可编辑Class" placement="topLeft">
                <Image src={toolTipSvg} width={14} preview={false} />：
              </Tooltip>
            </label>
            <Input
              placeholder="请输入 Class"
              value={testItemClass}
              allowClear
              disabled
            />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>isFlowUnit：</label>
            <Switch checkedChildren="true" unCheckedChildren="false" />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>isStartUnit：</label>
            <Switch
              defaultChecked
              checkedChildren="true"
              unCheckedChildren="false"
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Name： </label>
            <Input
              placeholder="请输入 Name"
              // value={testItemClass}
              value="Continuity"
              allowClear
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Number： </label>
            <Input
              placeholder="请输入 Number"
              // value={testItemClass}
              value="000"
              allowClear
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入 LoopCount"
              min={1}
              controls={false}
              value={selectedNodeItem.LoopCount}
              onChange={handleChangeLoopCount}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>TargetFlowName： </label>
            <Input
              placeholder="请输入 TargetFlowName"
              // value={testItemClass}
              value=""
              allowClear
            />
          </div>

          <div className={styles.title}>Ports：</div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>Ports： </label> */}
            <Table
              style={{ width: '100%' }}
              className={isOpen ? styles['show-dataSource'] : undefined}
              columns={portsColumns}
              dataSource={portsDataSource}
              pagination={false}
              bordered
            />
          </div>

          <div className={styles.title}>Variables：</div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>globalVariables：</label> */}
            <Table
              style={{ width: '100%' }}
              className={isOpen ? styles['show-dataSource'] : undefined}
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              bordered
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TestItem;
