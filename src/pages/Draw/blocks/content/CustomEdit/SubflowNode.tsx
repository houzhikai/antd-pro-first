import { useModel } from '@umijs/max';
import styles from './index.less';
import { Input, InputNumber, Switch, Table, Tooltip, Image } from 'antd';
import { useEffect, useState } from 'react';
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import toolTipSvg from '@/icon/draw/tooltip.svg';

const SubflowNode = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = nodes.filter((item) => item.selected)[0];
  const [selectedNode, setSelectedNode] = useState(selectedNodeItem);
  useEffect(() => {
    setSelectedNode(selectedNodeItem);
  }, [selectedNodeItem]);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((c) => !c);
  };

  const testItemClass = nodes
    .filter((item) => item.selected)
    .map((item: any) => item?.params.testMethod)[0];

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
          <span> Param</span>
        </div>
      ),
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData = nodes.map((item: any) => {
            if (item.selected) {
              return {
                ...item,
                params: {
                  ...item.params,
                  variables: item.params.variables.map((t, idx) => {
                    if (index === idx) {
                      return {
                        params: e.target.value,
                        value: t.value,
                      };
                    }
                    return t;
                  }),
                },
              };
            }
            return item;
          });
          setNodes(newData);
        };
        return (
          <Input
            defaultValue={record.param}
            onPressEnter={handlePressEnter}
            onBlur={handlePressEnter}
            bordered={false}
          />
        );
      },
    },
    {
      key: 'value',
      dataIndex: 'value',
      width: '50%',
      title: (
        <div className={styles.globalVariablesTable} onClick={handleClick}>
          Value
        </div>
      ),
      render: (text, record, index) => {
        const handlePressEnter = (e) => {
          const newData = nodes.map((item: any) => {
            if (item.selected) {
              return {
                ...item,
                params: {
                  ...item.params,
                  variables: item.params.variables.map((t, idx) => {
                    if (index === idx) {
                      return {
                        params: t.param,
                        value: e.target.value,
                      };
                    }
                    return t;
                  }),
                },
              };
            }
            return item;
          });
          setNodes(newData);
        };
        return (
          <Input
            defaultValue={record.value}
            onPressEnter={handlePressEnter}
            onBlur={handlePressEnter}
            bordered={false}
          />
        );
      },
    },
  ];

  const handleChangeName = (e) => {
    setSelectedNode((obj: any) => {
      return {
        ...obj,
        params: {
          ...obj.params,
          name: e.target.value,
        },
      };
    });
  };

  const handleEntryName = (e) => {
    setNodes((node) =>
      node.map((item: any) => {
        if (item.selected) {
          return {
            ...item,
            data: { label: e.target.value },
            params: {
              ...item.params,
              name: e.target.value,
            },
          };
        }
        return item;
      }),
    );
  };

  const handleChangeNumber = (e) => {
    const value = e.target.value.replace(/[^\-?\d.]/g, '');
    setSelectedNode((obj) => {
      return {
        ...obj,
        params: {
          ...obj.params,
          number: value,
        },
      };
    });
  };

  const handlePressEnterNumber = (e) => {
    const newData = nodes.map((item: any) => {
      if (item.selected) {
        return {
          ...item,
          params: {
            ...item.params,
            number: e.target.value,
          },
        };
      }
      return item;
    });
    setNodes(newData);
  };

  const handleChangeIsFlowUnit = (checked) => {
    setNodes((node) =>
      node.map((item: any) => {
        if (item.selected) {
          return {
            ...item,
            params: {
              ...item.params,
              isFlowUnit: checked,
            },
          };
        }
        return item;
      }),
    );
  };

  const handleChangeIsStartUnit = (checked) => {
    setNodes((node) =>
      node.map((item: any) => {
        if (item.selected) {
          return {
            ...item,
            params: {
              ...item.params,
              isStartUnit: checked,
            },
          };
        }
        return item;
      }),
    );
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

  const handleChangeTargetFlowName = (e) => {
    setSelectedNode((obj) => {
      return {
        ...obj,
        params: {
          ...obj.params,
          targetFlowName: e.target.value,
        },
      };
    });
  };
  const handlePressTargetFlowName = (e) => {
    const newData = nodes.map((item: any) => {
      if (item.selected) {
        return {
          ...item,
          params: {
            ...item.params,
            targetFlowName: e.target.value,
          },
        };
      }
      return item;
    });
    setNodes(newData);
  };

  const params = selectedNode?.params;

  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'subflow' ? (
        <>
          <div className={styles.title}>Subflow：</div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>
              <span>TestMethod </span>
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
            <label className={styles['flow-label']}>IsFlowUnit：</label>
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              checked={params?.isFlowUnit}
              onChange={handleChangeIsFlowUnit}
            />
          </div>

          <div style={{ alignItems: 'center' }} className={styles['flow-item']}>
            <label className={styles['flow-label']}>IsStartUnit：</label>
            <Switch
              checkedChildren="true"
              unCheckedChildren="false"
              checked={params?.isStartUnit}
              onChange={handleChangeIsStartUnit}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Name：</label>
            <Input
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={params?.name}
              onChange={handleChangeName}
              onPressEnter={handleEntryName}
              onBlur={handleEntryName}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Number： </label>
            <Input
              placeholder="请输入 Number"
              value={params?.number}
              onChange={handleChangeNumber}
              onPressEnter={handlePressEnterNumber}
              onBlur={handlePressEnterNumber}
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
              allowClear
              value={params?.targetFlowName}
              onChange={handleChangeTargetFlowName}
              onPressEnter={handlePressTargetFlowName}
              onBlur={handlePressTargetFlowName}
            />
          </div>

          <div className={styles.title}>Variables：</div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>globalVariables：</label> */}
            <Table
              style={{ width: '100%' }}
              className={isOpen ? styles['show-dataSource'] : undefined}
              columns={columns}
              dataSource={params?.variables}
              pagination={false}
              bordered
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SubflowNode;
