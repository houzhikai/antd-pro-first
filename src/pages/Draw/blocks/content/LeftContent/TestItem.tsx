import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import { testItemIconList } from './components/testItemIconList';

import styles from './index.less';

const TestItem = () => {
  return (
    <div className={styles['test-item']}>
      {testItemIconList.map((item, index) => (
        <div key={index} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            size={item?.size}
            src={item.icon}
            name={item.name}
            onDragStart={(event) => onDragStart(event, item.type)}
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
