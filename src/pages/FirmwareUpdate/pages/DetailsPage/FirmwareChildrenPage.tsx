import React from 'react';
import { Table } from 'antd';
import { useFUProviderModule } from '../../components/containers';
import { GetColumns } from '../../components/defaultData';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';
import { modifyList } from './components/modifyList';
import '../../index.css';

const FirmwarePage = ({
  dataSource,
  slot,
  isDisabled,
  itemTablesKeys,
  setIndeterminateItemTableKeys,
}) => {
  const {
    selectedKeysList,
    setSelectedKeysList,
    setIndeterminateKeys,
    getDeviceListAndHeartObj,
    tableWidthObj,
    hasWaitingAndUpgrading,
    theme,
    setUbootEnv,
    isAllowUpgradeList,
  } = useFUProviderModule();
  const allKeys = getDeviceOptionalAllKeys(getDeviceListAndHeartObj.tableList);

  const rowSelection = {
    checkStrictly: false, //状态下节点选择完全受控, false 表示受父节点控制
    selectedRowKeys: selectedKeysList,
    onChange: (selectedRowKeys: React.Key[], _, { type }) => {
      if (type !== 'all') return;
      // 修改后选择的key值列表
      const newList = modifyList(
        selectedKeysList,
        selectedRowKeys,
        slot,
      ).flat();
      setSelectedKeysList(newList);
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
      // panel 全选 半选判断
      setIndeterminateItemTableKeys((list) => {
        const newList = list.map((slotObj) => {
          if (slotObj.slot === slot) {
            return {
              ...slotObj,
              indeterminate:
                selectedRowKeys.length > 0 &&
                selectedRowKeys.length < itemTablesKeys.length,
            };
          } else {
            return slotObj;
          }
        });
        return newList;
      });
    },
    onSelect: (record, selectedKeys, selectedRows) => {
      const isIncludes = selectedKeysList.includes(record.key);
      const newList = isIncludes
        ? selectedKeysList.filter((item) => item !== record.key)
        : selectedKeysList.concat(record.key);
      // 所有选择的 selectKeys 值
      setSelectedKeysList(newList);
      // 全选 半选判断
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
      // panel 全选 半选判断
      setIndeterminateItemTableKeys((list) => {
        const newList = list.map((slotObj) => {
          if (slotObj.slot === slot) {
            return {
              ...slotObj,
              indeterminate:
                selectedRows.length > 0 &&
                selectedRows.length < itemTablesKeys.length,
            };
          } else {
            return slotObj;
          }
        });
        return newList;
      });

      const hasSelectKey = newList.includes(record.key);
      if (!hasSelectKey) {
        setUbootEnv((list) => {
          const newList = list.map((item) => {
            if (item.key === record.key) {
              return { ...item, env: Number(hasSelectKey) };
            } else {
              return { ...item };
            }
          });
          return newList;
        });
      }
    },
    getCheckboxProps: (record) => {
      return {
        disabled:
          hasWaitingAndUpgrading ||
          isDisabled ||
          !record.newVersion ||
          record.key.length === 5,
      };
    },
  };
  const classNameFn = (record: any) => {
    console.log(record, isAllowUpgradeList);

    let xxx = '';
    if (isAllowUpgradeList.includes(record.key)) {
      xxx = 'noUpgrade';
    }
    let className = '';
    if (!record.newVersion || record.key.length === 5) {
      className = theme === 'dark' ? 'level1-dark' : 'level1';
    } else if (isDisabled) {
      className = 'disable-row';
    } else {
      className = theme === 'dark' ? 'default-cell-dark' : 'default-cell';
    }
    return `${className} ${xxx}`;
  };

  const columns = GetColumns(tableWidthObj, isDisabled);

  return (
    <Table
      size="middle"
      columns={columns}
      rowSelection={rowSelection}
      dataSource={dataSource}
      pagination={false}
      rowClassName={classNameFn}
      bordered
      expandable={{
        expandRowByClick: true,
      }}
    />
  );
};

export default FirmwarePage;
