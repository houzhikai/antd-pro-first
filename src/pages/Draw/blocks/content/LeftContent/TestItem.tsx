import { onDragStart } from './components/onDragStart';
import MyTestItemIcon from './components/MyTestItemIcon';
import { useModel } from '@umijs/max';

import styles from './index.less';
import { useCallback, useEffect } from 'react';
import { Input } from 'antd';

const TestItem = () => {
  const {
    isOnLine,
    testUnitData,
    setTestUniItem,
    setOpenTestUnitModal,
    addTestUnitList,
    testClassList,
    setTestClassList,
    addTestMethodItem,
    setAddTestMethodItem,
    setAddTestUnitList,
    initTestMethodItem,
    // setTestUnitData,
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

  useEffect(() => {
    setTestClassList([...newTestUnitDataList, addTestUnitList].flat(Infinity));
  }, [addTestUnitList, testUnitData]);

  const handleDoubleClick = (item) => {
    setAddTestMethodItem((obj) => {
      return {
        ...obj,
        params: item,
      };
    });
    // const variables = item.variables.map((item, index) => {
    //   return {
    //     key: index,
    //     param: item.param,
    //     value: item.value,
    //   };
    // });
    // const values = Object.assign(item, { variables });

    // setOpenTestUnitModal({
    //   param: 'edit',
    //   isOpen: true,
    //   values,
    // });
  };
  const handleChangeValue = (e) => {
    const inputValue = e.target.value;
    const xxx = testClassList.map((item) => item.name);
    setAddTestMethodItem((obj) => {
      return {
        ...obj,
        status:
          !/^[a-zA-Z0-9_\s]{0,10}$/.test(inputValue) ||
          xxx.includes(inputValue), // true：status is error
        params: {
          ...obj.params,
          key: xxx.length + 1,
          testMethod: inputValue,
          name: inputValue,
        },
      };
    });
  };
  const handlePressEnter = useCallback(() => {
    if (!addTestMethodItem.status) {
      setAddTestUnitList((list) => [...list, addTestMethodItem.params]);
      setAddTestMethodItem(initTestMethodItem);
      setTestClassList((list) => [...list, addTestMethodItem.params]);
    }
  }, [addTestMethodItem.params]);
  const handleChange = (e, testMethod) => {
    const inputValue = e.target.value;
    const xxx = testClassList
      .map((item) => item.name)
      .filter((item) => item !== testMethod);
    setAddTestMethodItem((obj) => {
      return {
        ...obj,
        status:
          !/^[a-zA-Z0-9_\s]{0,30}$/.test(inputValue) ||
          xxx.includes(inputValue), // true：status is error
        params: {
          ...obj.params,
          testMethod: inputValue,
        },
      };
    });
  };

  const handleUpdateTestMethodPressEnter = useCallback(
    (e, testMethod) => {
      const inputValue = e.target.value;
      if (!addTestMethodItem.status) {
        const newTestUnitDataList: any = testClassList.map((item) => {
          if (item.key === testMethod.key) {
            return {
              key: testMethod.key,
              testMethod: inputValue,
              isFlowUnit: testMethod.isFlowUnit,
              isStartUnit: testMethod.isStartUnit,
              name: inputValue,
              number: testMethod.number,
              targetFlowName: testMethod.targetFlowName,
              variables: testMethod.variables,
            };
          }
          return item;
        });
        setTestClassList(newTestUnitDataList);
        setAddTestMethodItem(initTestMethodItem);
      }
    },
    [addTestMethodItem.params],
  );
  return (
    <div className={styles['test-item']}>
      {/* add testMethod input */}
      {addTestMethodItem.show && (
        <Input
          value={addTestMethodItem.params.testMethod}
          onChange={handleChangeValue}
          onPressEnter={handlePressEnter}
          onBlur={handlePressEnter}
          allowClear
          status={addTestMethodItem.status ? 'error' : undefined}
          showCount
        />
      )}
      {/* 第一项是 */}
      <div className={styles['test-item']}>
        {testClassList.map((item, index) => (
          <div key={item.key} onDoubleClick={() => handleDoubleClick(item)}>
            {/* update testMethod input */}
            {addTestMethodItem.params.key === item.key ? (
              <Input
                value={addTestMethodItem.params.testMethod}
                onChange={(e) => handleChange(e, item.testMethod)}
                onPressEnter={(e) => handleUpdateTestMethodPressEnter(e, item)}
                onBlur={(e) => handleUpdateTestMethodPressEnter(e, item)}
                status={addTestMethodItem.status ? 'error' : undefined}
                allowClear
                showCount
              />
            ) : (
              <MyTestItemIcon
                list={testClassList}
                setList={setTestClassList}
                Class={item.testMethod}
                name={item.name}
                item={item}
                index={index}
                type="test-method"
                color="#428feb"
                onDragStart={(event) => {
                  if (index === 0) {
                    setOpenTestUnitModal({
                      param: 'add',
                      isOpen: true,
                      values: item,
                    });
                  }
                  setTestUniItem(item);
                  return !isOnLine ? onDragStart(event, 'test-method') : null;
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestItem;
