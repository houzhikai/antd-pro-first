import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import FirmwareChildrenPage from './FirmwareChildrenPage';
import { statusShow } from './components/statusShow';
import { useFUProviderModule } from '../../components/containers';
import { StatusENUM } from './components/enum';
import '../../index.css';

const DetailsTablePage = ({ setIndeterminate, allKeys }) => {
  const { getDeviceListAndHeartObj, activeKey, setActiveKey } =
    useFUProviderModule();

  const handleChange = (selectedKeys) => {
    setIndeterminate(
      selectedKeys.length > 0 && selectedKeys.length < allKeys.length,
    );
    setActiveKey(selectedKeys);
  };

  const items: CollapseProps['items'] =
    getDeviceListAndHeartObj?.tableList?.map((item) => {
      const isDisabled =
        item.slotStatus === StatusENUM.Offline ||
        item.slotStatus === StatusENUM.PowerOff ||
        item.slotStatus === StatusENUM.Starting ||
        item.slotStatus === StatusENUM.Busy;
      return {
        key: item.slot,
        label: (
          <div className={isDisabled ? 'disable-row' : ''}>
            槽位号：slot {item.slot} 板类型： {item.type}
          </div>
        ),
        extra: (
          <div className={isDisabled ? 'disable-row' : ''}>
            {statusShow(item.slotStatus)}
          </div>
        ),
        children: (
          <FirmwareChildrenPage
            dataSource={item.children}
            slot={item.slot}
            isDisabled={isDisabled}
          />
        ),
      };
    });

  return (
    <div className="fu-details-page">
      <Collapse activeKey={activeKey} onChange={handleChange} items={items} />
    </div>
  );
};

export default DetailsTablePage;
