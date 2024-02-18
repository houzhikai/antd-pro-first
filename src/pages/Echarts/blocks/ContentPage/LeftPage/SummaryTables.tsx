import { useModel } from '@umijs/max';
import { Table } from 'antd';
import { data } from '../../components/data';

const SummaryTables = () => {
  const { changeColor, setIsShowModal, waferMapData } =
    useModel('useEchartsModel');
  data.forEach((item) =>
    changeColor.forEach((p, idx) => {
      if (Number(item.key) === idx + 1) {
        return (item.color = p);
      }
    }),
  );
  const title = waferMapData?.summary?.title ?? '';
  const totalColumns = waferMapData?.summary?.total?.columns ?? [];
  const totalData = waferMapData?.summary?.total?.data ?? [];
  const softColumns = waferMapData?.summary?.softBinList?.columns ?? [];
  const softBinData = waferMapData?.summary?.softBinList?.data ?? [];
  const softBinColumns = softColumns.map((item) => {
    if (item.title === 'Color') {
      return {
        ...item,
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
      };
    }
    return item;
  });
  return (
    <>
      <h3>{title}</h3>
      {totalData.length > 0 ? (
        <Table
          rowKey="TotalCnt"
          columns={totalColumns}
          dataSource={totalData}
          pagination={false}
        />
      ) : null}

      <div style={{ marginTop: 10 }} />
      {softBinData.length > 0 ? (
        <Table
          rowKey="SoftBinID"
          style={{ maxHeight: '20vh', overflowX: 'hidden', overflowY: 'auto' }}
          columns={softBinColumns}
          dataSource={softBinData}
          pagination={false}
          sticky
        />
      ) : null}
    </>
  );
};

export default SummaryTables;
