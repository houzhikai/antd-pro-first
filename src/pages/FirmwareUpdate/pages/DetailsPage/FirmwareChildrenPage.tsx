import { Table } from 'antd';
import { GetColumns } from '../../components/defaultData';
import { useFUProviderModule } from '../../components/containers';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';
import { modifyList } from './components/modifyList';
import '../../index.css';

const FirmwarePage = ({ dataSource, slot, isDisabled }) => {
  const {
    selectedKeysList,
    setSelectedKeysList,
    setIndeterminateKeys,
    getDeviceListAndHeartObj,
    tableWidthObj,
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
    },
    onSelect: (record) => {
      const isIncludes = selectedKeysList.includes(record.key);
      const newList = isIncludes
        ? selectedKeysList.filter((item) => item !== record.key)
        : selectedKeysList.concat(record.key);

      setSelectedKeysList(newList);
      setIndeterminateKeys(
        newList.length > 0 && newList.length < allKeys.length,
      );
    },
    getCheckboxProps: (record) => {
      return {
        disabled: isDisabled || !record.newVersion || record.key.length === 5,
      };
    },
  };
  const classNameFn = (record: any) => {
    let className = '';
    if (!record.newVersion) {
      className = 'level1';
    } else if (record.key.length === 5) {
      className = 'level2';
    } else if (isDisabled) {
      className = 'disable-row';
    }
    return className;
  };

  // console.log({ isDisabled }, item);
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
    />
  );
};

export default FirmwarePage;
