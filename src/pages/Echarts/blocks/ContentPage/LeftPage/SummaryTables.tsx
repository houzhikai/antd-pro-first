import { useModel } from '@umijs/max';
import { Table } from 'antd';
import { data } from '../../components/data';

const SummaryTables = () => {
  const { setIsShowModal, changeColor } = useModel('useEchartsModel');
  data.forEach((item) =>
    changeColor.forEach((p, idx) => {
      if (Number(item.key) === idx + 1) {
        return (item.color = p);
      }
    }),
  );
  const columns = [
    {
      title: 'TotalCnt',
      dataIndex: 'TotalCnt',
    },
    {
      title: 'PassCnt',
      dataIndex: 'PassCnt',
    },
    {
      title: 'FailCnt',
      dataIndex: 'FailCnt',
    },
    {
      title: 'Yield',
      dataIndex: 'Yield',
    },
  ];
  const dataSource = [
    {
      TotalCnt: 298,
      PassCnt: 298,
      FailCnt: 298,
      Yield: 298,
    },
  ];
  const detailColumns: any = [
    {
      title: 'SoftBinID',
      dataIndex: 'SoftBinID',
    },
    {
      title: 'BinName',
      dataIndex: 'BinName',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      width: 100,
      align: 'center',
      render: (text, record, index) => {
        const handleClick = () => {
          setIsShowModal((obj) => {
            return {
              ...obj,
              isOpen: true,
              order: index,
            };
          });
        };
        return (
          <div
            style={{ background: '#bfa', height: 30, cursor: 'pointer' }}
            onClick={handleClick}
          />
        );
      },
    },
    {
      title: 'Count',
      dataIndex: 'Count',
    },
    {
      title: 'Yield',
      dataIndex: 'Yield',
    },
  ];
  const detailDataSource = [
    {
      SoftBinID: '2001',
      BinName: 'FB1',
      Count: '130',
      Yield: '43.62%',
    },
    {
      SoftBinID: '1002',
      BinName: 'PB2',
      Count: '0',
      Yield: '0%',
    },
    {
      SoftBinID: '2002',
      BinName: 'FB2',
      Count: '0%',
      Yield: '43.62%',
    },
    {
      SoftBinID: '1001',
      BinName: 'PB1',
      Count: '168',
      Yield: '56.38%',
    },
  ];
  return (
    <>
      <h2>SUMMARY</h2>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      <div style={{ marginTop: 20 }} />
      <Table
        columns={detailColumns}
        dataSource={detailDataSource}
        pagination={false}
      />
    </>
  );
};

export default SummaryTables;
