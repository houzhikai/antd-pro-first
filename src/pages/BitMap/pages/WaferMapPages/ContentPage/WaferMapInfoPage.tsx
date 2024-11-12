import React, { useEffect, useState } from 'react';
import { Descriptions, Select, Table } from 'antd';
import { ProviderFunc } from '../../../components/containers';

const WaferMapInfoPage = () => {
  const { wafermapData, setWaferIDPath } = ProviderFunc();
  const infoList =
    Object.keys(wafermapData.info).map((key) => ({
      key: key,
      label: key,
      children: String(wafermapData.info[key]),
    })) || [];

  // 从 waferinfo 中读取路径，import 选择的路径会在调用接口后被清除
  useEffect(() => {
    if (infoList.length > 0) {
      const location = infoList?.filter(item => item?.key === 'location')?.[0]?.children?.split('/') || []
      const waferIDPath = location?.slice(0, location.length - 2).join('/') || ''
      setWaferIDPath(waferIDPath)
    }
  }, [wafermapData.info])

  const labelStyle = {
    padding: '1px 8px',
  };

  const dataSource: any[] = Array.from({ length: 100 }, (_, index) => ({
    key: (index + 1).toString(),
    failType: index === 0 ? 'Total' : `0, ${index}`,
    failCount: 60,
    singleBit: 10,
    DbBitCol: 10,
    dbBitRow: 10,
    quadBit: 10,
    allBL: 10,
    allWL: 10,
  }));
  const columns = [
    {
      key: 'failType',
      title: 'X, Y',
      dataIndex: 'failType',
      width: 70,
    },
    // {
    //   key: 'failCount',
    //   title: 'Fail Count',
    //   dataIndex: 'failCount',
    // },
    {
      key: 'singleBit',
      title: 'Single Bit',
      dataIndex: 'singleBit',
      width: 80,
    },
    {
      key: 'DbBitCol',
      title: 'Double Bit Col',
      dataIndex: 'DbBitCol',
      width: 80,
    },
    {
      key: 'dbBitRow',
      title: 'Double Bit Row',
      dataIndex: 'dbBitRow',
      width: 80,
    },
    {
      key: 'quadBit',
      title: 'Quad Bit',
      dataIndex: 'quadBit',
      width: 80,
    },
    {
      key: 'allBL',
      title: 'All BL',
      dataIndex: 'allBL',
      width: 80,
    },
    {
      key: 'allWL',
      title: 'All WL',
      dataIndex: 'allWL',
      width: 80,
    },
  ];
  const options = [
    { value: 'test1', label: 'test1', },
    { value: 'test2', label: 'test2', },
    { value: 'test3', label: 'test3', },
    { value: 'test4', label: 'test4', },
    { value: 'test5', label: 'test5', },
    { value: 'test6', label: 'test6', },
    { value: 'test7', label: 'test7', },
    { value: 'test8', label: 'test8', },
    { value: 'test9', label: 'test9', },
    { value: 'test10', label: 'test10' },
  ]
  const [testUnit, setTestUnit] = useState(options[0].label)
  const handleChange = (value) => {
    setTestUnit(value)
  }


  const [firstData, ...restData] = dataSource;

  return (
    <div style={{ maxWidth: 550 }}>
      {
        infoList.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0', }}>
            <div style={{ fontSize: 18 }}>Test Unit:</div>
            <Select
              style={{ width: 80, marginLeft: 10 }}
              value={testUnit}
              onChange={handleChange}
              options={options}
            />
          </div>
        )
      }

      {infoList.length > 0 && (
        <>
          <div style={{ margin: '20px 0', fontSize: 18 }}>Wafer Info</div>
          {/* <div className='wafermap-info-page'> */}
          <Descriptions
            labelStyle={labelStyle}
            contentStyle={labelStyle}
            column={1}
            bordered
            items={infoList}
            size='small'
          />
          {/* </div> */}
        </>
      )}
      {
        infoList.length > 0 && (
          <>
            <div style={{ margin: '20px 0', fontSize: 18 }}>Dut Fail Count</div>
            <>
              <Table
                style={{ width: 550 }}
                bordered
                columns={columns}
                dataSource={[firstData]}
                pagination={false}
                showHeader={true}
              />
              <Table
                style={{ width: 550 }}
                showHeader={false}
                bordered
                columns={columns}
                dataSource={restData}
                scroll={{ x: 'max-content', y: 350 }}
                pagination={false}
              />
            </>
          </>
        )
      }
    </div>
  );
};

export default WaferMapInfoPage;
