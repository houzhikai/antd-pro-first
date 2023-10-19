import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { SubflowNode1, SubflowEdge1 } from '@/pages/Draw/blocks/Flows/Subflow1';
import { SubflowNode2, SubflowEdge2 } from '@/pages/Draw/blocks/Flows/Subflow2';
import styles from './index.less';

const SubflowList = () => {
  const { isOnLine, setSubflowItem, subflowList } = useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');

  const handleClick = (index) => {
    if (index === 0) {
      setNodes(SubflowNode1);
      setEdges(SubflowEdge1);
    } else {
      setNodes(SubflowNode2);
      setEdges(SubflowEdge2);
    }
  };
  return (
    <div className={styles['test-item']}>
      {subflowList.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onDoubleClick={() => handleClick(index)}
        >
          <MyTestItemIcon
            size={item.size}
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
