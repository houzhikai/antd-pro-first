import { useModel } from '@umijs/max';
import { Table } from 'antd';
import { data } from '../../components/data';

const SummaryTables = () => {
  const { changeColor, setIsShowModal } = useModel('useEchartsModel');
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
      PassCnt: 168,
      FailCnt: 130,
      Yield: '56.38%',
    },
  ];
  const detailColumns: any = [
    {
      title: 'SoftBinID',
      dataIndex: 'SoftBinID',
      width: '69px',
    },
    {
      title: 'BinName',
      dataIndex: 'BinName',
      width: '69px',
    },
    {
      title: 'Count',
      dataIndex: 'Count',
      width: '50px',
    },
    {
      title: 'Yield',
      dataIndex: 'Yield',
      width: '54px',
    },
    {
      title: 'Color',
      dataIndex: 'color',
      width: '55px',
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
            style={{
              background: changeColor[index],
              height: 30,
              cursor: 'pointer',
            }}
            onClick={handleClick}
          />
        );
      },
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
      Yield: '0%',
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
      <h3>SUMMARY</h3>
      <Table
        rowKey="TotalCnt"
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <div style={{ marginTop: 10 }} />
      <Table
        rowKey="SoftBinID"
        style={{ maxHeight: '20vh', overflowX: 'hidden', overflowY: 'auto' }}
        columns={detailColumns}
        dataSource={detailDataSource}
        pagination={false}
        sticky
      />
    </>
  );
};

export default SummaryTables;
