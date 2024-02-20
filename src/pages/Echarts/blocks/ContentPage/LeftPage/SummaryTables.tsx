import { useModel } from '@umijs/max';
import { Table } from 'antd';

const SummaryTables = () => {
  const { setIsShowModal, waferMapData, changeColorList } =
    useModel('useEchartsModel');
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
                background: text,
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
  // Add colors to softBinTable
  const newSoftBinData =
    changeColorList.length > 0
      ? softBinData
          .map((item) => {
            let newList: any = [];
            changeColorList.map((t) => {
              if (item.SoftBinID === t.value) {
                return newList.push({ ...item, Color: t.color });
              }
              return newList;
            });
            return newList;
          })
          .flat(Infinity)
      : softBinData;
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
          dataSource={newSoftBinData}
          pagination={false}
          sticky
        />
      ) : null}
    </>
  );
};

export default SummaryTables;
