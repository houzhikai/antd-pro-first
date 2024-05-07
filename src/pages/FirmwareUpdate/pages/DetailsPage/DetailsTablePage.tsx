import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, message } from 'antd';
import FirmwareChildrenPage from './FirmwareChildrenPage';
import { mockDeviceListInterface } from '../mockData/mockTableDataList';

const DetailsTablePage = () => {
  const onChange = (key: string | string[]) => {
    message.info(key);
  };

  const genExtra = (status) => <div>{status}</div>;

  const items: CollapseProps['items'] = mockDeviceListInterface.tableList.map(
    (item) => {
      return {
        key: item.slot,
        label: (
          <div>
            槽位号：slot {item.slot} 板类型： {item.type}
          </div>
        ),
        extra: genExtra(item.slotStatus),
        children: <FirmwareChildrenPage dataSource={item.children} />,
      };
    },
  );

  return (
    <div className="fu-details-page">
      <Collapse defaultActiveKey={['0']} onChange={onChange} items={items} />
    </div>
  );
};

export default DetailsTablePage;
