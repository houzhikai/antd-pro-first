import { useModel } from '@umijs/max';
import { Input, Image, Tooltip, Switch, Table, Button } from 'antd';
import toolTipSvg from '@/icon/draw/tooltip.svg';

import styles from './index.less';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const SubflowNode = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');
  const { setOpenVariablesModal } = useModel('useDrawModel');
  const inputRef = useRef<any>(null);

  const selectedNodeItem: any = useMemo(
    () => nodes.filter((item) => item.selected)[0],
    [nodes],
  );
  const [selectedNode, setSelectedNode] = useState(selectedNodeItem);
  const [verifyTestUnit, setVerifyTestUnit] = useState({
    name: selectedNode?.params?.name,
  });
  // useEffect(() => {
  // }, [selectedNodeItem]);
  useEffect(() => {
    setVerifyTestUnit({ name: selectedNodeItem?.data?.label });
    setSelectedNode(selectedNodeItem);
  }, [selectedNodeItem, nodes, setVerifyTestUnit]);

  const filterList = useMemo(
    () =>
      nodes
        .filter((item) => item.type !== 'fen-bin')
        .map((item) => item.data.label),
    [nodes],
  );
  // 修改测试项class
  const testItemClass = nodes
    .filter((item) => item.selected)
    .map((item: any) => item?.params.testMethod)[0];

  const [isVariablesOpen, setIsVariablesOpen] = useState(false);
  const handleVariablesClick = () => {
    setIsVariablesOpen((c) => !c);
  };

  // const handleChangeLoopCount = (value) => {
  //   const newData = nodes.map((item) => {
  //     if (item.selected) {
  //       return { ...item, LoopCount: value };
  //     }
  //     return item;
  //   });
  //   setNodes(newData);
  // };

  const variablesColumns = [
    {
      key: 'param',
      dataIndex: 'param',
      width: '50%',
      title: (
        <div
          className={styles.globalVariablesTable}
          onClick={handleVariablesClick}
        >
          {isVariablesOpen ? (
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
                        key: `${e.target.value}-${item.value}.${index}`,
                        param: e.target.value,
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
        <div
          className={styles.globalVariablesTable}
          onClick={handleVariablesClick}
        >
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
                        key: `${item.param}-${e.target.value}.${index}`,
                        param: t.param,
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

  const handleChangeName = useCallback(
    (e) => {
      setVerifyTestUnit({ name: e.target.value });
      setSelectedNode((obj) => {
        return {
          ...obj,
          params: {
            ...obj.params,
            name: e.target.value,
          },
        };
      });
    },
    [nodes],
  );

  const handlePressEnterName = (e) => {
    if (e.key === 'Enter') {
      // 从输入框中移除光标
      inputRef.current.blur();
    }
    setVerifyTestUnit({ name: e.target.value });
    const newData = nodes.map((item: any) => {
      if (item.selected) {
        return {
          ...item,
          data: {
            ...item.data,
            label: e.target.value,
          },
          params: {
            ...item.params,
            name: e.target.value,
          },
        };
      }
      return item;
    });
    setNodes(newData);
    setSelectedNode((obj) => {
      return {
        ...obj,
        params: {
          ...obj.params,
          name: e.target.value,
        },
      };
    });
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

  const handleClick = (values) => {
    const dataSource = values.map((item: any, index) => {
      return {
        key: `${item.param}-${item.value}.${index}`,
        param: item.param,
        value: item.value,
      };
    });

    setOpenVariablesModal({ isOpen: true, values: dataSource });
  };

  const params = selectedNode?.params;
  return (
    <div>
      {selectedNodeItem?.selected &&
      (selectedNodeItem.type === 'test-method' ||
        selectedNodeItem.type === 'subflow') ? (
        <>
          <div className={styles.title}>Member：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>
              <span>TestMethod </span>
              <Tooltip title="此处不可编辑Class" placement="topLeft">
                <Image src={toolTipSvg} width={14} preview={false} />：
              </Tooltip>
            </label>
            <Input
              placeholder="请输入 TestMethod"
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

          <>
            <div className={styles['flow-item']}>
              <label className={styles['flow-label']}>Name： </label>
              <div>
                <Input
                  ref={inputRef}
                  placeholder="请输入 Name"
                  // value={testItemClass}
                  value={params?.name}
                  onChange={handleChangeName}
                  onPressEnter={handlePressEnterName}
                  onBlur={handlePressEnterName}
                  allowClear
                  status={
                    filterList.filter((item) => item === verifyTestUnit.name)
                      .length > 1 || verifyTestUnit.name === ''
                      ? 'error'
                      : undefined
                  }
                />
              </div>
            </div>
            {filterList.filter((item) => item === verifyTestUnit.name).length >
            1 ? (
              <div style={{ color: 'red' }}>* 不可重复</div>
            ) : null}
            {verifyTestUnit?.name === '' ? (
              <div style={{ color: 'red' }}>* 不可为空</div>
            ) : null}
          </>

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

          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入 LoopCount"
              min={1}
              controls={false}
              value={selectedNodeItem.loopCount}
              onChange={handleChangeLoopCount}
            />
          </div> */}

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

          <div className={styles.title}>
            Variables：
            <Button type="link" onClick={() => handleClick(params?.variables)}>
              Open Modal
            </Button>
          </div>
          <div className={styles['flow-item']}>
            {/* <label className={styles['flow-label']}>globalVariables：</label> */}
            <Table
              style={{ width: '100%' }}
              className={
                isVariablesOpen ? styles['show-dataSource'] : undefined
              }
              columns={variablesColumns}
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
