import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { subflowIconList } from './components/subflowIconList';
import styles from './index.less';

const SubflowList = () => {
  return (
    <div className={styles['test-item']}>
      {subflowIconList.map((item, index) => (
        <div key={index} className={styles.item}>
          <MyTestItemIcon
            size={item.size}
            src={item.icon}
            name={item.name}
            onDragStart={(event) => onDragStart(event, item.type)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubflowList;
