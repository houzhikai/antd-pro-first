import { useModel } from '@umijs/max';
import { Button, Divider, Input, InputNumber, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import styles from '../../index.less';

const TestUnitList = () => {
  const { isOnLine, testUnitData, setTestUnitData } = useModel('useDrawModel');

  interface ColumnsProps {
    key: React.Key;
    Class: string;
    Name: number;
    LoopCount: string;
    children?: ColumnsProps[];
  }
  const columns: ColumnsType<ColumnsProps> = [
    {
      title: <div style={{ margin: '5px 0' }}>Class</div>,
      dataIndex: 'Class',
      key: 'Class',
      render: (text, record) => {
        console.log(record);
        return <Input defaultValue={text} allowClear />;
      },
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      render: (text, record) => {
        console.log(record);
        return <InputNumber defaultValue={text} controls={false} />;
      },
    },
    {
      title: 'LoopCount',
      dataIndex: 'LoopCount',
      key: 'LoopCount',
      render: (text, record) => {
        console.log(record);
        return <Input defaultValue={text} allowClear />;
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      key: 'option',
      align: 'center',
      width: '12%',
      render: (text, record) => {
        const handleRemoveRow = (record) => {
          const newData = testUnitData.filter(
            (item) => item.key !== record.key,
          );
          setTestUnitData(newData);
          console.log(record, newData);
        };
        return (
          <Popconfirm
            title="删除此项?"
            onConfirm={() => handleRemoveRow(record)}
            okText="确定"
            cancelText="取消"
            disabled={isOnLine}
          >
            <Button style={{ margin: '5px 0' }} type="link">
              删除
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  const handleAddTestUnitRows = () => {
    const testUnitLength = testUnitData.length;
    // 需要有默认值
    const newData = {
      key: testUnitLength,
      Class: '胡彦斌',
      Name: 32,
      LoopCount: '西湖区湖底公园1号',
    };
    setTestUnitData([...testUnitData, newData]);
  };
  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <Divider />
      <div className={styles['binMap-header']}>
        <div style={{ fontSize: 16, fontWeight: 600 }}></div>
        <Button
          type="primary"
          size="middle"
          onClick={handleAddTestUnitRows}
          disabled={isOnLine}
        >
          添加一行
        </Button>
      </div>
      <Table columns={columns} dataSource={testUnitData} pagination={false} />
    </div>
  );
};

export default TestUnitList;
