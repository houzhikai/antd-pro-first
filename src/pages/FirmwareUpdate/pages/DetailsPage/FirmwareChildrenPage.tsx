import React, { useState } from 'react';
import { Table } from 'antd';
import { columns } from '../../components/defaultData';
import { useFUProviderModule } from '../../components/containers';
import '../../index.css';

const FirmwarePage = ({ dataSource }) => {
  const { setSelectedFirmwareList } = useFUProviderModule();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    checkStrictly: false, //状态下节点选择完全受控, false 表示受父节点控制
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
      setSelectedFirmwareList((preList: any) => {
        console.log({ preList, newSelectedRowKeys });
        // //如果 点击勾选，则添加选择的数组，如果取消勾选，则去除选择的数组
        // const filterItemSlotList = selectedFirmwareList
        //   .filter((selectedKey: any) => selectedKey[0] === item.key)
        //   .filter((list: any) => !newSelectedRowKeys.includes(list));

        // const selectedKeysList = preList.filter(
        //   (pre: any) => !filterItemSlotList.includes(pre),
        // );

        // // const newList = isChecked
        // //   ? Array.from(new Set([...preList, ...newSelectedRowKeys]))
        // //   : selectedKeysList;
        // const newList = Array.from(
        //   new Set([...preList, ...newSelectedRowKeys]),
        // );
        // return newList;
      });
    },
    getCheckboxProps: (record) => {
      return {
        disabled: !record.newVersion || record.key.length === 5,
      };
    },
  };

  const classNameFn = (record: any) => {
    let className = '';
    if (record.key.length === 1) {
      className = 'level1';
    } else if (record.key.length === 5) {
      className = 'level2';
    }
    return className;
  };

  return (
    <Table
      size="middle"
      columns={columns}
      rowSelection={rowSelection}
      dataSource={dataSource}
      pagination={false}
      rowClassName={classNameFn}
      bordered
    />
  );
};

export default FirmwarePage;
