import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import FirmwareChildrenPage from './FirmwareChildrenPage';
import { statusShow } from '../../components/statusShow';
import { useFUProviderModule } from '../../components/containers';

const DetailsTablePage = ({ setIndeterminate }) => {
  const { getDeviceListAndHeartObj, activeKey, setActiveKey } =
    useFUProviderModule();

  const handleChange = (selectedKeys) => {
    const allKeys = getDeviceListAndHeartObj?.tableList?.map(
      (item) => item.slot,
    );
    if (selectedKeys.length > 0 && selectedKeys.length < allKeys.length) {
      setIndeterminate(true);
    } else {
      setIndeterminate(false);
    }
    setActiveKey(selectedKeys);
  };

  const items: CollapseProps['items'] =
    getDeviceListAndHeartObj?.tableList?.map((item) => {
      return {
        key: item.slot,
        label: (
          <div>
            槽位号：slot {item.slot} 板类型： {item.type}
          </div>
        ),
        extra: <div>{statusShow(item.slotStatus)}</div>,
        // extra: genExtra(item.slotStatus),
        children: <FirmwareChildrenPage dataSource={item.children} />,
      };
    });

  return (
    <div className="fu-details-page">
      <Collapse activeKey={activeKey} onChange={handleChange} items={items} />
    </div>
  );
};

export default DetailsTablePage;
