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
              color="#2db7f5"
              type={item.type}
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
