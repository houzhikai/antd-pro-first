import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { SubflowNode1, SubflowEdge1 } from '@/pages/Draw/blocks/Flows/Subflow1';
import { SubflowNode2, SubflowEdge2 } from '@/pages/Draw/blocks/Flows/Subflow2';
import styles from './index.less';
import { useEffect, useState } from 'react';
import analyzeFlow from '@/components/analyzeFlow';

const SubflowList = () => {
  const { isOnLine, setSubflowItem, subflowList, subFlowList, flows } =
    useModel('useDrawModel');
  const { setNodes, setEdges } = useModel('useTestFlowModel');
  const [list, setList] = useState(subflowList);

  useEffect(() => {
    setList((oldList) => [...oldList, ...subFlowList]);
  }, []);
  const handleClick = (index) => {
    if (index === 0) {
      setNodes(SubflowNode1);
      setEdges(SubflowEdge1);
    } else if (index === 1) {
      setNodes(SubflowNode2);
      setEdges(SubflowEdge2);
    } else {
      setNodes(analyzeFlow(flows).subFlowNodes);
      setEdges(analyzeFlow(flows).subFlowEdges);
    }
  };
  return (
    <div className={styles['test-item']}>
      {list.map((item, index) => (
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
