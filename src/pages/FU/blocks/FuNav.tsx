import MyLogo from '@/components/MyLogo';
import FULogo from '@/icon/FULogo.svg';
import { Button, DatePicker, Input, Badge, Descriptions } from 'antd';
import type { DatePickerProps } from 'antd';

import { useIntl } from 'umi';

const FuNav = () => {
  const { formatMessage } = useIntl();

  const onChange: DatePickerProps['onChange'] = (
    date: any,
    dateString: any,
  ) => {
    console.log(date, dateString);
  };
  return (
    <div style={{ height: '100vh' }}>
      <MyLogo src={FULogo} />
      <Button type="primary">{formatMessage({ id: 'fu.button' })}</Button>
      <DatePicker onChange={onChange} picker="week" />
      <Input placeholder="请输入..." />
      <div>111123</div>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
        <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
        <Descriptions.Item label="Order time">
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default FuNav;
