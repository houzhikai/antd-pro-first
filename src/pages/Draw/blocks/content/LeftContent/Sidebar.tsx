import { mainFlowIconList } from '@/components/dataList/draw/mainFlow';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { useModel } from '@umijs/max';
import {
  MainflowNode1,
  MainflowEdge1,
} from '@/pages/Draw/blocks/Flows/mainflow1';
import styles from './index.less';

export default () => {
  const { isOnLine } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const handleClick = (index) => {
    if (index === 0) {
      setNodes(MainflowNode1);
      setEdges(MainflowEdge1);
    }
  };
  return (
    <>
      <div className={styles['test-item']}>
        {mainFlowIconList.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onDoubleClick={() => handleClick(index)}
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
