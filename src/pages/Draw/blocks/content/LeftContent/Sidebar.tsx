import { mainFlowIconList } from '@/components/dataList/draw/mainFlow';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';

export default () => {
  return (
    <>
      <div className={styles['test-item']}>
        {mainFlowIconList.map((item, index) => (
          <div key={index} className={styles.item}>
            <MyTestItemIcon
              name={item.name}
              src={item.icon}
              onDragStart={(event) => onDragStart(event, item.type)}
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
