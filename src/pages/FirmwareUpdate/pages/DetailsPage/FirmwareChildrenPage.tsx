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
  const getSelectedRowKeys = (selectedRows) => {
    const newList = selectedRows
      .map((item) => {
        if (item.children) {
          return item.children.map((t) => t.key).concat(item.key);
        } else {
          return item.key;
        }
      })
      .flat();
    return Array.from(new Set(newList));
  };
  const rowSelection = {
    checkStrictly: false, //状态下节点选择完全受控, false 表示受父节点控制
    selectedRowKeys: selectedKeysList,
    onChange: (selectedRowKeys: React.Key[], selectedRows, { type }) => {
      if (type !== 'all') return;
      // 修改后选择的key值列表
      const newList = modifyList(
        selectedKeysList,
        getSelectedRowKeys(selectedRows),
        slot,
      ).flat();
      setSelectedKeysList(newList);
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
      // panel 全选 半选判断
      setIndeterminateItemTableKeys((list) => {
        const newItemSlotList = list.map((slotObj) => {
          if (slotObj.slot === slot) {
            return {
              ...slotObj,
              indeterminate:
                newList.length > 0 && newList.length < itemTablesKeys.length,
            };
          } else {
            return slotObj;
          }
        });
        return newItemSlotList;
      });
    },
    onSelect: (record, selectedKeys, selectedRows) => {
      const isIncludes = selectedKeysList.includes(record.key);
      const getAddKeys = (record) => {
        if (record.children) {
          return record.children.map((item) => item.key).concat(record.key);
        } else {
          return record.key;
        }
      };
      const newList = isIncludes
        ? selectedKeysList.filter((item) => !item.includes(record.key))
        : selectedKeysList.concat(getAddKeys(record));
      // 所有选择的 selectKeys 值
      setSelectedKeysList(newList);
      // 全选 半选判断
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
      // panel 全选 半选判断
      setIndeterminateItemTableKeys((list) => {
        const newItemTableList = list.map((slotObj) => {
          if (slotObj.slot === slot) {
            return {
              ...slotObj,
              indeterminate:
                getSelectedRowKeys(selectedRows).length > 0 &&
                getSelectedRowKeys(selectedRows).length < itemTablesKeys.length,
            };
          } else {
            return slotObj;
          }
        });
        return newItemTableList;
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
