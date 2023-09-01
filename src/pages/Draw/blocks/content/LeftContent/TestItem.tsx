import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import { testItemIconList } from './components/testItemIconList';

import styles from './index.less';

const TestItem = () => {
  return (
    <div className={styles['test-item']}>
      {testItemIconList.map((item) => (
        <div key={item.id} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            src={item.icon}
            onDragStart={(event) => onDragStart(event, item.type)}
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
