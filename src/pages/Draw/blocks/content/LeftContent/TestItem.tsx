import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import rectangle from '@/icon/draw/items/rectangle.svg';
import { useModel } from '@umijs/max';

import styles from './index.less';

const TestItem = () => {
  const { isOnLine, testUnitData, setTestUniItem } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {testUnitData.map((item) => (
        <div key={item.key} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            Class={item.Class}
            src={rectangle}
            name={item.Name}
            onDragStart={(event) => {
              // setSelectedNode(item); // 拖动时拿到 test-unit item 的信息
              setTestUniItem(item);
              console.log(item);
              return !isOnLine ? onDragStart(event, 'custom-middleNode') : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
