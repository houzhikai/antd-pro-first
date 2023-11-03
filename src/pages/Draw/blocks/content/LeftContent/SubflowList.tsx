import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';
import { useEffect } from 'react';

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
  return (
    <div className={styles['test-item']}>
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
