import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import rectangle from '@/icon/draw/items/rectangle.svg';
import { testUnitDataList } from '@/components/dataList/draw/testUnitDataList';

import styles from './index.less';
import { useModel } from '@umijs/max';

const TestItem = () => {
  const { isOnLine } = useModel('useDrawModel');
  return (
    <div className={styles['test-item']}>
      {testUnitDataList.map((item) => (
        <div key={item.key} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            src={rectangle}
            name={item.Class}
            onDragStart={(event) =>
              !isOnLine ? onDragStart(event, 'custom-middleNode') : null
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
