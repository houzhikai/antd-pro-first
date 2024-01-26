import {
  Typography,
  Table,
  Input,
  Button,
  Form,
  Row,
  Space,
  Col,
  theme,
  Select,
  DatePicker,
} from 'antd';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { DataType } from './data';

interface MyFormProps {
  title?: string;
  columns: string[] | any;
  dataSource: any;
  searchList: string[] | { label: string; type?: string }[];
  searchCount?: number;
}

const MyTable = ({
  title,
  columns,
  dataSource,
  searchList,
  searchCount,
}: MyFormProps) => {
  const [data, setData] = useState(dataSource);

  const isStringArray = (arr) => arr.every((item) => typeof item === 'string');
  const myColumns = isStringArray(columns)
    ? columns.map((item) => {
        return {
          title: item,
          dataIndex: item,
        };
      })
    : columns;

  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(true);
  const searchLength = searchCount || 3;

  const showSearchList = expand
    ? searchList.slice(0, searchLength)
    : searchList;

  const onFinish = (values: DataType) => {
    const valuesToArray: { value: string; label: string }[] = Object.entries(
      values,
    )
      .map(([key, value]) => ({
        label: key,
        value,
      }))
      .filter((item) => item.value);

    const filterDataSource = dataSource.filter((item) => {
      const verifyProperties = valuesToArray.map((t) => {
        if (t.label === 'name') {
          if (!String(item[t.label]).includes(t.value)) {
            return false;
          }
          return true;
        } else if (t.label === 'data') {
          const start = new Date(t.value[0]).getTime();
          const end = new Date(t.value[1]).getTime();
          const currentDate = new Date(item[t.label]).getTime();
          return currentDate >= start && currentDate <= end;
        } else {
          if (String(item[t.label]) !== t.value) {
            return false;
          }
          return true;
        }
      });

      return verifyProperties.every((element) => element === true)
        ? item
        : undefined;
    });
    setData(filterDataSource);
  };

  return (
    <div>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Form
        form={form}
        name="advanced_search"
        style={{
          maxWidth: 'none',
          background: token.colorFillAlter,
          borderRadius: token.borderRadiusLG,
          padding: 24,
        }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          {showSearchList.map((item) => {
            const formLabel = typeof item === 'string' ? item : item.label;
            return (
              <Col span={6} key={formLabel}>
                <Form.Item name={formLabel} label={formLabel}>
                  {(typeof item === 'string' ||
                    item.type === 'input' ||
                    item.type === undefined) && (
                    <Input placeholder={`Please input ${formLabel}`} />
                  )}
                  {item.type === 'select' && (
                    <Select
                      placeholder={`Please input ${formLabel}`}
                      options={item.options}
                    />
                  )}
                  {item.type === 'data' && (
                    <DatePicker.RangePicker style={{ width: '100%' }} />
                  )}
                </Form.Item>
              </Col>
            );
          })}
          {searchList.length > searchLength ? (
            <Space
              align="start"
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '0 10px',
              }}
            >
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button
                onClick={() => {
                  form.resetFields();
                  setData(dataSource);
                }}
              >
                Clear
              </Button>
              <Button type="link" onClick={() => setExpand(!expand)}>
                <DownOutlined rotate={expand ? 180 : 0} />
                Collapse
              </Button>
            </Space>
          ) : null}
        </Row>
      </Form>
      <Table columns={myColumns} dataSource={data} />
    </div>
  );
};

export default MyTable;
