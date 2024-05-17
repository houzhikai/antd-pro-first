import { useState } from 'react';
import { Checkbox } from 'antd';
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
      <DetailsTablePage setIndeterminate={setIndeterminate} />
    </div>
  );
};

export default DetailsPage;
