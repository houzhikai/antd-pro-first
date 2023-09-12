import { useModel } from '@umijs/max';
import { Button, Divider, Input, InputNumber, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TestUnitDataList } from '@/components/dataList/draw/testUnitDataList';
import styles from '../../index.less';

const TestUnitList = () => {
  const { isOnLine, testUnitData, setTestUnitData } = useModel('useDrawModel');

  const columns: ColumnsType<TestUnitDataList> = [
    {
      title: <div style={{ margin: '5px 0' }}>Class</div>,
      dataIndex: 'Class',
      key: 'Class',
      render: (text, record, idx) => {
        const handleChange = (e) => {
          const newData = testUnitData.map((item, index) => {
            if (idx === index) {
              return { ...item, Class: e.target.value };
            }
            return item;
          });
          setTestUnitData(newData);
        };
        return <Input value={text} onChange={handleChange} allowClear />;
      },
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      render: (text, record, idx) => {
        const handleChange = (e) => {
          const newData = testUnitData.map((item, index) => {
            if (idx === index) {
              return { ...item, Name: e.target.value };
            }
            return item;
          });
          setTestUnitData(newData);
        };
        return (
          <Input
            style={{ width: '100%' }}
            value={text}
            onChange={handleChange}
          />
        );
      },
    },
    {
      title: 'LoopCount',
      dataIndex: 'LoopCount',
      key: 'LoopCount',
      render: (text, record, idx) => {
        const handleChange = (value) => {
          const newData = testUnitData.map((item, index) => {
            if (idx === index) {
              return { ...item, LoopCount: value };
            }
            return item;
          });
          setTestUnitData(newData);
        };
        return (
          <InputNumber
            value={text}
            onChange={handleChange}
            controls={false}
            min={1}
          />
        );
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
      Class: '默认值',
      Name: `默认值 ${testUnitLength}`,
      LoopCount: '1',
    };
    setTestUnitData([...testUnitData, newData]);
  };
  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <Divider />
      <div className={styles['binMap-header']}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Test-Unit</div>
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
