import MyLogo from '@/components/MyLogo';
import FULogo from '@/icon/FULogo.svg';
import up from '@/icon/up.svg';
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
  Image,
  Tag,
  Tree,
} from 'antd';
import type { DatePickerProps } from 'antd';
import { useParams } from 'react-router-dom';
import { useIntl } from 'umi';

import type { ColumnsType } from 'antd/es/table';
import { useModel } from '@umijs/max';
import { DataType } from '@/models/useFuDataListModel';
import styles from '../index.less';
import { matchIcon } from './icon';
import { useEffect, useState } from 'react';

const { Title, Text } = Typography;

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: '3',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: '1',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
            icon: '1',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
            icon: '2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: '2',
        children: [
          {
            title: <span style={{ color: '#1677ff' }}>sss</span>,
            key: '0-0-1-0',
            icon: '2',
          },
        ],
      },
    ],
  },
];
const FuNav = () => {
  const { data } = useModel('useFuDataListModel');
  const [expandedKeys, setExpandedKeys] = useState(['0-0', '0-0-0']);
  const [key, setKey] = useState(1);
  const { path } = useParams();
  console.log('path', path, 'useParams()', useParams());

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

  const xxx = ['闪烁1111111111111', '闪烁', '闪烁'];

  const getTreeDataList = treeData.map((item) => {
    return {
      ...item,
      icon: matchIcon(item.icon),
      children: item.children.map((t) => {
        return {
          ...t,
          icon: matchIcon(t.icon),
          children: t.children.map((p) => {
            return {
              ...p,
              icon: matchIcon(p.icon),
            };
          }),
        };
      }),
    };
  });

  useEffect(() => {
    setKey((c) => c + 1);
  }, [treeData, expandedKeys]);

  const handleExpand = (expandedKeys) => {
    console.log({ expandedKeys });
    setExpandedKeys(expandedKeys);
  };

  return (
    <>
      <Tree
        key={key}
        showIcon
        checkable
        defaultExpandedKeys={['0-0-0', '0-0-1']}
        defaultSelectedKeys={['0-0-0', '0-0-1']}
        defaultCheckedKeys={['0-0-0', '0-0-1']}
        treeData={getTreeDataList}
        expandedKeys={expandedKeys}
        onExpand={handleExpand}
      />
      <div>
        <MyLogo src={FULogo} title={''} />
        {/* <div>
        <Image src={up} preview={false} className={styles.animation} />
      </div> */}
        {/* <div className={styles.flicker}>闪烁1111111111111</div>
      <div className={styles.flicker}>闪烁</div>
      <div className={styles.flicker}>闪烁</div> */}
        {xxx.map((item, index) => (
          <div key={index} className={styles.flicker}>
            {item}
          </div>
        ))}
        <Badge status="processing" text="Processing" />
        <Badge status="processing" text="Processing" />
        <Badge status="processing" text="Processing" />
        <Tag
          icon={
            <Image
              src={up}
              style={{ width: 20, height: 16 }}
              preview={false}
              className={styles.animation}
            />
          }
          color="processing"
        >
          正在升级
        </Tag>
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
        <Table
          key={Math.floor(Math.random() * 10)}
          columns={columns}
          dataSource={data}
          size="large"
          bordered
        />
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
          <Descriptions.Item label="Negotiated Amount">
            $80.00
          </Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">
            $60.00
          </Descriptions.Item>
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
    </>
  );
};
export default FuNav;
