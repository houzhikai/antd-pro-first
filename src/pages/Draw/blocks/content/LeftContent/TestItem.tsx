import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import rectangle from '@/icon/draw/items/rectangle.svg';
import { useModel } from '@umijs/max';

import styles from './index.less';

const TestItem = () => {
  const { isOnLine, testUnitData, setTestUniItem, setAddTestItemModal } =
    useModel('useDrawModel');
  console.log({ testUnitData });
  return (
    <div className={styles['test-item']}>
      {/* BaseTestItem */}
      <div>
        <MyTestItemIcon
          Class="BaseTestItem"
          src={rectangle}
          name="BaseTestItem"
          onDragStart={(event) => {
            setAddTestItemModal(true);
            setTestUniItem({
              Class: 'BaseTestItem',
              LoopCount: 1,
              Name: 'BaseTestItem',
              key: 0,
            });
            return !isOnLine ? onDragStart(event, 'test-method') : null;
          }}
        />
      </div>

      {testUnitData.map((item) => (
        <div key={item.key} style={{ margin: '0 5px' }}>
          <MyTestItemIcon
            Class={item.Class}
            src={rectangle}
            name={item.Name}
            onDragStart={(event) => {
              setTestUniItem(item);
              return !isOnLine ? onDragStart(event, 'test-method') : null;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TestItem;
