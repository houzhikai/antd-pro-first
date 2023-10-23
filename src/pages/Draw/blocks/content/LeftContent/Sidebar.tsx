import { mainFlowIconList } from '@/components/dataList/draw/mainFlow';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { useEffect, useState } from 'react';

export default () => {
  const { isOnLine, mainFlowList, setActiveTestOrFlowItemParams } =
    useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [list, setList] = useState(mainFlowIconList);

  useEffect(() => {
    setList((oldList) => [...oldList, ...mainFlowList]);
  }, []);

  const handleClick = (item) => {
    setActiveTestOrFlowItemParams(item.param);
    setNodes(item.mainFlowNode);
    setEdges(item.mainFlowEdges);
  };
  return (
    <>
      <div className={styles['test-item']}>
        {/* mainFlowIconList 是原本就有的mainflow */}
        {list.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onDoubleClick={() => handleClick(item)}
          >
            <MyTestItemIcon
              name={item.name}
              color="#2db7f5"
              type={item.type}
              item={item}
              index={index}
              Class={item.name}
              onDragStart={(event) =>
                !isOnLine ? onDragStart(event, item.type) : null
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};
