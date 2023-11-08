import MyTestItemIcon from './components/MyTestItemIcon';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { useCallback, useEffect } from 'react';
import { Input } from 'antd';

export default () => {
  const {
    mainFlowList,
    setActiveTestOrFlowItemParams,
    addMainFlowList,
    mainflowList,
    setMainflowList,
    setActiveTestOrFlowItem,
    addMainFlowItem,
    setAddMainFlowItem,
    initAddMainflowItem,
  } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');

  useEffect(() => {
    setMainflowList([...mainFlowList, addMainFlowList].flat(Infinity));
  }, [addMainFlowList]);

  const handleClick = (item) => {
    setActiveTestOrFlowItemParams(item.param);
    setNodes(item.mainFlowNode);
    setEdges(item.mainFlowEdges);
  };
  const handleChangeValue = (e) => {
    const inputValue = e.target.value;
    const xxx = mainflowList.map((item) => item.name);
    setAddMainFlowItem((obj) => {
      return {
        ...obj,
        status:
          !/^[a-zA-Z0-9_\s]{0,10}$/.test(inputValue) ||
          xxx.includes(inputValue), // true：status is error
        params: {
          ...obj.params,
          name: inputValue,
          param: {
            ...obj.params.param,
            flowName: inputValue,
          },
        },
      };
    });
  };
  const handlePressEnter = useCallback(
    (e) => {
      const inputValue = e.target.value;
      if (!addMainFlowItem.status) {
        setMainflowList((oldList) => [...oldList, addMainFlowItem.params]);
        setActiveTestOrFlowItem(inputValue);
        setActiveTestOrFlowItemParams({
          flowName: inputValue,
          isMain: true,
          isActive: false,
          globalVariables: [],
        });
        setNodes([]);
        setEdges([]);
        setAddMainFlowItem(initAddMainflowItem);
      }
    },
    [addMainFlowItem.params],
  );
  return (
    <>
      <div className={styles['test-item']}>
        {addMainFlowItem.show && (
          <Input
            value={addMainFlowItem.params.name}
            onChange={handleChangeValue}
            onPressEnter={handlePressEnter}
            onBlur={handlePressEnter}
            allowClear
            status={addMainFlowItem.status ? 'error' : undefined}
            showCount
          />
        )}
        {/* mainFlowIconList 是原本就有的mainflow */}
        {mainflowList.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onDoubleClick={() => handleClick(item)}
          >
            <MyTestItemIcon
              list={mainflowList}
              setList={setMainflowList}
              name={item.name}
              color="#2db7f5"
              type={item.type}
              item={item}
              index={index}
              Class={item.name}
              onDragStart={null}
            />
          </div>
        ))}
      </div>
    </>
  );
};
