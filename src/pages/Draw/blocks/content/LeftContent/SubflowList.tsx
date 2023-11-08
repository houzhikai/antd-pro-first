import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';
import { useCallback, useEffect } from 'react';
import { Input } from 'antd';

const SubflowList = () => {
  const {
    isOnLine,
    setSubflowItem,
    subFlowList,
    setActiveTestOrFlowItemParams,
    activeTestOrFlowItem,
    addSubFlowList,
    subflowList,
    setSubflowList,
    addSubFlowItem,

    setAddSubFlowItem,
    initAddSubflowItem,
    setActiveTestOrFlowItem,
  } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  // const [list, setList] = useState<any>([]);

  useEffect(() => {
    setSubflowList([...subFlowList, addSubFlowList].flat(Infinity));
  }, [addSubFlowList]);

  const handleClick = (item) => {
    setActiveTestOrFlowItemParams(item.param);
    setNodes(item.subFlowNode);
    setEdges(item.subFlowEdge);
  };

  const handleChangeValue = (e) => {
    const inputValue = e.target.value;
    const xxx = subflowList.map((item) => item.name);
    setAddSubFlowItem((obj) => {
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
      if (!addSubFlowItem.status) {
        setSubflowList((oldList) => [...oldList, addSubFlowItem.params]);
        setActiveTestOrFlowItem(inputValue);
        setActiveTestOrFlowItemParams({
          flowName: inputValue,
          isMain: true,
          isActive: false,
          globalVariables: [],
        });
        setNodes([]);
        setEdges([]);
        setAddSubFlowItem(initAddSubflowItem);
      }
    },
    [addSubFlowItem.params],
  );
  return (
    <div className={styles['test-item']}>
      {addSubFlowItem.show && (
        <Input
          value={addSubFlowItem.params.name}
          onChange={handleChangeValue}
          onPressEnter={handlePressEnter}
          onBlur={handlePressEnter}
          allowClear
          status={addSubFlowItem.status ? 'error' : undefined}
          showCount
        />
      )}
      {subflowList.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onDoubleClick={() => handleClick(item)}
        >
          <MyTestItemIcon
            list={subflowList}
            setList={setSubflowList}
            name={item.name}
            color="#87d068"
            index={index}
            item={item}
            type="subflow"
            Class={item.name}
            onDragStart={(event) => {
              setSubflowItem(item);
              return !isOnLine && activeTestOrFlowItem !== item.name
                ? onDragStart(event, 'subflow')
                : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SubflowList;
