import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import { useModel } from '@umijs/max';

import styles from './index.less';

const TestItem = () => {
  const { isOnLine, testUnitData, setTestUniItem, setAddTestItemModal } =
    useModel('useDrawModel');
  console.log({ testUnitData });
  const newTestUnitDataList: any = [
    { key: 999999, Class: 'BaseTestItem', LoopCount: 1, Name: 'BaseTestItem' },
    // @ts-expect-error
  ].concat(testUnitData);
  return (
    <div className={styles['test-item']}>
      {/* 第一项是 */}
      <div className={styles['test-item']}>
        {newTestUnitDataList.map((item, index) => (
          <div key={item.key}>
            <MyTestItemIcon
              Class={item.Class}
              name={item.Name}
              type="test-method"
              color="#ccd9f6"
              onDragStart={(event) => {
                if (index === 0) {
                  setAddTestItemModal(true);
                }
                setTestUniItem(item);
                return !isOnLine ? onDragStart(event, 'test-method') : null;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestItem;
