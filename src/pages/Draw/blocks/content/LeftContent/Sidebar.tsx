import { mainFlowIconList } from '@/components/dataList/draw/mainFlow';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';
import { useModel } from '@umijs/max';

export default () => {
  const { isOnLine } = useModel('useDrawModel');
  return (
    <>
      <div className={styles['test-item']}>
        {mainFlowIconList.map((item, index) => (
          <div key={index} className={styles.item}>
            <MyTestItemIcon
              name={item.name}
              src={item.icon}
              Class={item.name}
              onDragStart={(event) =>
                !isOnLine ? onDragStart(event, item.type) : null
              }
            />
          </div>
        ))}
      </div>
      {/* <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </div> */}
      {/* <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div> */}
    </>
  );
};
