import { useState } from 'react';
import { Checkbox, Input } from 'antd';
import DetailsTablePage from './DetailsTablePage';
import { useFUProviderModule } from '../../components/containers';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';

const DetailsPage = () => {
  const {
    activeKey,
    setActiveKey,
    getDeviceListAndHeartObj,
    setSelectedFirmwareList,
    indeterminateKeys,
    selectedFirmwareList,
    startParams,
    setStartParams,
  } = useFUProviderModule();

  const [indeterminate, setIndeterminate] = useState(true); // 全折叠的半选样式

  const handleChangeCheckedAll = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedFirmwareList(
        getDeviceOptionalAllKeys(getDeviceListAndHeartObj.tableList),
      );
    } else {
      setSelectedFirmwareList([]);
    }
  };

  const handleChangeFoldPanel = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setActiveKey([]);
    }
  };

  const handleChangeIp = (e) => {
    const value = e.target.value;
    setStartParams((obj) => {
      return {
        ...obj,
        initIp: value,
      };
    });
  };
  const handlePressEnter = (e) => {
    const value = e.target.value;
    setStartParams((obj) => {
      return {
        ...obj,
        initIp: value,
      };
    });
    localStorage.setItem('myValue', value);
    console.log({ e });
  };

  return (
    <div>
      <Checkbox
        indeterminate={indeterminateKeys}
        onChange={handleChangeCheckedAll}
        checked={
          selectedFirmwareList.length ===
          getDeviceOptionalAllKeys(getDeviceListAndHeartObj?.tableList).length
        }
      >
        全选
      </Checkbox>
      <Checkbox
        indeterminate={indeterminate}
        onChange={handleChangeFoldPanel}
        checked={activeKey.length === 0}
      >
        全折叠
      </Checkbox>
      <span style={{ marginLeft: 100 }}>设置ip（临时）</span>
      <Input
        style={{ width: 300 }}
        value={startParams.initIp}
        onChange={handleChangeIp}
        onPressEnter={handlePressEnter}
      />
      <DetailsTablePage setIndeterminate={setIndeterminate} />
    </div>
  );
};

export default DetailsPage;
