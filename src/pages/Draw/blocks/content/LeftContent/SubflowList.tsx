import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';
import { useEffect, useState } from 'react';

const SubflowList = () => {
  const { isOnLine, setSubflowItem, subflowList, subFlowList } =
    useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [list, setList] = useState(subflowList);

  useEffect(() => {
    setList((oldList) => [...oldList, ...subFlowList]);
  }, []);
  const handleClick = (item) => {
    setNodes(item.subFlowNode);
    setEdges(item.mainFlowEdge);
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
            name={item.name}
            color="#55acee"
            index={index}
            item={item}
            type="subflow"
            Class={item.name}
            onDragStart={(event) => {
              setSubflowItem(item);
              return !isOnLine ? onDragStart(event, 'subflow') : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SubflowList;
