import { Table } from 'antd';
import { columns } from '../../components/defaultData';
import { useFUProviderModule } from '../../components/containers';
import '../../index.css';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';

const FirmwarePage = ({ dataSource }) => {
  const {
    selectedFirmwareList,
    setSelectedFirmwareList,
    setIndeterminateKeys,
    getDeviceListAndHeartObj,
  } = useFUProviderModule();
  const allKeys = getDeviceOptionalAllKeys(getDeviceListAndHeartObj.tableList);
  const rowSelection = {
    checkStrictly: false, //状态下节点选择完全受控, false 表示受父节点控制
    selectedRowKeys: selectedFirmwareList,
    // TODO, onChange 有问题，取消表头的勾选框和 取消table中最后一个勾选框 有问题
    onChange: (selectedRowKeys: React.Key[]) => {
      const firstRow = selectedRowKeys.map((item) => item[0])[0];
      const newList = selectedFirmwareList
        .filter((key) => key[0] !== firstRow)
        .concat(selectedRowKeys);
      setSelectedFirmwareList(newList);
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
    },
    getCheckboxProps: (record) => {
      return {
        disabled: !record.newVersion || record.key.length === 5,
      };
    },
  };
  const classNameFn = (record: any) => {
    let className = '';
    if (!record.newVersion) {
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
