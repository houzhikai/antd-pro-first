import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import rectangle from '@/icon/draw/items/rectangle.svg';
import { testUnitDataList } from '@/components/dataList/draw/testUnitDataList';

import styles from './index.less';

const TestItem = () => {
  return (
    <div className={styles['test-item']}>
      {/* {testItemIconList.map((item, index) => (
        <div key={index} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            size={item?.size}
            src={item.icon}
            name={item.name}
            onDragStart={(event) => onDragStart(event, item.type)}
          />
        </div>
      ))} */}
      {testUnitDataList.map((item) => (
        <div key={item.key} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            src={rectangle}
            name={item.Class}
            onDragStart={(event) => onDragStart(event, 'output')}
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
