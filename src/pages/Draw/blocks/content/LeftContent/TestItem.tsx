import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import { useModel } from '@umijs/max';

import styles from './index.less';

const TestItem = () => {
  const {
    isOnLine,
    testUnitData,
    setTestUniItem,
    setAddTestItemModal,
    setOpenTestUnitModal,
  } = useModel('useDrawModel');
  const newTestUnitDataList: any = [
    {
      key: 999999,
      testMethod: 'BaseTestItem',
      isFlowUnit: false,
      isStartUnit: true,
      name: 'BaseTestItem',
      number: '000',
      loopCount: 1,
      targetFlowName: '',
      variables: [],
    },
    // @ts-expect-error
  ].concat(testUnitData);

  const handleClick = (item) => {
    const variables = item.variables.map((item, index) => {
      return {
        key: index,
        param: item.param,
        value: item.value,
      };
    });
    const values = Object.assign(item, { variables });

    setOpenTestUnitModal({
      param: 'edit',
      isOpen: true,
      values,
    });
  };
  return (
    <div className={styles['test-item']}>
      {/* 第一项是 */}
      <div className={styles['test-item']}>
        {newTestUnitDataList.map((item, index) => (
          <div key={item.key} onDoubleClick={() => handleClick(item)}>
            <MyTestItemIcon
              Class={item.name}
              name={item.name}
              item={item}
              index={index}
              type="test-method"
              color="#108ee9"
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
