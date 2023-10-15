import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import { subflowIconList } from './components/subflowIconList';
import styles from './index.less';

const SubflowList = () => {
  const { isOnLine, subflowItem, setSubflowItem } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {subflowIconList.map((item, index) => (
        <div key={index} className={styles.item}>
          <MyTestItemIcon
            size={item.size}
            src={item.icon}
            name={item.name}
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
