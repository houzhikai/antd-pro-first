import MyLogo from '@/components/MyLogo';
import FULogo from '@/icon/FULogo.svg';
import {
  Button,
  DatePicker,
  Input,
  Badge,
  Descriptions,
  Typography,
  Popconfirm,
  Tabs,
  Checkbox,
  Table,
} from 'antd';
import type { DatePickerProps } from 'antd';
import { useParams } from 'react-router-dom';
import { useIntl } from 'umi';

import type { ColumnsType } from 'antd/es/table';
// import '../index.less';

const { Title, Text } = Typography;
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const FuNav = () => {
  const { path } = useParams();
  console.log(path, useParams());

  const { formatMessage } = useIntl();

  const onChange: DatePickerProps['onChange'] = (
    date: any,
    dateString: any,
  ) => {
    console.log(date, dateString);
  };

  const handleClick = () => {};
  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Tab ${id}`,
      key: id,
      children: `Content of tab ${id}`,
    };
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      className: 'form-title',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      className: 'form-title',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      className: 'form-title',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return (
    <div>
      <MyLogo src={FULogo} />
      <Button type="primary">{formatMessage({ id: 'fu.button' })}</Button>
      <Button type="primary" disabled>
        primary disabled
      </Button>
      <Button disabled>disabled</Button>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={handleClick}
        showCancel={false}
        okText="Yes"
      >
        <Button>按钮</Button>
        <Button>按钮</Button>
      </Popconfirm>
      <DatePicker onChange={onChange} picker="week" />
      <Input placeholder="请输入..." />
      <Checkbox>Checkbox</Checkbox>
      <Table columns={columns} dataSource={data} size="middle" bordered />
      <a>121323</a>
      <Title>h1. Ant Design</Title>
      <Text>Ant Design (default)</Text>
      <h1>h1标题</h1>
      <div>111123</div>test
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
          Region: East China 1
          <br />
        </Descriptions.Item>
      </Descriptions>
      <Tabs items={items} />
    </div>
  );
};
export default FuNav;
