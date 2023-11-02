import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';
import { useEffect, useState } from 'react';

const SubflowList = () => {
  const {
    isOnLine,
    setSubflowItem,
    subFlowList,
    setActiveTestOrFlowItemParams,
    activeTestOrFlowItem,
    addSubFlowList,
  } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList([...subFlowList, addSubFlowList].flat(Infinity));
  }, [addSubFlowList]);

  const handleClick = (item) => {
    setActiveTestOrFlowItemParams(item.param);
    setNodes(item.subFlowNode);
    setEdges(item.subFlowEdge);
  };
  return (
    <div className={styles['test-item']}>
      {list.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onDoubleClick={() => handleClick(item)}
        >
          <MyTestItemIcon
            list={list}
            setList={setList}
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
