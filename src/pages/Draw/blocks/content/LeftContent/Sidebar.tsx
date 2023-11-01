import MyTestItemIcon from './components/MyTestItemIcon';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { useEffect, useState } from 'react';

export default () => {
  const { mainFlowList, setActiveTestOrFlowItemParams, addMainFlowList } =
    useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    setList([...mainFlowList, addMainFlowList].flat(Infinity));
  }, [addMainFlowList]);

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
              onDragStart={null}
            />
          </div>
        ))}
      </div>
    </>
  );
};
