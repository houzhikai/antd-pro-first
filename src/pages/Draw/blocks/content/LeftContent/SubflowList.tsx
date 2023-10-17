import { useModel } from '@umijs/max';
import MyTestItemIcon from './components/MyTestItemIcon';
import { onDragStart } from './components/onDragStart';
import styles from './index.less';

const SubflowList = () => {
  const { isOnLine, setSubflowItem, subflowList } = useModel('useDrawModel');

  return (
    <div className={styles['test-item']}>
      {subflowList.map((item, index) => (
        <div key={index} className={styles.item}>
          <MyTestItemIcon
            size={item.size}
            name={item.name}
            color="#87d068"
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
